// server.js  — simple local server + /api/chatbot (no OpenAI key; returns local replies)
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '.'))); // serve static files from project root

const messages = {
  "tasha": "Tasha 💖 — You are beautiful, caring and always supportive 🌸",
  "blessy": "Blessy 🌟 — The life of the party! 😂",
  "sharon": "Sharon 🌷 — Calm, kind and steady 🌈",
  "viv": "Viv 🔥 — Bold and unforgettable 💫",
  "gracie": "Gracie 💃 — Always brightens the room ✨",
  "liz": "Liz 🌺 — Strong and deeply caring 🤍"
};

function generateReply(userMessage){
  const lower = (userMessage||'').toLowerCase();
  for (const k of Object.keys(messages)) {
    if (lower.includes(k)) return messages[k];
  }
  // generic friendly reply
  const fallback = [
    "You're amazing — never forget that! 💫",
    "Sending you a big hug and sparkles ✨🤗",
    "You brighten the world more than you know 💖"
  ];
  return fallback[Math.floor(Math.random()*fallback.length)];
}

app.post('/api/chatbot', (req, res) => {
  const { message } = req.body || {};
  console.log('POST /api/chatbot', message);
  if (!message) return res.status(400).json({ error: 'Message required' });
  const reply = generateReply(message);
  // simulate a small processing delay
  setTimeout(() => res.json({ reply }), 300);
});

// quick health-check or informative GET
app.get('/api/chatbot', (req, res) => {
  res.json({ error: 'Only POST allowed. Use POST /api/chatbot with JSON { message }' });
});

app.listen(port, () => {
  console.log(`Local server running: http://localhost:${port}  — open /chatbot.html`);
});
