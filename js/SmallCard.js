import Card from "./Card.js";

class SmallCard extends Card {
    constructor(author, title, description, href) {
        super(author, title, description, href);
        this.mainClass= ['card', 'card--small'];
    }
}

export default SmallCard;
