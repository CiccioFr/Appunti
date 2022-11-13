# Le Classi in Java

deve iniziare con una lettera dell’alfabeto Maiuscola (UpperCammelCase)

**`class`** istruzione per dichiarare una classe

# Tipi di Classi

## `Interface`
```java
public interface IInterface {
    const int;
    public void faQualcosa() {}
}
```
## `Abstract`
## `Concrete`

```java
class Sottoclasse implements IInterface extends Superclasse1, Superclasse2 {
    // codice.. 
}
```

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