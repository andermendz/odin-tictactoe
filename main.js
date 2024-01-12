// function that return  its own properties
// object variable of that function

// factory function

const game = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  let gameOptionsActions = document.getElementById("game-options-actions");
  let gameOptionsMessage = document.getElementById("game-options-message");
  let startButton = document.getElementById("start-button");

  startButton.onclick = () => {
    gameOptionsMessage.textContent = "Select a Game Mode";
    gameOptionsActions.innerHTML = ` 
        <button class="game-mode-button ai">
        <span class="material-symbols-outlined">
            smart_toy
            </span>
        AI mode
    </button>
    
    <button class="game-mode-button twoplayers">
    <div> <span class="material-symbols-outlined">
    robot_2
    </span>
    <span class="material-symbols-outlined">
    robot_2
    </span></div>
   
    Two Players
</button>
`;
  };

  const startGame = () => {};

  const boardMechanics = (() => {
    // for (let i = 0; i < board.length; i++){

    //     let choice = prompt(`pick X or O for position ${[i]} `  )
    //     while (choice !== 'O' && choice !== 'X'){

    //         choice = prompt(`pick X or O for position ${[i]} `  )
    //         console.log(choice)
    //     }

    //     board[i] = choice;

    // }

    console.log(board);

    const boardChecker = (board) => {
      if (board[0] === board[1] && board[1] === board[2]) {
        return true;
      } else if (board[2] === board[5] && board[5] === board[8]) {
        return true;
      } else if (board[8] === board[7] && board[7] === board[6]) {
        return true;
      } else if (board[6] === board[3] && board[3] === board[0]) {
        return true;
      } else if (board[0] === board[4] && board[4] === board[8]) {
        return true;
      } else if (board[6] === board[4] && board[4] === board[2]) {
        return true;
      } else {
        return false;
      }
    };
  })();

  
})();

const playerFactory = (simbol, points) => {
  const addPoints = () => points++;
  const getPoints = () => console.log(points);

  return { simbol, addPoints, getPoints };
};

let Anderson = playerFactory("X", 1);

Anderson.addPoints();
Anderson.getPoints();
