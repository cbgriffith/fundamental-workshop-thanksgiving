let partyGuests = [];

export const usePartyGuest = () => {
    return partyGuests.slice()
}

export const getPartyGuest = () => {
    return fetch('http://localhost:8088/invited')
        .then(response => response.json())
        .then(parsedPartyGuest => {
                partyGuests = parsedPartyGuest
            });
}

export const savePartyGuest = guest => {
    return fetch('http://localhost:8088/invited', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
    .then(getPartyGuest)
}

export const deletePartyGuest = partyGuestId => {
    return fetch(`http://localhost:8088/invited/${partyGuestId}`, {
        method: "DELETE"
    })
}

export const updatePartyGuest = guest => {

    return fetch(`http://localhost:8088/invited/${guest.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest)
    })
}