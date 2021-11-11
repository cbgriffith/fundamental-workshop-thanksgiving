import { getPartyGuest, usePartyGuest } from "../PartyGuests/PartyGuestDataProvider.js"
import { PartyGuestList } from "../PartyGuests/PartyGuestList.js"

const contentTarget = document.querySelector(".name-select")

export const guestNameSelect = () => {
    getPartyGuest()
        .then(() => {
    const guestName = usePartyGuest()
    render(guestName)
        })
}

const render = guestNameCollection => {
    contentTarget.innerHTML = `
        <div><label>Sort by guest</label></div>
        <select class="dropdown" id="guestNameSelect">
            <option value="0">Please select a party guest...</option>
            ${
                guestNameCollection.map(guestNameObject => {
                    const guestName = guestNameObject.name
                    return `<option>${guestName}</option>`
                })
            }
        </select>
    `
    
}
const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {

    if(eventObject.target.id === "guestNameSelect"){
        PartyGuestList("guest-name", eventObject.target.value)
    }
})
