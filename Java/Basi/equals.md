# equals method

L'override del metodo "equals()" è necessario quando si desidera confrontare gli oggetti in base ai loro contenuti e non in base ai riferimenti agli oggetti stessi. In Java, il metodo "equals()" della classe Object confronta due oggetti in base al loro riferimento di memoria. Ciò significa che due oggetti con gli stessi valori degli attributi ma con riferimenti di memoria diversi sono considerati diversi.

L'override del metodo "equals()" consente di definire un confronto personalizzato tra due oggetti della stessa classe in base ai loro contenuti. In genere, il metodo "equals()" viene utilizzato in combinazione con il metodo "hashCode()" per garantire la coerenza del confronto degli oggetti all'interno di strutture dati come gli insiemi (Set), le mappe (Map) e altre strutture di dati.

L'override del metodo "equals()" richiede la definizione di alcuni criteri di uguaglianza tra gli attributi dell'oggetto. Ad esempio, si può definire che due oggetti sono uguali se hanno gli stessi valori degli attributi "nome" e "cognome". In questo caso, il metodo "equals()" della classe dovrebbe confrontare gli attributi "nome" e "cognome" di due oggetti per stabilire se sono uguali o meno.

Ecco un esempio di come implementare il metodo "equals()" per una classe Persona:

```java
class Persona {
    private String nome;
    private String cognome;
    private int eta;

    // Costruttore, getter, setter

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Persona persona = (Persona) o;
        return eta == persona.eta &&
                Objects.equals(nome, persona.nome) &&
                Objects.equals(cognome, persona.cognome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, cognome, eta);
    }
}
```

In questo esempio, abbiamo implementato il metodo "equals()" della classe Persona confrontando gli attributi "nome", "cognome" e "eta" di due oggetti Persona. Inoltre, abbiamo implementato il metodo "hashCode()" della classe Persona per garantire la coerenza del confronto degli oggetti all'interno delle strutture dati.