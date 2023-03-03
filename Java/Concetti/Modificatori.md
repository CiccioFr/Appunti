# Modificatori

Modificatore | Classe | Costruttore |  Metodo | Attributo
--|--|--|--|--
public | Si | Si | Si | Si
protected | No | Si | Si | Si
(default) | Si | Si | Si | Si
private | No | Si | Si | Si
abstract | Si | No | Si | No
final | Si | No | Si | Si
static | Nested | No | Si | Si
strictfp* | Si | No | Si | No
\* Deprecato

---
## Modificatori di Accesso
stabiliscono il livello di visibilità da altre classi  

`static` rende l’attributo o il metodo di classe

`final`
- ad un attributo: definisce una costante
- sd un metodo: non può essere ridefinito nelle sottoclassi.

---
- default method nelle interfacce
- static method nelle intefacce

---
## Modificatori di Non Accesso

### `transient`
- Esclude il valore dal processo di serializzazione (conversione in un flusso di byte da utilizzare per la persistenza)
```java
private transient String password;
```
vedi [serializzazione/persistenza](../../Termini_e_Concetti%5CProgrammazione.md#serializzazione---persistenza-del-dato)  
Note: - Per impostazione predefinita, tutte le variabili dell'oggetto vengono convertite in uno **stato persistente**.  

<details><summary> Snippet </summary>

Gli oggetti che devono essere trasmessi attraverso la rete devono essere convertiti in byte. A tale scopo, in Java, ogni classe o interfaccia deve implementare l'interfaccia Serializable. È un'interfaccia marker senza alcun metodo.
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
</details>

---
https://www.youtube.com/watch?v=yqgSaRE9egk