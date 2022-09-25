- Metodo - deve iniziare con una lettera dell’alfabeto o _

**`String[] args`** del metodo main è un parametro che viene inizializzato all'avvio del programma con ciò che viene inserito da terminale dopo "java [nomedelprogramma]".

tipi di metodi:     -- metodo di istanza (pg 337)
 - metodo di classe - static // chiamata di un metodo static
     - System.out.println("Ciao");
 - metodo di istanza - senza static // chiamata di un metodo NON static (prima devo fare inizializzare Scanner)
     - Scanner tastiera = new Scanner(System.in);
     - String a = tastiera.nextLine();