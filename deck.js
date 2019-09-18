class Deck {
	constructor() {
		this.cards = [];
		this.matchedCards = [];
		this.selectedCards = [];
		this.matches = 0;
	}

	shuffle() {
	}

	checkSelectedCards() {
		console.log(this.selectedCards[0].matchInfo);
		console.log(this.selectedCards[1].matchInfo);
		console.log(this.selectedCards[0].dataName);
		console.log(this.selectedCards[1].dataName);
		if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo && this.selectedCards[0].dataName !== this.selectedCards[1].dataName) {
			console.log('check selected method')
			this.selectedCards[0].matched = true;
			this.selectedCards[1].matched = true;
			this.matches++;
			this.selectedCards[0].matchClear();
			this.selectedCards[1].matchClear();
		this.selectedCards = [];
		} else {
			this.selectedCards[0].flipped = false;
			this.selectedCards[1].flipped = false;
		}
	}

	moveToMatched() {
		for (var i = 0; i < this.selectedCards.length; i++) {
		this.matchedCards.push(this.selectedCards[i]);
		}
		this.selectedCards[0].matchClear();
		this.selectedCards[1].matchClear();
	}


};

// filter. on selected cards/
// set it to equal. 

// empty selected cards

// querySelector all on game cards. 4-loop move classList.on each element in the array.


