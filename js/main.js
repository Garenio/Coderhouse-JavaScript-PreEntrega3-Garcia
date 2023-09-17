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

    let buttonGiveMoney = document.createElement("button");
    buttonGiveMoney.innerText = `Dar dinero`;
    buttonGiveMoney.className = "btn-give-money";

    buttonGiveMoney.onclick = () => giveMoney(el.id);

    card.appendChild(buttonGiveMoney);
    
    let buttonGiveLevel = document.createElement("button");
    buttonGiveLevel.innerText = `Dar nivel`;
    buttonGiveLevel.className = "btn-give-level";

    buttonGiveLevel.onclick = () => giveLoney(el.id);

    card.appendChild(buttonGiveLevel);

    charactersCointeiner.appendChild(card);

});