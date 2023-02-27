# Blocchi
Un blocco di istruzioni (enunciati, comandi) e viene trattato come fosse un'unica istruzione

##  Bloccho di **Inizializzazione Statica**
parti di codice anonime racchiuse tra parentesi graffe ed eseguite in fase di caricamento della classe.

##  Bloccho di **Istanza**
parti di codice anonime racchiuse tra parentesi graffe ed eseguite in fase di creazione di un oggetto della classe.

## Criteri che determinano l’ordine di esecuzione 
- I blocchi statici vengono eseguiti prima dei blocchi di istanza.

<details open><summary> snippet </summary>

```java
public class OCAJP7Certification {
    
    public OCAJP7Certification() {
        System.out.println("Constructor (3)");
	}
	
	static { System.out.println("Static Block (1))"); }
	
	public static void main(String[] args) {
        OCAJP7Certification oca = new OCAJP7Certification();
	}
	
	{ System.out.println("Instance Block (2)"); } 
	
}
```
```
OUTPUT:

Static Block (1)
Instance Block (2)
Constructor (3)
```
</details>
