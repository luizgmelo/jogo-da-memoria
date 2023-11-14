const cards = document.querySelector("div.cards")
const arrayCards = ["bakugo", "kirishima", "lida", "mic", 
                    "midoriya", "might", "neito", "ojiro", 
                    "shoji", "todoroki", "tokoyami", "uraraka",
                    "bakugo", "kirishima", "lida", "mic", 
                    "midoriya", "might", "neito", "ojiro", 
                    "shoji", "todoroki", "tokoyami", "uraraka"];
const match = [];
let score = 0;
let cardId = 0;

let title = document.querySelector("#title");
title.innerText += ` score: ${score}` 

// randomize cards
arrayCards.sort(() => 0.5 - Math.random())

console.log(arrayCards);


arrayCards.forEach((character) => {
    cardId++
    cards.innerHTML += `<img id="${cardId}" src="images/card.png" 
                        alt="card-blank" onclick="flipCard('${cardId}')" data-character="${character}">`
}) 

function resetCards() {
    let firstCard = document.getElementById(match[0].id)
    let secondCard = document.getElementById(match[1].id)
    if (firstCard.alt == "face-card" && secondCard.alt != "face-card") {
        alert("The first card has already been turned over, please choose another one")
        secondCard.src = "images/card.png";
    } else if (secondCard.alt == "face-card" && firstCard.alt != "face-card"){
        alert("The second card has already been turned over, please choose another one")
        firstCard.src = "images/card.png";
    } else if (firstCard.alt != "face-card" && secondCard.alt != "face-card") {
        firstCard.src = "images/card.png";
        secondCard.src = "images/card.png";
    }


    // clear array
    match.splice(0, 24);
}
function flipCard(cardId) {
    let card = document.getElementById(cardId);
    if (!match.includes(card)) {
        match.push(card);
    }
    if (match.length <= 2) {
        card.setAttribute('src', `images/${card.dataset.character}.png`)
    } else {
        alert("You only can to turn two cards at same time");
    }
    if (match.length == 2) {
        
        let firstCard = match[0];
        let secondCard = match[1];

        if (firstCard.dataset.character == secondCard.dataset.character) {
            firstCard.alt = "face-card"
            secondCard.alt = "face-card"
            score++
            title.innerText = `Memory Game score: ${score}`
            alert("Awesome")
            match.pop()
            match.pop()
            if (score == 12) {
                alert("Congradulations you complete the game.")
                let title = document.getElementById("title")
                title.style.color = "#ff0000"
                title.innerText = "restart the page to play again"
            }
        } else {
            setTimeout(resetCards, 1000)
        }
    }

}
