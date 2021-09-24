import Api from './Api.js';
import Card from './Card.js';

let newApi = new Api();
let response = await newApi.getData();

let card = new Card(
    'ABMN Staff',
    'ARAW Trading 90.2% Lower This Week (ARAW)',
    'ARAW (CURRENCY:ARAW) traded 0% higher against the US dollar during the 24-hour period ending at 11:00 AM Eastern on June 7th. ARAW has a market cap of $29,929.39 and approximately $456.00 worth of ARAW was traded on exchanges in the last 24 hours. During the last week, ARAW has traded down 90.2% against the US',
    'https://www.americanbankingnews.com/2021/06/07/araw-trading-90-2-lower-this-week-araw.html'
    );
let cardElement = card.createCard();
document.body.appendChild(cardElement)

console.log(response);
console.log(cardElement);
