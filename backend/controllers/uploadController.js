const { analyzePrescriptionImage } = require('../services/aiService');
const { saveScan } = require('../services/drugService');

exports.uploadPrescription = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    // Process the image in a single AI call to save quota and time
    const aiResult = await analyzePrescriptionImage(req.file.path);
    
    // Save to drug service store
    const result = {
      image: req.file.filename,
      path: req.file.path,
      extractedText: aiResult.extractedText || "",
      medicines: aiResult.medicines || [],
      riskAssessment: aiResult.riskAssessment || {
          riskLevel: "SAFE", confidence: "100%", warnings: [], advice: ""
      },
      generatedOn: new Date().toLocaleString()
    };
    
    const savedScan = saveScan(result);

    return res.status(200).json({
      success: true,
      message: "Prescription analyzed successfully",
      scan: savedScan
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};