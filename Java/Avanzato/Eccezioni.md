#  Le Eccezioni

## throws
La keyword **`throws`** permette di sollevare delle eccezioni circa le operazioni di un metodo;  
Le eccezioni possono (devono) essere catturate dal codice per gestire le condizioni di errore  

## throw
throw termina l’esecuzione del blocco corrente come return ma senza che debba essere specificato un valore di ritorno.
```java
public int metodo(int a, int b) throws IllegalArgumentException {
    if(a < 0)
        throw new IllegalArgumentException("a negativa");
    if(b < 0)
        throw new IllegalArgumentException("b negativa");
    if(a == 0.0 || a == 0.0)
        return 0.0;
    double c = a * b;
    return c;
}
```

```java
// JDBC
Statement stmt = null;
try {
   stmt = conn.createStatement( );
   // ...
}
catch (SQLException e) {
   // ...
}
finally {
   stmt.close();
}
```