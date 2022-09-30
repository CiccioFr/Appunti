## WordPress
### Argomenti
> dalayer checker - google tag manager

## Link e guide
- [WordPress](https://www.html.it/guide/guida-wordpress/)
- [WordPress: creare un sito vetrina](https://www.html.it/guide/wordpress-creare-un-sito-vetrina/)
- [Creare Temi per WordPress](https://www.html.it/guide/guida-ai-temi-di-wordpress/)
- [Creare un e-commerce con Laravel](https://www.html.it/guide/creare-un-e-commerce-con-laravel/)
- [The Loop](https://codex.wordpress.org/The_Loop)
> [Tassononia / Taxonomy](https://codex.wordpress.org/it:Tassonomie)
- [creare tassonomie personalizzate in WordPress](https://www.creativemotions.it/come-creare-tassonomie-personalizzate-in-wordpress/)
- [Custom Taxonomy To WooCommerce](https://njengah.com/add-custom-taxonomy-woocommerce-products/) - Codice PHP
    - [esempi..?](https://njengah.com/tax_query-woocommerce-example/)
    - ricerca google: `njengah.com taxonomy wordpress`
- [da vedere x Tassonomia](https://www.wpbeginner.com/wp-tutorials/create-custom-taxonomies-wordpress/)
- [Taxonomy](https://avada.io/woocommerce/docs/create-taxonomy.html) - Codice PHP
    - function.php / plugin /
- [link](https://barn2.com/woocommerce-custom-taxonomies/)
- [guida-ai-temi-di-wordpress](https://www.html.it/guide/guida-ai-temi-di-wordpress/)

---



Modi di aggiungere un componente (plug-in / theme) 
- function.php
- plug-in
-

[Gerarchia di wordPress](https://developer.wordpress.org/themes/basics/template-hierarchy/)
- wp-admin  (viene sovrascritta con aggiornamenti)
- wp-includes (viene sovrascritta con aggiornamenti)
- wp-content => campo di azione
    - plugins
    - themes

> creazione di un [child](https://codex.wordpress.org/it:Temi_Child)
- cartella con nomePluginPadre-child
    - .css -> commento che indica specifiche lette da wordpress
    - function.php -> aggiungere al tema ogni tipo di funzionalità
    - eventuali altri
