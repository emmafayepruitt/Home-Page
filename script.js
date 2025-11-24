const reasons = [
  { text: "I have 6k trophies in clash", img:"https://emmafayepruitt.github.io/Home-Page/IMG_8990.jpg" },
  { text: "I’m funnier", img:"https://emmafayepruitt.github.io/Home-Page/IMG_8995.jpg" },
  { text: "I have great music taste", img:"https://emmafayepruitt.github.io/Home-Page/IMG_9001.jpg" },
  { text: "I'm NOT chopped", img:"https://emmafayepruitt.github.io/Home-Page/IMG_8998.jpg" },
  { text: "I have a really cute cat", img:"https://emmafayepruitt.github.io/Home-Page/IMG_9002.jpg" },
  { text: "I have a very postive attitude", img:"https://emmafayepruitt.github.io/Home-Page/IMG_9013.jpg" },
  { text: "I’m goated", img:"https://emmafayepruitt.github.io/Home-Page/IMG_9005.jpg" },
  { text: "I’m beauty", img:"https://emmafayepruitt.github.io/Home-Page/IMG_8992.jpg" },
  { text: "I'm missing joints in all of my toes", img:"https://emmafayepruitt.github.io/Home-Page/IMG_8996.jpg" },
  { text: "And lastly.....I LOVE cottage cheese", img:"https://emmafayepruitt.github.io/Home-Page/IMG_8987.jpg" }
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
    hint.textContent = "Click";
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
    hint.textContent = "Are you convinced now"
  }
});
