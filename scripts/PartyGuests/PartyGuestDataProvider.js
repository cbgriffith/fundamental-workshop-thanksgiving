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