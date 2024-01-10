// function that return  its own properties
// object variable of that function

// factory function
function createPlayer (name){
    const discordName = '@' + name;

    let point = 0;

    const getPoint = () => point;
    const givePoint = () => point++;

    return {name, discordName, getPoint, givePoint}
}




function gameboardObject(){

    let Gameboard = [];

    return {Gameboard};
}

let Gameboard = gameboardObject();

// TO-DO

// an object to control the flow of the game itself.

// do it in CONSOLE FIRST

// start and restar and results at the end