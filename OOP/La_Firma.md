## `Signature`, la `firma dei metodi`
In Java un metodo è univocamente determinato (oltre che dalla classe a cui appartiene naturalmente) dal suo identificatore e dalla lista dei tipi dei parametri che riceve in input.  
Tutto questo definisce la signature del metodo (la firma), per richiamarlo o invocarlo in modo sintatticamente e semanticamente coerente con la sua definizione.  
In questo modo possiamo sovraccaricare un identificatore di metodo con diverse definizioni ed effettuare il cosiddetto **`overloading`**.  
Con l'espressione **`prototipo`** si indica la firma unita al tipo di ritorno del metodo.

```java
// Metodo in Java
[public|protected|private] [static] [final] Tipo
	identificatore([Tipo1 parametro1, ..., TipoN parametroN])
	[throws Eccezione1, Eccezzione2, ...] {
		// blocco di codice appartenente al metodo
	return varTipo;
}
// lo statement return è opzionale nel caso in cui Tipo sia void
```

---
