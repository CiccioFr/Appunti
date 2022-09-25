## `Signature`, la `firma dei metodi`
In Java un metodo è univocamente determinato (oltre che dalla classe a cui appartiene naturalmente) dal suo identificatore e dalla lista dei tipi dei parametri che riceve in input. Tutto questo definisce la signature del metodo (la firma).  
In questo modo possiamo sovraccaricare un identificatore di metodo con diverse definizioni ed effettuare il cosiddetto **`overloading`**.  

```java
// METODO
[public|protected|private] [static] [final] Tipo
	identificatore([Tipo1 parametro1, ..., TipoN parametroN])
	[throws Eccezione1, Eccezzione2, ...] {
		// blocco di codice appartenente al metodo
	return varTipo;
}
// lo statement return è opzionale nel caso in cui Tipo sia void
```

---
## Modificatori di visibilità / accesso
o qualificatori del metodo:  
- **`public`** visibile dovunque
- **`private`** visibilità locale - limita la visibilità solo nella classe stessa
- **`protected`** visibile dalle classi del medesimo package e dalle classi da essa derivate
- **`default`** (identificato dalla **omissione** del qualificatore) implicherà visibilità solo alle classi nel medesimo package



---
# I Qualificatori

## Per attributi e metodi
Qualificatore | Descrizione
--- | --- 
final       | 	Attributi e metodi non possono essere sovrascritti (overridden) o modificati
static      | 	Attributes and methods belongs to the class, rather than an object
abstract    | 	Can only be used in an abstract class, and can only be used on methods. The method does not have a body, for example abstract void run();. The body is provided by the subclass (inherited from). You will learn more about inheritance and abstraction in the Inheritance and Abstraction chapters
transient   | 	Attributes and methods are skipped when serializing the object containing them
synchronized    | 	Methods can only be accessed by one thread at a time
volatile    | 	The value of an attribute is not cached thread-locally, and is always read from the "main memory"

---
## Parametri
- La sezione [Tipo1 parametro1, ... TipoN parametroN] è detto insieme dei **`parametri formali`** del metodo  
- I valori che inseriamo _al momento della chiamata_ del metodo sono detti **`parametri attuali`**.  

---
## Throws - le eccezioni
La keyword **`throws`** permette di sollevare delle eccezioni circa le operazioni di un metodo;  
Le eccezioni possono (devono) essere catturate dal codice per gestire le condizioni di errore  
Throw termina l'esecuzione del blocco corrente come return ma senza che debba essere specificato un valore di ritorno.  


---



parametri formali / parametri attuali

---
Modificatori di accesso incontrati:  
- **`Public`**  -> rende la classe/metodo/attributo accessibile/valorizzabile da qualunque classe/metodo, anche se esterne al package del progetto (caso di import);
la valorizzazione delle variabili può avvenire per parametro dell'oggetto (al momento dell'istanza della classe), per parametro di un metodo ( oggetto.metodo(parametro); ) e per assegnamento (oggetto.proprieta = "Ciccio";) anche successivamente all'istanza; Se la classe istanziata è priva di costruttore, la valorizzazione dei/l parametro/i persiste nelle successive istanze della classe, e cmq sinchè il programma è in runtime.  
- **`Private`**  -> rende il metodo/attributo accessibile/valorizzabile solo dai metodi interni alla classe in cui sono stati dichiarati.
Le variabili sono valorizzabili al momento dell'istanza (new), o successivamente come parametro di un metodo (oggetto.metodo(parametro).
La SuperClasse deve avere un costruttore per permettere ciò, ed anche dichiarati i metodi get e set. 
- **`Protected`**  ->    rende il metodo/attributo accessibile/valorizzabile dalle classi interni al package, e dalle classi che la estendono
-   **`Default`** ->  rende il metodo/attributo accessibile/valorizzabile solo dalle classi interni al package

-   ho un pò di confusione nel confronto tra classi estese e classi importate

