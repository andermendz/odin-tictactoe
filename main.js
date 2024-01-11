// function that return  its own properties
// object variable of that function

// factory function


const gameBoard = (() => {

    let board = ['','','','','','','','',''];

    const boardMechanics = (() => {
       
        
        for (let i = 0; i < board.length; i++){
            let choice = prompt('pick X or O')
            board[i] = choice;
         
        }
        console.log(board)
    })();

    console.log("dadads")
} )();

const playerFactory = (simbol,points) => {

    const addPoints = () => points++;
    const getPoints = () => console.log(points);

    return { simbol, addPoints, getPoints };
  };
  

let Anderson = playerFactory('X',1)

Anderson.addPoints();
Anderson.getPoints();

