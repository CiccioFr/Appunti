# **`Metodi`**  
Tutti i linguaggi di programmazione forniscono la possibilità di definire, sotto un solo nome (**`identificatore`**), interi gruppi di istruzioni o insiemi di linee di codice o blocchi di espressioni (**`statements`**), che dir si voglia.  
Questi aggregati, a seconda del linguaggio, si chiamano funzioni, procedure, subroutines o sottoprogrammi. In Java questi blocchi di codice prendono il nome di **`metodi`**.  
Convenzione: iniziare i nomi dei metodi con un _carattere minuscolo_ e proseguire con il consueto camelcase.

- deve iniziare con una lettera dell’alfabeto o _

## il Metodo Main
**`String[] args`** argomento del metodo main  
parametro che viene inizializzato all'avvio del programma con ciò che viene inserito da terminale dopo "`java nomedelprogramma`".  

## super
il metodo speciale che richiama il (metodo) costruttore della SuperClasse (padre)  

## tipi di metodi:
- metodo di istanza (pg 337)
   - System.out.println("Ciao");
- metodo di classe - static // chiamata di un metodo static
- metodo di istanza - senza static // chiamata di un metodo NON static (prima devo fare inizializzare Scanner)
     - Scanner tastiera = new Scanner(System.in);
     - String a = tastiera.nextLine();

## Metodo `toString()` -> ritorna una stringa che rappresenta un oggetto  
## Metodo `equals()` -> 

## [`Metodo clone()`](http://informatica.abaluth.com/programmazione/java/java-metodo-clone/)  
Il metodo clone() restituisce un nuovo oggetto il cui stato iniziale è una copia dell’oggetto su cui viene invocato.

Se si vuole che sia possibile copiare gli oggetti di una classe, la classe deve implementare l’interfaccia Cloneable.

Il metodo clone() che viene ereditato dalla classe Object controlla prima di tutto che la classe dell’oggetto implementi l’interfaccia Cloneable e in caso contrario lancia l’eccezione CloneNotSupportedException, altrimenti crea un nuovo oggetto e lo inizializza con una copia degli attributi dell’oggetto originale; al termine restituisce un riferimento al nuovo oggetto.

Il metodo clone() restituisce un riferimento di tipo Object; per usare l’oggetto restituito bisogna fare un cast.

Gli array implementano l’interfaccia Cloneable, quindi è possibile ottenere una copia di un array con il metodo clone().

`int[] a = {1, 2, 3};`  
`int[] b = (int[])a.clone();`  

Il metodo clone() restituisce un Object quindi bisogna fare un cast.

In genere una classe deve ridefinire il metodo clone() per renderlo pubblico (quello ereditato è protected).

Il metodo ridefinito di solito si limita a richiamare super.Clone(), intercettando l’eccezione CloneNotSupportedException che può essere lanciata.

Classe Quadrato con il metodo clone() che permette di copiare un quadrato.

```java
public class Quadrato implements Cloneable {
//...
   public Object clone() {
      try {
         Object ogg = super.clone();
         return ogg;    
      }    
      catch(CloneNotSupportedException e ){
         return null;
      }
  }    
       
}
```

## Overriding e overloading
### Overriding
Ridefinire un metodo con lo stesso nome e stesso numero e tipo di parametri della superclasse; serve per sovrascrivere il metodo, cambiandone il comportamento all’interno della sottoclasse.  
Non si possono cambiare il numero, l’ordine e il tipo dei parametri.  
I metodi ridefiniti hanno propri modificatori di accesso; si può cambiare il tipo di accesso ma solo se lo si amplia (quindi per esempio non si può sovrascrivere un metodo pubblico per renderlo privato).
La clausola throws nel metodo ridefinito può essere omessa perché viene assegnata automaticamente quella del metodo originale; nel caso sia presente, può contenere solo le eccezioni della dichiarazione originale o sottoclassi di queste; in pratica il metodo ridefinito può lanciare solo le eccezioni dell’elenco originario o eccezioni derivate da queste.
- Tipo di `ritorno covariante`  
   Il tipo di ritorno può essere una sottoclasse del tipo di ritorno del metodo originale; si parla di tipo di ritorno covariante.  
   Ciò è possibile a partire dalla versione 5.  
   
http://informatica.abaluth.com/programmazione/java/java-ereditarieta-sottoclassi-o-classi-derivate/

## [Comparazione e ordinamento degli oggetti in Java](https://www.iprogrammatori.it/articoli/java/art_comparazione-e-ordinamento-degli-oggetti-in-java_1659.aspx)