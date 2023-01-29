const cards = document.querySelector("div.cards")
const arrayCardsId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 
const match = []
const differenceId = 6;
let score = 0;

// randomize cards
arrayCardsId.sort((a, b) => 0.5 - Math.random())

console.log(arrayCardsId);


arrayCardsId.forEach((cardId) => {
    cards.innerHTML += `<img id="${cardId}" src="images/card.png" alt="card-blank" onclick="flipCard(${cardId})">`
}) 

function resetCards() {
    let firstCard = document.getElementById(match[0].id);
    let secondCard = document.getElementById(match[1].id);
    firstCard.src = "images/card.png";
    secondCard.src =  "images/card.png";

    // clear array
    match.splice(0, 12);
}

function flipCard(id) {
    let card = document.getElementById(id);

    match.push(card);

    if (match.length <= 2) {
        card.setAttribute('src', `images/${id}.png`)
    } else {
        alert("Você só pode virar duas cartas por vez");
    }
    
    if (match.length == 2) {
        if (Number(match[0].id) + differenceId == Number(match[1].id) || Number(match[0].id) == Number(match[1].id) + differenceId) {
            score++
            alert("Incrível")
            match.pop()
            match.pop()
            if (score == 6) {
                alert("Parabéns você concluiu o jogo")
                let title = document.getElementById("title")
                title.style.color = "#ff0000"
                title.innerText = "reinicie a página para jogar novamente"
            }
        } else {
            setTimeout(resetCards, 1000)
        }
    }

}
