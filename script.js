// Function to create and animate confetti
function createConfetti() {
  const confetti = document.getElementById("confetti");
  const colors = ["#ff4081", "#ffeb3b", "#4caf50", "#00bcd4", "#9c27b0"];

  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement("div");
    confettiPiece.className = "confetti-piece";
    confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
    confettiPiece.style.height = `${Math.random() * 10 + 5}px`;
    confettiPiece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.position = "absolute";
    confettiPiece.style.left = `${Math.random() * 100}vw`;
    confettiPiece.style.top = `${Math.random() * 100}vh`;
    confettiPiece.style.opacity = Math.random();
    confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiPiece.style.animation = `confetti-animation ${
      Math.random() * 2 + 3
    }s linear infinite`;
    confetti.appendChild(confettiPiece);
  }
}

// Keyframes for confetti animation
const style = document.createElement("style");
style.innerHTML = `
    @keyframes confetti-animation {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Trigger confetti creation
createConfetti();
