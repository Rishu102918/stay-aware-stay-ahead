document.addEventListener('DOMContentLoaded', function () {
  const questions = {
    tech: [
      {
        q: "Who is known as the father of computers?",
        a: ["Alan Turing", "Charles Babbage", "Tim Berners-Lee", "Steve Jobs"],
        correct: 1
      },
      {
        q: "What does HTML stand for?",
        a: ["HyperText Markup Language", "HighText Machine Language", "HyperTech Multi Language", "None"],
        correct: 0
      }
    ],
    science: [
      {
        q: "What planet is known as the Red Planet?",
        a: ["Mars", "Venus", "Jupiter", "Saturn"],
        correct: 0
      }
    ],
    social: [
      {
        q: "What is the largest democracy in the world?",
        a: ["USA", "UK", "India", "China"],
        correct: 2
      }
    ],
    random: [
      {
        q: "What is the tallest mountain?",
        a: ["K2", "Mount Everest", "Kanchenjunga", "Denali"],
        correct: 1
      }
    ]
  };

  const startBtn = document.getElementById("start-btn");
  const select = document.getElementById("domain-select");
  const quizSection = document.getElementById("quiz-section");

  let timer;
  let quizIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let currentQuestions = [];

  startBtn.addEventListener("click", () => {
    const domain = select.value;
    currentQuestions = questions[domain];
    if (!currentQuestions) return;

    quizIndex = 0;
    score = 0;
    timeLeft = 60;
    quizSection.style.display = "block";
    startTimer();
    showQuestion();
  });

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      const timerEl = document.getElementById("timer");
      if (timerEl) timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showResult();
      }
    }, 1000);
  }

  function showQuestion() {
    const q = currentQuestions[quizIndex];
    let optionsHTML = "";
    q.a.forEach((opt, i) => {
      optionsHTML += `<button class="option-btn" data-index="${i}">${opt}</button>`;
    });

    quizSection.innerHTML = `
      <div class="question-box">${q.q}</div>
      <div class="options">${optionsHTML}</div>
      <p>Time: <span id="timer">${timeLeft}</span> sec</p>
      <p id="result"></p>
    `;

    document.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => checkAnswer(parseInt(btn.dataset.index)));
    });
  }

  function checkAnswer(selectedIndex) {
    const correct = currentQuestions[quizIndex].correct;
    if (selectedIndex === correct) score++;

    quizIndex++;
    if (quizIndex < currentQuestions.length && timeLeft > 0) {
      showQuestion();
    } else {
      clearInterval(timer);
      showResult();
    }
  }

  function showResult() {
    quizSection.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your Score: ${score} / ${currentQuestions.length}</p>
      <button onclick="location.reload()">Try Again</button>
    `;
  }
});
