# Le Classi in Java

- Segue nomenclatura `PascalCase`
- `class` istruzione per dichiarare una classe
- `final` indica che la classe **non può essere estesa**  
    Se una classe è dichiarata final il compilatore genera chiamate di metodi più efficienti.  
    Sono dichiarate final per esempio la classi System, Math e String.

---

# Tipi di Classi

- Interfaccia (diciamo normale)
- Interfaccia Funzionale
- Classe Astratta
- Classe Concreta
- `inner` class // (non static) (interna)
- `nested` class // (static) (nidificata).  
    https://docs.oracle.com/javase/tutorial/java/javaOO/nested.html  
    https://www.developer.com/design/understanding-java-nested-classes-and-java-inner-classes/
- Classe Anonima
- Record
- Enum
- Sealed
- `POJO` vs JavaBeans
https://www.geeksforgeeks.org/pojo-vs-java-beans/

### semplice nomenclatura per l'ereditarietà
- SuperClasse
- SottoClasse

---

## `Interfacia` - il contratto con lo Sviluppatore
- utilizza i comportamenti e non l'esistenza  
    Un’interfaccia dovrebbe astrarre un comportamento che più classi potrebbero implementare, e un comportamento non si dovrebbe istanziare. Infatti non dovrebbero esistere oggetti che rappresentano un comportamento. Spesso infatti le interfacce hanno nomi che richiamano aggettivi e comportamenti (Pesabile, Comparable, Cloneable, etc.). Semmai dovrebbero esistere oggetti che implementano uno più comportamenti. Le interfacce dovrebbero astrarre comportamenti che oggetti diversi potrebbero implementare.
- risponde alla domanda "HA UN COMPORTAMENTO?"
- di default è `public`
- i metodi non hanno corpo
- gli attributi per definizione sono `public static final` e DEVONO essere inizializzati
```java
[public] interface IInterface extends Int1, Int2 {
    String TXT = null;
    public static final int NR = 5;

    public void faQualcosa(char n);
}
```

---

## Interfaccia Funzionale (functional interface)
Interfacce che definiscono **un solo metodo astratto** (SAM, Single Abstract Method) e zero o più metodi di default o metodi statici. Grazie a questa particolarità **possono essere implementate tramite un'espressione lambda**.  
Sono generalmente marcate con l’annotazione `@FunctionalInterface`, anche se non è obbligatorio.  
- https://www.html.it/pag/68110/le-interfacce-funzionali-in-java/
- https://italiancoders.it/java-8-parte-1-optional-interfacce-funzionali/

argomenti correlati:
- Alcune [Interfaccie Funzionali](../CodicePredefinito/ReadMe.md#interfacce-funzionali-usate-con-lambda)
- [`:: Method References`](../MethodReferences.md)
- [Lambda Expression](../LambdaExpression.md#lambda-expression)

---

## Classe `Abstract`
Le classi astratte dovrebbero astrarre oggetti troppo generici per poter essere istanziati.
- Ha almeno un metodo astratto (e senza corpo)
- Non si può istanziare
```java
abstract class AbstractClass extends Abstr implements Int1, Int2 {
    public abstract void animalSound();

    public void sleep() {
        System.out.println("Zzz");
    }
}
```

---

## Classe `Concreta`
```java
class SottoClasse extends AbstractClass implements IInterface, IInterface2 {
    @Override
    public void faQualcosa(char n) {
        // codice.. 
    }
    @Override
    public void sleep() {
        System.out.println("Notte");
    }
    // codice.. 
}
```
Tip: l'ereditarietà rappresenta una relazione di esistenza!

[Link](https://ita.myservername.com/types-classes-java#Class_Types_In_Java_8211_Introduction)

---

## `inner` class // (non static) (interna)

---

## `nested` class // (static) (nidificata).  

---

## Classe Anonima
```java
public interface MyInterface {
   public void doSomething();
}

public class Main {
    public static void main(String[] args) {
        MyInterface myInterface = new MyInterface() {
            @Override
            public void doSomething() {
                System.out.println("Questa è una classe anonima!");
            }
        };
        myInterface.doSomething();
    }
}
```

---

## Classe Record
Progettata per implementare classi che rappresentano dati, ergo contenitori di **dati immutabili**.

Nella compilazione, il compilatore avrà inserito una classe (risultato della conversione del record) che:
- è dichiarata `final`;
- definisce automaticamente un costruttore che prende come parametri l’header;
- definisce i metodi accessori (get) di tutti i campi dichiarati nell’header (non c'è set);
- ridefinisce di default un override dei metodi `toString`, `equals` e `hashCode` ereditati dalla classe Object.

### Snippet classe record base valida
```java
public record Quadro(String titolo, String autore, int prezzo) { }
```

### Costruttore canonico compatto
Caratterizzato dal fatto che non dichiara la lista dei parametri. Notare che accanto all’identificatore del costruttore non sono presenti neanche le parentesi tonde.
```java
public record Foto(String formato, boolean aColori) {
    public Foto {
        if (formato.length() < 5) throw new IllegalArgumentException(
            "Descrizione del formato troppo breve");
    }
}
```
### Scheda [Classe Record](./ClasseRecord.md)

---

## Classe Enum
possono implementare interfacce, ma non estendere classi, dato che in fase di compilazione vengono trasformate in classi che estendono la classe java.lang.Enum.

---

