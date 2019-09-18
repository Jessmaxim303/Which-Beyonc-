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
		if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo && this.selectedCards[0].dataName !== this.selectedCards[1].dataName) {
			this.selectedCards[0].matched = true;
			this.selectedCards[1].matched = true;
			this.matches++;
		}
	}

	moveToMatched() {
		for (var i = 0; i < this.selectedCards.length; i++) {
		this.matchedCards.push(this.selectedCards[i]);
		}
	}


};
