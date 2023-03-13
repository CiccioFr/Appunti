# `Try-with-resources`

Il costrutto `try-with-resources` è stato introdotto in Java 7 per semplificare la gestione delle risorse che necessitano di essere chiuse in modo esplicito, come ad esempio file, socket, connessioni al database, ecc.

Prima dell'introduzione di questo costrutto, era necessario gestire la chiusura delle risorse esplicitamente utilizzando un blocco finally, anche in caso di eccezione. Questo rendeva il codice più complesso e difficile da leggere e mantenere. Inoltre, in alcuni casi era possibile che la chiusura delle risorse non venisse eseguita correttamente, portando a potenziali problemi di memoria o di prestazioni.

Il costrutto `try-with-resources` semplifica notevolmente la gestione delle risorse perché consente di dichiarare e inizializzare una o più risorse all'interno del blocco try, separandole da un punto e virgola. Al termine del blocco try, le risorse vengono chiuse automaticamente in modo sicuro e controllato, anche in caso di eccezione, tramite il metodo close().

La sintassi del costrutto:

```java
try (risorsa1; risorsa2; ...; risorsaN) {
    // codice che utilizza le risorse
} catch (Exception e) {
    // gestione dell'eccezione
}
```
### Le risorse che devono essere chiuse alla fine del blocco try vengono elencate nel [`resource specification header`](#resource-specification-header) (tra parentesi tonde dopo la parola chiave try).
### **Le risorse devono implementare l'interfaccia `java.lang.AutoCloseable` o `java.io.Closeable`**, che definiscono il metodo `close()` chiamato automaticamente alla fine del blocco try.
### In questo modo, le risorse vengono create e gestite all'interno del blocco try, garantisce una automatica e corretta chiususa alla fine del blocco, anche in caso di eccezione.
### Le risorse dichiarate vengono automaticamente chiuse in ordine inverso rispetto alla loro dichiarazione.

L'utilizzo del costrutto `try-with-resources` è considerato una `best practice` perché non è necessario preoccuparsi di chiudere manualmente le risorse, ne semplifica notevolmente la gestione, rende il codice più leggibile e manutenibile, e previene potenziali problemi di memoria e di prestazioni.  
Altro vantaggio di questo approccio è che non è necessario creare un blocco `finally` per chiudere la risorsa.

Snippet per la lettura di un file di testo:
```java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

- [Documentazione ufficiale Oracle](https://docs.oracle.com/javase/7/docs/technotes/guides/language/try-with-resources.html)

---
## `Resource specification header`
La parte di codice tra le parentesi tonde dopo la keyword try si chiama "`resource specification header`" o "header di specifica della risorsa".

Il "`resource specification header`" contiene una o più dichiarazioni di risorse, separate da punto e virgola. Una dichiarazione di risorsa consiste nel tipo della risorsa e il nome della variabile che la rappresenta, seguito da un'assegnazione iniziale.

Il costrutto `try-with-resources` utilizza questo header per specificare le risorse che devono essere gestite e chiuse automaticamente alla fine del blocco try.