import BigCard from "./BigCard.js";
import SmallCard from "./SmallCard.js";

export default class CardList {
    constructor(data) {
        this.data = data;
    }

    createList() {
        let list = document.createElement('ul');

        list.classList.add('list');

        this.data.forEach((item) => {
            let card = (item.country === 'us') ? new SmallCard(item) : new BigCard(item);
            list.appendChild(card.createCard());
        });

        document.getElementById('main').appendChild(list);
    }
}
