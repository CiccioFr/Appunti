# Articoli presi OnLine

## [Come si crea un linguaggio di programmazione?](https://it.quora.com/Perch%C3%A9-nel-linguaggio-di-programmazione-il-simbolo-si-dice-Sharp-mentre-normalmente-si-dice-Hashtag)
Vi sono ottimi libri ma riassumo brutalmente uno dei modi possibili, chiedendo scusa agli specialisti (non sono mai stato un linguaggista)

Gli si dà un nome (per esempio GROAG)
Si individua tra le migliaia di linguaggi esistenti le caratteristiche per cui il tuo sarà unico. Esempi: PL/1 doveva essere il linguaggio universale IBM, C serviva a scrivere facilmente un sistema operativo, C# a sostituire Java in ambito MS, F# doveva essere il linguaggio funzionale in ambito MS, PROLOG serviva per l Programmazione Logica, ecc.
Si definisce la sintassi e la semantica del linguaggio (meglio se con metodi formali)
Si scrive un Compilatore GROAG in GROAG usando un linguaggio target esistente (per esempio assembler XXX) o meglio un opportuno linguaggio intermedio (chiamiamolo RUNGROAG).
Si scrive un Interprete GROAG usando un linguaggio esistente (per esempio Java o C++).
Si scrive in Java o C++ un ambiente Runtime che interpreti RUNGROAG.
Si gira il compilatore GROAG con l'interprete GROAG facendogli compilare se stesso (!!) e voilà possiamo cominciare a distribuire la versione 1.0.
Si dedicano i successivi 10 anni a debuggare migliorare ed estendere il tutto (o no?)
PS Un consiglio, se nel passare dalla versione 2 alle versione 3 produci un nuovo linguaggio incompatibile col precedente ma con lo stesso nome, renditi conto che avresti fatto meglio a dedicarti alla coltivazione delle orchidee

PPS Se vi pare strana l'idea dell'interprete GROAG in GROAG, andatevi a studiare un po' di LISP in particolare [Evalquote](./evalquote.pdf).

## Cosa significa il simbolo # cancelletto in informatica?
Tante cose a seconda del contesto.

Nei testi in linguaggio naturale significa "numero" e deriva da una vecchia notazione bancaria per prevenire la contraffazione di assegni.

Infatti se scrivevi 100, un altro poteva mettere un 1 davanti e quindi esigere 1100. Mentre con il simbolo #100, appare lampante se uno cerca di aggiungere cifre davanti.

Nel CSS indica un ID, un nome idenrificativo. Per esempio "#bottone" indica che esiste solo un elemento che si chiama con l'identificativo "bottone".

Nel caso del nome C#, è un linguaggio diverso che dovrebbe essere migliore del C++. Infatti # è formato da 4 + messi in un quadrato e leggermente inclinati. Un altra origine del nome è che "#" si pronuncia anche "sharp" quindi "C#" si pronuncerebbe come "see sharp" che significa "vedere bene".