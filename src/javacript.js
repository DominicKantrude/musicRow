
let jumpStopRecords = [];
let chattenRecords = [];
let polarRecords = [];

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function 
// for each of the following artists and place the resulting object in the corresponding label array.

const createBluegrassArtist = (name, age) => {
    let bluegrassArtist = {
        name: name,
        age: age
    }
    chattenRecords.push(bluegrassArtist);
}

const createCountryArtist = (name, age) => {
    let countryArtist = {
        name: name,
        age: age
    }
    chattenRecords.push(countryArtist);
}

const createPopArtist = (name, age) => {
    let popArtist = {
        name: name,
        age: age
    }
    polarRecords.push(popArtist);
}

const createFunkArtist = (name, age) => {
    let funkArtist = {
        name: name,
        age: age
    }
    jumpStopRecords.push(funkArtist);
}

const createRapArtist = (name, age) => {
    let rapArtist = {
        name: name,
        age: age
    }
    jumpStopRecords.push(rapArtist);
}


const createArtist = () => {

}


createCountryArtist("Bruce Atikins", 23);
createPopArtist("Jenson Brown", 20);
createFunkArtist("Dre Funkz", 25);
createRapArtist("Dusta Grimes", 21);
createBluegrassArtist("Bartholomew Danielson", 23);
createCountryArtist("Avilee Dallas", 19);
createPopArtist("Austin Kinkaid", 22);
createRapArtist("Loyoncé Branis", 27);

console.log(jumpStopRecords);
console.log(chattenRecords);
console.log(polarRecords);
