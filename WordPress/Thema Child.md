# Creazione/Attivazionedi un Thema Child
- Creare una cartella, col medesimo nome del thema da "usare" come padre, ed aggiungere il postfisso "**-child**"
- [link Guida](https://codex.wordpress.org/it:Temi_Child)

---
> ## style.css

/*  
Theme Name: envo-shopper-child  
Template: envo-shopper  
Description: Tema Child - Primo sviluppo  
Author: Francesco  
Version: 0.1  
*/  
/ *  codice per attivare il child in sovrastrittura al thema padre */  

---
> ## functions.php

`< ?php declare(strict_types=1) ?>`  

`< ?php`  

- /** Abilita l'uso del foglio di stile del tema child in sovrascrittura del foglio stile del tema genitore */  
`add_action('wp_enqueue_scripts', 'enqueue_parent_theme_style');`  
`function enqueue_parent_theme_style() {`  
    `wp_enqueue_style('parent-style', get_template_directory_uri().'/style.css');`  
`}`  

- /** Aggiunge una link ad una favicon all'elemento head delle pagine HTML */  
`function favicon_link() {`  
    `echo '< link rel="shortcut icon" type="image/x-icon"` `href="/favicon.ico" />' . "\n";`  
`}`  
`add_action( 'wp_head', 'favicon_link' );`  

- **Utilizzare get_stylesheet_directory quando si fa riferimento ad un file memorizzato nella struttura delle directory del vostro tema child**  
 `require_once( get_stylesheet_directory() . '/il_file_da_includere.php' );`

- rendere le funzioni del tema pluggable (rimpiazzabili da un tema child, dichiarandola semplicemente per primo)  
`if ( ! function_exists( 'theme_special_nav' ) ) {`  
`    function theme_special_nav() {`  
`        //  Fai qualchecosa.`  
`    }`  
`}`  