let sideDishes = [];

export const useSideDishes = () => sideDishes.slice()

export const getSideDishes = () => {
    return fetch("http://localhost:8088/invited")
        .then(response => response.json())
        .then(parsedSideDishes => {
            sideDishes = parsedSideDishes
        })
}