---

    - I modificatori d'accesso sono:
        -   public: l'accesso al metodo/variabile sarà globale: posso accedere al mio metodo/variabile
            in un qualsiasi punto del programma, mediante la mia istanza (nomeIstanza.nomeVariabile/metodo)
            - esempio:
                nomeIstanza.nomeVariabile/metodo
                -   public String nome; (variabile d'istanza presente nella mia classe)
                -   ciccioPasticcio.nome = "Ciccio"

        -   private: l'accesso al mio metodo/variabile sarà LOCALE alla mia classe: ovvero se volessi
            accedere al mio metodo/variabile posso farlo solo all'interno della mia classe e NON ovunque
            -   esempio:
                private String nome; (variabile d'istanza presente nella mia classe)
                nomeIstanza.nomeVariabile/metodo --> NON POSSO FARLO!

    -   E' buona norma dichiarare le nostre variabili d'istanza (ovvero quelle NON statiche) come private.
        Le si dichiarano private, in modo tale da non fornire accesso diretto ad esse.
        Come faccio di conseguenza ad accederci per modificarle e lavorarci?
            --> INCAPSULAMENTO! Ovvero utilizzo i metodi set & get dichiarandoli per ogni singola variabile
                privata dichiarata all'interno della mia classe.
            -   Per accedere al metodo che modifica/prende (rispettivamente set/get)
                ricorro alla mia istanza.
                dell'oggetto creato: nomeIstanza.getVariabile()/setVariabile(..)
                -   esempio: ciccioPasticcio.setNome("Ciccio");
                             ciccioPasticcio.getNome();

     - VARIABILI/METODI STATICHE:
        Le variabili/metodi statici sono degli elementi INERENTI ALL'INTERA CLASSE, E NON ALLA SINGOLA ISTANZA.
        Se dichiaro una variabile/metodo statico essi saranno "condivisi" da OGNI ISTANZA D'OGGETTO CREATA.
        -   Le variabili/metodi statiche si richiamano con nomeClasse.nomeVariabile/metodo
            pensate alla classe Math.

---
Ereditarietà:   Superclasse (classe padre)  ->  Sottoclasse (classe Figlia)
                    Sottoclasse extends Superclasse

super   metodo speciale che richiama il metodo costruttore del padre

List<String> stringList = new ArrayList<>();    // questo è polimorfismo

--------------
Astrazione
    -   è uno dei paradigmi della OOP
        Comprende 2 concetti fondamentali:
        -   Classi astratte
        -   Interfacce
    -   lo scopo dell'astrazione è di nascondere i dettagli implementativi all'utente,
        lasciandogli solo capire cosa andrà a fare il programma, e non come

Classi Astratte:
    -   una clase astratta è fondamentalmente anch'essa una classe, con la differenza che
        non sarà possibile istanziarle e sarà anche possibile creare dei metodi astratti al loro interno.
        I metodi astratti sono dei metodi che includono la keyword "abstract" all'interno della firma e,
        non contengono il corpo dela funzione.
        Es.: non dico come calcolo area/perimetro, ma dico cosa calcolo --> ovvero Area e Perimetro

Interfacce:
    -   L'interfaccia Simboleggia una "stipula di contratto" tra programmatore e programma.
        A differenza delle classi Astratte, le interfacce non hanno:
        -   Costruttori
        -   Variabili d'Istanza        -   puoi avere COSTANTI o COSTANTI static
        -   Metodi di cui è possibile definire il corpo
    -   per implemetare i metodi di una interfaccia si usa la keyword "implements"
            dopo il nome della classe,


# Qualificatori
## `static`
https://www.html.it/pag/50140/metodi-statici-static-e-metodi-di-istanza/

metodo di classe con static Es. System.out.println(...)     // lo uso chiamando la Classe
// con static possiamo usare il metodo senza istanziarlo
metodo di istanza SENZA STATIC: (devo prima istanziare la classe)
 -- static nella variabile
    public class Classe {
        private String nome;
        private int id;
        private static int nextId = 0;
        public Persona(String nome){
            this.nome = nome;
            this.cognome = cognome;
            this.id = nextId++;
        }
    }

## `final`
Il qualificatore final serve, nel caso dei metodi, per rendere un metodo non ridefinibile dalle sottoclassi:
se un metodo viene contrassegnato come final le sottoclassi lo potranno utilizzare e lo erediteranno
ma non potranno fare override del metodo.

// con static possiamo usare il metodo senza istanziarlo (usando new)