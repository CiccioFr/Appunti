# Principali Classi Predefinite Java

## Classi wrapper
Ogni tipo di dato primitivo ha una classe omonima con dei metodi:

Primitive Data Type |	Wrapper Class
-----   | ----
byte 	| `Byte`
short 	| `Short`
int 	| `Integer`
long 	| `Long`
float 	| `Float`
double 	| `Double`
boolean | `Boolean`
char 	| `Character  `

A volte è necessario utilizzare classi wrapper, ad esempio quando si lavora con oggetti Collection, come **ArrayList, dove non è possibile utilizzare tipi primitivi** (l'elenco può memorizzare solo oggetti):
```java
ArrayList<int> myNumbers = new ArrayList<int>();
// Invalid !!

ArrayList<Integer> myNumbers = new ArrayList<Integer>();
// Valid
```

[Java Wrapper Classes - w3schools.com](https://www.w3schools.com/java/java_wrapper_classes.asp)

---
## INTERFACCE NOTE COMUNEMENTE USATE  
drowable deve implementare drow //per interfaccia grafica  

---
// Iterable //PERMETTE DI ITERARE SU UN OGGETTO (FOREACH)  
////foreach vuole per forza interable (next e inext) asnext (vero/falcose esiste qualcosa dopo  