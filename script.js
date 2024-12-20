// ********************ACCESSED ELEMENTS****************
let buttons = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let newGame_btn = document.querySelector("#new_btn");
let msgbox = document.querySelector(".msg_box");
let message = document.querySelector(".msg");

// ********TURNING KEY*********************
let turnX = true;
let turn0 = true;

// ***********WINNING PATTERNS******************
let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//*************RESET GAME*********************
const resetGame = () => {
  turn0 = true;
  // turnX = true;
  enablebuttons();
  msgbox.classList.add("hide");
};

// ************SHOW PATTERN*******************8
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turn0) {
      button.innerText = "0";
      turn0 = false;
    } else {
      button.innerText = "x";
      turn0 = true;
    }
    button.disabled = true;
    checkWinner();
  });
});

// **********DISABLE BUTTON***************
const disablebuttons = () => {
  for (let button of buttons) {
    button.disabled = true;
  }
};

// **********ENABLE BUTTON***************
const enablebuttons = () => {
  for (let button of buttons) {
    button.disabled = false;
    button.innerText = "";
  }
};

// **********SHOW WINNING MESSAGE***************
const showWinner = (winner) => {
  message.innerText = `Congratulation, Winner is ${winner}`;
  msgbox.classList.remove("hide");
  disablebuttons();
};

// **********CHECK WINNER***************
const checkWinner = () => {
  for (const pattern of winning) {
    let pos1Val = buttons[pattern[0]].innerText;
    let pos2Val = buttons[pattern[1]].innerText;
    let pos3Val = buttons[pattern[2]].innerText;

    // **********WINNING CONDITION***************
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
      else{
         console.log("Game Tie!");
         
      }
    }
  }
};

// **********RESET & NEW GAME***************
newGame_btn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);