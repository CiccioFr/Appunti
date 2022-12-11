# Espressioni Lambda

- introdotta dalla versione 8 di Java   
**Un’espressione lambda è una funzione anonima**. collegate al concetto di funzione anonima (funzione non classe anonima), ossia una funzione che ha un corpo ma non un nome, definita nel punto in cui viene utilizzata.  
E’ simile a un metodo: fornisce un elenco di parametri formali, un corpo (che può essere un'espressione o un blocco di codice) e un tipo di ritorno. Può essere passata come argomento di un metodo.
Risolvono il problema della verbosità delle classi interne permettendo una riduzione delle linee di codice da scrivere.  
`(arg1, arg2) -> {body}`  
In un’espressione lambda o nessuno dei tipi dei parametri è dichiarato oppure lo devono essere tutti.  
Se c’è solamente un parametro, le parentesi tonde possono essere omesse,  
Le lambda sono usate con le funcional interface.  

Esempio:
```java
// Anonymous Runnable
// Runnable è @FunctionalInterface
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello world old style!");
    }
};

// Lambda Runnable
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