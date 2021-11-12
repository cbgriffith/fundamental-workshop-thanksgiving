import { usePartyGuest, updatePartyGuest } from "./PartyGuestDataProvider.js"
import { PartyGuestList } from "./PartyGuestList.js";

const contentTarget = document.querySelector(".partyGuest-form")

export const PartyGuestEditForm = (partyGuestId) => {
    // Give this component access to our application's notes state
    const allGuests = usePartyGuest();

    // Find the note that we clicked on by its unique id
    const guestWeWantToEdit = allGuests.find(singleGuest=> singleGuest.id === partyGuestId)
    let handedness = "";
    if (guestWeWantToEdit.rightHanded === "true"){
        handedness = "Right"
    } else {
        handedness = "Left"
    }

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Guest</h2>
        <input type="text" id="partyGuest-name" value="${guestWeWantToEdit.name}" />
        <input type="number" id="partyGuest-age" value="${guestWeWantToEdit.age}" />
        <select id="partyGuest-favoriteDish">
            <option selected>${guestWeWantToEdit.favoriteDish}</option>
            <option value="Sweet Potatoes">Sweet Potatoes</option>
            <option value="Mashed Potatoes">Mashed Potatoes</option>
            <option value="Stuffing">Stuffing</option>
            <option value="Macaroni and Cheese">Macaroni and Cheese</option>
            <option value="Corn">Corn</option>
            <option value="Brussel Sprouts">Brussel Sprouts</option>
            <option value="Cranberry Sauce">Cranberry Sauce</option>
            <option value="Creamed Spinach">Creamed Spinach</option>
            <option value="Candied Yams">Candied Yams</option>
            <option value="Glazed Carrots">Glazed Carrots</option>
            <option value="Human Flesh">Human Flesh</option>
        </select>
        <select id="partyGuest-rightHanded">
            <option selected>${handedness}</option>
            <option value="true">Right</option>
            <option value="false">Left</option>
        </select>
        <input type="text" id="partyGuest-image" value="${guestWeWantToEdit.image}" />
        <input type="hidden" id="partyGuest-id" value="${guestWeWantToEdit.id}" />
        <button id="saveGuestChanges-${partyGuestId}" class="btn btn-primary">Save Changes</button>
    `
}
let eventHub = document.querySelector("body")
eventHub.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveGuestChanges")){
        const editedGuest = {
            name: document.querySelector('#partyGuest-name').value,
            age: document.querySelector('#partyGuest-age').value,
            favoriteDish: document.querySelector('#partyGuest-favoriteDish').value,
            rightHanded: document.querySelector('#partyGuest-rightHanded').value,
            image: document.querySelector('#partyGuest-image').value,
            id: document.querySelector('#partyGuest-id').value
        }
        updatePartyGuest(editedGuest).then(PartyGuestList)
    }
})
