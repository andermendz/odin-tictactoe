// function that return  its own properties
// object variable of that function
function createUser (name){
    const discordName = '@' + name;

    let reputation = 0;

    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return {name, discordName, getReputation, giveReputation}
}


const ander = createUser('ander');

console.log(ander.getReputation())

ander.giveReputation();
ander.giveReputation();

console.log(ander.getReputation());

console.log({name: ander.name, reputation: ander.getReputation()});



