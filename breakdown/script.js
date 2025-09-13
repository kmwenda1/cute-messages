
const messages = {
  "tasha": "Tasha 💖 — You are beautiful, well-behaved, a little bitchy 😅 but always caring. You support me the most and I’ll forever appreciate you 🌸✨",
  "blessy": "blessy 🌟 — You’re the crazy fun one who always knows how to make me laugh 😂. Life would be so boring without you around 🎶💜",
  "sharon": "sharon 🌷 — Your kindness and calm spirit are unmatched. You remind me that everything will be okay, and that’s your superpower 🌈💞",
  "viv": "viv 🔥 — You’ve got the energy, the vibes, the boldness. Sometimes wild, sometimes deep, but always real. You push me to see the world differently, and even when you drive me crazy, I wouldn’t trade you for anyone. You’re one of those people who leaves a mark wherever you go — unforgettable, unapologetic, and absolutely you 💫🖤",
  "gracie": "Gracie 💃📸 — From childhood to now, you’ve been that bitchy-but-lovely friend who always lights up the room. You love dancing, posing for the cutest pictures, and honestly, life feels brighter with you around 💖🌸✨",
  "liz": "Liz 🌺 — You’re crazy, a little bitchy 😅, and you always hide how much you truly care — but I see it, and I feel it. I know you’ve been fighting battles with your health, and I want you to remember you’re not alone in that. You’re stronger than you know, and I care for you deeply 💖✨. No matter what, I’ve got you 🌈🤍",
  "sheryl": "Sheryl 🌸 — You are incredibly caring, kind, and loving. I know I may have hurt you, and I truly want to apologize 💖. You’ve been on my mind, and I want you to know that I see you, I value you, and you’re never alone 🌈✨. Your strength and heart inspire me every day, and I hope you always remember how special you are 💛💞"
};


const form = document.getElementById("name-form");
const nameInput = document.getElementById("nameInput");
const landing = document.getElementById("landing");
const card = document.getElementById("card");
const personName = document.getElementById("person-name");
const cardMessage = document.querySelector(".card-message");
const backBtn = document.getElementById("back-btn");

const chatSection = document.getElementById("chat-section");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim().toLowerCase();

  if (messages[name]) {
    personName.textContent = nameInput.value; 
    cardMessage.textContent = messages[name];
  } else {
    personName.textContent = nameInput.value || "Friend";
    cardMessage.textContent =
      "💌 I don’t have a custom message for you yet, but just know you’re special and loved ✨🌸";
  }

  landing.hidden = true;
  card.hidden = false;
  chatSection.hidden = false; 
});


backBtn.addEventListener("click", function () {
  card.hidden = true;
  landing.hidden = false;
  nameInput.value = "";
  chatSection.hidden = true; 
  chatBox.innerHTML = ""; 
});


sendBtn.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  
  chatBox.innerHTML += `<div class="user-msg">💬 ${userMessage}</div>`;
  chatInput.value = "";

  const botReplies = Object.values(messages);
  const botReply = botReplies[Math.floor(Math.random() * botReplies.length)];

  setTimeout(() => {
    chatBox.innerHTML += `<div class="bot-msg">💖 ${botReply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
  }, 500);
});


chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
