# Costrutti Condizionali

```java
Calendar calendario = Calendar.getInstance();
int giorno = calendario.get(Calendar.DAY_OF_WEEK);
switch (giorno) {
    case 1:
        System.out.println("oggi è domenica");
        break;
    case 7:
        System.out.println("oggi è sabato");
        break;
    default:
        System.out.println("oggi è un giorno Feriale");
        break;
}

String $lettera = "parola";
System.out.println($lettera);

String lettera = "i";
switch (lettera) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        System.out.println("è una vocale");
        break;
    default:
        System.out.println("è una consonante");
        break;
}

String messaggio;
switch (lettera) {
    case "a","e","i","o","u" -> System.out.println("è una vosale");
        // lambda expression
    default -> System.out.println("è una consonante");
}
```