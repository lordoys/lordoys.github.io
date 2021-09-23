export default class Api {
    constructor() {
        this.url = '../data.json';
    }

    async getData() {
        return await fetch(this.url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data.data;
            });
    }
}
