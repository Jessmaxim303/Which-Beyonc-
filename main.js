// GLOBAL VARIABLES *********************
var jsPlayer1Input = document.querySelector(".js__player1--input");
var jsPlayButton = document.getElementById("js__play--button");
var inputCard = document.querySelector('.js__user--inputs');
var gameRules = document.querySelector('.js__game--rules');
var jsEmptyError = document.querySelector('.js__empty--error');
var jsGameCard = document.querySelector('.js__game--card');
var main = document.querySelector('.main');
var gameRulesContainer = document.getElementById('.game__rules--container');
var jsGameSection = document.querySelector('.js__game--section');
var mainSection = document.querySelector('.main__section');
var gameSection = document.querySelector('.game__section');
var gameCardText = document.querySelector('.game__card');
var jsP1Header = document.querySelector('.js__p1--header');
var gameRowA = document.querySelector('.game__row--a');
var jsScoreBoard1 = document.querySelector('.js__score--board1');
var deck = new Deck();
var matches = 0;
var cardsArray = [];
var playerArray = [];
var matched = [];
var flipCounter = 0;
var cardID = cardID;

var cardsArr = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

// EVENT LISTENERS **********************
jsPlayButton.addEventListener('click', gameRulesCard);
gameSection.addEventListener('click', flipTwoOnly);
window.addEventListener('load', createClasses);

// FUNCTIONS ****************************
function createClasses() {
	instantiateDeck();
	instantiateCardArray();
}

function gameRulesCard() {
	if (playerArray.length > 0) {
		console.log('booyah');
		removeGameRules();
		addGameCard();
		addGameDisplay();
	};
	if (jsPlayer1Input.value === "") {
    EmptyFieldAlert();
	} else {
    playerArray.push(jsPlayer1Input.value);
		insertGameRules();
	};

};

function flipTwoOnly(e) {
	if (flipCounter < 2) {
		flipCard(e);
	} 
}

function addBeyCard(e) {
	flipCounter++;
	e.target.innerHTML = '';	
}

function updateCardFlipped(e) {
	var deckCards = deck.cards;
	for (var i = 0; i < deckCards.length; i++) {
		if (e.target.dataset.name === deckCards[i].dataName) {
	  deckCards[i].flipped = !this.flipped;
	  deck.selectedCards.push(deckCards[i]);
		}
	}
	// console.log(deckArray);
	return cardsArray[i];
}

function flipCard(e) {
	if (e.target.id === 'card-a') {
		addBeyCard(e);
		updateCardFlipped(e);
		e.target.classList.add('card-1');
	} else if (e.target.id === 'card-b') {
		addBeyCard(e);
		updateCardFlipped(e);
    e.target.classList.add('card-2');	

	} else if (e.target.id === 'card-c') {
		addBeyCard(e);
		updateCardFlipped(e);
		e.target.classList.add('card-3');

	} else if (e.target.id === 'card-d') {
		updateCardFlipped(e);
		addBeyCard(e);
		e.target.classList.add('card-4');

	} else if (e.target.id === 'card-e') {
		updateCardFlipped(e);
		addBeyCard(e);
		e.target.classList.add('card-5');
	}  
	// makeMatchedArray();
	matchedCards();
	// deleteMatchedCards();
};

function deleteUserInputs() {
	inputCard.classList.add('js__display--none');
}

function addGameRules() {
	gameRules.classList.add('js__game--display');
}

function removeGameRules() {
	gameRules.classList.remove('js__game--display');
}

function addGameDisplay() {
	jsGameSection.classList.add('js__card--display');
}

function insertGameRules() {
	deleteUserInputs();
	addGameRules();
   gameRules.insertAdjacentHTML('afterbegin',
    `<container id="game__rules--container">
    	<h3>Welcome ${jsPlayer1Input.value} and player 2!</h3>
    	<p id="game__rule--list">
    			The goal of the game is to find all 5 pairs of cards as quickly as possible.
					The player that finds the greatest number of pairs, wins.
				</p>
 				<p id="game__rule--list">
					To begin playing, the player whose name is highlighted can click any card in the card pile. It will flip over and reveal a picture of Beyonce. Click another card. If they match, they will disappear and you will have completed a match! If they don’t, you’ll have three seconds to look at them before they flip back over. Then it’s time for the other player to try!
				</p>
    		<p id="game__rule--list">
					After you play, you’ll see the name of the final winner and how long it took to win the game.
    		</p>
    	</p>
    </container>`);
};

function addGameCard() {
	mainSection.classList.add('js__display--none');
	main.classList.add('game__section--grid');
	addPlayerName();
}

function addPlayerName() {
	console.log('player one name!')
	jsP1Header.insertAdjacentHTML('afterbegin',
    `<container id="game__player1--name">
    	<h3>${jsPlayer1Input.value}</h3>
     </container>`);
}

function addMatches() {
	var sum = deck.matches / 2;
	jsScoreBoard1.innerText = `${sum}`;
};

function instantiateDeck() {
  var deck = new Deck();
}

function instantiateCardArray() {
	var gameCards = document.querySelectorAll('.game__card');
    for (var i = 0; i < gameCards.length; i++) {

    	var cards = new Card({
    		matchInfo: gameCards[i].id,
    		matched: false,
    		flipped: false,
    		dataName: "gameCard" + [i]
    	});
  deck.cards.push(cards);
  }
  	console.log(deck);
}; 

function findCardId(e) {
  var cardID = e.target.closest(".game__card").getAttribute('data-name');
  console.log(cardID);
}
 
function matchedCards() {
		  deck.matches++;
		if (deck.selectedCards[0].matchInfo === deck.selectedCards[1].matchInfo) {
			deck.selectedCards[0].matched = true;
			deck.selectedCards[1].matched = true;
			deck.matchedCards.push(deck.selectedCards[0]);
			deck.matchedCards.push(deck.selectedCards[1]);
			deck.selectedCards[0].match();
			deck.selectedCards[1].match();
			deck.selectedCards = [];
			flipCounter = 0;
		}
		console.log(deck.matches);
		addMatches()
};


function EmptyFieldAlert() {
	if (jsEmptyError.innerText === "") {
   jsEmptyError.insertAdjacentHTML('afterbegin',
    `<container id="game__empty--message">
    	<p>PLEASE ENTER A NAME BEFORE WE START</p>
     </container>`);
	}
	jsPlayer1Input.classList.add('input__error');
};

// function addRandomBey() {
// 	var cardInfo = cardsArr[Math.floor(Math.random()*cardsArr.length)];
// 	var beyCard = new Card(cardInfo);
// 	return beyCard;
// }

// console.log(addRandomBey())






