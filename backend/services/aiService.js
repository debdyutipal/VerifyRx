const { GoogleGenAI } = require('@google/genai');
const fs = require('fs/promises');
const path = require('path');

async function analyzePrescriptionImage(imagePath) {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const imageBytes = await fs.readFile(imagePath);
    const base64Image = imageBytes.toString("base64");
    
    const ext = path.extname(imagePath).toLowerCase();
    let mimeType = 'image/jpeg';
    if (ext === '.png') mimeType = 'image/png';
    else if (ext === '.webp') mimeType = 'image/webp';

    const prompt = `Analyze this medical prescription image. Perform the following steps:
1. Extract all text verbatim.
2. Identify all medications, including their dosage and frequency. If any field is missing, use an empty string.
3. Analyze the extracted medications for potential drug-drug interactions, contraindications, and general risks.

Return the result STRICTLY as a JSON object matching this schema exactly:
{
  "extractedText": "...",
  "medicines": [
    { "drugName": "...", "dosage": "...", "frequency": "..." }
  ],
  "riskAssessment": {
    "riskLevel": "SAFE" | "WARNING" | "CRITICAL",
    "confidence": "85%",
    "warnings": [
      {
        "severity": "CRITICAL" | "CAUTION",
        "title": "...",
        "description": "..."
      }
    ],
    "advice": "..."
  }
}`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: [
                prompt,
                {
                    inlineData: {
                        data: base64Image,
                        mimeType: mimeType
                    }
                }
            ],
            config: {
                responseMimeType: 'application/json',
            }
        });

        return JSON.parse(response.text);
    } catch (error) {
        console.error('Error during AI prescription analysis:', error);
        throw new Error('Failed to analyze prescription');
    }
}

/**
 * Analyzes the extracted drugs for potential risks, interactions, and generates warnings.
 * @param {Array} drugs - Array of extracted drug objects (e.g. { drugName, dosage, frequency }).
 * @returns {Promise<Object>} - Risk analysis object.
 */
async function analyzeRisk(drugs) {
    if (!drugs || drugs.length === 0) {
        return {
            riskLevel: "SAFE",
            confidence: "100%",
            warnings: [],
            advice: "No medicines detected to analyze."
        };
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    try {
        const prompt = `Analyze the following list of medications for potential drug-drug interactions, contraindications, and general risks.
Provide a risk level (SAFE, WARNING, or CRITICAL), an overall confidence percentage, a list of specific interaction warnings, and a general medical advice/recommendation paragraph.

Medications:
${JSON.stringify(drugs, null, 2)}

Return the result STRICTLY as a JSON object with the following schema:
{
  "riskLevel": "SAFE" | "WARNING" | "CRITICAL",
  "confidence": "85%", // string percentage
  "warnings": [
    {
      "severity": "CRITICAL" | "CAUTION",
      "title": "DrugA + DrugB",
      "description": "Explanation of the risk"
    }
  ],
  "advice": "General recommendation paragraph..."
}`;

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
            }
        });

        return JSON.parse(response.text);
    } catch (error) {
        console.error('Error during AI risk analysis:', error);
        throw new Error('Failed to analyze drug risks');
    }
}

module.exports = {
    analyzeRisk,
    analyzePrescriptionImage
};
