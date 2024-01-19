// PLAYERS FACTORY

const playerFactory = (name, simbol, points) => {
  const addPoints = () => points++;
  const getPoints = () => console.log(points);

  return { name, simbol, addPoints, getPoints };
};

// BOARD DECLARATION AND INITIAL QUERY SELECTIONS
const game = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let gridSpaces = document.querySelectorAll(".game-grid-space");
  let gameOptionsActions = document.getElementById("game-options-actions");
  let gameOptionsMessage = document.getElementById("game-options-message");



  // INITIAL GAME MENU HTML CODE
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


// AI GAME MODE MENU HTML CODE
let aiModeRestartMenu = ` 
<button class="game-mode-button ai">
<span class="material-symbols-outlined">
    smart_toy
    </span>
AI mode
</button>

<button class="game-mode-button ai-restart">
<div>
 <span class="material-symbols-outlined">
restart_alt
</span>
</div>

Restart
</button>
`;

// TWO PLAYERS GAME MODE MENU HTML CODE
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

    let gameModeTwoPlayers = document.querySelector(".game-mode-button.twoplayers");
    let gameModeAI = document.querySelector(".game-mode-button.ai");

    // BOT GAME MODE

    gameModeAI.onclick = () => {

      console.log("bot mode pip pip pip plup")
      
      gridSpaces.forEach((space) => {
        space.style.opacity = 1;
        board = [];
        space.classList.remove("selected");
        space.textContent = "";
        
      });

      let player = playerFactory("Player", "X", 0);
      let bot= playerFactory("Bot", "O", 0);

      let turn = 1;
      let simbol = player.simbol;

      gameOptionsMessage.textContent = `${player.name} Turn`;
      gameOptionsActions.innerHTML = aiModeRestartMenu;

      let aiRestartButton = document.querySelector(
        ".ai-restart"
      );

      aiRestartButton.onclick = () => {
        gameModeAI.onclick();
      };

      console.log({ player, bot });
      console.log(turn);


      gridSpaces.forEach((space) => {
        space.onclick = () => {

          
          // TO-DO

          // add AI mode
          // add visual help

          // TO-DO - IDEAS:
          // simulate click and just listen to the click of the players
          // once the player clicks pic a random number and click on it to use it as bot choice
          // this would make the robot use the same system as the Player
          // without complicating the code
          // .click();
          if (board[space.id] == ("X" || "O")) {
            console.log("selected");
          } else if (board[space.id] == null) {
            console.log("not selected");

            board[space.id] = simbol;
            console.log(board[space.id]);
            space.classList.add("selected");

            gridSpaces.forEach((space) => {
              space.textContent = board[space.id];
            });

            console.log(board);
            boardChecker(board);
            console.log(boardChecker(board));

            if (boardChecker(board)) {
              if (turn == 1){
                gameOptionsMessage.textContent = `${player.name} WINS`;
              } else if (turn == 2){
                gameOptionsMessage.textContent = `${bot.name} WINS`;
              }
              
              board = [];
              gridSpaces.forEach((space) => {
                space.classList.add("selected");
                board[space.id] = "X";
              });
            } else {
              if (turn === 1) {
                turn = 2;
                simbol = bot.simbol;
                let botSelection = Math.ceil(Math.random() * 9);
              
                gameOptionsMessage.textContent = `${bot.name} Turn`;
              
              } else if (turn === 2) {
                turn = 1;
                simbol = player.simbol;
                gameOptionsMessage.textContent = `${player.name} Turn`;
              }
            }
          }

          console.log(turn);
        };
      });
    }

    // TWO PLAYERS GAME MODE 
    gameModeTwoPlayers.onclick = () => {
      gridSpaces.forEach((space) => {
        space.style.opacity = 1;
        board = [];
        space.classList.remove("selected");
        space.textContent = "";
      });

      let playerOne = playerFactory("Player 1", "X", 0);
      let playerTwo = playerFactory("Player 2", "O", 0);

      let turn = 1;
      let simbol = playerOne.simbol;

      gameOptionsMessage.textContent = `${playerOne.name} Turn`;
      gameOptionsActions.innerHTML = twoPlayersRestartMenu;

      let twoPlayersRestartButton = document.querySelector(
        ".twoplayers-restart"
      );
      twoPlayersRestartButton.onclick = () => {
        gameModeTwoPlayers.onclick();
      };

      console.log({ playerOne, playerTwo });
      console.log(turn);


      gridSpaces.forEach((space) => {
        space.onclick = () => {
          if (board[space.id] == ("X" || "O")) {
            console.log("selected");
          } else if (board[space.id] == null) {
            console.log("not selected");

            board[space.id] = simbol;
            console.log(board[space.id]);
            space.classList.add("selected");

            gridSpaces.forEach((space) => {
              space.textContent = board[space.id];
            });

            console.log(board);
            boardChecker(board);
            console.log(boardChecker(board));

            if (boardChecker(board)) {
              gameOptionsMessage.textContent = `Player ${turn} WINS`;
              board = [];
              gridSpaces.forEach((space) => {
                space.classList.add("selected");
                board[space.id] = "X";
              });
            } else {
              if (turn === 1) {
                turn = 2;
                simbol = playerTwo.simbol;
                gameOptionsMessage.textContent = `${playerTwo.name} Turn`;
              } else if (turn === 2) {
                turn = 1;
                simbol = playerOne.simbol;
                gameOptionsMessage.textContent = `${playerOne.name} Turn`;
              }
            }
          }

          console.log(turn);
        };
      });

    };

    // BOARD CHECKING MECHANISM
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
        (board[3] === "X" || board[3] === "O") &&
        board[3] === board[4] &&
        board[4] === board[5]
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

})();
