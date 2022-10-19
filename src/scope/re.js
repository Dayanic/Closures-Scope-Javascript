/************************************/
/***************** VAR **************/
/************************************/
var firstName; //Se declara variable con valor por defecto undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; //De esta forma se declara y asigna valor a la variable
lastName = 'Ana';//De esta forma se reasigna valor a la variable
console.log(lastName);

var secondName = 'David';
var secondName = 'Ana';//De esta forma redeclaramos una variable y le reasignamos valor
console.log(secondName);

/************************************/
/***************** LET **************/
/************************************/
let fruit = 'Apple'; //Se declara y asigna valor a la variable, pero no se puede redeclarar
fruit = 'Kiwi'; //Se reasigna valor a la variable
console.log(fruit);

//let fruit = 'Banana';
console.log(fruit);

/************************************/
/*************** CONST **************/
/************************************/
const animal = 'dog'; //Se declara y asigna valor a la variable; No se puede reasignar un valor para una variable const; No se puede redeclarar
// animal = 'cat';
//const animal = 'snake'
console.log(animal);

const vehicles = [];//Se declara una variable tipo array como const, la cual permite asginar y reasignar valores
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop("🚗");
console.log(vehicles);