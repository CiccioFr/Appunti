# Generics

Introdotto in JDK 1.5 

Un generics è uno strumento che permette la definizione di un tipo parametrizzato, che viene esplicitato successivamente in fase di compilazione secondo le necessità; i generics permettono di definire delle astrazioni sui tipi di dati definiti nel linguaggio. 

```java
static <T, V> boolean metodo(T t, V[] v) {
    // code
}
```
`<T, V>` rappresentano i tipi di parametro che il metodo accetta.

Il metodo generico può essere chiamato passando come argomenti un oggetto di tipo "T" e un array di oggetti di tipo "V", i quali saranno sostituiti con tipi specifici al momento dell'invocazione del metodo.

La dichiarazione `<T, V>` indica al compilatore Java che il metodo può accettare uno o più tipi di parametro generici, sono, per tanto, essenziali.  
La posizione dei parametri generici all'interno della firma del metodo (tra "static" e "boolean") è determinata dalla sintassi di definizione dei metodi generici in Java, che richiede che i parametri generici siano specificati prima del tipo di ritorno.

## definire un tipo di ritorno generico
che sarà specificato al momento dell'invocazione del metodo.
```java
static <T, V, R> R metodo(T t, V[] v) {
    // code
    return null;
}
```
```java
static <R> R metodo(String t, int[] v) {
    StringBuilder sb = new StringBuilder();
    sb.append(t + " ");
    for (int i : v) {
        sb.append(i + " ");
    }
    return (R) sb.toString();
}
```
Il cast "(R)" viene utilizzato per convertire il valore restituito in un tipo generico "R", che rappresenta il tipo di ritorno effettivo del metodo.

## invocazione del metodo
```java
String result = metodo("parola", new int[] {1, 2, 3});
```
"R" viene specificato come "int" (il tipo della variabile result), quindi il metodo restituirà un integer.

## Problema con i primitivi e rispettive classi wrapper:
i tipi primitivi come int, char, boolean, ecc. non sono oggetti e non ereditano da Object, quindi non possono essere utilizzati come tipi generici. Le classi wrapper come Integer, Character, Boolean, ecc. sono invece oggetti e possono essere utilizzati come tipi generici. Tuttavia, quando si cerca di restituire un tipo primitivo o la sua classe wrapper da un metodo generico, il compilatore non è in grado di inferire il tipo di ritorno in modo affidabile e si deve specificare esplicitamente il tipo di ritorno. (`static Integer metodo(..){..}`)
### Escamotage per Numerici:
```java
static <R extends Number> R metodo(String t, int[] v) {
    int sum = 0;
    for (int i : v) {
        sum += i;
    }
    return (R) Integer.valueOf(sum);
}
```
In questo caso, si utilizza il tipo generico "R extends Number", che implica che R deve essere una classe wrapper per un tipo primitivo numerico come Integer o Double. La chiamata a "Integer.valueOf()" restituisce un oggetto Integer, che può essere convertito in un tipo generico con il cast.


---

- https://it.wikipedia.org/wiki/Generics_Java
- [Il tipo Generics in Java - html.it](https://www.html.it/pag/18028/il-tipo-generics-in-java)
- [Parametri di tipo limitati e argomento Jolly - html.it](https://www.html.it/pag/60151/parametri-di-tipo-limitati-e-argomento-jolly)
- [Costruttori, interfacce e metodi Generics - html.it](https://www.html.it/pag/60295/costruttori-interfacce-e-metodi-generics)
- https://www.baeldung.com/java-generics
- https://www.geeksforgeeks.org/generics-in-java
- [The Java™ Tutorials - Generic Types - oracle.com](https://docs.oracle.com/javase/tutorial/java/generics/types.html)
- https://www.tutorialspoint.com/java/java_generics.htm