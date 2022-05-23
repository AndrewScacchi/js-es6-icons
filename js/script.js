// script for Exercise
const mainContainer = document.querySelector("main.show");
// creating arrays
const animals = [];
const users = [];
const vegetables = [];

// using change mean i need to grab the whole section
const selector = document.getElementById("type");

selector.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
    mainContainer.innerHTML = "";   
  if(event.target.value == "all"){  
    // mainContainer.innerHTML = `You like ${event.target.value}`;
    for (i=0; i<data.length; i++){
        createCard(i,data);
    }
  } else if (event.target.value == "users"){
    for (i=0; i<users.length; i++){
        createCard(i,users);
    }
    // mainContainer.innerHTML = `You like ${event.target.value}`;
  } else if (event.target.value == "animals") {
    for (i=0; i<animals.length; i++){
        createCard(i,animals);
    }
    // mainContainer.innerHTML = "buu";  
  } else if (event.target.value == "vegetables"){
    for (i=0; i<vegetables.length; i++){
        createCard(i,vegetables);
    }
  }
});
// si sopra sarebbe meglio uno switch ma son più veloce a ragionare di if e l'esercizio è già in ritardo
// inoltre si forse era meglio salvare il ciclo a sua volta in una fx ma avevo già scritto la fx come card creator singola


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