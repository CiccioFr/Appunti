## Modificatori di visibilità / accesso
o qualificatori del metodo:  
- **`public`** visibile dovunque
- **`private`** visibilità locale - limita la visibilità solo nella classe stessa
- **`protected`** visibile dalle classi del medesimo package e dalle classi da essa derivate
- **`default`** (identificato dalla **omissione** del qualificatore) implicherà visibilità solo alle classi nel medesimo package

---
Modificatori di accesso incontrati:  
- **`Public`**  -> rende la classe/metodo/attributo accessibile/valorizzabile da qualunque classe/metodo, anche se esterne al package del progetto (caso di import);
la valorizzazione delle variabili può avvenire per parametro dell'oggetto (al momento dell'istanza della classe), per parametro di un metodo ( oggetto.metodo(parametro); ) e per assegnamento (oggetto.proprieta = "Ciccio";) anche successivamente all'istanza; Se la classe istanziata è priva di costruttore, la valorizzazione dei/l parametro/i persiste nelle successive istanze della classe, e cmq sinchè il programma è in runtime.  
- **`Private`**  -> rende il metodo/attributo accessibile/valorizzabile solo dai metodi interni alla classe in cui sono stati dichiarati.
Le variabili sono valorizzabili al momento dell'istanza (new), o successivamente come parametro di un metodo (oggetto.metodo(parametro).
La SuperClasse deve avere un costruttore per permettere ciò, ed anche dichiarati i metodi get e set. 
- **`Protected`**  ->    rende il metodo/attributo accessibile/valorizzabile dalle classi interni al package, e dalle classi che la estendono
-   **`Default`** ->  rende il metodo/attributo accessibile/valorizzabile solo dalle classi interni al package

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
