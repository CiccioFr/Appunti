# `:: Method References`

- Sintassi per poter invocare un metodo o un costruttore già esistente.
- Viene utilizzato per fare riferimento al metodo dell'interfaccia funzionale
- aggiunto con java8

## Sintassi Generale
### `NomeClasse::metodoISTANZA`
- Il **primo parametro è l’oggetto** su cui è invocato
- gli eventuali altri parametri sono passati al metodo
```java
BiPredicate<String,String> eqstr = (s1,s2) -> s1.equals(s2);
// diventa
BiPredicate<String,String> eqstr = String::equals;
eqstr.test(tmp, tmp2);
// ossia il metodo equals sarà chiamato su tmp:
tmp.equals(tmp2);
```
### `NomeClasse::metodoSTATICO`
- Tutti i parametri sono passati al metodo
### `oggetto::metodoISTANZA`
- Tutti i parametri sono passati al metodo
### `String:new`
- E’ possibile anche invocare il **costruttore** con la stessa sintassi:

```java
@FunctionalInterface
interface Sayable{  
    void say();  
}
public class MethodReference {
    public static void saySomething(){
        System.out.println("Hello, this is static method.");
    }
    public static void main(String[] args) {
        // Referring static method
        Sayable sayable = MethodReference::saySomething;
        // Calling interface method
        sayable.say();
    }
}
```

---
argomenti correlati:
- [Lambda](./Lambda.md)
- [Interfaccia Funzionale](./Classi/Classi.md#interfaccia-funzionale-functional-interface)

---
### Link:
https://www.vegatraining.eu/java-functional-interfaces/

https://www.javatpoint.com/java-8-method-reference

https://stackoverflow.com/questions/20001427/double-colon-operator-in-java-8

https://www.html.it/pag/68210/la-keyword-in-java/