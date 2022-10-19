// Variables

var a; //De esta forma declaramos la variable a
var b = 'b'; //De esta forma declaramos y asignamos valor a la variable
b = 'bb'; //Reasignación de valor
var a = 'aa'; //Redeclaración de variable

//Global Scope
var fruit = 'Apple'; //Variable global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia';// Al no declarar correctamente una variable se tomará como variable global
    console.log(country);
}

countries();
console.log(country);