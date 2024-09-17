let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Function to reset the game
const resetGame = () => {
  turnO = true;
  msgContainer.classList.add("hide");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

// Function to start a new game
const newGame = () => {
  resetGame();
};

// Event listeners for reset button and new game button
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", newGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked"); // Ensure this log appears in the console
    if (turnO && box.innerText === "") {
      box.innerText = "O";
      turnO = false;
    } else if (!turnO && box.innerText === "") {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinners();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinners = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val); // Ensure this log appears in the console
        showWinner(pos1Val);
        break;
      }
    }
  }
};