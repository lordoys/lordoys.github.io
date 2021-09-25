export default class Card {
    constructor(data) {
        this.author = data.author || '';
        this.title = data.title || '';
        this.description = data.description || '';
        this.href = data.url || '';
        this.mainClass= 'card';
    }

    createElement(tag, className, text, href) {
        let element = document.createElement(tag);

        if (text) {
            element.textContent = text;
        }

        if (Array.isArray(className)) {
            element.classList.add(...className);
        } else if (className) {
            element.classList.add(className);
        }

        if (href) {
            element.href = this.href;
        }

        return element;
    }

    createCard() {
        let card = this.createElement('div', this.mainClass);
        let author = this.createElement('p', 'card__author', this.author);
        let title = this.createElement('h2', 'card__title', this.title);
        let description = this.createElement('p', 'card__description', this.description);
        let link = this.createElement('a', 'card__link', 'Read more', this.href);

        card.appendChild(author);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        return card;
    }
}
