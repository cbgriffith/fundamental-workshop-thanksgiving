import { PartyGuest } from "./PartyGuest.js"
import { getPartyGuest, usePartyGuest } from "./PartyGuestDataProvider.js";
import { SideDishSelect } from "../SideDishes/SideDishSelect.js";

const contentTarget = document.querySelector(".guest-list")

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
            partyGuestArray.forEach((singlePartyGuestObj) => {
                partyGuestListContainer.innerHTML += PartyGuest(singlePartyGuestObj)
            })
        });
};