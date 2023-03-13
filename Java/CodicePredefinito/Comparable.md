# Comparable - interfaccia

interfaccia generica definita in Java che definisce un metodo compareTo() per confrontare gli oggetti e determinare il loro ordine. L'interfaccia Comparable viene utilizzata principalmente per l'ordinamento degli oggetti in collezioni come liste, insiemi e mappe.

Per utilizzare l'interfaccia Comparable, una classe deve implementare l'interfaccia stessa e definire un'implementazione del metodo compareTo(), che confronta l'oggetto corrente con un altro oggetto e restituisce un valore intero che indica l'ordine relativo tra i due oggetti. In particolare, il metodo compareTo() deve restituire un valore negativo se l'oggetto corrente è inferiore all'oggetto passato come parametro, un valore positivo se l'oggetto corrente è superiore all'oggetto passato come parametro, e zero se i due oggetti sono uguali.

Ad esempio, si può definire una classe Person che implementa l'interfaccia Comparable per ordinare le persone in base alla loro età:

```java
public class Person implements Comparable<Person> {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int compareTo(Person other) {
        return this.age - other.age;
    }
}
```

In questo caso, la classe Person implementa l'interfaccia Comparable<Person> e definisce un'implementazione del metodo compareTo() che confronta l'età delle due persone e restituisce il risultato del confronto.

Una volta definita l'implementazione dell'interfaccia Comparable per una classe, gli oggetti di quella classe possono essere ordinati in base alla definizione di compareTo(). Ad esempio, si può ordinare una lista di persone in base all'età come segue:

```java
List<Person> people = new ArrayList<>();
people.add(new Person("Alice", 30));
people.add(new Person("Bob", 25));
people.add(new Person("Charlie", 35));
Collections.sort(people);
```

In questo caso, la lista di persone viene ordinata in base all'età utilizzando il metodo sort() della classe Collections, che richiede che gli oggetti implementino l'interfaccia Comparable.

In sintesi, l'interfaccia Comparable è un'interfaccia generica definita in Java che definisce un metodo compareTo() per confrontare gli oggetti e determinare il loro ordine. Le classi che implementano l'interfaccia Comparable possono essere ordinate in base alla definizione di compareTo() utilizzando le funzionalità di ordinamento fornite dalle classi di collezione di Java.