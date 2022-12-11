```js
<!-- scritto a fondo del body -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
```

`use strict`    // attiva modalità strict: uno dei benefici: intercetta con rigore anomalie e situaziono potenzialmente pericolose, es. introdurre variabile senza let, può portare incompatibilità con codici già scritti (vecchie versioni)

===  confronto forte  detto  `strict`


`undefined` VS `null` (valore speciale)  
-   undefined:  variabile mai assegnata, può trattarsi du un errore, più per difendersi da un possibile bug
-   null:       atto deliberato in cui coscientemente stabiliamo di non definire subito il valore, può essere una condizione prevista

NaN != NaN  // true

Rappresentazioni numeriche:     sempre 64 bit (a favore della velocità di calcolo dei circuiti per la regolarità)
```js
(0.1 + 0.2  ===  0.3)   // FALSE !!!  (vedi link)
    -   procedura:  fare differenze e verificare se inferiore a tolleranza ammissibile
    -   max num 2^53 - 1    -   numero SAFE  - 53 bit a mantissa, esponente max 308   
        ->  funzione  Number.isSafeInteger(varNum) // bool
    Dati numerici reali (floating point): IEEE754       -   immagine
        -   Js usa solo floating point (numeri reali) 2^53
        -   IEEE754: è la codifica niversalmente adottata (anche da c++), stabilita da comitato internazionale ECMA
    Numeri: 0b -> Binario       0o -> ottale        ox -> esadecimale
    Underscore:
        -   recente versione acma script permette _ per separare le triplette: 1_000_000_000  |  separare lenibbol
        -   in binario 0b0010_0011 per separare le nibble (Rappresenta comunemente la metà di un byte, utilizzato specialmente per rappresentare in binario ogni singola cifra esadecimale)
        -   anche per ottale ed esadecimale 0xff_00_00
```

-   link: https://www.youtube.com/watch?v=69sjU6ijjYM&list=PL0qAPtx8YtJf-8AwpHc3fdA4qdCdkaVsU&index=7
Funzioni:
    -   abs(varNum); // Number                      valore assoluto di varNum
    -   Number.MAX_SAFEINTEGER  -  Number.MIN_SAFEINTEGER   costante del num max e min Safe
    -   Number.isSafeInteger(varNum); // bool       verifica se il numero è Safe
    -   Number.isFinite(3/0); // bool               per trattare casi di calcoli impossibili
    
    i BIG INTEGER
        -   let numerone = 123456789012345678901234567890n;
            numerone = BigInt("123456789012345678901234567890");
                console.log(numerone + 1n);     // 123456789012345678901234567891n

il backtick  o  accento grave   alt+96 (da ES6)
-   mantiene gli accapo delle stringhe del codice
```js
let num = 1;
let var = `il 'numero' ${num} è "stampato"`;
```

