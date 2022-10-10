```java
// tipi interi
byte b = 1;
short sh = 2;
int i = 3;          // predefinito
int altr = 123_456_789;
long l = 5L;

// tipi decimali
float f = 4.4F;
double d = 2.2d;    // predefinito

// tipi dati carattere
char c = 'c'; //rappresentati internamente come numeri
char euro = '\u20ac'; //rappresentati internamente come numeri
char lettera = 'a';
int ascii = (int) lettera;
System.out.println(ascii);  // a
ascii++;
ascii += 1;
System.out.println((char) ascii);

// Costanti
final double PI_GRECO = 3.14;

//Cast implicito -> Promozione di Tipo
int intero = 55;
long lungo = intero;
System.out.println("Max long = " + lungo.MAX_VALUE);


// istanceof -> verifica il tipo di dato, restituisce un bool
// Wrapper -> estendono le funzionalità dei tipi trimitivi, e ne estendono le potenzialità
Boolean bool = true;
Character carattere = '@';
Integer numeroIntero = 123;
Double virgola = 1.2;
Byte b1 = 1;

byte bMax = Byte.MAX_VALUE;
byte bMin = Byte.MIN_VALUE;

// uso dei metodi della classe Wrapper
System.out.println(Character.toUpperCase('a'));
String str = "TruE".toLowerCase();
boolean b5 = Boolean.parseBoolean(str);
System.out.println(b5);

int y = 0;
// boolean bx = (boolean)y; // NO

String uno = "1";
int numUno = Integer.parseInt(uno);
System.out.println(numUno);

int num1 = 3;
int num2 = 5;
Integer massimo = Integer.max(num1, num2);
System.out.println("Il maggiore è " + massimo);
```