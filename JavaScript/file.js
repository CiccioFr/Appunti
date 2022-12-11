// arrow function
const sum = (a, b) => a + b;
console.log(sum(2, 6)); // 8

// Default parameters
function stampa(a = 5) {
    console.log(a);
}
stampa();     //  5
stampa(22);   // 22

// Let scope
let a = 33;
if (true) {
    let a = 5
    console.log(a); // 5
}
console.log(a); // 33

// Multiline string
console.log(` This is
multiline string`);

// Template string
const str = 'world';
const message = `Hello ${str}`;
console.log(message);   // Hello world

// Exponent operator
const nr = 2 ** 3;
console.log(nr);    // 8

// Spread operator - Array
const ar1 = [1, 2];
const ar2 = [3, 4];
const ar = [...ar1, ...ar2];
console.log(ar);    // [1, 2, 3, 4]

// Spread operator - Oggetti
const objA = {
    nome: "Ciccio",
    lavoro: "Sviluppatore"
}
const objB = {
    ...objA,
    lavoro: "Geometra"
}
console.log(objA);  // Object { nome: "Ciccio", lavoro: "Sviluppatore" }
console.log(objB);  // Object { nome: "Ciccio", lavoro: "Geometra" }

// Metodi String
console.log('apple'.length);        // 5
console.log('apple'.includes('pl'));    // true
console.log('apple'.startsWith('ap'));  // true
console.log('app.'.repeat(3));    // app.app.app.

// Destructuring array
let [aa, bb] = [3, 7];
console.log(aa);    // 3
console.log(bb);    // 7

// Destructuring object
let obj = {
    xa: 4,
    ya: 7
}
let { xa, ya } = obj;
console.log(xa);    // 4
console.log(ya);    // 7

// Destructuring object nidificato
let objNid = {
    xx: 4,
    yy: 7,
    assi: {
        ascissa: "asse x",
        ordinata: "asse y"
    }
}
const { assi: { ascissa }, xx } = objNid;
console.log(ascissa + " ha valore " + xx); // asse x ha valore 4

// Object property assignment
let aaa = 2;
let bbb = 5;
let objC = { aaa, bbb }
aaa = 77;
console.log(objC);  // Object { aaa: 2, bbb: 5 }

// Object function assignment
const obbj = {
    as: 5,
    bs() {
        console.log('b');
    }
}
obbj.bs();  // b

// Object.assign();
const oobj1 = { a: 1 };
const oobj2 = { b: 2 };
const oobj3 = Object.assign({}, oobj1, oobj2);
console.log(oobj3);

// Object.entries();
const objj = {
    name: "ciccio",
    age: 34,
    country: "Italy",
};
const entriess = Object.entries(objj); // converte in array key: value l'obj
console.log(entriess);
// [
//    [ "name", "ciccio" ]
//    [ "age", 34 ]
//    [ "country", "Italy" ]
// ]

// ---
// print(); // fa apparire la finestra per stampare la pg web
