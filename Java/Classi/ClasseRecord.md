# Classe Record

Introdotta con Java 14 come feature preview ed ufficializzata con **Java 16**

Gode della possibilità di essere definita con una sintassi particolarmente sintetica. 
Un semplice POJO, includerebbe molto codice `boilerplate`, come campi privati, costruttori, metodi getter e setter, metodi hashCode() , equals() e toString()

Progettata per implementare classi che rappresentano dati, ergo contenitori di **dati immutabili**.

### Sintassi:
`[modificatori] record identificatore (header) {[membri]}`
- `header`: lista di dichiarazioni di variabili separate da virgole, e che rappresenteranno le variabili d’istanza del record.

## Caratteristiche
- In fase di compilazione i record vengono trasformati in **classi dichiarate `final`** che estendono la classe dal `java.lang.Record`, e quindi non possono essere estese, ne estendere altre classi. (Java mitiga l’impatto di questa nuova caratteristica delegando al compilatore il compito di trasformare i record in classi per mantenere la retrocompatibilità con i vecchi programmi: i record vengono trasformati dal compilatore in classi che estendono la classe astratta `java.lang.Record`.)

- Un record non può ereditare un'altra classe. Tuttavia, tutti i record ereditando implicitamente `java.lang.Record`. Come tale, sovrascrive i metodi equals(), hashCode(), toString() ereditati dalla classe Object.

- Un record, tuttavia, può implementare una o più interfacce.

- definisce automaticamente un costruttore che prende come parametri l’header;  
Il `costruttore canonico` fornito dalla classe record contiene lo stesso parametro passato come elenco di componenti e nello stesso ordine. I valori trasmessi vengono assegnati automaticamente ai campi del record.

- Un record viene istanziato con la keyword `new`, proprio come la creazione di qualsiasi altro oggetto in Java.

- I dati nel record sono conservati in campi `private final` ​​e c'è solo un metodo getter. Pertanto, i dati nel record sono immutabili.

- Tutti gli altri campi, ad eccezione dell'elenco dei componenti, devono essere dichiarati statici.

---

### Snippet classe record base valida
```java
public record Quadro(String titolo, String autore, int prezzo) { }

// Istanziare la classe Record come fosse una classe concreta
Quadro quadro = new Quadro("Camaleón", "Leonardo Furino", 1000000);
```

### Accesso in lettura ai campi del record
Gli identificatori dei metodo di accesso (accessor), non seguono la solita convenzione usata sinora.  
I metodi infatti, invece di chiamarsi getTitolo, getAutore e getPrezzo, si chiamano semplicemente titolo, autore e prezzo, tuttavia la funzionalità rimane invariata.
Accesso in lettura ai singoli campi del record tramite la seguente sintassi:
```java
String titolo = quadro.titolo();
String autore = quadro.autore();
```

## Costruttore canonico
Dichiarare esplicitamente un costruttore canonico.  
Questo ci può servire se per esempio vogliamo aggiungere dei controlli di consistenza, prima di settare il valore delle variabili d’istanza. 

### Snippet 1
```java
public record Foto(String formato, boolean aColori) {
    public Foto(String formato, boolean aColori) {
        if (formato.length() < 5) throw new 
            IllegalArgumentException("Descrizione del formato troppo breve");
        this.formato = formato;
        this.aColori = aColori;
    }
}
```

### Snippet 2
```java
public record Foto(String id, String formato, boolean aColori) {

    static String prefix = String.valueOf(Calendar.getInstance().get(Calendar.YEAR)) + String.valueOf(Calendar.getInstance().get(Calendar.MONTH)+1);

    public Foto(String id, String formato, boolean aColori) {


        if (formato.length() < 5) throw new 
            IllegalArgumentException("Descrizione del formato troppo breve");

        this.formato = formato;
        this.aColori = aColori;
    }
}
```

### Costruttore canonico compatto
Caratterizzato dal fatto che non dichiara la lista dei parametri, dove la dichiarazione della firma è implicita.  
Notare che accanto all’identificatore del costruttore non sono presenti neanche le parentesi tonde.  
Notare inoltre che, nei costruttori compatti, non è stata usata la keyword `this`.
```java
public record Foto(String id, String formato, boolean aColori) {
    public Foto {
        if (formato.length() < 5) throw new IllegalArgumentException(
            "Descrizione del formato troppo breve");
    }
}
```
L’utilizzo dei costruttori canonici compatti, dovrebbe essere considerato il modo standard per definire costruttori esplicitamente in un record. Notare che non è stato neanche necessario inizializzare le variabili d’istanza che vengono inizializzate automaticamente. Ad essere più precisi, se provassimo ad inizializzare le variabili d’istanza in un costruttore canonico compatto otterremo un errore in compilazione.

### Costruttore non canonico
In questo caso, si effettua un overload di costruttori.
```java
public Foto(String formato, boolean aColori, String msg) {
    this(formato, aColori);
    if (formato.length() < 5) throw new IllegalArgumentException(msg);
}
```

Fonti:
- https://www.claudiodesio.com/tipi-record/
- https://www.developer.com/java/java-record-class/