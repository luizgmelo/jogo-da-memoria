const cards = document.querySelector("div.cards")
const arrayCards = ["bakugo", "kirishima", "lida", "mic", 
                    "midoriya", "might", "neito", "ojiro", 
                    "shoji", "todoroki", "tokoyami", "uraraka"];
arrayCards.push(...arrayCards);
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
    firstCard.src = "images/card.png";
    secondCard.src = "images/card.png";
    match.pop()
    match.pop()
}

function flipCard(cardId) {
    let card = document.getElementById(cardId);
    if (!match.includes(card) && match.length < 2) {
        match.push(card);
        card.setAttribute('src', `images/${card.dataset.character}.png`)
    } 
    if (match.length > 2){
        return alert("You only can to turn two cards at same time");
    }
    if (match.length == 2) {
        
        let firstCard = match[0];
        let secondCard = match[1];

        if (firstCard.dataset.character == secondCard.dataset.character) {
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
