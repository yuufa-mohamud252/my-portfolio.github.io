document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const response = document.getElementById("formResponse");
  
    if (name && email && message) {
      response.textContent = `Thank you, ${name}! Your message has been sent.`;
      response.style.color = "green";
      this.reset();
    } else {
      response.textContent = "Please fill out all fields.";
      response.style.color = "red";
    }
  });

  const typingText = document.getElementById("typing-text");
  const words = ["Registered Nurse", "Healthcare Leader", "Patient Advocate"];

let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newWordDelay = 1500;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, typingDelay + 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});
