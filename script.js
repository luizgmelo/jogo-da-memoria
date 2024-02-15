const divCards = document.querySelector(".cards")
const divRestartGame = document.getElementById("restart-game")
const arrayCards = ["bakugo", "kirishima", "lida", "mic", 
  "midoriya", "might", "neito", "ojiro", 
  "shoji", "todoroki", "tokoyami", "uraraka"];
arrayCards.push(...arrayCards);

const match = [];
let score = 0;
let cardId = 0;

let title = document.querySelector("#title");
title.innerText += ' ' + score

// randomize cards
arrayCards.sort(() => 0.5 - Math.random())

function createBoard() {
  arrayCards.forEach((character) => {
    cardId++
    const img = document.createElement("img");
    img.setAttribute("id", cardId);
    img.className = "card";
    img.setAttribute("src", "images/card.png");
    img.addEventListener('click', flipCard);
    img.setAttribute("alt", "card-black");
    img.setAttribute("data-character", character);
    divCards.appendChild(img);
  })
}

function resetCards() {
  let firstCard = document.getElementById(match[0].id)
  let secondCard = document.getElementById(match[1].id)
  firstCard.src = "images/card.png";
  secondCard.src = "images/card.png";
  match.pop()
  match.pop()
}

function flipCard() {
  let cardId = this.getAttribute('id')
  let card = document.getElementById(cardId)
  if (!match.includes(card) && match.length < 2 && card.alt != 'front-face') {
    card.setAttribute('src', `images/${card.dataset.character}.png`)
    match.push(card);
  } 
  if (match.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  let firstCard = match[0];
  let secondCard = match[1];
  if (firstCard.dataset.character == secondCard.dataset.character) {
    firstCard.alt = 'front-face'
    secondCard.alt = 'front-face'
    score++
    title.innerText = `Memory Game score: ${score}`
    alert("Awesome")
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    match.pop()
    match.pop()
    if (score === 12) {
      alert("Congradulations you complete the game.")
      divCards.style.display = "none"
      divRestartGame.style.display = "flex"
    }
  } else {
    setTimeout(resetCards, 2000)
  }
}

const restartGame = () => {
  score = 0;
  divCards.style.display = "block";
  divRestartGame.style.display = "none";
  title.innerText = `Memory Game score: ${score}`
  const cards = document.querySelectorAll("img");
  cards.forEach(img => img.src = "images/card.png")
}

const buttonRestartGame = document.getElementById("btn-restart-game").addEventListener("click", restartGame)

createBoard()
