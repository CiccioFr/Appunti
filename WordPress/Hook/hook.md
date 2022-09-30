# Agganciarsi ad un Hook
## Tipi
```PHP
add_action( 'nome_HOOK', 'your_function_name' );  
function your_function_name() {  
  // Codice  
}  
```
```PHP
add_filter( 'nome_HOOK', 'your_function_name' );  
function your_function_name( $variable ) {  
  // Codice  
  return $variable;  
}  
```
---
## Dove e Come scriverli
- nel file [functions.php](./functions.php.md)  
> `add_action` ( '***nome_HOOK***', '**nome_funzione**', [priorità], [argomenti_accettati] );  

```PHP
function **nome_funzione**() {  
  register_taxonomy( ... );
  register_taxonomy( ... );
}
```

> \* [register_taxonomy](https://developer.wordpress.org/reference/functions/register_taxonomy/)

---
## Tipi di Hook:
> ### Filter Hooks
- 
> ### Action Hooks
##### consente di gestire esecuzioni condizionate al raggiungimento di un determinato punto previsto per un evento; la risposta (e quindi l’esecuzione) potrebbe essere l’invio di un’email così come la visualizzazione di uno specifico contenuto
- `wp_head`
- `wp_footer`
> ### altri Hooks
- `woocommerce_product_meta_end`

---
## Aggiungere un proprio Hook
```PHP
<?php do_action( 'nome_hook' ); ?>
```
- posizionare in _qualunque punto **nel file del tema**_

---
## Rimuovere un Hook
- nel file functions.php  
```PHP
remove_action( 'nome_hook', 'nome_funzione' );

remove_filter( ... );
```
---