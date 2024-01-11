// function that return  its own properties
// object variable of that function

// factory function


const gameBoard = (() => {

    let board = ['','','','','','','','',''];

    const boardMechanics = (() => {
       
        
        for (let i = 0; i < board.length; i++){

            let choice = prompt(`pick X or O for position ${[i]} `  )
            while (choice !== 'O' && choice !== 'X'){
                 
                choice = prompt(`pick X or O for position ${[i]} `  )
                console.log(choice)
            } 

            board[i] = choice;
         
        }
     
        console.log(board)

        const boardChecker = ((board) => {

            if ((board[0] === board[1] && board[1] === board[2])) {
                console.log('true')
                
            } else  if ((board[2] === board[5] && board[5] === board[8])) {
                console.log('true')
                
            } else  if ((board[8] === board[7] && board[7] === board[6])) {
                console.log('true')
                
            } else  if ((board[6] === board[3] && board[3] === board[0])) {
                console.log('true')
                
            } else  if ((board[0] === board[4] && board[4] === board[8])) {
                console.log('true')
                
            } else  if ((board[6] === board[4] && board[4] === board[2])) {
                console.log('true')
                
            } 
            else {
                console.log('false')
            }
    
         
          
        })(board);
        const boardDocumentManipulator = (()=>{

            for (let i = 0; i < board.length; i++){
               let boardSpace = document.getElementById(i);
        
               boardSpace.textContent = board[i];
             
            }

        })();
     
    })();

  


  
} )();






const playerFactory = (simbol,points) => {

    const addPoints = () => points++;
    const getPoints = () => console.log(points);

    return { simbol, addPoints, getPoints };
  };
  

let Anderson = playerFactory('X',1)

Anderson.addPoints();
Anderson.getPoints();

