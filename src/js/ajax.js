'use strict';

let country = document.querySelectorAll('#country');

const url = './json/countries.json';

const xhr = new XMLHttpRequest();
let objResp;

xhr.open('GET', url);
xhr.send();
xhr.onload = function () {
    objResp = JSON.parse(xhr.response);
    objResp.forEach(function(item) {
        country.forEach(function(i) {
            let listItem = document.createElement('option');
            listItem.value = item.name;
            listItem.textContent = item.name;
            i.appendChild(listItem);
        })
    })
}
xhr.onerror = function () {
    console.error(error);
}
