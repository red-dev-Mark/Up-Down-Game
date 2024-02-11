const img = document.querySelector("img");
const hint = document.querySelector("#hint");
const chance = document.querySelector("#chance");

const input = document.querySelector("#input");
const goBtn = document.querySelector("#goBtn");
const resetBtn = document.querySelector("#resetBtn");

let randomNum = 0;
let chances = 5;
const userValueList = [];

goBtn.disabled = false;
chance.textContent = `남은 기회 : ${chances}`;

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
    hint.textContent = "1~100까지의 수만 입력해주세요.";
    return;
  }
  if (userValueList.includes(userValue)) {
    hint.textContent = "이미 사용된 숫자입니다.";
    return;
  }
  userValueList.push(userValue);

  if (randomNum > userValue) {
    img.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    hint.textContent = "Up!";
    chances--;
  } else if (randomNum < userValue) {
    img.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    hint.textContent = "Down!";
    chances--;
  } else {
    img.src =
      "https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    hint.textContent = "정답!";
    goBtn.disabled = true;
  }

  if (chances === 0) goBtn.disabled = true;
  
  chance.textContent = `남은 기회 : ${chances}`;
}

function reset() {
  goBtn.disabled = false;
  input.value = "";
  chances = 5;
  chance.textContent = `남은 기회 : ${chances}`;
  hint.textContent = "무조건 맞춰라";

  img.src = "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";
}

createRandomNum();