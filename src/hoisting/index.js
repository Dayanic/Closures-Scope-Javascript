// var nameOfDog; //Esto lo hace el hoisting, declara variable pero como undefined
// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

var elmo;//Esto hace el hoisting, simula la declaración de la variable pero como undefined;
function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}//El hoisting también sube la función como declarada antes de ser llamada
nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';//Si no declaramos valor a la variable de la función dará error