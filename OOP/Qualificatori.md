# I Qualificatori

Per attributi e metodi

Qualificatore | Descrizione
--- | --- 
final       | 	Attributi e metodi non possono essere sovrascritti (overridden) o modificati
static      | 	Attributes and methods belongs to the class, rather than an object
abstract    | 	Can only be used in an abstract class, and can only be used on methods. The method does not have a body, for example abstract void run();. The body is provided by the subclass (inherited from). You will learn more about inheritance and abstraction in the Inheritance and Abstraction chapters
transient   | 	Attributes and methods are skipped when serializing the object containing them
synchronized    | 	Methods can only be accessed by one thread at a time
volatile    | 	The value of an attribute is not cached thread-locally, and is always read from the "main memory"

---

## `static`
https://www.html.it/pag/50140/metodi-statici-static-e-metodi-di-istanza/

metodo di classe con static Es. System.out.println(...)     // lo uso chiamando la Classe
// con static possiamo usare il metodo senza istanziarlo
metodo di istanza SENZA STATIC: (devo prima istanziare la classe)
 -- static nella variabile
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

## `final`
Il qualificatore final serve, nel caso dei metodi, per rendere un metodo non ridefinibile dalle sottoclassi:
se un metodo viene contrassegnato come final le sottoclassi lo potranno utilizzare e lo erediteranno
ma non potranno fare override del metodo.
