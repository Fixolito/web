function findMoney(str){
    let regex = /[0-9]{1,3},[0-9]{2} €/;
    return(str.match(regex).toString());
}

function findMoneyValue(str){
    let value = str.replace(',', '.');
    return(value.slice(0, -2));
}

function findMoneyCurrency(str){
    return(str.slice(-1));
}

function inDoge(str){
    let x = parseFloat(str);
    let exchangeRate = 1.337;
    x *= exchangeRate;
    return(x.toFixed(2) + ' Ð')
}

function DogeUSD(){
    let floatValue = 12.345;
    return(floatValue);
}
/*
let match = findMoney(a.toString());
let newValue = findMoneyValue(match);
newValue = inDoge(newValue);
moneyHeading.textContent = a.replace(match, newValue);
a = a.replace(match, newValue);
const moneyHeading = document.querySelector('span');
let a ='';
a = moneyHeading.textContent;
console.log(a);

alert('Hallo Annetti du bist toll!');
let b = 0;
while(b <5){
    alert('Du bist immernoch toll! :D');
    b++;
}


const myHeadingStart = document.querySelector('h1');
myHeadingStart.textContent = 'Hello Annetti you are so cool!!!';
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/pic2.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, Annetti is cooler, and ' + myName + " is also a bit cool!";
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}