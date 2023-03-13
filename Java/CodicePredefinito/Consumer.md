# Consumer - interfaccia funzionale

rappresenta un'operazione che accetta un singolo input e non restituisce alcun risultato. L'interfaccia Consumer è spesso utilizzata per elaborare o consumare elementi di una collezione o di uno stream.

L'interfaccia Consumer definisce un unico metodo accettare(), che accetta un singolo argomento di un tipo specificato e non restituisce alcun valore. Questo metodo viene utilizzato per eseguire un'operazione sul singolo argomento passato.

Ad esempio, si può definire un Consumer per stampare gli elementi di una lista di stringhe:

```java
Consumer<String> printer = str -> System.out.println(str);

List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(printer);
```

In questo caso, il Consumer "printer" viene definito come una lambda expression che stampa una stringa sullo standard output. Viene quindi utilizzato per iterare gli elementi della lista di stringhe "names" utilizzando il metodo forEach(), che richiede un Consumer come parametro.

L'interfaccia Consumer è spesso utilizzata in combinazione con altre interfacce funzionali di Java, come Predicate e Function, per implementare complesse operazioni di trasformazione e filtraggio di dati in stream o collezioni.

Ad esempio, si può definire un Consumer per filtrare e stampare solo le stringhe che iniziano con la lettera "A":

```java
Predicate<String> startsWithA = str -> str.startsWith("A");
Consumer<String> printer = str -> System.out.println(str);

List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.stream().filter(startsWithA).forEach(printer);
```

In questo caso, il Consumer "printer" viene utilizzato insieme al Predicate "startsWithA" per filtrare solo le stringhe che iniziano con la lettera "A", e quindi stamparle sullo standard output.

In sintesi, l'interfaccia Consumer è un'interfaccia funzionale definita in Java che rappresenta un'operazione che accetta un singolo input e non restituisce alcun risultato. L'interfaccia Consumer viene spesso utilizzata per elaborare o consumare elementi di una collezione o di uno stream, in combinazione con altre interfacce funzionali di Java.