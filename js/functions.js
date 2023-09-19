function addToParty(id) {
    if (party.some((el) => el.id === id)) {
        Toastify({
            text: "El personaje ya está en la party",
            duration: 3000,
        }).showToast();
    } else {
        if(party.length == 5) {
            Toastify({
                text: "Has alcanzado el máximo de jugadores permitidos.",
                duration: 3000,
            }).showToast();
        } else {
            let charToAdd = characters.find((el) => el.id === id);
            party.push({
                ...charToAdd,
            });
    
            console.log("Agregado")
            Toastify({
                text: "Personaje agregado correctamente.",
                duration: 3000,
            }).showToast();
        }
    }

    localStorage.setItem("party", JSON.stringify(party));
    showParty();
};

function showParty() {
    let partyContainer = document.getElementById("party-container");

    partyContainer.innerHTML = "";

    // ----------------- Party Title --------------------//

    let partyTitle = document.createElement("div");          
    partyTitle.className = "party-title";

    partyTitle.innerText = "Previsualización de la Party";

    partyContainer.appendChild(partyTitle);

    // ---------------------- Party Card-------------------------//

    let partyCardContainer = document.createElement("div");          
    partyCardContainer.className = "party-card-container";  

    if (party.length == 0) {
        let partyEmpty = document.createElement("div");          
        partyEmpty.className = "party-empty";
    
        partyEmpty.innerText = "Para comenzar a crear una party presiona en el botón 'Agregar a la party' en el personaje que desees agregar.";
    
        partyContainer.appendChild(partyEmpty);
    }else {
        party.forEach((el, index) => {

            let partyCard = document.createElement("div");          
            partyCard.className = "party-card";  
    
            // ----------------- Party Card Logo & Info --------------------//
    
            let partyCardLogoInfo = document.createElement("div");          
            partyCardLogoInfo.className = "party-card__logoinfo";     
            
            let avatar = document.createElement("img");
            avatar.src = el.image;
        
            let charName = document.createElement("h3");
            charName.innerText = `${el.charName}`;
        
            partyCardLogoInfo.appendChild(avatar);
            partyCardLogoInfo.appendChild(charName);
            partyCard.appendChild(partyCardLogoInfo);
            
            // ----------------- Party Card Buttons --------------------//
    
            let partyCardButtons = document.createElement("div");          
            partyCardButtons.className = "party-card__buttons"; 
    
            let btnRemove = document.createElement("button");
            btnRemove.onclick = () => removeCharacter(index);
            btnRemove.innerText = "X";
            btnRemove.className = "btn-remove-char";
    
            partyCardButtons.appendChild(btnRemove);
            partyCard.appendChild(partyCardButtons);
    
            partyCardContainer.appendChild(partyCard);
            partyContainer.appendChild(partyCardContainer)
        })
    }

    

    // ----------------- Party Buttons --------------------//

    let partyButtons = document.createElement("div");          
    partyButtons.className = "party-buttons";

    let buttonCreateParty = document.createElement("button");
    buttonCreateParty.innerText = `Crear Party`;
    buttonCreateParty.className = "btn btn-create-party";

    let buttonClearAll = document.createElement("button");
    buttonClearAll.innerText = `Borrar Todo`;
    buttonClearAll.className = "btn btn-create-party";
    buttonClearAll.onclick = clearAll;

    partyButtons.appendChild(buttonCreateParty);
    partyButtons.appendChild(buttonClearAll);
    partyContainer.appendChild(partyButtons);


};


function clearAll() {
    party = [];
    localStorage.setItem("party",(JSON.stringify(party)))
    showParty();
};