// Write your solution her
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push(name);
    return copyOfCats;
}
function prependCat(name) {
    const allCats = [...cats];
    allCats.unshift(name);
    return allCats;
}
function removeLastCat() {
    const lessCats = [...cats];
    lessCats.pop();
    return lessCats;
}
function removeFirstCat() {
    const firstCat = [...cats];
    firstCat.shift();
    return firstCat;
}