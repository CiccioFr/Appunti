# Termini Nozioni e Concetti in Java
- **`Identificatore`** > Nome assegnato variabile/metodo/classe
- **`reference`**: similmente al puntatore, indica l’indirizzo di allocazione nella memoria della variabile
classe derivata
- `SuperClasse`: classe che viene estesa (padre)
- `SottoClasse`: classe che estende (figlia)
- Gli **attributi** sono le variabili della classe. Definiscono le **proprietà** dell'oggetto (istanza della classe).
- `modificatori` di accesso permettono di stabilire il livello di protezione in riferimento al package
- `Variabile` in Java è un'entità che rappresenta un'area di memoria che può contenere un valore di un determinato tipo di dato. Consente di memorizzare temporaneamente i dati in modo dinamico durante l'esecuzione del programma.  
Devono essere dichiarate e valorizzate prima di poter essere utilizzate e devono specificare il tipo di dato che possono contenere. Ciò significa che ogni variabile Java ha un tipo associato, che può essere uno dei tipi di dati primitivi come int, double, boolean, char, o un tipo di dato complesso come una classe o un'interfaccia.
Se dichiarate e valorizzate sono contestuali, è detta inizializzazione.
Le variabili Java hanno un ambito di visibilità ed utilizzo all'interno del codice, detto Scope.  
Lo scope determina in quale parte del codice una variabile può essere utilizzata e a quale livello di accesso ha la variabile stessa.
Lo scope è definito dalle parentesi graffe.  
Le variabili in Java possono avere uno dei seguenti tre ambiti:
- Variabili locali: visibili solo all'interno del blocco di codice in cui sono dichiarate e non possono essere utilizzate al di fuori di esso.
    es. all'interno di un metodo, di un blocco di codice o di un costruttore.
- Variabili di istanza: dichiarate all'interno di una classe ma fuori da qualsiasi metodo o blocco di codice, sono associate all'istanza della classe e accessibili in tutti i metodi della classe.
- Variabili statiche: dichiarate con il modificatore "static" sono associate alla classe stessa, piuttosto che a un'istanza specifica della classe. Queste variabili sono accessibili da qualsiasi metodo della classe, anche se l'istanza della classe non è stata creata.

---
## Convenzioni
- cammelCase
- Nome Classi con iniziale Maiuscola
- nome metodi e variabili con iniziale minuscola
- uso dell'underscore "_" per variabili.. (di sistema??)

**`Easy Evaluation`** - Valutazione pigra: "primo && secondo" valuta il primo, se falso non considera il secondo, ecc..

tracciare le iterazioni: mettere System.out.print() ogni tanto

- Metodo: Funzioni dichiarate all'interno di una classe  
```java
[public|protected|private] [static] [final] Tipo nomeMetodo([Tipo1 parametro1, ..., TipoN parametroN])
[throws Eccezione1, Eccezione2, ...] {
    // blocco di codice appartenente al metodo
return var; }
```
- variabili formali: parametro1, ..., parametroN
- parametri attuali (alias valori attuali): I valori che inseriamo al momento della chiamata del metodo:
    - valori attuali: es. String txt = Classe.metodo("valore attuale");

[link](https://www.html.it/pag/50139/i-metodi-in-java/)

---

- `return` è uno statement: provoca un salto nell’esecuzione, in questo caso un salto fuori dal metodo.

- `break`

- `continue`

- Overloading
un metodo piò avere diversi overload
È importante notare che in Java un metodo è univocamente determinato (oltre che dalla classe a cui appartiene
naturalmente) dal suo identificatore e dalla lista dei tipi dei parametri che riceve in input.
Tutto questo definisce la signature del metodo (la firma) il che significa che siamo liberi di ridefinire il medesimo metodo più volte a patto che ogni definizione abbia una lista di parametri diversa (tipi dei parametri, i nomi non contano, non conta nemmeno il tipo di ritorno).

---

[Codice Boilerplate](./CodiceBoilerplate.md)

[Serializzazione](./Serializzazione.md)

metodi get (legge) e set (imposta)- necessari quando impostiamo su private una variabile (pg 251 libro)


- variabile o metodo - cammelCase (prima lettera minuscola)
- variabile - deve iniziare con una lettera dell’alfabeto o underscore (si potrebbe usare anche il `$`)  
    Il simbolo del dollaro è ammesso nel codice generato da programmi automatici.