# Comparable.compareTo();

se si desidera ordinare l'array in base ad un attributo, ad esempio il nome, è necessario implementare l'interfaccia "Comparable" nell'oggetto Persona e definire un metodo di confronto "compareTo()" personalizzato.

Ecco un esempio di come implementare l'interfaccia "Comparable" per l'oggetto Persona e definire un metodo "compareTo()" personalizzato che ordina gli oggetti in base al nome:

```java
public class OrdinamentoArray {

    public static void main(String[] args) {

        // Creazione dell'array di oggetti Persona da ordinare
        Persona[] persone = {
            new Persona("Mario", 20),
            new Persona("Luigi", 25),
            new Persona("Paolo", 18)
        };

        // Ordinamento dell'array di oggetti Persona in base al nome
        Arrays.sort(persone);

        // Stampa dell'array di oggetti Persona ordinato
        for (Persona persona : persone) {
            System.out.println(persona);
        }
    }
}

class Persona implements Comparable<Persona> {

    private String nome;
    private int eta;

    public Persona(String nome, int eta) {
        this.nome = nome;
        this.eta = eta;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public int compareTo(Persona altraPersona) {
        // qui viene usato il metodo compareTo() della classe String
        // che restituisce -1 | 0 | 1 in base al confronto
        return this.nome.compareTo(altraPersona.nome);
    }

    @Override
    public String toString() {
        return "Persona{" +
                "nome='" + nome + '\'' +
                ", eta=" + eta +
                '}';
    }
}
```

In questo esempio, abbiamo modificato la classe Persona per implementare l'interfaccia "Comparable<Persona>" e definire il metodo "compareTo()" personalizzato che confronta gli oggetti in base al nome. Successivamente, abbiamo utilizzato il metodo "sort()" della classe "Arrays" per ordinare l'array di oggetti Persona in base al nome. Infine, abbiamo stampato l'array di oggetti Persona ordinato utilizzando un ciclo for-each e il metodo "toString()" personalizzato della classe Persona.