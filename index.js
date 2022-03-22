// Write your solution here!

// PART 1
let cats = ['Milo', 'Otis', 'Garfield'];

// PART 2
function destructivelyAppendCat(name) {
    cats.push(name);
}

// PART 3
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// PART 4
function destructivelyRemoveLastCat() {
    cats.pop();
}

// PART 5
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// PART 6
function appendCat(name) {
    const newCats1 = [...cats];
    newCats1.push(name)
    return newCats1;
}

// PART 7
function prependCat(name) {
    const newCats2 = [...cats];
    newCats2.unshift(name);
    return newCats2;
}

// PART 8
function removeLastCat() {
    const newCats3 = [...cats];
    newCats3.pop();
    return newCats3;
}

// PART 9
function removeFirstCat() {
    const newCats4 = [...cats];
    newCats4.shift();
    return newCats4;
}
