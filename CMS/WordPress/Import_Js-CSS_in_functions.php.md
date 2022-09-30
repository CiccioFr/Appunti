## [Theme-child](https://developer.wordpress.org/themes/advanced-topics/child-themes/)

[guida kinsta.com](https://kinsta.com/it/blog/wp-enqueue-scripts/) ***UP***  

## Accodarsi al codice del Tema Padre
> Se il tema genitore carica il suo stile usando una funzione che inizia con `get_template`, come `get_template_directory()` e `get_template_directory_uri()`, il tema figlio deve caricare solo gli stili figlio, usando l'handle del genitore nel parametro di dipendenza.
	
```PHP
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );  
function my_theme_enqueue_styles() {  
    wp_enqueue_style( 'child-style',
    get_stylesheet_uri(),  
    array( 'parenthandle' ),   
    wp_get_theme()->get('Version') 
        // this only works if you have Version in the style header  
    );  
}  
```

> Se il tema padre carica il suo stile usando una funzione che inizia con `get_stylesheet`, come `get_stylesheet_directory()` e `get_stylesheet_directory_uri()`, il tema figlio deve caricare sia i fogli di stile padre che figlio. Assicurati di utilizzare lo stesso nome dell'handle utilizzato dal genitore per gli stili padre.

```PHP
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );  
function my_theme_enqueue_styles() {  
    $parenthandle = 'parent-style'; 
        // This is 'twentyfifteen-style' for the Twenty Fifteen theme.  
    $theme = wp_get_theme();  
    wp_enqueue_style( 
        $parenthandle,   
        get_template_directory_uri() . '/style.css',   
        array(),  
            // if the parent theme code has a dependency, copy it to here  
        $theme->parent()->get('Version')  
    );  
    wp_enqueue_style( 'child-style', get_stylesheet_uri(),  
        array( $parenthandle ),  
        $theme->get('Version') 
            // this only works if you have Version in the style header  
    );  
}
```

---

Per caricarla nel tema utilizzare la funzione `wp_enqueue_script()` nel file `functions.php` o nei file del tema (header.php o footer.php):

```PHP
if(!is_admin()) {
    wp_enqueue_script('jquery');
}
```

---
Usare una copia di **jQuery diversa da quella di WordPress**: nel file functions.php:

```PHP
if(!is_admin()) {
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js', '1.0', true);
    wp_enqueue_script('jquery');
}
```
In questo caso abbiamo sostituito nel nostro tema la copia locale con quella remota di Google.

---
## [Aggiungere CSS esterni](https://nicholasmarmonti.com/wordpress/functions-php/#aggiungere-css-js)
> ### **`wp_enqueue_style()`** importa CSS esterni
```PHP
function addThemeScripts() {  
    wp_enqueue_style( 'new-style', 
    get_stylesheet_directory_uri() . '/css/new-style.css', 
    array(), 
    '', 
    'all' // $media per i CSS e viene utilizzato per specificare il tipo di media (es. media="screen")
    );  
}  
add_action( 'wp_enqueue_scripts', 'addThemeScripts', 1);
```

## [Aggiungere JavaScript esterni](https://nicholasmarmonti.com/wordpress/functions-php/#aggiungere-css-js)
> ### **`wp_enqueue_script()`** importa JavaScript esterni.
```PHP
function addThemeScripts() {  
    wp_enqueue_script( 'new-script',    // nome
    get_stylesheet_directory_uri() . '/js/new-script.js', // path
    array(), // gestione delle dipendenze: array degli script e degli stili registrati, che devono essere caricati prima che l’asset corrente sia accodato
    // esempio: array( 'jquery' )
    // *Non c’è bisogno di registrare o accodare jQuery, perché fa già parte di WordPress
    '', // numero di versione
    true // true collocherà gli script nel footer
         // false (Default) gli script saranno aggiunti all’header
    );  
}  
add_action( 'wp_enqueue_scripts', 'addThemeScripts');  
```
---
## [Inserire codice nella testata](https://nicholasmarmonti.com/wordpress/functions-php/#inserire-codice-testata) \<head>
> Per aggiungere codice o integrare **CSS** nella testata senza manipolare il tema.  
> **SBAGLIATO!!** [fonte tutsplus](https://webdesign.tutsplus.com/it/tutorials/loading-css-into-wordpress-the-right-way--cms-20402)

```PHP
function add_codeToHead() {  
    $code = '<style rel="stylesheet" type="text/css" src="/css/style.css" media="all" />';  
    echo $code;  
}  
add_action('wp_head', 'add_codeToHead', 1);  
```
---  
## [Inserire codice nel footer](https://nicholasmarmonti.com/wordpress/functions-php/#inserire-codice-footer)  
> Per aggiungere codice o integrare **JavaScript** nel footer senza manipolare il tema.  

```PHP
function add_codeToFooter() {  
    $code = '<script type="text/javascript" src="/js/library.js"></script>';  
    echo $code;  
}  
add_action('wp_footer', 'add_codeToFooter');  
```
---  
## [Consentire l’upload di qualsiasi file](https://nicholasmarmonti.com/wordpress/functions-php/#consentire-upload-file)  
> Per impostazione predefinita, WordPress permette di caricare pochi tipi di file (tipicamente quelli multimediali comuni come .png e .  jpg). È però possibile estendere la possibilità di upload a qualsiasi tipo di file.  

```PHP
    function my_myme_types($mime_types){  
        $mime_types['svg'] = 'image/svg+xml'; 
            // Consenti di caricare SVG  
        $mime_types['psd'] = 'image/vnd.adobe.photoshop'; 
            // Consenti di caricare PSD  
        return $mime_types;  
    }  
    add_filter('upload_mimes', 'my_myme_types', 1, 1);  
```
In [questa pagina](https://www.freeformatter.com/mime-types-list.html) è disponibile una lista completa di tutte le tipologie di MIME   types / Internet Media Types per creare una funzione ad hoc.
  
---  
## [Rimuovere o escludere](https://nicholasmarmonti.com/wordpress/functions-php/#rimuovere-escludere)  
    Rimuovere l’ID quando si richiamano fogli stile  
    Disabilitare Gutenberg editor  
    Rimuovere script e stili Emoji  
    Disattivare la ricerca  
    Escludere pagine dalla ricerca  
    Disabilitare i feed RSS  
    Minificare il codice della pagina  
  
---  
## [Cambiare o identificare](https://nicholasmarmonti.com/wordpress/functions-php/#cambiare-identificare)  
  
    Aggiornare l’indirizzo del sito  
    Riscrivere gli slug principali  
    Individuare una pagina o un articolo  
    Identificare gli utenti loggati  
    Modificare l’email sender  

---
---
- `the_post()` - [link rif.](https://gabrieleromanato.com/2012/02/wordpress-la-funzione-the_post-in-dettaglio)
- viene definita ne file core wp-includes/query.php (Il file contiene la definizione della celebre classe WP_Query, ossia il motore del Loop di WordPress)

---
> `get_stylesheet_directory()`
- fa riferimento a file che risiedono all'interno della struttura della directory del tuo tema child
- restituisce un percorso di file  
- > `<?php require_once( get_stylesheet_directory(). '/my_included_file.php' ); ?>`
> `get_stylesheet_directory_uri()`
- restituisce un URL, utile per le risorse front-end
- > `<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/my_picture.png" alt="" />`

> get_template_directory()
- fa riferimento alla directory del tema principale