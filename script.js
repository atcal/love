let currentQuestion = 0;
let score = 0;
const totalQuestions = 4;
const correctAnswers = ["YA", "165", "Manchester United", "Lacta Anum Lorenza Blattan"];

function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("question1").classList.remove("hidden");
}

function checkAnswer(questionIndex, answer = "") {
  if (questionIndex === 0 || questionIndex === 2) {
    if (answer === correctAnswers[questionIndex]) {
      score++;
    }
  } else if (questionIndex === 1) {
    const userAnswer = document.getElementById("tinggi").value;
    if (userAnswer === correctAnswers[1]) {
      score++;
    }
  } else if (questionIndex === 3) {
    const userAnswer = document.getElementById("nama-panjang").value.trim();
    if (userAnswer.toLowerCase() === correctAnswers[3].toLowerCase()) {
      score++;
    }
  }

  if (currentQuestion === totalQuestions - 1) {
    showResult();
  } else {
    currentQuestion++;
    nextQuestion();
  }
}

function nextQuestion() {
  document.getElementById(`question${currentQuestion}`).classList.add("hidden");
  document.getElementById(`question${currentQuestion + 1}`).classList.remove("hidden");
}

function showResult() {
  document.querySelectorAll(".question").forEach(q => q.classList.add("hidden"));
  if (score === totalQuestions) {
    document.getElementById("correct-result").classList.remove("hidden");
  } else {
    document.getElementById("wrong-result").classList.remove("hidden");
  }
}

function playMusic() {
  const music = document.getElementById("romantic-music");
  music.currentTime = 0; // Mulai dari awal
  music.play()
    .then(() => {
      console.log("Musik diputar dengan sukses");
    })
    .catch((error) => {
      console.error("Error saat memutar musik:", error);
    });
}
