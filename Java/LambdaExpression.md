# Lambda Expression

Le lambda expression sono state introdotte in Java 8 per semplificare l'utilizzo di interfacce funzionali.  
In matematica e informatica in generale, un’espressione lambda è una funzione. In Java, un’espressione lambda fornisce un modo per creare una funzione anonima,  introducendo di fatto un nuovo tipo Java: il tipo funzione anonima che può quindi essere passato come argomento o restituito in uscita nei metodi.  
Ossia una funzione che ha un corpo ma non un nome, definita nel punto in cui viene utilizzata.  
E’ simile a un metodo: fornisce un elenco di parametri formali, un corpo (che può essere un'espressione o un blocco di codice) e un tipo di ritorno.  
Può essere passata come argomento ad un metodo che accetta come parametro un tipo "Interfaccia Funzionale", in questo caso, il tipo di Interfaccia F. sarà desunta!
Risolvono il problema della verbosità delle classi interne permettendo una riduzione delle linee di codice da scrivere.  
`(arg1, arg2) -> {body}`  
In un’espressione lambda o nessuno dei tipi dei parametri è dichiarato oppure lo devono essere tutti.  
Se c’è solamente un parametro, le parentesi tonde possono essere omesse.  
Le lambda sono usate con le funcional interface.  

## Interfaccia Funzionale `Runnable`
### Override del metodo `Runnable.run()`
Esempio:
```java
// Classe Anonima per implementare il metodo di Runnable
// Runnable è @FunctionalInterface
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello world old style!");
    }
};

// od anche:
// Lambda Runnable - definizione di una lambda expression
Runnable r2 = () -> System.out.println("Hello world with Lambda!");
```

Esempio 2:
```java
//Prima:
button.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("Sintassi arcinota!");
    }
});

//Dopo:
button.addActionListener( (e) -> {
    System.out.println("Nuova sintassi!");
});
```

Ricapitolando, l’espressione lambda è una sintassi più semplice e leggibile per definire-creare un’istanza di una classe anonima che implementa un’interfaccia con un solo metodo astratto. Esse si concentrano solamente sulla definizione dell’unico metodo astratto dell’interfaccia.

---
argomenti correlati:
- [Interfaccia Funzionale](./Classi/Classi.md#interfaccia-funzionale-functional-interface)

---
## uso di [`reference method`](./MethodReferences.md)

Esempio:
```java
public class Test {

    class Numbers {
        public static boolean isMoreThanFifty(int n1, int n2) {
            return (n1 + n2) > 50;
        }
    }

    public static void main(String[] args) {
        // Uso classico di Classe Anonima
        // BiPredicate è @FunctionalInterface con `boolean test(T t, U u);`
        BiPredicate<Integer, Integer> a = new BiPredicate<Integer, Integer>() {
            @Override
            public boolean test(Integer i1, Integer i2) {
                return Numbers.isMoreThanFifty(i1, i2);
            }
        };

        // Uso di lambda expression
        BiPredicate<Integer, Integer> b = (i1, i2) -> Numbers.isMoreThanFifty(i1, i2);

        // Uso di lambda expression con method reference
        BiPredicate<Integer, Integer> c = Numbers::isMoreThanFifty;

        //i tre oggetti sono equivalenti
        System.out.println(a.test(2, 3));
        System.out.println(b.test(2, 3));
        System.out.println(c.test(2, 3));
    }
}
```

## Lambda Expression memorizzate in una variabile

// TODO  Completare tabella

In Java le espressioni lambda possono essere memorizzate in una variabile, in modo da poter essere riutilizzate o passate come parametro ad altre funzioni, a patto che il tipo della variabile sia compatibile con il tipo dell'espressione lambda.

Il tipo di variabile per memorizzare le espressioni lambda è necessario che sia una interfaccia funzionale, che definisce il tipo di funzione rappresentata dall'espressione lambda. Questo perché le espressioni lambda sono utilizzate principalmente per implementare interfacce funzionali, che contengono un singolo metodo astratto. In questo modo, il compilatore Java può utilizzare l'espressione lambda per creare un'implementazione della funzione richiesta in base alla firma del metodo astratto dell'interfaccia funzionale.

Se si cerca di assegnare un'espressione lambda a una variabile il cui tipo di riferimento non è un'interfaccia funzionale, il compilatore Java emetterà un errore di compilazione.

Alcune interfacce funzionali predefinite che possono essere utilizzate come tipi di variabili per memorizzare espressioni lambda:

Interfaccia | Metodo astratto | Descrizione | Utilizzo
-- | -- | -- | --
`Comparator<T>` | `+ compare(T, T): int` | Rappresenta una funzione che accetta un argomento di tipo T e non restituisce alcun valore. | Può essere utilizzata per eseguire un'azione su un oggetto di tipo T. Ad esempio, `System.out::println` che stampa a video una stringa.
`Consumer<T>` | `+ accept(T): void` | Rappresenta una funzione che accetta un argomento di tipo T e non restituisce alcun valore. | Può essere utilizzata per eseguire un'azione su un oggetto di tipo T. Ad esempio, `System.out::println` che stampa a video una stringa.
|
`Supplier<T>` | `+ get(): T` | Rappresenta una funzione che non accetta argomenti e restituisce un valore di tipo T. |  Può essere utilizzata per generare o fornire un valore di tipo T. Ad esempio, `Random::new`  che genera un nuovo oggetto Random.
`Function<T,R>` | `+ apply(T): R` | Rappresenta una funzione che accetta un argomento di tipo T e restituisce un valore di tipo R. | Può essere utilizzata per trasformare o mappare un oggetto di tipo T in un oggetto di tipo R. Ad esempio, `String::length` che restituisce la lunghezza di una stringa.
`Predicate<T>` | `+ test(T): boolean` | Rappresenta una funzione che accetta un argomento di tipo T e restituisce un valore booleano. | Può essere utilizzata per valutare una condizione su un oggetto di tipo T. Ad esempio, `Integer::isPositive` che restituisce true se un intero è positivo.
|
`UnaryOperator<T>` | `+ apply(T): T` | Rappresenta una funzione che accetta un argomento di tipo T e restituisce un valore dello stesso tipo T. | Può essere utilizzata per trasformare o mappare un oggetto di tipo T in un oggetto di tipo T. Ad esempio, `Math::negateExact` che restituisce il valore negativo di un intero, od anche `String::toUpperCase` che restituisce la versione maiuscola di una stringa.
`BiFunction<T, U, R>` | `+ apply(T, U): R` | Rappresenta una funzione che accetta due argomenti di tipo T e U e restituisce un valore di tipo R. | Può essere utilizzata per trasformare o combinare due oggetti di tipo T e U e restituire un oggetto di tipo R. Ad esempio, `String::concat` che concatena due stringhe.
`BiConsumer<T, U>` | `+ accept(T, U): void` | Rappresenta una funzione che accetta due argomenti di tipo T e U e non restituisce alcun valore. | Può essere utilizzata per eseguire un'azione su due oggetti di tipo T e U. Ad esempio, `System.out::println` che stampa a video due oggetti.
`BinaryOperator<T>` | `+ apply(T, T): T` | Rappresenta una funzione binaria che accetta due argomenti di tipo T e restituisce un valore dello stesso tipo T. | Può essere utilizzata per combinare o aggregare due oggetti di tipo T in un oggetto di tipo T. Ad esempio, `Math::max` che restituisce il valore massimo tra due numeri.

### Snippet con Consumer
```java
public static void processList(List<String> list, Consumer<String> processor) {
    for(String item : list) {
        processor.accept(item);
    }
}

List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
Consumer<String> printer = str -> System.out.println(str);
processList(names, printer);
```

### Snippet `Supplier<T>`
```java
Supplier<Integer> randomInt = () -> (int) (Math.random() * 100);
int num1 = randomInt.get();
```

### Snippet `Function<T,R>`
```java
Function<String, Integer> stringLengthFunction = str -> str.length();
int result = str.apply("Stringa");
//
Function<Integer, Integer> square = x -> x * x;
int result = square.apply(5);
```
Definire una lambda expression `Function<String, Integer>` (cioè una funzione che accetta una stringa e restituisce un intero) e memorizzarla in una variabile di tipo `Function<String, Integer>`

### Snippet `Predicate<T>`
```java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Eva");

Predicate<String> startsWithA = s -> s.startsWith("A");
Predicate<String> endsWithVowel = s -> "aeiou".contains(s.substring(s.length() - 1));

for (String name : names) {
    if (startsWithA.and(endsWithVowel).test(name)) {
        System.out.println(name);
    }
}
// output Alice
```
Le funzioni startsWithA e endsWithVowel, entrambe come istanze dell'interfaccia `Predicate<String>`, prendono in input una stringa e restituiscono un valore booleano. La funzione startsWithA restituisce true se la stringa inizia con la lettera "A", mentre endsWithVowel restituisce true se la stringa termina con una vocale.

Nell'iterazione il metodo test() delle funzioni startsWithA e endsWithVowel, restituiscono true se la condizione è soddisfatta, e l'operatore and() per combinare le due funzioni. Se la condizione è soddisfatta, viene stampato a video il nome.
        
### Snippet `UnaryOperator<T>`
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
UnaryOperator<Integer> square = n -> n * n;
numbers.replaceAll(square);
```

### Snippet `BiFunction<T, U, R>`


### Snippet `BiConsumer<T, U>`


### Snippet `BinaryOperator<T>`

---

## Argomenti correlati:
- [`:: Method References`](./MethodReferences.md)
- [Interfaccia Funzionale](./Classi/Classi.md#interfaccia-funzionale-functional-interface)

---

## Link
- https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html