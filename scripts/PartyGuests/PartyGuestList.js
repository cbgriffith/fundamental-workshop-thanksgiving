import { PartyGuest } from "./PartyGuest.js"
import { getPartyGuest, usePartyGuest } from "./PartyGuestDataProvider.js";
import { PartyGuestForm } from "./PartyGuestForm.js";

export const PartyGuestList = (selectListName, selectedChoice) => {
    let partyGuestListContainer = document.querySelector(".guest-list");
    let partyGuestHTML = "";
    partyGuestListContainer.innerHTML = partyGuestHTML
    
    getPartyGuest()
    .then(() => {
            let partyGuestArray = usePartyGuest();
            if(selectListName === "side-dish"){
                partyGuestArray = partyGuestArray.filter(singlePartyGuestInLoop => {
                    return selectedChoice === singlePartyGuestInLoop.favoriteDish
                })
            }
            if(selectListName === "guest-name"){
                partyGuestArray = partyGuestArray.filter(singlePartyGuestInLoop => {
                    return selectedChoice === singlePartyGuestInLoop.name
                })
            }
            partyGuestArray.forEach((singlePartyGuestObj) => {
                partyGuestListContainer.innerHTML += PartyGuest(singlePartyGuestObj)
            })
        });
};