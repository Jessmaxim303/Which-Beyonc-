var jsPlayer1Input = document.querySelector(".js__player1--input");
var jsPlayButton = document.getElementById("js__play--button");
var inputCard = document.querySelector('.js__user--inputs');
var gameRules = document.querySelector('.js__game--rules');
var jsEmptyError = document.querySelector('.js__empty--error');

// GLOBAL VARIABLES *********************


// EVENT LISTENERS **********************
jsPlayButton.addEventListener('click', gameRulesCard);


// FUNCTIONS ****************************

function gameRulesCard() {
	console.log('game time')
	if (jsPlayer1Input.value === "") {
		console.log('hello')
    EmptyFieldAlert()
	} else {
	// deleteUserInputs();
	addGameRules();
	}
}

function deleteUserInputs() {
	console.log('delete card')
	inputCard.classList.add('js__inputs--display');

}

function showGameRules() {
	gameRules.classList.add('js__game--display');
}

function addGameRules() {
	deleteUserInputs();
	// deleteUserInputs();
	showGameRules();
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

function EmptyFieldAlert() {
	// console.log(jsEmptyError.innerText);
	if (jsEmptyError.innerText === "") {
   jsEmptyError.insertAdjacentHTML('afterbegin',
    `<container id="game__empty--message">
    	<p>PELEASE ENTER A NAME BEFORE WE START</p>
     </container>`);
	}
	jsPlayer1Input.classList.add('input__error');
};



