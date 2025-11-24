const reasons = [
  { text: "I have 6k trophies in clash", img: "clash.jpg" },
  { text: "I’m funnier", img: "images/laugh.jpg" },
  { text: "I have great music taste", img: "images/listen.jpg" },
  { text: "I'm NOT chopped", img: "images/adventure.jpg" },
  { text: "I have a really cute cat", img: "images/cook.jpg" },
  { text: "I have a very postive attitude", img: "images/heart.jpg" },
  { text: "I’m goated", img: "images/support.jpg" },
  { text: "I’m beauty", img: "images/cheer.jpg" },
  { text: "I'm missing joints in all of my toes", img: "images/gift.jpg" },
  { text: "And lastly.....I LOVE cottage cheese", img: "images/love.jpg" }
];

let index = -1;

document.body.addEventListener("click", () => {
  const title = document.getElementById("title");
  const hint = document.getElementById("click-hint");
  const img = document.getElementById("reason-img");
  const text = document.getElementById("reason-text");

  if (index === -1) {
    // first click — hide title
    title.style.display = "none";
    hint.textContent = "Click to see the next reason 💌";
    img.style.display = "block";
    text.style.display = "block";
  }

  index++;

  if (index < reasons.length) {
    img.src = reasons[index].img;
    text.textContent = reasons[index].text;
  } else {
    // end
    img.style.display = "none";
    text.textContent = "💘 The End 💘";
    hint.textContent = "Thanks for clicking through!";
  }
});
