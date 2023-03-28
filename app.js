const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];
cardArray.sort(() => 0.5 - Math.random());

const resultDisplay = document.querySelector("#result");
const gridDisplay = document.querySelector("#grid");

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.append(card);
    card.addEventListener("click", flipCard);
  }
}

createBoard();

const cards = document.querySelectorAll("#grid img");
let chosenIds = [];
let chosenNames = [];
let cardsWon = [];

function flipCard() {
  const cardID = this.getAttribute("data-id");
  const cardName = cardArray[cardID].name;
  const cardSrc = cardArray[cardID].img;

  console.log(`clicked: ${cardID} `, cardName);
  this.setAttribute("src", cardSrc);
  chosenIds.push(cardID);
  chosenNames.push(cardName);

  if (chosenIds.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const optionOne = chosenIds[1];
  const optionTwo = chosenIds[2];
  console.log("Checking Result");

  if (optionOne == optionTwo) {
    cards[chosenIds[0]].setAttribute("src", "images/blank.png");
    cards[chosenIds[1]].setAttribute("src", "images/blank.png");
    // alert("You've clicked the same card");
  }
  if (chosenNames[0] == chosenNames[1]) {
    cards[chosenIds[0]].setAttribute("src", "images/white.png");
    cards[chosenIds[1]].setAttribute("src", "images/white.png");
    cards[chosenIds[0]].removeEventListener("click", flipCard);
    cards[chosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(chosenNames);
    resultDisplay.textContent = cardsWon.length;
  } else {
    // alert('images did not match, Try Again!')
    cards[chosenIds[0]].setAttribute("src", "images/blank.png");
    cards[chosenIds[1]].setAttribute("src", "images/blank.png");
  }
  chosenNames = [];
  chosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = `You've found all matches 🎉. Refresh to play again`;
  }
}
