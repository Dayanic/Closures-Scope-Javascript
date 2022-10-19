## ¿Qué es el Scope?
El Scope es el alcance que determina la accesibilidad a las variables, objetos y funciones desde diferentes partes del código.

### Tipos de Scope
Dentro de los tipos de Scope se encuentran los ***Global***, ***Function*** y ***Block***.

El ***scope*** **local de función** *(function scope)* es el entorno donde las variables locales solo se pueden acceder desde una **función** del programa.

En este *scope* no importa que las variables sean declaradas con var, let o const. Sin embargo, ten presente que se puede redeclarar una variable con var, pero no con let y const.

### Ejemplo utilizando scope de función

Observa el siguiente código y piensa cuál será el resultado.

```javascript
function saludo() {
    let nombre = "Andres"
    console.log(nombre)
}

saludo()
console.log(nombre)
```

Primeramente, al invocarse la función saludo imprimirá "Andres" por consola, pero inmediatamente después existirá un error de referencia.

```javascript
function saludo() {
    let nombre = "Andres"
    console.log(nombre)
}

saludo() // "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
```

Esto sucede porque la variable nombre tiene un scope de función, por lo que solo se puede acceder dentro de la misma.

Según la cadena de scope, si existe una función dentro de otra función, **la función hijo podrá acceder a las variables de la función padre, pero no en viceversa.** Recuerda esto en el tema de los Closures.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/scope_closure01.PNG)

El *scope* local de bloque es el entorno donde las variables locales únicamente pueden ser accedidas desde un **bloque de código** del programa. Un bloque de código es todo aquello que está dentro de los caracteres de llaves {}.

### Hoisting en variables

Para hablar del scope de bloque, realizaré una breve explicacion de *Hoisting*. Hablaré un más de esto en su clase respectiva.

*Hoisting* es un término para describir que la **declaración de variables y funciones son desplazadas a la parte superior del scope más cercano**.

Mira el siguiente código y piensa cuál sería el resultado del console.log.

```javascript
console.log(nombre)
var nombre = "Andres"
```
La respuesta es undefined, porque al hacer referencia a una variable que aún no está declarada, JavaScript crea esta variable y le asigna un valor de undefined.
```javascript
var nombre = undefined
console.log(nombre)
nombre = "Andres"
```
De aquí el término de *Hoisting*, porque **eleva la declaración**. Pero esto solamente es cómo JavaScript interpreta el código, realmente las declaraciones siguen en el mismo lugar.
```javascript
console.log(nombre) //undefined
var nombre = "Andres"
```
Este efecto solo ocurre con var, si ejecutamos el mismo código con let o const, mostrará un **error de referencia**.
```javascript
console.log(nombre)
let nombre = "Andres"

//ReferenceError: nombre is not defined
```
### ¿Por qué “var” no tiene scope de bloque?

En el *scope* de bloque, **sí importa** que las variables sean declaradas con var, let o const. Ya que var no tiene un scope de bloque. ¿Esto qué quiere decir?

Mira el siguiente código y piensa cuál sería el resultado del console.log.
```javascript
if (true){
  var saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)
```
La respuesta es primero "hola" y luego un error de referencia. Esto sucede por el *hoisting*, la declaración de la variable saludo se eleva fuera del bloque en un scope superior, que puede ser un scope de función o global.
```javascript
var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined
```
Es por eso que var no tiene scope de bloque y se debe tener cuidado porque puede provocar errores en el código.

### Ejemplo en un bloque de código

Mira el siguiente código y piensa cuál sería el resultado de los console.log.
```javascript
var x = 1
{
  var x = 2
  console.log(x)
}

console.log(x)
```
La respuesta es 2 y 2, esto sucede nuevamente por el *hoisting*.
```javascript
# Hoisting
var x = 1
var x = undefined // redeclaración
{
  x = 2 // reasignación
  console.log(x)  // 2
}

console.log(x) // 2
```
Para solucionar esto se utilizará let o const. La primera declaración tiene un scope global; y la segunda, un scope de bloque.
```javascript
let x = 1
{
  let x = 2
  console.log(x) // 2
}

console.log(x) // 1
```
### Ejemplo en un bloque de código de scopes diferentes

Hay una pequeña excepción cuando invocas una variable en un scope inferior del scope de la declaración de la variable con let y const, debes asegurarte que no exista una variable igual.

Mira el siguiente código y piensa cuál sería el resultado del console.log
```javascript
let x = 5
{
  console.log(x) 
}
```
La respuesta es 5, porque si JavaScript no encuentra la variable x, sigue al scope superior.

Ahora, ¿qué pasaría si existe una variable x declarada con let, después del console.log(x)? Existirá un *error de referencia*, porque se está accediendo a una variable antes de su declaración.
```javascript
let x = 5
{
  console.log(x) // ReferenceError: Cannot access 'x' before initialization
  let x = 10 
}
```
### Ejemplo en un bloque for

