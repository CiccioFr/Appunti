# Le Classi in Java

deve iniziare con una lettera dell’alfabeto Maiuscola (UpperCammelCase)

**`class`** istruzione per dichiarare una classe

# Tipi di Classi

Ereditarietà:   Superclasse (classe padre)  ->  Sottoclasse (classe Figlia)
                    Sottoclasse extends Superclasse

[Link](https://ita.myservername.com/types-classes-java#Class_Types_In_Java_8211_Introduction)

- Static
- Final
- Abstract
    - **`astrazione`** - nascondere i dettagli implementativi
- Concrete
- Inner
- POJO

overloading con firma diversa       //si ha sulla stessa classe
overrider devo mantenere la firma (perché dedo mantenere il tipo //si ha sulle classi figlie

enumerazione è un tipo di dato

tipo apparente: tipo di dato che appare nello stack (prima dell'opatore di assegnazione =),
 - posso chiamare solo i metodi del tipo apparente e le interfacce, // col (cast) anche del tipo
tipo effettivo: tipo di dato che appare nello heap (quello assegnato)

# Principali Classi Predefinite Java

## Classi wrapper
Ogni tipo di dato primitivo ha una classe omonima con dei metodi:

Primitive Data Type |	Wrapper Class
-----   | ----
byte 	| Byte
short 	| Short
int 	| Integer
long 	| Long
float 	| Float
double 	| Double
boolean | Boolean
char 	| Character  

A volte è necessario utilizzare classi wrapper, ad esempio quando si lavora con oggetti Collection, come **ArrayList, dove non è possibile utilizzare tipi primitivi** (l'elenco può memorizzare solo oggetti):
```java
ArrayList<int> myNumbers = new ArrayList<int>();
// Invalid

ArrayList<Integer> myNumbers = new ArrayList<Integer>();
// Valid
```

[Java Wrapper Classes - w3schools.com](https://www.w3schools.com/java/java_wrapper_classes.asp)


-   ho un pò di confusione nel confronto tra classi estese e classi importate