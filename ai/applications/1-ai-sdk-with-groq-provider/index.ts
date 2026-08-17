import "dotenv/config";
import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

const { text } = await generateText({
  model: groq("llama-3.3-70b-versatile"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});

console.log(text);
