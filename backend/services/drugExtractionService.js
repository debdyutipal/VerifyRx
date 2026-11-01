const { GoogleGenAI } = require('@google/genai');

/**
 * Extracts drug names, dosage, and frequency from OCR text.
 * @param {string} text - The OCR extracted text from the prescription.
 * @returns {Promise<Array>} - Array of extracted drug objects.
 */
async function extractDrugs(text) {
    if (!text || text.trim() === '') {
        return [];
    }

    // Initialize the Google Gen AI SDK here to ensure process.env.GEMINI_API_KEY is available
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    try {
        const prompt = `Extract drug names, dosage, and frequency from the following prescription text.
Return the result strictly as a JSON array of objects with the keys: "drugName", "dosage", "frequency".
If any field is missing, use an empty string.

Prescription text:
${text}
`;

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
            }
        });

        // The response text is guaranteed to be JSON due to responseMimeType
        const data = JSON.parse(response.text);
        return data;
    } catch (error) {
        console.error('Error during drug extraction:', error);
        throw new Error('Failed to extract drugs from text');
    }
}

module.exports = {
    extractDrugs
};
