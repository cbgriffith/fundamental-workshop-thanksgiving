import { deletePartyGuest } from "./PartyGuestDataProvider.js";
import { PartyGuestList } from "./PartyGuestList.js";
import { PartyGuestEditForm } from "./PartyGuestEditForm.js";

export const PartyGuest = (partyGuest) => {
    let handedness = "";
    if (partyGuest.rightHanded === "true"){
        handedness = "Right-handed"
    } else {
        handedness = "Left-handed"
    }
    
    return `
        <div class="partyGuest__card">
            <div class="partyGuest__image"><img class="party-image" src="${partyGuest.image}"></div>
            <ul class="guestCard-list">
                <div class="partyGuest__name"><li><h2>${partyGuest.name}</h2></li></div>
                <div class="partyGuest__age"><li><h4>Age: ${partyGuest.age}</h4></li></div>
                <div class="partyGuest__favoriteDish"><li><h4>Favorite Dish: ${partyGuest.favoriteDish}</h4></li></div>
                <div class="partyGuest__rightHanded"><li><h4>${handedness}</h4></li></div>
                <button id="deletePartyGuest--${partyGuest.id}" class="btn btn-primary">Delete</button>
                <button id="editPartyGuest--${partyGuest.id}" class="btn btn-primary">Edit</button>
            </ul>
        </div>`
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deletePartyGuest")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    deletePartyGuest(idToDelete)
    .then(PartyGuestList)
  }
})

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("editPartyGuest")) {
    const partyGuestId = +eventObject.target.id.split("--")[1]
    PartyGuestEditForm(partyGuestId);
  }
})