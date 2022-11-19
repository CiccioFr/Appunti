# Le Classi in Java

Segue nomenclatura `UpperCammelCase`

**`class`** istruzione per dichiarare una classe

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
- Classe che non può essere ereditata 
## `Inner`
## `POJO`
## Classe annidata / Classe interna
viene utilizzata per migliorare l'incapsulamento.  
è una classe racchiusa all'interno di un'altra classe.
- native (perché sfrutta la tecnologia JNI che rende Java dipendente dal sistema operativo).
- synchronized (riguarda i processi in Java).
- transient (riguarda i processi in Java).
- volatile (riguarda i processi in Java).
---

overloading con firma diversa       //si ha sulla stessa classe
overrider devo mantenere la firma (perché dedo mantenere il tipo //si ha sulle classi figlie

enumerazione è un tipo di dato

`tipo apparente`: tipo di dato che appare nello stack (prima dell'opatore di assegnazione =),
- posso chiamare solo i metodi del tipo apparente e le interfacce, // col (cast) anche del tipo  

`tipo effettivo`: tipo di dato che appare nello heap (quello assegnato)

parola chiave this (pg 342 libro) rappresenta l'oggetto stesso // è obbligatorio se i nomi delle variabili sono uguali, altrimenti omissibile

---
Modificatore | Classe | Costruttore | Attributo | Metodo
--|--|--|--|--
public | Si | Si | Si | Si
protected | No | Si | Si | Si
(default) | Si | Si | Si | Si
private | No | Si | Si | Si
abstract | Si | No | No | Si
final | Si | No | Si | Si
static | Si | No | Si | Si
strictfp* | Si | No | No | Si
\* Deprecato