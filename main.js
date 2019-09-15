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
var cardsArray = [];
var flipCounter = 0;
var cardsArr = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];


// EVENT LISTENERS **********************
jsPlayButton.addEventListener('click', gameRulesCard);
gameSection.addEventListener('click', flipTwoOnly);
window.addEventListener('load', instantiateCardArray());


// FUNCTIONS ****************************
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
	console.log(flipCounter)
	e.target.innerHTML = '';	
}

function flipCard(e) {
	console.log(e);
	if (e.target.id === 'card-a') {
		addBeyCard(e);
		e.target.classList.add('card-1');
	} else if (e.target.id === 'card-b') {
		addBeyCard(e)
    e.target.classList.add('card-2');		
	} else if (e.target.id === 'card-c') {
		addBeyCard(e)
		e.target.classList.add('card-3');
	} else if (e.target.id === 'card-d') {
		addBeyCard(e)
		e.target.classList.add('card-4');
	} else if (e.target.id === 'card-e') {
		addBeyCard(e)
		e.target.classList.add('card-5');
	} else if (e.target.id === 'card-f') {
		addBeyCard(e)
		e.target.classList.add('card-1');
	} else if (e.target.id === 'card-g') {
		addBeyCard(e)
		e.target.classList.add('card-2');
	} else if (e.target.id === 'card-h') {
		addBeyCard(e)
		e.target.classList.add('card-3');
	} else if (e.target.id === 'card-i') {
		addBeyCard(e)
		e.target.classList.add('card-4');
	} else if (e.target.id === 'card-j') {
		addBeyCard(e)
		e.target.classList.add('card-5');
	}	

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

function insertCardInfo() {

}

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

function instantiateCardArray() {
	var gameCards = document.querySelectorAll('.game__card');
    for (var i = 0; i < gameCards.length; i++) {
    var queenBey= gameCards[i].id;
    	var cards = new Card({matchInfo: queenBey, matched: false, flipped: false});
    	cardsArray.push(cards);
  }
    return cardsArray;
};

// function addRandomBey() {
// 	var cardInfo = cardsArr[Math.floor(Math.random()*cardsArr.length)];
// 	var beyCard = new Card(cardInfo);
// 	return beyCard;
// }

// console.log(addRandomBey())

function EmptyFieldAlert() {
	if (jsEmptyError.innerText === "") {
   jsEmptyError.insertAdjacentHTML('afterbegin',
    `<container id="game__empty--message">
    	<p>PLEASE ENTER A NAME BEFORE WE START</p>
     </container>`);
	}
	jsPlayer1Input.classList.add('input__error');
};







