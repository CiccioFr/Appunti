# Le Classi in Java

- Segue nomenclatura `PascalCase`
- `class` istruzione per dichiarare una classe
- `final` indica che la classe **non può essere estesa**  
    Se una classe è dichiarata final il compilatore genera chiamate di metodi più efficienti.  
    Sono dichiarate final per esempio la classi System, Math e String.


# Tipi di Classi

## `Interface` - il contratto con lo Sviluppatore
- utilizza i comportamenti e non l'esistenza
- risponde alla domanda "HA UN COMPORTAMENTO?"
- di default è `public`, si può usare solo public
- i metodi non hanno corpo
- gli attributi per definizione sono `public static final` e DEVONO essere inizializzati
```java
[public] interface IInterface extends Int1, Int2 {
    String TXT = null;
    public static final int NR = 5;

    public void faQualcosa(char n);
}
```
## Interfaccia Funzionale (functional interface)
Interfacce che definiscono **un solo metodo astratto** (SAM, Single Abstract Method) e zero o più metodi di default o metodi statici. Grazie a questa particolarità **possono essere implementate tramite un'espressione lambda**.  
Sono generalmente marcate con l’annotazione `@FunctionalInterface`, anche se non è obbligatorio.  
Le lambda sono usate con le funcional interface.  
- https://www.html.it/pag/68110/le-interfacce-funzionali-in-java/
- https://italiancoders.it/java-8-parte-1-optional-interfacce-funzionali/


## `Abstract`
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

## `Concrete`
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

# Modificatori di Accesso delle Classi
## `Static`
## `Final`
- Classe che non può essere estesa/ereditata 
## `Inner`
## `POJO`
## Classe interna
- viene utilizzata per *migliorare l'incapsulamento*.  
- è una classe racchiusa all'interno di un'altra classe.

---
- `native` (perché sfrutta la tecnologia JNI che rende Java dipendente dal sistema operativo).
- `synchronized` (riguarda i processi in Java).
- `transient` (riguarda i processi in Java).
- `volatile` (riguarda i processi in Java).
---

enumerazione è un tipo di dato

`tipo apparente`: tipo di dato che appare nello stack (prima dell'opatore di assegnazione =),
- posso chiamare solo i metodi del tipo apparente e le interfacce, // col (cast) anche del tipo  

`tipo effettivo`: tipo di dato che appare nello heap (quello assegnato)
```java
List lista = new ArrayList();
```

parola chiave this (pg 342 libro) rappresenta l'oggetto stesso // è obbligatorio se i nomi delle variabili sono uguali, altrimenti omissibile
