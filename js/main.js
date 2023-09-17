// Creación de Card para la página "Personajes"

let charactersCointeiner = document.getElementById("characters-container");

characters.forEach((el) => {

    let card = document.createElement("div");
    card.className = "character-card";     
    
    // ----------------- Card Logo --------------------//

    let cardLogo = document.createElement("div");
    cardLogo.className = "character-card__logo";            

    let avatar = document.createElement("img");
    avatar.src = el.image;

    cardLogo.appendChild(avatar);
    card.appendChild(cardLogo);

    // ----------------- Card Info --------------------//

    let cardInfo = document.createElement("div");          
    cardInfo.className = "character-card__info";            

    let charName = document.createElement("h3");
    charName.innerText = `${el.charName}`;
    
    let race = document.createElement("p");
    race.innerText = `Raza: ${el.race}`;
    
    let charClass = document.createElement("p");
    charClass.innerText = `Clase: ${el.charClass}`;
    
    let level = document.createElement("p");
    level.innerText = `Nivel: ${el.level}`;

    let gold = document.createElement("p");
    gold.innerText = `Oro: ${el.gold}`;

    let playerName = document.createElement("p");
    playerName.innerText = `Jugador: ${el.playerName}`;


    cardInfo.appendChild(charName);
    cardInfo.appendChild(race);
    cardInfo.appendChild(charClass);
    cardInfo.appendChild(level);
    cardInfo.appendChild(gold);
    cardInfo.appendChild(playerName);
    card.appendChild(cardInfo);

    // ----------------- Card Buttons --------------------//

    let cardButtons = document.createElement("div");          
    cardButtons.className = "character-card__buttons"; 

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
    card.appendChild(cardButtons);

    // ----------------- Fin de la card --------------------//

    charactersCointeiner.appendChild(card);

});