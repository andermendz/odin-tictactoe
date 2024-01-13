// function that return  its own properties
// object variable of that function

// factory function

const playerFactory = (name, simbol, points) => {
  const addPoints = () => points++;
  const getPoints = () => console.log(points);

  return { name, simbol, addPoints, getPoints };
};

const game = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let boardSpaces = document.querySelectorAll(".game-grid-space");
  let gameOptionsActions = document.getElementById("game-options-actions");
  let gameOptionsMessage = document.getElementById("game-options-message");

  let modesMenu = ` 
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

let twoPlayersRestartMenu = ` 
<button class="game-mode-button ai">
<span class="material-symbols-outlined">
    smart_toy
    </span>
AI mode
</button>

<button class="game-mode-button twoplayers-restart">
<div>
 <span class="material-symbols-outlined">
restart_alt
</span>
</div>

Restart
</button>
`;

  let startButton = document.getElementById("start-button");


  startButton.onclick = () => {
    gameOptionsMessage.textContent = "Select a Game Mode";
    gameOptionsActions.innerHTML = modesMenu;

    

    let gameModeTwoPlayers = document.querySelector(
      ".game-mode-button.twoplayers"
    );

    gameModeTwoPlayers.onclick = () => {
  

     
      boardSpaces.forEach((space) => {
        board = [''];
        space.textContent = "";
      });

     
      let playerOne = playerFactory("Player 1", "X", 0);
      let playerTwo = playerFactory("Player 2", "O", 0);

      let turn = 1;
      let simbol = playerOne.simbol;
    
      gameOptionsMessage.textContent = `${playerOne.name} Turn`
      gameOptionsActions.innerHTML = twoPlayersRestartMenu;

      let twoPlayersRestartButton = document.querySelector(".twoplayers-restart");
      twoPlayersRestartButton.onclick = (() => {
        gameModeTwoPlayers.onclick();
      })
    

      console.log({ playerOne, playerTwo });
      console.log(turn)
      boardSpaces.forEach((space) => {
        space.onclick = () => {
          

          board[space.id] = simbol;

          boardSpaces.forEach((space)=>{
            space.textContent = board[space.id];
          })
         
          console.log(board);
          boardChecker(board);
          console.log(boardChecker(board));

         
        
          if(boardChecker(board)){
            gameOptionsMessage.textContent = `Player ${turn } WINS`;
            board = [''];
            gameOptionsActions.innerHTML = twoPlayersRestartMenu;
          } else {
            if(turn === 1){
              turn = 2;
              simbol = playerTwo.simbol;
              gameOptionsMessage.textContent = `${playerTwo.name} Turn`;
            } else if (turn === 2){
              turn = 1;
              simbol = playerOne.simbol;
              gameOptionsMessage.textContent = `${playerOne.name} Turn`;
            }
          }

         
          console.log(turn)
        };
      });

      // TO-DO

   
      // add AI mode
      // add rounds
      // add restart
    };

    const boardChecker = (board) => {
      if (
        (board[0] === "X" || board[0] === "O") &&
        board[0] === board[1] &&
        board[1] === board[2]
      ) {
        return true;
      } else if (
        (board[1] === "X" || board[1] === "O") &&
        board[1] === board[4] &&
        board[4] === board[7]
      ) {
        return true;
      } else if (
        (board[2] === "X" || board[2] === "O") &&
        board[2] === board[5] &&
        board[5] === board[8]
      ) {
        return true;
      } else if (
        (board[8] === "X" || board[8] === "O") &&
        board[8] === board[7] &&
        board[7] === board[6]
      ) {
        return true;
      } else if (
        (board[6] === "X" || board[6] === "O") &&
        board[6] === board[3] &&
        board[3] === board[0]
      ) {
        return true;
      } else if (
        (board[0] === "X" || board[0] === "O") &&
        board[0] === board[4] &&
        board[4] === board[8]
      ) {
        return true;
      } else if (
        (board[6] === "X" || board[6] === "O") &&
        board[6] === board[4] &&
        board[4] === board[2]
      ) {
        return true;
      } else {
        return false;
      }
    };
  };

  const startGame = () => {};

  const boardMechanics = () => {
    // for (let i = 0; i < board.length; i++){

    //     let choice = prompt(`pick X or O for position ${[i]} `  )
    //     while (choice !== 'O' && choice !== 'X'){

    //         choice = prompt(`pick X or O for position ${[i]} `  )
    //         console.log(choice)
    //     }

    //     board[i] = choice;

    // }

    console.log(board);
  };
})();