Mira el siguiente código y piensa cuál sería el resultado del console.log.
```javascript
function example() {
  for (var i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  }
}

example()
```
La respuesta es diez veces 10, y sucede por el hoisting. La declaración de i se eleva hasta arriba de la función en el scope de función, por lo que cuando termine el ciclo este tendrá un valor de 10.
```javascript
function example() {
 var i = undefined 

  for (i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  }
}

example()
```
Para solucionar esto se utilizará let o const. La declaración del bloque for tiene un scope de bloque, en lugar de un scope de función.
```javascript
function example() {
  for ( let i =0; i < 10; i++){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  }
}

example()
```
La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

* Una variable declarada con var puede ser redeclarada y reasignada.
* Una variable declarada con let puede ser reasignada, pero no redeclarada.
* Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

Existe un curso de [ECMAScript 6+](https://platzi.com/cursos/ecmascript-6/) para que descubras las nuevas características que agregan al lenguaje.

### Ejemplos de redeclaración y reasignación de variables
```javascript
// Con var
var nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
var nombre = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
const nombre // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres" // declaración y asignación ✅
nombre = "Valeria" // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌
```
### Estructuras de datos declaradas con const

Las estructuras de datos, como los arrays u objetos, declaradas con const pueden cambiar las referencias de sus elementos, a este concepto se lo denomina mutabilidad. Sin embargo, siguen las mismas reglas ya mencionadas, no puedes redeclarar ni reasignar una variable de estructura de datos.
```javascript
const array = ["manzana", "pera"] // declaración y asignación ✅
array[0] = "piña" // Cambio de valor en un elemento del array 
console.log(array) // [ 'piña', 'pera' ]
const array = [1,2,3] // SyntaxError: Identifier 'array' has already been declared. ❌
```
En React, una librería de JavaScript, puedes utilizar declaraciones con const para el estado de un componente, porque aunque cambie el valor, lo que sucede internamente es un re-renderizado y no una redeclaración. No te preocupes si no lo entiendes, pero tenlo presente cuando llegues a ese tema.

El **modo estricto** es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se **reduce las cosas que podemos hacer**, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

Este en el código colocando en la primera línea "use strict" para todo el archivo. También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.

### Ejemplo usando el modo estricto

Si realizas el siguiente código que contiene una asignación sin una declaración, no va a ocurrir un error y el programa se va a ejecutar con normalidad.
```javascript
nombre = "Andres"
console.log(nombre) // "Andres"
```
En modo estricto, no te permitirá realizar esto y provocará un error.
```javascript
"use strict";

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
```
### Ejemplo usando el modo estricto en una función

Si realizas el siguiente código que retornas una variable no declarada, no va a ocurrir un error y el programa se va a ejecutar con normalidad.
```javascript
function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // 3.14
```
En modo estricto, no te permitirá realizar esto y provocará un error.
```javascript
"use strict";

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // ReferenceError: pi is not defined
```
## ¿Qué es un Closure?
Un closure permite **acceder al scope de una función exterior desde una función interior**. En JavaScript, los closures se crean cada vez que una función se genera. A diferencia de otros conceptos como funciones, variables u otros, los *closures* no se utilizan todas las veces.

### Construcción de un closure

Para construir un closure necesitaremos los siguientes requisitos:

* Una función dentro de otra función.
```javascript
function padre() {
    
    function hijo(){
    }
}
```
* Una variable que se encuentre en la función con el scope superior, donde la función con scope inferior la utilice.
```javascript
function padre() {
    let numero = 5
    function hijo(){
        numero = numero + 1
        return numero
    }
}
```
* Invocar la función con scope inferior en otro scope del que fue escrita. Esto lo podemos hacer retornando la función entera y asignar la función de scope superior a una variable.
```javascript
function padre() {
    let numero = 5
    function hijo(){
        numero = numero + 1
        return numero
    }
    
    return hijo
}

const closure = padre()
```
De esta manera obtendremos una función (scope inferior) que tiene una referencia a la variable que se encontraba en un scope superior, que a su vez recordará el contexto donde fue creada.

### Ámbito léxico

El ámbito léxico se refiere al alcance de una variable, siguiendo la cadena de scopes. Es decir, una variable puede ser accedida desde un nivel inferior hasta uno superior, pero no al contrario.
```javascript
function contador ( i ) {
  let acumulador = i
  function aumentar () {
    console.log(acumulador);
    acumulador = acumulador + 1
  }
  return aumentar
};

const closure = contador(1)
closure() // 1
closure() // 2
closure() // 3

const closure2 = contador(10);
closure2() // 10
closure2() // 11

closure() // 4
```
Podemos asignar la función contador a una variable (_closure_ y _closure2_). Dependiendo del valor que tenga como parámetro, cada variable cambiará el valor inicial por el ámbito léxico, por la que fue originada la variable acumulador que está vinculada con la función aumentar.

### ¿Qué es el Hoisting?
*Hoisting* es un término para describir que las **declaraciones de variables y funciones son desplazadas a la parte superior del** ***scope*** **más cercano**, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

### Hoisting en variables declaradas con var

En el siguiente código, la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.
```javascript
console.log(nombre) // undefined
var nombre = "Andres"
```
```javascript
// Hoisting
var nombre = undefined
console.log(nombre)
nombre = "Andres"
```
### Hoisting en scope de bloque

Mira el siguiente código y piensa cuál sería el resultado del console.log.
```javascript
if (true){
  var saludo = "hola"
  let despedida = "chao"
}

console.log(saludo)
console.log(despedida)
```
La respuesta es primero "hola" y luego un **error de referencia**. Esto sucede por el *hoisting*, la declaración de la variable saludo se eleva **fuera del bloque** en un *scope* superior, que puede ser un *scope* de función o global.
```javascript
var saludo = undefined

if (true){
  saludo = "hola"
  let despedida = "chao"
}

console.log(saludo) 
// "hola"
console.log(despedida) 
// ReferenceError: despedida is not defined
```
Es por eso que var no tiene scope de bloque, y se debe tener cuidado porque puede provocar errores en el código.

### Hoisting en funciones

Mira el siguiente código y piensa cuál sería el resultado del console.log.
```javascript
console.log( saludar() )

function saludar() {
  return "Hola"
}
```
La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.
```javascript
// Hoisting
function saludar() {
  return "Hola"
}

console.log( saludar() ) // "Hola"
```
Pero, lo que realmente sucede es que JavaScript **guarda la función en memoria** en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

### Hoisting de variables dentro de una función

El *hoisting* desplaza las declaraciones a la parte superior del scope más cercano, en el caso de una función dentro de otra función, seguiría el siguiente comportamiento.
```javascript
function scope() {
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  var nombre = "Andres"
  var edad = 20
  for (var i = 0; i< 6; i++) {
  //...
  }
}
```
JavaScript lo interpretaría como lo siguiente:
```javascript
function scope() {
  var nombre = undefined
  var edad = undefined
  var i = undefined
  
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  nombre = "Andres"
  edad = 20
  for ( i = 0; i< 6; i++) {
  
  //
  }
}
```
### Hosting en funciones asignadas a variables
Mira el siguiente código y piensa cuál sería el resultado del console.log.
```javascript
console.log( saludar() )

var saludar = function saludar() {
  return "hola"
}
```
La respuesta es un **error de tipo** porque si asignas una función a una variable declarada con var, y la invocas antes declararla, la variable será de tipo undefined y no de función por el *hoisting*.
```javascript
var saludar = undefined

console.log( saludar() ) // TypeError: saludar is not a function

saludar = function saludar() {
  return "hola"
}
```
### Hoisting con let y const

Aunque te haya dicho que el *hoisting* solo ocurre con declaraciones con var, no es totalmente cierto. El hoisting hará que el intérprete de JavaScript eleve las declaraciones con let y const a la [Temporal Dead Zone](https://www.freecodecamp.org/espanol/news/que-es-la-zona-muerta-temporal-temporal-dead-zone-tdz/ß).

La ***Temporal Dead Zone*** es una región del código donde la variable está declarada, pero no es posible acceder a esta, provocando un error de tipo ReferenceError.
```javascript
console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"
```
Buenas prácticas para usar hoisting

No utilices var en las declaraciones de variables.
Escribe primero las funciones y luego su invocación.

### Debugging
*Debugging* es el término para solucionar *bugs*. Los bugs (“bichos” en inglés) son **errores en la aplicación**, saber cómo solucionarlos de manera eficiente es clave para tu desarrollo como profesional.

**Todo navegador dispone de Dev tools** o herramientas de desarrollador, que es un conjunto de características del código de la página web, una de estas es el *debugging*.

**La consola del navegador es importante para ver qué está pasando con el código generado**. La consola se muestra con la combinación de teclas F12 / Ctrl + Shift + I / Cmd+Opt+I o clic derecho e “Inspeccionar” en tu navegador preferido (de preferencia Google Chrome).

### Código de ejemplo

El código de ejemplo que se usará en las *Dev Tools* será el siguiente:
```javascript
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
  }
}

hello()
```
### Palabra reservada debugger

La palabra reservada *debugger* sirve para **detener la ejecución del programa**, pero solo funciona si el panel de las herramientas de desarrollo está abierto. Este panel te mostrará información sobre el código hasta la línea del *debugger*.

Ejecuta el código de prueba que contenga la palabra reservada *debugger* en la consola de tu navegador, puedes hacerlo en una página en blanco tan solo poniendo [about:blank](http://about:blank) como una URL.
```javascript
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
    debugger // <---- Palabra reservada para debbuging
  }
}

hello()
```
Al momento de ejecutar el código te aparecerá el panel de *debugging*.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/scope_closure02.png)

En el panel de información, existe un apartado *“Scope”* que muestra el *scope/ de cada variable correspondiente al punto donde la ejecución se detuvo.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/scope_closure03.PNG)

### Breakpoints

Los *breakpoints* son **puntos donde la ejecución del programa se parará**. Para activarlos se debe dar clic en la línea de código que se desea parar.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/scope_closure04.PNGs)

### Closures en debugging

Si el código tiene *closures*, aparecerán en el panel *“Scope”*.

![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/scope_closure05.PNG)

Para concluir, deberías aprender a utilizar las herramientas de desarrollo web para ser más eficiente, y de esta forma encontrar de manera eficiente la causa de un error o un comportamiento no deseado que provocaría un *bug*.