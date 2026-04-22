const questions = [
  {
    question: "What is HTML?",
    answers: [
      { text: "Programming Language", correct: false },
      { text: "Markup Language", correct: true },
      { text: "Database", correct: false },
      { text: "Operating System", correct: false }
    ]
  },
  {
    question: "Which is used for styling?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "C++", correct: false }
    ]
  },
  {
    question: "Which is a JS framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Django", correct: false },
      { text: "Flask", correct: false },
      { text: "Laravel", correct: false }
    ]
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");

function startQuiz() {
  currentIndex = 0;
  score = 0;
  quizBox.style.display = "block";
  resultBox.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  const current = questions[currentIndex];
  questionEl.innerText = current.question;

  current.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("answer-btn");
    btn.onclick = () => selectAnswer(answer.correct, btn);
    answersEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(correct, button) {
  if (correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }

  Array.from(answersEl.children).forEach(btn => {
    btn.disabled = true;
  });

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.style.display = "none";
  resultBox.classList.remove("hidden");
  scoreEl.innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
  startQuiz();
}

startQuiz();