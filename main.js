var jsPlayer1Input = document.getElementById("js__player1--input");
var jsPlayButton = document.getElementById("js__play--button");
var inputCard = document.querySelector('.js__user--inputs');

// GLOBAL VARIABLES *********************


// EVENT LISTENERS **********************
jsPlayButton.addEventListener('click', gameRules);


// FUNCTIONS ****************************

function gameRules(e) {
	deleteUserInputs(e);
	// 1). delete user inputs from DOM.
	// 2). add new card with game rules.

}

function deleteUserInputs(e) {
	console.log(inputCard);
	inputCard.classList.add('js__inputs--classlist');
}


  // if (e.target.classList.contains("section__img--delete")){
  //   removeCard(e);
  // }
