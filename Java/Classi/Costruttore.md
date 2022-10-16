# I Costruttori in Java
Il Costruttore è un metodo dichiarato all'interno di una classe.  
Il Costruttore è eseguito automaticamente quando si istanzia una classe.  
L'operatore **`new` invoca** il Costruttore, istanzia la classe, ed inizializza un oggetto.  
L'oggetto è l'istanza della classe.  

```java
Tipo nomeOggetto = new Classe (parametri)
```
parola chiave this (pg 342 libro) rappresenta l'oggetto stesso // è obbligatorio se i nomi delle variabili sono uguali, altrimenti omissibile

Il Costruttore DEVE avere lo stesso nome della classe.  
Può ricevere zero o più parametri.  
Una classe può avere più costruttori.  
Nota. Se non si dichiara almeno un Costruttore, il compilatore Java crea automaticamente un Costruttore senza parametri di default (Costruttore no-args) perché è implicito che si crea una classe per istanziare degli oggetti. E' una peculiarità del linguaggio Java. In altri linguaggi di programmazione a oggetti non è così.  
L'operatore **`new`** crea l'area di memoria dove sarà collocato lo stato dell'oggetto  
Nota. I metodi degli oggetti di una classe sono collocati in un'area di memoria comune perché sono condivisi da tutti gli oggetti della classe. Gli attributi, invece, variano da oggetto a oggetto.  

[Fonte ed approfondimenti](https://www.andreaminini.com/java/i-costruttori-in-java)


 -- Costruttore     https://www.html.it/pag/51071/classi-oggetti-e-costruttori/  
con esso si determina il comportamento dell'oggetto, frutto dell'istanza della classe stessa.
è spesso usato per effettuare le inizializzazioni dello stato delle nuove istanze.
In Java possono esserci molteplici costruttori per una medesima classe (ognuno con parametri di diversi)
e ne esiste sempre almeno uno. Se infatti per una data classe non viene specificato alcun Costruttore,
il compilatore ne sintetizza automaticamente uno senza argomenti, detto Costruttore default.
Costruttore è un particolare metodo che viene invocato.... (pg398 libro)
Costruttore di default: Costruttore senza parametri
UML puoi anche non metterlo, metilo se importante
si può usare un metodo dentro Costruttore, ATENZIONE
si può usare un Costruttore dentro un Costruttore.. SI