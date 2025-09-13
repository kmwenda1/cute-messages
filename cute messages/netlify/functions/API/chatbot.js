
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

  
    console.log("OPENAI_API_KEY starts with:", process.env.OPENAI_API_KEY?.slice(0, 8));

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    const botReply = response.choices[0].message.content;
    res.status(200).json({ reply: botReply });
  } catch (err) {
    console.error("Chatbot error:", err.message);
    res.status(500).json({ error: err.message });
  }
}
