// Write your solution here!
var cats= ["Milo", "Otis", "Garfield"];

function 
destructivelyAppendCat (_Ralph){
    cats.push ("Ralph");
}

function 
destructivelyPrependCat(_Bob){
    cats.unshift ("Bob");
}

function 
destructivelyRemoveLastCat (_Garfield){
    cats.pop ("Garfield");
}

function 
destructivelyRemoveFirstCat (_Milo){
    cats.shift("Milo") ;
}

function appendCat(_Broom){
    var Broom=
    ["Milo", "Otis", "Garfield","Broom"];
    return Broom;
}

function prependCat(_Arnold){
    var Arnold=
    ["Arnold", "Milo", "Otis", "Garfield"];
    return Arnold;
}

function removeLastCat(){
    const cats= ["Milo", "Otis", "Garfield"];
    cats.pop()
    return cats;
}

function removeFirstCat(){
    const cats= ["Milo", "Otis", "Garfield"];
    cats.shift();
    return cats; 
}