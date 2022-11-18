

# Variabile

## `transient`
Per impostazione predefinita, tutte le variabili dell'oggetto vengono convertite in uno stato persistente.  
`transient` indica che un campo non dovrebbe far parte del processo di serializzazione.  
La serializzazione è il processo che rende persistente lo stato dell'oggetto. Ciò significa che lo stato dell'oggetto viene convertito in un flusso di byte da utilizzare per la persistenza (ad esempio la memorizzazione di byte in un file) o il trasferimento (ad esempio l'invio di byte attraverso una rete).  
Allo stesso modo, possiamo usare la deserializzazione per riportare lo stato dell'oggetto dai byte. Questo è uno dei concetti importanti nella programmazione Java perché la serializzazione è utilizzata principalmente nella programmazione di rete.  
Gli oggetti che devono essere trasmessi attraverso la rete devono essere convertiti in byte. A tale scopo, ogni classe o interfaccia deve implementare l'interfaccia Serializable. È un'interfaccia marker senza alcun metodo.
```java
class Classe implements Serializable{
    private String userName;
    private transient String password;
    public Classe (String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}
public class TransientExample{
    public static void main(String args[]) throws Exception {
        // scrittura file / invio in rete
    }
}
// Output: userName: Pippo - password: null
```
fonte [stackoverflow.com](https://stackoverflow.com/questions/910374/why-does-java-have-transient-fields)