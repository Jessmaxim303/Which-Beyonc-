class Card {

	constructor(cards) {
		this.matchInfo = cards.matchInfo;
		this.matched = cards.matched;
		this.flipped = cards.flipped;
		this.dataName = cards.dataName;
	}

	match() {
		document.querySelector(`.game__card[data-name="${this.dataName}"]`).classList.add('js__display--none');
	}

	
};

