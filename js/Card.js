export default class Card {
    constructor(author, title, description, url) {
        this.author = author || '';
        this.title = title || '';
        this.description = description || '';
        this.url = url || '';
    }

    createCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        let author = document.createElement('p');
        author.textContent = this.author;
        author.classList.add('card__author');
        card.appendChild(author);

        let title = document.createElement('p');
        title.textContent = this.title;
        title.classList.add('card__title');
        card.appendChild(title);

        let description = document.createElement('p');
        description.textContent = this.description;
        description.classList.add('card__description');
        card.appendChild(description);

        let link = document.createElement('a');
        link.textContent = 'Read more';
        link.href = this.url;
        link.classList.add('card__link');
        card.appendChild(link);

        return card;
    }
}
