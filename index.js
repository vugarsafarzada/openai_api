import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI();
openai.apiKey = process.env.OPENAI_API_KEY;

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "user", content: "Can you make a joke" },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices);
}

main();