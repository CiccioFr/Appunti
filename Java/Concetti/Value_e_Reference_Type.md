# Value e Reference Type in Java

Nel linguaggio Java un oggetto può possedere riferimenti verso altri oggetti.  
**Una reference è equiparabile ad un puntatore all'indirizzo di memoria** dove si trova il valore dell'oggetto.  
Se copio il riferimento contenuto in una variabile e lo assegno a un'altra variabile, entrambe le variabili hanno lo stesso riferimento.  
Dopo la copia entrambe le variabili contengono lo stesso riferimento di memoria.  
Quando una variabile viene modificata, la modifica viene apportata all'oggetto situato al riferimento di memoria.  
Pertanto, una qualsiasi modifica apportata tramite una variabile interessa anche l'altra variabile  
La copia della variabile è la copia del suo indirizzo di memoria (riferimento).

---

## Passaggio per Valore o Riferimento
In Java il passaggio dei parametri avviene solo per valore. Quindi nessuna modifica nel metodo sui parametri formali cambierà i valori dei parametri attuali passati come argomenti.  
Il valore in questione è quanto memorizato nello Stack.
Il passaggio per riferimento si ha implicitamente quando si hanno parametri formali di tipo array o oggetti.  
In caso di dati primitivi (il cui valore reale è memorizzato nello Stack) avverrà la copia del valore.
In caso di oggetti, sarà effettuata la copia della reference, quindi l'oggetto reale sarà sempre "puntato", e le modifiche si ripercuoteranno su esso.

### Passaggio per valore:

```java
public class Main {
    public static void main(String[] args) {
        int x = 10;
        metodo(x);
        System.out.println("x: " + x); // output: x: 10
    }
    
    public static void metodo(int num) {
        num = 5;
    }
}
```
In questo esempio, viene passato l'intero x al metodo metodo() per valore, cioè viene passata una copia del valore dell'intero. Questo significa che qualsiasi modifica apportata all'argomento all'interno del metodo non influisce sul valore originale del parametro. In questo caso, il valore di x rimane 10 nonostante il metodo metodo() abbia assegnato il valore 5 al parametro num.

### Passaggio per riferimento (tramite wrapper class):

```java
public class ValoreRiferimento {
    public static void main(String[] args) {
        Cittadino cit = new Cittadino("Italiano");
        cit.setNaz("Cittadino del Mondo");
        System.out.println(cit.getNaz());   // out: "Cittadino del Mondo"
        passaggioReference(cit);            // <- passaggio per reference
        System.out.println(cit.getNaz());   // out: "Cittadino Europeo"
    }

    static void passaggioReference(Cittadino cit) {
        cit.setNaz("Cittadino Europeo");    // usa la reference dell'oggetto passato come parametro
        cit = new Cittadino("Alieno");  // nuova allocazione in memoria del nuovo oggetto
    }
}

class Cittadino {
    String naz;
    public Cittadino(String naz) {
        this.naz = naz;
    }
    public String getNaz() {
        return naz;
    }
    public void setNaz(String naz) {
        this.naz = naz;
    }
}
```

In questo esempio, l'oggetto passato al metodo è x per riferimento. Poiché l'oggetto è memorizzato nello Heap, il parametro naz assume valore "reference": viene passato come riferimento. Ciò significa che qualsiasi modifica apportata all'argomento all'interno del metodo influisce sull'oggetto originale che sta riferenziando l'argomento.