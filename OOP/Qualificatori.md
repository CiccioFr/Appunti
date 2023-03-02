# I Qualificatori

Qualificatore | Classe | Metodi | Attributi
--- | --- | - | -
**`final`**       | Non potrà essere istanziata | non potranno essere sovrascritti (overridden). | definite come COSTANTI.
**`static`**      | | appartengono alla classe, non potranno interagire con le variabili di istanza, ma solamente con quelle statiche. | | appartengono alla classe, piuttosto che a un oggetto (istanza della classe), essi saranno "condivisi" in caso di istanza, la modifica di un attributo si ripercuote sugli oggetti istanziati
**`abstract`**    | Deve avere almeno un metodo astratto | Può essere utilizzato solo in una classe astratta e può essere utilizzato solo su metodi. Il metodo non ha un corpo, ad esempio `abstract void run();`. Dovrà essere implementato dalla Classe che estende
**`transient`**   | | | Verranno ignorati durante la serializzazione dell'oggetto
**`synchronized`** | | È possibile accedere ai metodi solo da un thread alla volta
**`volatile`**    | | Il valore di un attributo non viene memorizzato nella cache del thread in locale e viene sempre letto dalla "memoria principale"

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
