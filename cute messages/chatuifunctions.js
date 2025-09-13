
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");


sendBtn.addEventListener("click", async () => {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  
  chatBox.innerHTML += `<div class="user-msg">💬 ${userMessage}</div>`;
  chatInput.value = "";

  try {
    
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    if (data.reply) {
      chatBox.innerHTML += `<div class="bot-msg">💖 ${data.reply}</div>`;
    } else if (data.error) {
      chatBox.innerHTML += `<div class="bot-msg error">⚠️ ${data.error}</div>`;
    }
  } catch (err) {
    chatBox.innerHTML += `<div class="bot-msg error">⚠️ Failed: ${err.message}</div>`;
  }

  chatBox.scrollTop = chatBox.scrollHeight; 
});


chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
