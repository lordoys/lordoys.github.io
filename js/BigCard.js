import Card from "./Card.js";

class BigCard extends Card {
    constructor(author, title, description, href) {
        super(author, title, description, href);
        this.mainClass= ['card', 'card--big'];
    }
}

export default BigCard;
