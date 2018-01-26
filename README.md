# Cifrado César

## Objetivo:

+ Convertir el ejercicio de Cifrado César de javascript 5 a ES6 (Ecmascript 6).

## Descripción:

+ Con ES6  se puede interpolar strings de una forma más sencilla, y tener strings de varias líneas sin necesidad de concatenarlos con +.

Con ES6:
~~~
if (option === '1') {
  alert(`Texto original: ${phrase}
  Texto Cifrado: ${cipher(phrase)}`);
~~~

+ Con ES6 se puede utilizar `let` en vez de `var` si es que queremos que una variable sólo esté definida en un bloque en particular, después del cual la variable deja de existir. Además `const` como su nombre lo dice, convierte la variable en una constante, previniendo que cambie de valor.

~~~
for (let i = 0; i < phrase.length; i++) {
    const asc = phrase.charCodeAt(i);               
    
    if (asc >= 65 && asc <= 90) {
      let newAsc = (asc - 65 + 33) % 26 + 65;        
      let newLet = String.fromCharCode(newAsc);
      strLet += newLet;   
~~~

## Herramientas:

+ Javascript.
+ HTML5.
+ Hoja de estilos (eslint).

## Fuentes consultadas:

[ES6 El nuevo estándar de JS][1], [Ecmascript 6][2].

 [1]: https://carlosazaustre.es/ecmascript-6-el-nuevo-estandar-de-javascript/
 [2]: http://es6-features.org/#StringInterpolation
