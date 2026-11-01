const { GoogleGenAI } = require('@google/genai');
const fs = require('fs/promises');
const path = require('path');

/**
 * Extracts raw text from an image using Gemini 3.5 Flash Vision capabilities
 * @param {string} imagePath - The local path to the uploaded image file
 * @returns {Promise<string>} - The extracted raw text
 */
const extractText = async (imagePath) => {
    try {
        console.log(`Starting OCR process for image: ${imagePath}`);

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        // Read file as base64
        const imageBytes = await fs.readFile(imagePath);
        const base64Image = imageBytes.toString("base64");

        // Determine mime type from extension
        const ext = path.extname(imagePath).toLowerCase();
        let mimeType = 'image/jpeg';
        if (ext === '.png') mimeType = 'image/png';
        else if (ext === '.webp') mimeType = 'image/webp';

        const prompt = "Extract all text from this image verbatim. This is a medical prescription. Do not include markdown formatting, just the extracted text.";

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
            ]
        });

        return response.text;
    } catch (error) {
        console.error('Error during Gemini OCR extraction:', error);
        throw new Error('Failed to extract text from image');
    }
};

module.exports = {
    extractText,
};
