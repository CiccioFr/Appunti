# I Qualificatori

Per attributi e metodi

Qualificatore | Descrizione
--- | --- 
**`final`**       | 	Attributi e metodi non possono essere sovrascritti (overridden) o modificati. Le variabili saranno COSTANTI.
**`static`**      | 	Attributi e metodi appartengono alla classe, piuttosto che a un oggetto (istanza della classe), essi saranno "condivisi" in caso di istanza, la modifica di un attributo si ripercuote sulgli altri oggetti
**`abstract`**    | 	Può essere utilizzato solo in una classe astratta e può essere utilizzato solo su metodi. Il metodo non ha un corpo, ad esempio `abstract void run();`. Il corpo è fornito dalla sottoclasse (ereditato da).
**`transient`**   | 	Attributi e metodi vengono ignorati durante la serializzazione dell'oggetto che li contiene
**`synchronized`**    | 	È possibile accedere ai metodi solo da un thread alla volta
**`volatile`**    | 	Il valore di un attributo non viene memorizzato nella cache del thread in locale e viene sempre letto dalla "memoria principale"

---

## `static`
https://www.html.it/pag/50140/metodi-statici-static-e-metodi-di-istanza/

```java
// static nella variabile
public class Classe {
    private String nome;
    private int id;
    private static int nextId = 0;
    public Persona(String nome){
        this.nome = nome;
        this.cognome = cognome;
        this.id = nextId++;
    }
}
```
