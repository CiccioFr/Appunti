## [Creates or modifies a taxonomy object - developer.wordpress.org](https://developer.wordpress.org/reference/functions/register_taxonomy/)
- **`register_taxonomy()`** - [link wordpress.org](https://developer.wordpress.org/reference/functions/register_taxonomy/)

---
[creare una tassonomia](https://www.smashingmagazine.com/2012/01/create-custom-taxonomies-wordpress/)


---
nel file `functions.php`:
> ### `require_once( get_stylesheet_directory() . '/taxonomy-tassonomia.php' );`  

---
nel file `taxonomy-tassonomia.php`  

> ### `add_action( 'init', 'funzione', 10 );`
 * la Funzione nativa `add_action()` esegue un algoritmo in un punto preciso del codice
 * @par1 -> \<nomeHook>
    - init per averlo in pannello wp-admin
    - altri hook per inserirlo in pg-web
 * @par2 -> \<funzione> (che ad es. genera una tassonomia)
 * @par3 -> int [priorità elencazione, Def. 10]
 * @par3 -> int [numero di argomenti accettati dalla funzione]  
 * nel Blocco:  
    - `the_terms();` per pg-web, permette la visualizzazione delle custom tassonomie

---
## Crea una custom taxonomies
```PHP
function create_concerti() {  
// Add new "artisti_di_strada" taxonomy to Posts  
    /**   
    * @par1 -> nome della tassonomia  
    * @par2 -> tipo di oggetto a cui associare la tassonomia  
    * @par3 -> Array o query string dei "parametri" visualizzati  
    * @return -> creazione  
    */  
register_taxonomy('concerti', 'product', array(   // come collegarlo ad artisti?  
    // Hierarchical taxonomy (like categories)  
    'hierarchical' => true,  
    // This array of options controls the labels displayed in the WordPress Admin UI  
    'labels' => array(  
    'name' => _x( 'Concerti', 'taxonomy general name' ),  
    'singular_name' => _x( 'Concerto', 'taxonomy singular name' ),  
    'search_items' =>  __( 'Cerca Concerti' ),  
    'all_items' => __( 'All Concerti' ),  
    'parent_item' => __( 'Parent Concerto' ), // approfondire  
    'parent_item_colon' => __( 'Parent Concerto:' ),  
    'edit_item' => __( 'Edit Artista' ),  
    'update_item' => __( 'Update Concerto' ),  
    'add_new_item' => __( 'Aggiungi nuovo Concerto' ),  
    'new_item_name' => __( 'Luogo del Concerto' ),  
    'menu_name' => __( 'Concerti' ),  
    ),  
    // Control the slugs used for this taxonomy  
    'rewrite' => array(  
    'slug' => 'concerti', // This controls the base slug that will display before each term  
    'with_front' => false, // Don't display the category base before "/artisti_di_strada/"  
    'hierarchical' => true // This will allow URL's like "/artisti_di_strada/../../"  
    ),  
    ));  
}
```