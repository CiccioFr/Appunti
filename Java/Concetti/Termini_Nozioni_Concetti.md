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

## `Lazy Evaluation` (valutazione pigra o tardiva)
Tecnica di valutazione utilizzata in programmazione per ritardare l'esecuzione di un'espressione fino al momento in cui il suo valore è effettivamente necessario. In altre parole, con la "lazy evaluation", l'espressione non viene valutata immediatamente, ma solo quando il suo valore viene richiesto esplicitamente durante l'esecuzione del programma.
"primo && secondo" valuta il primo, se falso non considera il secondo, ecc..

## `Lazy Inizialization`  
Istanziazione ritardata (pigra), in contrapposizione a eager o early.  

tracciare le iterazioni: mettere System.out.print() ogni tanto

## `Metodo`
Funzioni dichiarate all'interno di una classe  

## Parametro formale: parametro1, ..., parametroN
- parametri attuali (alias valori attuali): I valori che inseriamo al momento della chiamata del metodo:
    - valori attuali: es. String txt = Classe.metodo("valore attuale");

[link](https://www.html.it/pag/50139/i-metodi-in-java/)

---

- `return` è uno statement: provoca un salto nell’esecuzione, in questo caso un salto fuori dal metodo.

- `break`

- `continue`

## `Overloading`
<details><summary>un metodo piò avere diversi overload</summary>  

In Java un metodo è univocamente determinato (oltre che dalla classe a cui appartiene naturalmente) dal suo identificatore e dalla lista dei tipi dei parametri che riceve in input.
Tutto questo definisce la signature del metodo (la firma) il che significa che siamo liberi di ridefinire il medesimo metodo più volte a patto che ogni definizione abbia una lista di parametri diversa (tipi dei parametri e posizione degli stessi, i nomi non contano, non conta nemmeno il tipo di ritorno).
</details>

## `Wild Card`
è un tipo di sintassi che consente di dichiarare un parametro di tipo generico senza specificare il tipo esatto. Utilizzata come segnaposto, sarà sostituito con qualsiasi tipo di oggetto al momento dell'uso.  
Ad esempio, si può dichiarare un'ArrayList di oggetti generici utilizzando la seguente sintassi:  
`ArrayList<?> listaGenerica = new ArrayList<>();`  
Le wild card possono essere utilizzate in diverse situazioni, ad esempio nella definizione di metodi generici, nell'utilizzo di collezioni di oggetti generici e nella definizione di tipi di dati parametrici. Grazie alle wild card è possibile creare codice più flessibile e riutilizzabile, che può adattarsi a diverse situazioni e tipi di dati.

## `Wildcard delimitati`
Utilizzati per specificare vincoli sul tipo di oggetti che possono essere utilizzati in un'istanza di una classe generica.
-  `<? extends T>` specifica un tipo di wildcard **delimitato superiore**  
    I tipi di oggetti che possono essere utilizzati devono essere una **sottoclasse** di T o T stesso.
-  `<? super T>` specifica un tipo di wildcard **delimitato inferiore**  
    I tipi di oggetti che possono essere utilizzati devono essere una **superclasse** di T o T stesso.

[Covarianza, controvarianza e invarianza in Java](https://www.apogeonline.com/articoli/covarianza-controvarianza-e-invarianza-in-java-pellegrino-principe/)
---

[Codice Boilerplate](./CodiceBoilerplate.md)

[Serializzazione](./Serializzazione.md)  
[Serializzazione](../../Termini_e_Concetti/Programmazione.md#serializzazione---persistenza-del-dato)

metodi get (legge) e set (imposta)- necessari quando impostiamo su private una variabile (pg 251 libro)

## `Thread Safe`
Si riferisce alla capacità di un programma o di una libreria di gestire correttamente l'accesso concorrente a risorse condivise da parte di più thread.  
In Java, un'istanza di una classe viene considerata "Thread Safe" se può essere utilizzata da più thread contemporaneamente senza incorrere in condizioni di race condition o di inconsistenze nel suo stato interno. Ciò significa che, se un thread sta eseguendo un metodo su un'istanza "Thread Safe" di una classe, un altro thread può eseguire simultaneamente un altro metodo sulla stessa istanza senza causare problemi di sincronizzazione o conflitti.  
Per garantire la "Thread Safety" di un'istanza di classe in Java, è possibile utilizzare tecniche come il blocco sincronizzato o l'utilizzo di classi di utilità di sincronizzazione come java.util.concurrent.locks.Lock. Inoltre, è importante evitare l'uso di variabili globali o statiche che possono essere condivise tra più thread, in quanto ciò può causare problemi di sincronizzazione.

- variabile o metodo - cammelCase (prima lettera minuscola)
- variabile - deve iniziare con una lettera dell’alfabeto o underscore (si potrebbe usare anche il `$`)  
    Il simbolo del dollaro è ammesso nel codice generato da programmi automatici.