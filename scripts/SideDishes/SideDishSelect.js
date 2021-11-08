import { getPartyGuest, usePartyGuest } from "../PartyGuests/PartyGuestDataProvider.js"
import { PartyGuestList } from "../PartyGuests/PartyGuestList.js"

const contentTarget = document.querySelector(".sideDish-select")

export const SideDishSelect = () => {
    getPartyGuest()
        .then(() => {
    const sideDishes = usePartyGuest()
    render(sideDishes)
        })
}

const render = sideDishCollection => {
    contentTarget.innerHTML = `
        <div><label>Sort by side dish</label></div>
        <select class="dropdown" id="sideDishSelect">
            <option value="0">Please select a side dish...</option>
            ${
                sideDishCollection.map(sideDishObject => {
                    const sideDishName = sideDishObject.favoriteDish
                    return `<option>${sideDishName}</option>`
                })
            }
        </select>
    `
}
const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {

    if(eventObject.target.id === "sideDishSelect"){
        PartyGuestList("side-dish", eventObject.target.value)
    }
})
