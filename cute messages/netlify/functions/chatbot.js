import OpenAI from "openai";

export async function handler(event) {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const { message } = JSON.parse(event.body);

    const response = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: [
        { role: "system", content: "You are a cute, loving, and friendly chatbot who sends personalized and sweet messages." },
        { role: "user", content: message }
      ]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: response.choices[0].message.content })
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ reply: "Oops! Something went wrong 😅" }) };
  }
}
