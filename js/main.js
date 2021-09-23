import Api from './api.js';

let newApi = new Api();
let response = await newApi.getData();

console.log(response);

