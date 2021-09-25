import Api from "./Api.js";
import CardList from "./CardList.js";

let newApi = new Api();
let response = await newApi.getData();
let cardList = new CardList(response);

document.getElementById('main').appendChild(cardList.createList());
