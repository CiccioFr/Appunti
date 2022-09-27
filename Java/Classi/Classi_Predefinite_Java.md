# le principali classi predefinite di Java

Classi wrapper (es Integer) : ogni tipo di dato primitivo ha una classe omonima con dei metodi, java riesce a convertire di default i valori
La tabella seguente mostra il tipo primitivo e la classe wrapper equivalente:
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

A volte è necessario utilizzare classi wrapper, ad esempio quando si lavora con oggetti Collection, come ArrayList, dove non è possibile utilizzare tipi primitivi (l'elenco può memorizzare solo oggetti):
```java
ArrayList<int> myNumbers = new ArrayList<int>(); // Invalid
ArrayList<Integer> myNumbers = new ArrayList<Integer>(); // Valid
```

[Java Wrapper Classes - w3schools.com](https://www.w3schools.com/java/java_wrapper_classes.asp)