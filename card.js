class Card {

	constructor(cards) {
		this.matchInfo = cards.matchInfo;
		this.matched = false;
		this.flipped = false;
		this.dataName = cards.dataName;
	}

	matchClear() {
		if (deck.selectedCards[0].matchInfo === deck.selectedCards[1].matchInfo && deck.selectedCards[0].dataName !== deck.selectedCards[1].dataName) {
			document.querySelector(`.game__card[data-name="${this.dataName}"]`).classList.add('js__display--none');
		}
	}

	
};

