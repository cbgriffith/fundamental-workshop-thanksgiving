import { getSideDishes, useSideDishes } from "./SideDishDataProvider.js"
import { PartyGuestList } from "../PartyGuests/PartyGuestList.js"

const contentTarget = document.querySelector(".sideDish-list")

export const SideDishSelect = () => {
    getSideDishes()
        .then(() => {
    const sideDishes = useSideDishes()
    render(sideDishes)
        })
}

const render = sideDishCollection => {
    contentTarget.innerHTML = `
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
        console.log("You selected something from the side dish dropdown")
        console.log("This is the side dish that was selected: ", eventObject.target.value)
        PartyGuestList("side-dish", eventObject.target.value)
    }
})
