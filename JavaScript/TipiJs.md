# Tipi in Js

Let Var e Const
```js
console.log(variabile);  // undefined
var variabile = 20;
console.log(variabile);  // 20
// ----
var variabile = 30;     // è ammesso!!!!
```
dichiarazioni di variabili `var` sono viste all'inizio del loro scope con un valere iniziale di default undefined
```js
console.log(variabile);  // ERROR
let variabile = 20;
console.log(variabile);  // 20
```
dichiarazioni di variabili `let` sono viste all'inizio del loro scope senza valorizazzione di default
