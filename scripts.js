console.log('-- JS --')

const titles = document.getElementsByTagName('h2');
console.log(titles);
const idOne = document.getElementById('one');
console.log(idOne.innerText);
const classes = document.getElementsByClassName('sub-title');
console.log(classes.innerHTML);

// Print list of all tags h2 in array
// #1 method
for (let i = 0; i < titles.length; i++) {
console.log(titles[i]) }
//#2 method
console.log([...titles])
// #3 method
const arr = Array.from(titles);
//can print h2 names in console in dev tools
[...titles].map(el => el.innerText);

//counter app
let count = 0;
const counterSelector = document.getElementById('counter');

function plusOne() {
    counterSelector.innerText = ++count;
}
function minusOne() {
    counterSelector.innerText = --count;
}
function reset(){
    count = 0;
    counterSelector.innerText = 0;
}

