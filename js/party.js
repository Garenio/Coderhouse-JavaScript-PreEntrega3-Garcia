
// Creación de Cards para la página "Party Maker"

let pickCharContainer = document.getElementById("pick-char-container");

characters.forEach((el) => {

    let pickCard = document.createElement("div");
    pickCard.className = "pick-character-card";     
    
    // ----------------- Card Logo --------------------//

    let cardLogo = document.createElement("div");
    cardLogo.className = "pick-character-card__logo";            

    let avatar = document.createElement("img");
    avatar.src = el.image;

    cardLogo.appendChild(avatar);
    pickCard.appendChild(cardLogo);

    // ----------------- Card Info --------------------//

    let cardInfo = document.createElement("div");          
    cardInfo.className = "pick-character-card__info";            

    let charName = document.createElement("h3");
    charName.innerText = `${el.charName}`;
    
    let race = document.createElement("p");
    race.innerText = `Raza: ${el.race}`;
    
    let charClass = document.createElement("p");
    charClass.innerText = `Clase: ${el.charClass}`;

    let playerName = document.createElement("p");
    playerName.innerText = `Jugador: ${el.playerName}`;


    cardInfo.appendChild(charName);
    cardInfo.appendChild(race);
    cardInfo.appendChild(charClass);
    cardInfo.appendChild(playerName);
    pickCard.appendChild(cardInfo);

    // ----------------- Card Buttons --------------------//

    let cardButtons = document.createElement("div");          
    cardButtons.className = "pick-character-card__buttons"; 

    let buttonGiveMoney = document.createElement("button");
    let buttonGiveMoneySpan = document.createElement("span");
    buttonGiveMoneySpan.innerText = `monetization_on`;
    buttonGiveMoneySpan.className = "material-symbols-outlined";
    buttonGiveMoneySpan.title = "Dar dinero"
    buttonGiveMoney.appendChild(buttonGiveMoneySpan);
    
    let buttonGiveLevel = document.createElement("button");
    let buttonGiveLevelSpan = document.createElement("span");
    buttonGiveLevelSpan.innerText = `shift`;
    buttonGiveLevelSpan.className = "material-symbols-outlined";
    buttonGiveLevelSpan.title = "Dar nivel"
    buttonGiveLevel.appendChild(buttonGiveLevelSpan);

    let buttonDelChar = document.createElement("button");
    let buttonDelCharSpan = document.createElement("span");
    buttonDelCharSpan.innerText = `delete`  
    buttonDelCharSpan.className = "material-symbols-outlined";
    buttonDelCharSpan.title = "Eliminar personaje"
    buttonDelChar.appendChild(buttonDelCharSpan);

    buttonGiveMoney.onclick = () => giveMoney(el.id);
    buttonGiveLevel.onclick = () => giveLevel(el.id);
    buttonDelChar.onclick = () => deleteCharacter(el.id);

    cardButtons.appendChild(buttonGiveMoney);
    cardButtons.appendChild(buttonGiveLevel);
    cardButtons.appendChild(buttonDelChar);
    pickCard.appendChild(cardButtons);

    // ----------------- Fin de la card --------------------//

    pickCharContainer.appendChild(pickCard);

});