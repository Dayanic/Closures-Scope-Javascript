const myGlobal = 0;

function myfunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //Función interna (closure)
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myfunction();