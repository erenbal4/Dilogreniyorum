// Bu dosya Supabase Edge Function veya Next.js API route olarak çalışır
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  const { message } = req.body;
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Sen bir sabırlı, samimi dil arkadaşısın." },
      { role: "user", content: message }
    ],
  });
  res.status(200).json({ reply: response.choices[0].message.content });
}
