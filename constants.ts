import { LoveBit } from "./types";

// These are the secret codes she needs to find in the chocolates.
// You can change "CHOCO1", "SWEET", "HEART" to whatever you write on the bits.
export const SECRET_BITS: LoveBit[] = [
  {
    id: 1,
    placeholder: "Bit #1",
    correctCode: "AMORE", 
    hint: "🍫"
  },
  {
    id: 2,
    placeholder: "Bit #2",
    correctCode: "ORGOGLIO",
    hint: "📖"
  },
  {
    id: 3,
    placeholder: "Bit #3",
    correctCode: "PASSIONE",
    hint: "🌷"
  }
];

export const INITIAL_MESSAGE = "Yay! Thanks for being my valentine. I love you and I'm proud of you. We're gonna have the best day on 14th :)";

export const GEMINI_PROMPT = `
Rewrite the following message to be confident, deeply affectionate, exciting, and romantic. 
It should be cute but NOT submissive. It should sound loving and caring, like a partner who is excited to lead a wonderful date.
Keep it under 3 sentences.

Original message: "${INITIAL_MESSAGE}"
`;