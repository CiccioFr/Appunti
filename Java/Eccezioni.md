JDBC: ** nel try-catch conviene mettere il finally?
```java
Statement stmt = null;
try {
   stmt = conn.createStatement( );
   . . .
}
catch (SQLException e) {
   . . .
}
finally {
   stmt.close();
}
```



```java
public double areaParallelogramma(double base, double altezza)
		throws IllegalArgumentException {
	if(base < 0)
		throw new IllegalArgumentException("base negativa");
	if(altezza < 0)
		throw new IllegalArgumentException("altezza negativa");
	if(base == 0.0 || altezza == 0.0)
		return 0.0;
	double a = base * altezza;
	return a;
}
```
[definizione throws](../Definizioni_e_Concetti.md/#throws)

 -- throw
throw termina l’esecuzione del blocco corrente come return ma senza che debba essere specificato un valore di ritorno.
public int metodo(int a, int b)
    throws IllegalArgumentException {
        if(a < 0)
            throw new IllegalArgumentException("a negativa");
        if(b < 0)
            throw new IllegalArgumentException("b negativa");
        if(a == 0.0 || a == 0.0)
            return 0.0;
        double c = a * b;
    return c;
}