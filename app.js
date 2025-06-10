const QBox = document.getElementById("Qbox");
const hintButton = document.getElementById("question_mark");
const hintBox = document.getElementById("hint-box");
const generateButton = document.getElementById("generate");
let questionsData = [];
let currentQuestion = null;

function getQues() {
  fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
      questionsData = data;
    })
    .catch((error) => console.error("Error loading questions:", error));
}

function setQues() {
  if (questionsData.length === 0) return;
  const randomIndex = Math.floor(Math.random() * questionsData.length);
  currentQuestion = questionsData[randomIndex];

  QBox.querySelector("p").innerText = currentQuestion.question;
  hintBox.style.display = "none";
}

function showHint() {
  if (currentQuestion) {
    hintBox.innerHTML = `<p><strong>HINT:</strong> ${currentQuestion.hint}</p>`;
    hintBox.style.display = "block";
  }
}

generateButton.addEventListener("click", setQues);
hintButton.addEventListener("click", showHint);

getQues();
// const hint = document.getElementById("hint-box");
// function toggleHint() {
//   if (hint.style.display === "none") {
//     hint.style.display = "block";
//   } else {
//     hint.style.display = "none";
//   }
// }
