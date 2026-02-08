import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const generateLoveNote = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    console.warn("No API Key found, returning fallback.");
    return "Yana, my love! I am so happy you said yes. I'm incredibly proud of the woman you are, and I promise to make this Valentine's Day absolutely unforgettable.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    return response.text || "I'm so happy you said yes! We are going to have an amazing time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Yana, my love! I am so happy you said yes. I'm incredibly proud of the woman you are, and I promise to make this Valentine's Day absolutely unforgettable.";
  }
};