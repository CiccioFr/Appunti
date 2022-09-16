```java
public class Classe {
	public static void main(String[] args) {
		System.out.println("Hello World!");
	}
}
```

```java
// confronta String, restituisce un boolean true se testo è uguale
// public boolean equals(String anotherString)
String testo = "Testo";
boolean bool1 = testo.equals("testo"); // false
boolean bool2 = testo.equalsIgnoreCase("testo"); // true
```

```java
//conversioni
int n = Integer.parseInt(var);
double n2 = Double.parseDouble(var);
String nrString = Integer.toString(nr);
String nrString2 = String.valueOf(var);
```

```java
//numero random con metodo della Classe Math
int nrCasuale = (int) (Math.random() * 100000);
//numero random con Oggetto
import java.util.Random;	// import è una diretiva
Random random = new Random();
int numRandom = random.nextInt(100000);
```

```java
import java.util.Scanner;
Scanner tastiera = new Scanner(System.in);
int varInt = tastiera.nextInt();
String varString = tastiera.nextLine();
```

```java
//estrarre testo da una stringa
String var = varString.substring(i, varString.length());
//estrarre un carattere da una stringa
char var = varString.charAt(nrIndice);
```
tipi di metodi:  
System.out.println();  
Scanner tastiera = new Scanner(System.in)  