# Comparate - Interfaccia

// TODO credo che il titolo sia da cambiare..

utilizzata per definire un ordinamento naturale degli oggetti di una classe.
Implementando l'interfaccia `Comparable`, è possibile definire un criterio di ordinamento per gli oggetti di una classe e utilizzarlo per ordinare una lista di oggetti tramite il metodo `sort()` della classe Collections o della classe Arrays.

Per implementare l'interfaccia `Comparable`, è necessario fornire un'implementazione del metodo `compareTo()`, che prende in input un altro oggetto della stessa classe e restituisce un intero che indica la posizione relativa degli oggetti nella sequenza ordinata.

Il metodo `compareTo()` deve restituire:
- `-1` - un valore negativo se l'oggetto corrente è minore dell'oggetto di confronto
- `0` - zero se i due oggetti sono uguali
- `1` - un valore positivo se l'oggetto corrente è maggiore dell'oggetto di confronto.

Ad esempio, se si vuole ordinare una lista di oggetti di tipo String in ordine alfabetico, si può implementare l'interfaccia `Comparable` nella classe String come segue:

```java
public class String implements Comparable<String> {
    ...
    @Override
    public int compareTo(String other) {
        return this.compareTo(other);
    }
}
```

In questo caso, il metodo `compareTo()` utilizza il metodo `compareTo()` della classe String per confrontare gli oggetti e restituisce il risultato della comparazione.

In generale, l'interfaccia `Comparable` è utile per definire un ordinamento predefinito degli oggetti di una classe e semplificare le operazioni di ordinamento e ricerca. Tuttavia, va tenuto presente che l'implementazione dell'interfaccia `Comparable` è legata all'ordinamento naturale degli oggetti della classe e che può essere necessario utilizzare altre strategie di ordinamento per casi specifici.