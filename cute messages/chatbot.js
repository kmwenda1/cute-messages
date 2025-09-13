document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", async () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatBox.innerHTML += `<div class="user-msg">💬 ${userMessage}</div>`;
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Call serverless function
    try {
      const response = await fetch("/.netlify/functions/chatbot", {  // for Netlify
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      chatBox.innerHTML += `<div class="bot-msg">💖 ${data.reply}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    } catch (err) {
      chatBox.innerHTML += `<div class="bot-msg">💖 Oops! Something went wrong 😅</div>`;
    }
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });
});
