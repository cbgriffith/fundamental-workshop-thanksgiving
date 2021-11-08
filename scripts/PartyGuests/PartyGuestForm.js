import { PartyGuestList } from "./PartyGuestList.js"
import { savePartyGuest } from "./PartyGuestDataProvider.js"

const contentTarget = document.querySelector(".partyGuest-form")

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "savePartyGuest") {

      // Make a new object representation of a note
      const newPartyGuest = {
         name: document.querySelector('#partyGuest__name').value,
         age: document.querySelector('#partyGuest__age').value,
         favoriteDish: document.querySelector('#partyGuest__favoriteDish').value,
         rightHanded: document.querySelector('#partyGuest__rightHanded').value,
         image: document.querySelector('#partyGuest__image').value
      }
    //   document.querySelector("#partyGuest__criminalName").value = ""
    //   document.querySelector("#partyGuest__date").value = ""
    //   document.querySelector("#partyGuest__text").value = ""
      // Change API state and application state
      savePartyGuest(newPartyGuest)
      .then(PartyGuestList) // Refresh your list of notes once you've saved your new one
  }
})

export const PartyGuestForm = () => {
    contentTarget.innerHTML = `<form>
    <div>
      <label>Name:</label>
    </div>
      <input type="text" id="partyGuest__name">
    <div>
      <label>Age:</label>
    </div>
      <input type="text" id="partyGuest__age">
    <div>
      <label>Favorite Side Dish:</label>
    </div>
      <select id="partyGuest__favoriteDish">
        <option selected>Choose one...</option>
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
    <div>
      <label>Dominant Hand:</label>
    </div>
      <select id="partyGuest__rightHanded">
        <option selected>Choose one...</option>
        <option value="true">Right</option>
        <option value="false">Left</option>
      </select>
    <div>
      <label>Image Link:</label>
    </div>
      <input type="text" id="partyGuest__image">
    </div>
    <div>
      <button id="savePartyGuest" class="btn btn-primary">Save</button>
    </div>
</form>`
}