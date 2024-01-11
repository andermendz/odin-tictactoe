// function that return  its own properties
// object variable of that function

// factory function


const gameBoard = (() => {

    let board = [];

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

// TO-DO

// an object to control the flow of the game itself.

// do it in CONSOLE FIRST

// start and restar and results at the end

//  const changeSign = () 

// x and =