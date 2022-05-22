// script for Exercise

const mainContainer = document.querySelector("main.show");

const animals = [];
const users = [];
const vegetables = [];

// selecting all the options
const selectedAll = document.getElementById("all");
const selectedUsers = document.getElementById("users");
const selectedAnimals = document.getElementById("animals");
const selectedVegetables = document.getElementById("vegetables");

//populating the other arrays
for (i=0; i<data.length; i++){
    if(data[i].color == "green"){
        vegetables.push(data[i]);
    } else if (data[i].color == "blue"){
        users.push(data[i]);
    } else if (data[i].color == "orange"){
        animals.push(data[i]);
    }

}

//okay one by one they work
for (i=0; i<data.length; i++){
    createCard(i,data);
}
/*
for (i=0; i<users.length; i++){
    createCard(i,users);
}
for (i=0; i<animals.length; i++){
    createCard(i,animals);
}
for (i=0; i<vegetables.length; i++){
    createCard(i,vegetables);
}
*/





// Create a card function
function createCard(iter, array){
    // create card
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    // create i element
    let cardIcon = document.createElement("i");
        cardIcon.classList.add("fa-solid");
        cardIcon.classList.add(`fa-${array[iter].name}`);
    // create p element
    let cardName = document.createElement("p");
        cardName.innerHTML = array[iter].name;
        divCard.classList.add(array[iter].color);

    // assemble card
    divCard.append(cardIcon);
    divCard.append(cardName);
    mainContainer.append(divCard);

    return divCard;
}


/*

for (i=0; i<data.length; i++){
    // create card
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    // create i element
    let cardIcon = document.createElement("i");
        cardIcon.classList.add("fa-solid");
        cardIcon.classList.add(`fa-${data[i].name}`);
    // create p element
    let cardName = document.createElement("p");
        cardName.innerHTML = data[i].name;
        divCard.classList.add(data[i].color);

    // assemble card
    divCard.append(cardIcon);
    divCard.append(cardName);
    mainContainer.append(divCard);
}
*/





console.log(users);
console.log(animals);
console.log(vegetables);