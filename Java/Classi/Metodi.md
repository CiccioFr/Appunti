## **`metodi`**  
Tutti i linguaggi di programmazione forniscono la possibilità di definire, sotto un solo nome (**`identificatore`**), interi gruppi di istruzioni o insiemi di linee di codice o blocchi di espressioni (**`statements`**), che dir si voglia.  
Questi aggregati, a seconda del linguaggio, si chiamano funzioni, procedure, subroutines o sottoprogrammi. In Java questi blocchi di codice prendono il nome di **`metodi`**.  
Convenzione: iniziare i nomi dei metodi con un _carattere minuscolo_ e proseguire con il consueto camelcase.

- deve iniziare con una lettera dell’alfabeto o _

**`String[] args`** del metodo main è un parametro che viene inizializzato all'avvio del programma con ciò che viene inserito da terminale dopo "java [nomedelprogramma]".

tipi di metodi:     -- metodo di istanza (pg 337)
 - metodo di classe - static // chiamata di un metodo static
     - System.out.println("Ciao");
 - metodo di istanza - senza static // chiamata di un metodo NON static (prima devo fare inizializzare Scanner)
     - Scanner tastiera = new Scanner(System.in);
     - String a = tastiera.nextLine();

Metodo `toString()` -> ritorna una stringa che rappresenta un oggetto  
Metodo `equals()` -> 