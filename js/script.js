// script for Exercise

const mainContainer = document.querySelector("main.show");

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