# Reflection

La reflection in Java è una funzionalità che consente di esaminare, ispezionare e manipolare la struttura interna di una classe a runtime. Ciò significa che è possibile ottenere informazioni su una classe, come i suoi campi, metodi e costruttori, e modificarli o invocarli durante l'esecuzione del programma, ergo di interagire con essi in modo flessibile e dinamico, senza dover accedere ai dettagli di implementazione della classe stessa.  
La reflection è particolarmente utile quando si ha a che fare con oggetti di cui non si conosce a priori la struttura, come ad esempio quando si lavora con librerie esterne o framework di terze parti.
Altresì è utile per la creazione di librerie di codice generiche e flessibili, per la serializzazione di oggetti e per il debugging. Tuttavia, la reflection può anche avere un impatto negativo sulle prestazioni del programma e deve essere utilizzata con attenzione.
La reflection si basa sull'uso di classi speciali fornite dalla libreria standard di Java, come ad esempio java.lang.Class, java.lang.reflect.Constructor e java.lang.reflect.Method, che consentono di accedere alle informazioni sulle classi e gli oggetti durante l'esecuzione del programma.

## Interfacce e classi più utilizzate:

- `java.lang.Class`: rappresenta una classe Java a runtime, e fornisce metodi per ottenere informazioni sulle sue proprietà, campi e metodi.
- `java.lang.reflect.Method`: rappresenta un metodo di una classe Java, e fornisce metodi per ottenere informazioni sul metodo stesso e per chiamarlo dinamicamente.
- `java.lang.reflect.Field`: rappresenta un campo di una classe Java, e fornisce metodi per ottenere informazioni sul campo stesso e per modificarlo dinamicamente.
- `java.lang.reflect.Constructor`: rappresenta un costruttore di una classe Java, e fornisce metodi per ottenere informazioni sul costruttore stesso e per crearne dinamicamente istanze.
- `java.lang.reflect.Parameter`: rappresenta un parametro di un metodo o di un costruttore, e fornisce metodi per ottenere informazioni sul parametro stesso.
- `java.lang.reflect.Modifier`: classe di utilità che fornisce metodi statici per ottenere informazioni sulle modifiche di accesso (public, private, protected, etc.) dei campi, metodi e classi.
- `java.lang.reflect.Type`: rappresenta un tipo generico, e fornisce metodi per ottenere informazioni sul tipo stesso, come ad esempio il suo nome e i suoi parametri generici.
- `java.lang.reflect.GenericArrayType`: rappresenta un tipo di array generico, e fornisce metodi per ottenere informazioni sull'elemento dell'array.
- `java.lang.reflect.ParameterizedType`: rappresenta un tipo generico parametrizzato, e fornisce met

---
### Esempio d'uso del metodo invoke();
```java
import java.lang.reflect.Method;

public class MyClass {
    public void myMethod(String arg1, int arg2) {
        System.out.println("myMethod called with arg1=" + arg1 + " and arg2=" + arg2);
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        MyClass obj = new MyClass();
        Method method = obj.getClass().getMethod("myMethod", String.class, int.class);
        method.invoke(obj, "hello", 42);
    }
}
```


### Esempio d'uso del metodo invoke(); Senza conoscere il nome del metodo
```java
MyObject obj = new MyObject();

// recupera tutti i metodi dichiarati nella classe MyObject
Method[] methods = MyObject.class.getDeclaredMethods();

// itera sull'array di metodi e cerca quello desiderato
Method desiredMethod = null;
for (Method method : methods) {
    // verifica se il metodo soddisfa una certa condizione
    if (...) {
        desiredMethod = method;
        break;
    }
}

if (desiredMethod != null) {
    // esegue il metodo sull'oggetto obj
    desiredMethod.invoke(obj, param1, param2, ...);
} else {
    // metodo non trovato
}
```

https://www.mrw.it/java/reflection-java_7422.html