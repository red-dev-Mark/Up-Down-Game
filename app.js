const img = document.querySelector("img");
const hint = document.querySelector("#hint");
const chance = document.querySelector("#chance");

const input = document.querySelector("#input");
const goBtn = document.querySelector("#goBtn");
const resetBtn = document.querySelector("#resetBtn");

let randomNum = 0;
let chances = 5;
let userValueList = [];

goBtn.disabled = false;
chance.textContent = `Chance : ${chances}`;

goBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
input.addEventListener("focus", () => (input.value = ""));

function createRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  return randomNum;
}

function play() {
  const userValue = input.value;

  if (userValue > 100 || userValue < 1) {
    hint.textContent = "Only enter from 1 to 100";
    hint.classList.remove("up", "down");
    return;
  }
  if (userValueList.includes(userValue)) {
    hint.textContent = "Number already used.";
    hint.classList.remove("up", "down");
    return;
  }
  userValueList.push(userValue);

  if (randomNum > userValue) {
    img.src =
      "https://i.pinimg.com/originals/0e/cf/f4/0ecff498c2c0fb05ee659508afa154ac.gif";
    hint.textContent = "Up!";
    hint.classList.add("up");
    chances--;
  } else if (randomNum < userValue) {
    img.src =
      "https://i.pinimg.com/originals/b7/57/ed/b757edd02824bfeeddc57f826186a1d6.gif";
    hint.textContent = "Down!";
    hint.classList.add("down");
    chances--;
  } else {
    img.src =
      "https://i.pinimg.com/originals/5d/00/d0/5d00d08c95ea9fbfb0a3e810001fb53d.gif";
    hint.textContent = "Congratulations, You Win!";
    hint.classList.add("finish");
    goBtn.disabled = true;
  }

  if (chances === 0) {
    goBtn.disabled = true;
    hint.innerText = "You Lose..";
    hint.classList.add("finish");
  }

  chance.textContent = `Chance : ${chances}`;
}

function reset() {
  goBtn.disabled = false;
  input.value = "";
  chances = 5;
  chance.textContent = `Chance : ${chances}`;
  hint.textContent = "🤩 Let's Play Game! 🤩";
  userValueList = [];
  hint.classList.remove("up", "down", "finish");

  img.src =
    "https://i.pinimg.com/originals/06/49/70/064970ba99e47951e5aa094f8d13892c.gif";
}

createRandomNum();
