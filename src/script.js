const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
const recorde = document.querySelector(".recorde");

let alreadyJump = false;
let count = 0;
let currentRecorde = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;
    // let audio = new Audio("pulo.mp3");
    // audio.play();
    setTimeout(() => {
      dino.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 40 && cactoLeft < 270 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);

    if (count > currentRecorde) {
      currentRecorde = count;
      recorde.innerHTML = `RECORDE: ${count}`;
    }
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);

document.addEventListener("click", () => {
  jump2();
});

function jump2() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;
    // let audio = new Audio("pulo.mp3");
    // audio.play();
    setTimeout(() => {
      dino.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 40 && cactoLeft < 270 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);

    if (count > currentRecorde) {
      currentRecorde = count;
      recorde.innerHTML = `RECORDE: ${count}`;
    }
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);
