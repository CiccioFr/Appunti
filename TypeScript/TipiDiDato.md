# Tipi di Dato in TypeScript

Esistono sette tipi di dati, sei dei quali sono dei tipi di dato primitivo immutabile.  
I tipi di dato primitivo sono:

    Boolean
    Number
    Null
    String
    Symbol
    Undefined

A questi bisogna aggiungere il tipo di dato Object.


La sintassi da usare per costanti o variabili consiste nell'inserire il carattere ': ' tra il nome e il tipo della variabile.
```ts
const esempioCostante: string = 'ciao';
let variabile: number = 73;
let altraVariabile: string;
```

Per quanto riguarda la segnatura delle funzioni, possiamo specificare il tipo dei parametri ed usare eventualmente un valore di default. In quest'ultimo caso possiamo anche omettere il tipo per questioni di leggibilità del codice. TypeScript dedurrà automaticamente il tipo del parametro a partire dal valore di default.
```ts
function foo(a: string, b: number): number {...}
function bar(a: number, b: number = 1): boolean {...}
function baz(a: boolean, b = true): boolean {...}
```

---
fonte: https://www.mrw.it/javascript/typescript-tipi-dato_12483.html