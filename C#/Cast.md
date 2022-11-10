# Cast in C#

Il cast è una operazione comunissima che viene effettuata tutti i giorni anche se è un [`code smell`](./../Termini_e_Concetti\Programmazione.md#code-smell) a tutti gli effetti  
Se refactorare è semplice conviene sempre farlo rispetto a castare, operazione che dovrebbe essere invece una estrema ratio.

- `DownCasting`  
Permette di esplicitare il tipo di una variabile a quello di una classe figlia o sotto-figlia.  

---
## `Hard Cast`  - (int)
```java
object animal = new Dog();
var dog = (Dog) animal;
```
Per effettuare il cast basta aggiungere (Dog).  
NOTA: Questa sintassi porta all’eccezione `InvalidCastException` qualora sia impossibile effettuare il cast.

---
## `Safe Cast`   - As
```c#
object animal = new Dog();
var dog = animal As Dog;
```
Con questo cast ho un comportamento analogo all’`hard cast` con la differenza che  
**se il cast non è possibile ritorna `null`** invece che InvalidCastException.  

---
## `Match Cast`
```c#
object animal = new Dog();
if (animal is Dog castedObject) {
    // castedObject è l'oggetto castato
}
```
Con questo cast è possibile scrivere una operazione condizionale con un `safe cast` integrato.  
Anche in questo caso non posso mai avere `InvalidCastException` in quanto, qualora non sia castabile, non entro mai nell’if.

---
## Performance
A livello di performance non c’è storia, l’hard cast è nettamente il più veloce (circa 3x rispetto al safe cast e 2x rispetto al match cast).  
##### maggiori dettagli nella fonte

---
Fonte:
- [link codicepragmatico.it](https://codicepragmatico.it/coding/c/casting-in-c/)
