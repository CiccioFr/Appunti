# Le Classi in Java

deve iniziare con una lettera dell’alfabeto Maiuscola (UpperCammelCase)

**`class`** istruzione per dichiarare una classe

**`String[] args`** del metodo main è un parametro che viene inizializzato all'avvio del programma con ciò che viene inserito da terminale dopo "java [nomedelprogramma]".

il costruttore E' il metodo eseguito automaticamente quando si istanzia un nuovo oggetto per inizializzare le variabili della classe.



# I Costruttori in Java

Un costruttore inizializza un nuovo oggetto (istanza della classe). Per invocare il costruttore si usa l'operatore new. 

```java
Tipo nomeOggetto = new Classe (parametri)
```

L'operatore new invoca il costruttore della classe per istanziare un oggetto.

Il costruttore DEVE avere lo stesso nome della classe.  
Può ricevere zero o più parametri.  
Una classe può avere più costruttori.  
Nota. Se non si dichiara almeno un costruttore, il compilatore Java crea automaticamente un costruttore senza parametri di default (costruttore no-args) perché è implicito che si crea una classe per istanziare degli oggetti. E' una peculiarità del linguaggio Java. In altri linguaggi di programmazione a oggetti non è così.  
L'operatore new crea l'area di memoria dove sarà collocato lo stato dell'oggetto  
Nota. I metodi degli oggetti di una classe sono collocati in un'area di memoria comune perché sono condivisi da tutti gli oggetti della classe. Gli attributi, invece, variano da oggetto a oggetto.  

[Fonte ed approfondimenti](https://www.andreaminini.com/java/i-costruttori-in-java)


 -- Costruttore     https://www.html.it/pag/51071/classi-oggetti-e-costruttori/  
Il Costruttore è un metodo dichiarato all'interno di una classe,
con esso si determina il comportamento dell'oggetto, frutto dell'istanza della classe stessa.
è spesso usato per effettuare le inizializzazioni dello stato delle nuove istanze.
In Java possono esserci molteplici costruttori per una medesima classe (ognuno con parametri di diversi)
e ne esiste sempre almeno uno. Se infatti per una data classe non viene specificato alcun costruttore,
il compilatore ne sintetizza automaticamente uno senza argomenti, detto costruttore default.
Costruttore è un particolare metodo che viene invocato.... (pg398 libro)
costruttore di default: costruttore senza parametri
UML puoi anche non metterlo, metilo se importante
si può usare un metodo dentro costruttore, ATENZIONE
si può usare un costruttore dentro un costruttore.. SI