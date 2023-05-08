# Singleton in Java

### Terminologie e Concetti:
- [`Lazy Inizialization`](../Concetti/Termini_Nozioni_Concetti.md#lazy-inizialization)  
    Istanziazione ritardata (pigra), in contrapposizione a eager o early.  
    L'istanza del Singleton non dovrebbe essere creata se non nel momento in cui la richiediamo la prima volta, può portare a risparmio di risorse o tempo computazione in base al carico di lavoro
- `Thread Safe`  
    Si riferisce alla capacità di un programma o di una libreria di gestire correttamente l'accesso concorrente a risorse condivise da parte di più thread.  
- uso del modificatore `static`  
    Dato che l'inizializzazione dei membri statici è garantita essere Thread Safe, lo sono anche le implementazioni del Singleton che usano il modificatore static: l'istanza è statica (ne verrà creata 1 per classe).
- `Lazy Initialization` - L'inizializzazione ritardata:  
    L'istanza del Singleton non dovrebbe essere creata se non nel momento in cui non la richiediamo la prima volta, in alcuni scenari questo porta a risparmio di risorse, memoria e tempo computazionale.  

---

## Singleton - il più semplice
- Eager Initialization
- No Thread Safe
<details><summary>Snippet</summary>

```java
public class GFG
{
    // public instance initialized when loading the class
    private static final GFG instance = new GFG();
    
    private GFG() {
        // private constructor
    }
    
    public static GFG getInstance(){
        return instance;
    }
}
```
---
</details>



## Singleton comune
- Lazy initialization
- No Thread Safe (per Singol Thread)
<details><summary>Snippet</summary>

```java
public class MySingleton {
    private static MySingleton instance = null;
    // altre variabili del caso
    
    // Costruttore privato per evitare l'istanziazione diretta della classe.
    private MySingleton() {
    }

    public synchronized static MySingleton getInstance() {
        if (instance == null) {
            instance = new MySingleton();
        }
        return instance;
    }
    
    public void faQualcosa() {
        // Codice per eseguire l'operazione desiderata con l'oggetto Singleton.
    }
}
// ----
class Main {
    public static void main(String args[]) {
        // Creazione dell'oggetto 
        MySingleton obj = MySingleton.getInstance();
        obj.faQualcosa();
    }multi thread
}
```
---
</details>

---

## Singleton Thread Sefety e Lazy Initialization
L'univocità è data dal fato che l'istanza è statica, ne verrà creata 1 per classe.  

### Thread Sefety
Dato che l'iniziallizzazione dei membri statici è garantita essere thread safe, lo è anche questa implementazione del Singleton

### Lazy Initialization
L'istanza statica del Singleton annidata all'interno di una classe privata nested (annidata e statica) alla classe principale.
### Spiegazione:
Mentre per i membri statici di una classe l'inizializzazione avverrebbe al caricamento della stessa (la classe viene risolta dal `Class Loader`), questo **non avviene per membri statici di classi annidate**: quando partirà il codice, senza sollecitare la classe interna richiedendo l'istanza, la variabile non sarà inizializzata.  
Quando sarà richiesta l'`istanza` sarà inizializzato, in modalita Thread Safe, anche quel membro statico.  

<details><summary> Snippet </summary>

```java
public class SingletonLazy {
    private SingletonLazy() {
        System.out.println("Invocato il costruttore");
    }

    private static class ContenitoreIstanza {
        // Istanza statica che garantisce l'univocità
        private static SingletonLazy instance = new SingletonLazy();
    }
 
    public static SingletonLazy getInstance() {
        return ContenitoreIstanza.instance;
    }
}
// ---
public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
        SingletonLazy s1 = SingletonLazy.getInstance();
        // il costruttore verà invocato 1 sola volta:
        // Poiché la variabile instance è statica, viene condivisa tra tutte le istanze della classe e viene inizializzata solo la prima volta che viene richiamato il metodo getInstance(). Le successive chiamate al metodo getInstance() restituiscono semplicemente l'istanza già creata.
        SingletonLazy s2 = SingletonLazy.getInstance();

        // test per confermare la Lazy Initialization (commentando sopra)
        // il costruttore non verrà richiamato (a differenze del SingletonNoLazy sotto)
        Class.forName("package...SingletonLazy");
    }
}
```
Anche se questa sarebbe l'implementzione da raccomandare, ci sono 2 situazioni in cui fallirebbe nel garantire l'univocità dell'istanza.

---
</details>

---

### Due situazioni in cui **fallirebbe** nel garantire l'unicità dell'istanza.. e contromisura con Enum

<details><summary> casi un pò limite.. </summary>

1. ## Fallimento Singleton per **Uso della reflection**
```java
import java.io.*;
import java.lang.reflect.Constructor;

class SingletonLazy {
    private SingletonLazy() {
        System.out.println("Invocato il costruttore");
    }

    public static SingletonLazy getInstance() {
        return ContenitoreIstanza.instance;
    }

    private static class ContenitoreIstanza {
        private static SingletonLazy instance = new SingletonLazy();
    }
}
// -----
public class MainSingletonReflection {
    public static void main(String[] args) throws ClassNotFoundException {
 
        //credits: Keval Patel on Medium
        SingletonLazy istanza1 = SingletonLazy.getInstance();
 
        //otteniamo una seconda istanza con la reflection
        SingletonLazy istanza2 = null;
        try {
            // ottiene riferimento alla classe
            Class<SingletonLazy> ref = SingletonLazy.class;
            // ottiene riferimento al costruttore
            Constructor<SingletonLazy> costruttore = ref.getDeclaredConstructor();
            // accessibilità
            costruttore.setAccessible(true);
            // uso
            istanza2 = costruttore.newInstance();
        } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException | InstantiationException e) {
            e.printStackTrace();
        } //fine reflection

        // per testare che le due istanze siano effettivamente diverse
        // facciamo riferimento al codice hash che è unico
        System.out.println("instance1 hashCode=" + istanza1.hashCode());
        System.out.println("instance2 hashCode=" + istanza2.hashCode());

        // output: due hash effettivamente diversi
        // ha bucato il singleton !!
    }
}
```
Contromisura:
- nell'ambiente di esecuzione installare un così detto `security manager` in modo da vietare che a runtime si possa modificare il livello di accessibilità ed ad esempio come nell'esempio con la Reflection con .setAccessible()

---

2. ## Uso della serializzazione
Col meccanismo della serializzazione su uno stream, e successiva deserializzazione.  
Implementando nella classe col Singleton l'interface Serializable (il che spiega che si tratta di una minaccia limitata alle situazioni in cui abbiamo bisogno, per qualche motivo, di attivare la serializzazione)  
(arcano motivo di farlo...)  
Con la deserializzazione si viene di fato a creare un clone l'oggetto originario!

```java
import java.io.*;
public class MainSingletonSerializzazione {
    public static void main(String[] args) throws ClassNotFoundException {
 
        SingletonLazySerial istanza1 = SingletonLazySerial.getInstance();

        //otteniamo una seconda istanza con serializzazione / deserializzazione della prima
        //credits: Keval Patel on Medium
        try {
            ObjectOutput out = null;

            //  serializziamo
            out = new ObjectOutputStream(new FileOutputStream("filename.ser"));
            out.writeObject(istanza1);
            out.close();

            // Deserializziamo -> qui l'inghippo:
            // con questa operazione di fatto si creare un clone dell'istanza originale nell'oggetto
            ObjectInput in = new ObjectInputStream(new FileInputStream("filename.ser"));
            SingletonLazySerial istanza2 = (SingletonLazySerial) in.readObject();
            in.close();

            System.out.println("instance1 hashCode=" + istanza1.hashCode());
            System.out.println("instance2 hashCode=" + istanza2.hashCode());

        } catch (ClassNotFoundException | IOException e) {
            e.printStackTrace();
        }
        
        // output: due hash effettivamente diversi
        // ha bucato il singleton !!
    }
}
// -----
class SingletonLazySerial implements Serializable {
    private SingletonLazySerial() {
        System.out.println("Invocato il costruttore");
    }

    public static SingletonLazySerial getInstance() {
        return ContenitoreIstanza.instance;
    }

    private static class ContenitoreIstanza {
        private static SingletonLazySerial instance = new SingletonLazySerial();
    }
}
```
Contromisura:
- compiere l'overrider di un metodo che viene utilizzato in fase di deserializzazione in modo tale che no faccia, come fa normalmente, ovvero leggere dalle streem, ma restituire una copia dell'istanza che c'è già.

---

## Contromisura con Enum
Sfrutta i meccanismi intrinseci di questo tipo di dato:
è il run-time che
- garantisce che una sola istanza di questa enum sarà creata
- assicura che sia anche `Thread Sefe` (la fase di inizializzazione)

Il Singleton con l'Enum è inataccabile dalla reflection e supporta in modo nativo le operazioni Serializzazione e Deserializzazione, in modo tale da non violare l'unicità dell'istanza creata

I limiti sono quelli dati dall'Enum rispetto ad una classe (non può ereditare, ecc..)

### `Lazy Loading`
Di fatto lo è.. ma non proprio  
Quando andiamo a definire un Enum per un Singleton, l'istanza verrà creata quando per la prima volta si andrà ad usare l'Enum, che corrisponde al momento in cui questa verrà caricata, perchè è quello il momento in cui avviene l'inizializzazione (e parte il run del costruttore).
Però tecnicamente possiamo anticipare (e mandare a benedire il Lazy Loading) aggiungendo il metodo statico `f() {}` e richiamandolo si va a sollecitare la classe (il Class Loader risolve la classe e la inizializza) senza che si sia fatto riferimento od usato l'istanza (ecco perchè non è un vero Lazy Loading): Non si può dire che il Lazy Loading è sempre e comunque garantito.  

```java
public class MainSingletonSerializzazioneEnum {
    public static void main(String[] args) throws ClassNotFoundException {

        EnumSingleton enumSingleton = EnumSingleton.INSTANCE;

        EnumSingleton istanza1 = EnumSingleton.INSTANCE;
        EnumSingleton istanza2 = EnumSingleton.INSTANCE;

        System.out.println("instance1 hashCode=" + istanza1.hashCode());
        System.out.println("instance2 hashCode=" + istanza2.hashCode());

        System.out.println(enumSingleton.getValue());
        enumSingleton.setValue(300);
        System.out.println(enumSingleton.getValue());

//        EnumSingleton.f();
    }
}

enum EnumSingleton {
    INSTANCE;

    EnumSingleton() {
        System.out.println("ciao dal Costruttore Singleton dell'Enum");
    }

    //public static void f() {};

    int value;

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
```
p.s. Molti dicono "Il miglior modo per implementare il Singleton è usando un Enum per la sua semplicità" (prendiamolo per assioma)

---
</details>

---

## Singleton Thread Sefety e NO Lazy Initialization
<details><summary> Snippet </summary>

```java
public class SingletonNoLazy {
    private SingletonNoLazy() {
        System.out.println("invocato costruttore no Lazy");
    }
 
    private static SingletonNoLazy instance = new SingletonNoLazy();
 
    public static SingletonNoLazy getInstance() {
        return instance;
    }
}
// ---
public class MainSingletonNoLazy {               //per Class.forName
    public static void main(String[] args) throws ClassNotFoundException {
        // test per confermare l'assenza di Lazy Initialization
        // il Class Loader caricherà la classe per l'esecuzione di Class.forName()
        // i membri statici esterni saranno automaticamente inizializzati:
        // verrà invocato il costruttore anche senza istanziazione della classe
        Class.forName("package...SingletonNoLazy");
    }
}
```
</details>

---

Fonti:
- [Design Patterns ITA #05: il singleton in JAVA - fcamuso](https://www.youtube.com/watch?v=CjEVbfRXGQ8&list=PL0qAPtx8YtJftwePLwLrcI1P8m0TCUsJr&index=7) - youtube Link
- https://www.geeksforgeeks.org/java-singleton-design-pattern-practices-examples/
- https://www.geeksforgeeks.org/jdbc-using-model-object-and-singleton-class/