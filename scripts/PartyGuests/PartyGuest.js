export const PartyGuest = (partyGuest) => {
    let handedness = "";
    if (partyGuest.rightHanded === "true"){
        handedness = "Right-handed"
    } else if (partyGuest.rightHanded === "false"){
        handedness = "Left-handed"
    }
    
    return `
        <div class="partyGuest__card">
            <div class="partyGuest__image"><img class="party-image" src=${partyGuest.image}></div>
            <ul class="guestCard-list">
                <div class="partyGuest__name"><li><h2>Name: ${partyGuest.name}</h2></li></div>
                <div class="partyGuest__age"><li><h4>Age: ${partyGuest.age}</h4></li></div>
                <div class="partyGuest__favoriteDish"><li><h4>Favorite Dish: ${partyGuest.favoriteDish}</h4></li></div>
                <div class="partyGuest__rightHanded"><li><h4>${handedness}</h4></li></div>
            </ul>
        </div>`
}