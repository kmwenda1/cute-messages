window.onload = function() {
  const okMessages = [
    "You light up my world brighter than the morning sun ☀️",
    "Your smile could literally end wars 🌸✨",
    "Every time I think of you, my heart does a little dance 💃💕",
    "You’re sweeter than a thousand cupcakes 🧁💫",
    "Life’s a movie, and you’re my favorite scene 🎬💝",
    "Even the stars get jealous of how much you shine ✨",
    "You’re like sunshine wrapped in human form ☀️💖",
    "I swear the flowers bloom brighter when you smile 🌷",
    "The way you laugh is my favorite soundtrack 🎶💕",
    "If beauty were time, you’d be eternity ⏳💎",
    "You’re proof that angels walk on earth 😇💫",
    "Being around you feels like a never-ending festival 🎉",
    "Every little thing you do adds color to my world 🎨🌈",
    "You’re the sparkle in the universe that makes it magical 🌌💖",
    "You have a heart so warm, it could melt winter ❄️❤️",
    "You’re the reason I believe in good days 🌞🌸",
    "Whenever I see you, the world pauses just a little ⏸️💕",
    "Even clouds move aside just to watch you shine ☁️🌟",
    "Your kindness is like gravity—it pulls everyone in 💞",
    "You’re not just cute, you’re legendary 🏆💓"
  ];

  const sadMessages = [
    "It’s okay love, even storms pass and the sun always comes back 🌈",
    "On your worst day, you’re still my best thing 💕",
    "If I could, I’d wrap you in the warmest hug forever 🫂",
    "You’re never alone — my heart beats right next to yours 💓",
    "Even in the dark, you glow like the moon 🌙✨",
    "Crying doesn’t make you weak, it makes you human 🤍",
    "The world feels heavy, but you don’t have to carry it alone 💞",
    "You’re doing so much better than you think 🌱✨",
    "It’s okay to rest, even the stars take breaks 🌌",
    "You’re allowed to feel sad, but never forget your worth 💎",
    "The night may be long, but the sunrise always comes 🌅",
    "You’ve survived every tough day so far—you’re undefeated 🏅",
    "When the world feels cold, remember you are my warmth 🔥",
    "You are stronger than the storm trying to break you 🌊💪",
    "Your story is still being written, don’t stop now ✍️💖",
    "You’re precious, even when you can’t see it 🌸",
    "The world is brighter with you in it 🌟",
    "This moment is tough, but so are you 💞",
    "Even if you feel broken, you are still beautiful 💔➡️💖",
    "I believe in you, always 🌹✨"
  ];

  const warmNote = `
  Hey love 💙🖤,

  Sometimes life makes you doubt yourself, but let me remind you of a few truths:

  🌸 You are stronger than the bad days, even when they try to convince you otherwise.  
  🌙 You carry light in your heart that shines even in the darkest nights.  
  💎 You are rare, precious, and worthy of every good thing coming your way.  
  🌊 You’re not just surviving, you’re learning, growing, and becoming even more amazing.  
  🦋 You are loved deeply — by me, and by the world that’s lucky to have you.  

  Take a breath, close your eyes for a moment, and remember:  
  You are enough, exactly as you are. Always. 💕
  `;

  const gradients = [
    "linear-gradient(135deg, #a1ffce, #faffd1)",
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(135deg, #ffdde1, #ee9ca7)",
    "linear-gradient(135deg, #89f7fe, #66a6ff)",
    "linear-gradient(135deg, #d4fc79, #96e6a1)",
    "linear-gradient(135deg, #ffecd2, #fcb69f)",
    "linear-gradient(135deg, #cfd9df, #e2ebf0)",
    "linear-gradient(135deg, #30cfd0, #330867)",
    "linear-gradient(135deg, #6a11cb, #2575fc)"
  ];

  const okBtn = document.getElementById("okBtn");
  const notOkBtn = document.getElementById("notOkBtn");
  const messageBox = document.getElementById("messageBox");
  const nextBtn = document.getElementById("nextBtn");
  const starTrigger = document.getElementById("starTrigger");

  let currentMood = null;

  // Typewriter + fade
  function typeWriter(text, element, speed = 40) {
    element.innerHTML = "";
    const span = document.createElement("span");
    span.className = "message-fade";
    element.appendChild(span);

    let i = 0;
    function typing() {
      if (i < text.length) {
        span.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  // Animations
  function showBalloons(msg) {
    typeWriter(msg, messageBox);
    for (let i = 0; i < 5; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.innerText = "🎈";
      balloon.style.left = Math.random() * window.innerWidth + "px";
      document.body.appendChild(balloon);
      setTimeout(() => balloon.remove(), 5000);
    }
  }

  function showSticky(msg) {
    messageBox.innerHTML = `<div class="sticky-note">${msg}</div>`;
  }

  function showGift(msg) {
    messageBox.innerHTML = `<div class="gift">🎁</div><p>${msg}</p>`;
  }

  function showRandomAnimation(msg) {
    const animations = [showBalloons, showSticky, showGift];
    const random = animations[Math.floor(Math.random() * animations.length)];
    random(msg);
  }

  function changeBackground() {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    document.body.style.background = randomGradient;
  }

  function showMessage(mood) {
    const pool = mood === "ok" ? okMessages : sadMessages;
    const msg = pool[Math.floor(Math.random() * pool.length)];
    showRandomAnimation(msg);
    changeBackground();
    nextBtn.classList.remove("hidden");
    currentMood = mood;
  }

  okBtn.addEventListener("click", () => {
    showMessage("ok");
  });

  notOkBtn.addEventListener("click", () => {
    showMessage("notOk");
  });

  nextBtn.addEventListener("click", () => {
    if (currentMood) {
      showMessage(currentMood);
    }
  });

  starTrigger.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `
      <div>
        <p>${warmNote}</p>
        <div class="close-btn">Close ✨</div>
      </div>
    `;
    document.body.appendChild(overlay);

    for (let i = 0; i < 20; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.innerText = "✨";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.top = Math.random() * window.innerHeight + "px";
      overlay.appendChild(star);
    }

    overlay.querySelector(".close-btn").addEventListener("click", () => {
      overlay.remove();
    });
  });
};
