// Puzzle Logic
const gameArea = document.getElementById("game-area");

function startPuzzle() {
  gameArea.innerHTML = `
    <div id="puzzle-board" class="board"></div>
    <button onclick="shuffleTiles()">🔀 Shuffle</button>
  `;
  createPuzzleBoard();
}

function createPuzzleBoard() {
  const board = document.getElementById("puzzle-board");
  board.innerHTML = "";
  let tiles = [...Array(8).keys()].map(x => x + 1);
  tiles.push(""); // empty tile
  tiles.forEach((val, i) => {
    const tile = document.createElement("div");
    tile.className = "tile" + (val === "" ? " empty" : "");
    tile.textContent = val;
    tile.addEventListener("click", () => moveTile(i));
    board.appendChild(tile);
  });
}

function shuffleTiles() {
  const board = document.getElementById("puzzle-board");
  let tiles = Array.from(board.children);
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    board.appendChild(tiles[j]);
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
}

function moveTile(index) {
  const board = document.getElementById("puzzle-board");
  const tiles = Array.from(board.children);
  const emptyIndex = tiles.findIndex(tile => tile.classList.contains("empty"));
  const allowedMoves = [index - 1, index + 1, index - 3, index + 3];
  if (allowedMoves.includes(emptyIndex)) {
    [tiles[index].textContent, tiles[emptyIndex].textContent] =
      [tiles[emptyIndex].textContent, tiles[index].textContent];
    tiles[index].classList.toggle("empty");
    tiles[emptyIndex].classList.toggle("empty");
  }
}
const riddles = [
  {
    question: "What has to be broken before you can use it?",
    answer: "An egg"
  },
  {
    question: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
    answer: "A candle"
  },
  {
    question: "What month of the year has 28 days?",
    answer: "All of them"
  },
  {
    question: "What is full of holes but still holds water?",
    answer: "A sponge"
  },
  {
    question: "What question can you never answer yes to?",
    answer: "Are you asleep yet?"
  }
];


let currentRiddleIndex = 0;

function startRiddle() {
  showRiddle(currentRiddleIndex);
}

function showRiddle(index) {
  const gameArea = document.getElementById("game-area");
  const r = riddles[index];

  gameArea.innerHTML = `
    <div class="riddle">
      <p><strong>Riddle:</strong> ${r.question}</p>
      <input type="text" id="riddle-answer" placeholder="Your answer here" />
      <button id="check-answer">Check Answer</button>
      <div id="riddle-feedback"></div>
      <button id="next-riddle" style="display:none;">Next Riddle</button>
    </div>
  `;

  document.getElementById("check-answer").addEventListener("click", () => {
    const userAnswer = document.getElementById("riddle-answer").value.trim().toLowerCase();
    const correctAnswer = r.answer.toLowerCase();

    const feedback = document.getElementById("riddle-feedback");
    if (userAnswer === correctAnswer) {
      feedback.innerHTML = "✅ Correct!";
    } else {
      feedback.innerHTML = `❌ Incorrect. The correct answer is: ${r.answer}`;
    }

    document.getElementById("next-riddle").style.display = "inline-block";
  });

  document.getElementById("next-riddle").addEventListener("click", () => {
    currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
    showRiddle(currentRiddleIndex);
  });
}
