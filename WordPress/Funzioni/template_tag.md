# Template Tag
### vengono inclusi in altri file invece di aggiungere un altro tipo di funzionalità
- posti nel file `index.php` del tema

---
## Tag Include
> \<?php `get_header();` ?>  
> \<?php `get_footer();` ?>  
- non utilizano parametri  
  includeranno header.php e footer.php  

> \<?php `get_sidebar();` ?> *  
> \<?php `get_sidebar('left');` ?> **  
- \* includera `sidebar.php`  
** includera `sidebar-left.php`, se nonn essite include `sidebar.php`  

---
## Generici [link rif](https://nicholasmarmonti.com/wordpress/functions-php/#cambiare-identificare)   
> \<?php `bloginfo('name')`; ?>
- restituisce il nome del blog

> \<?php `get_template_part('content');` ?>
- include template alternativi

> \<?php `get_template_part('loop', 'index');` ?>
- `loop` suppone si ottenta un loop template
- `index` indica di cercare un loop template denominato `loop-index.php`; se non essite per default cerca `loop.php`  

> \<?php `comments_template();` ?>  
- implementa `comments.php` (funzionalità dei commenti) 
- se non essite, includerà `wp-includes/theme-compat/comments.php` file di fallback fornito da sistema
- [Link Guida](https://developer.wordpress.org/reference/functions/comments_template/)

> \<?php `edit_post_link();` ?>  
> \<?php `edit_comment_link();` ?>  
- consentono l'aggiunta di un link di modifica
- accesso ad interfaccia admin per modifiche
- posto nel file del tema con post o i commenti
- devono essere all'interno del loop
### Parametrizzazione:
> \<?php `edit_post_link( 'Modifica questo post', '<p>Admin: ','</p> );` ?>  
può esserci quarto parametro $id (del post)

---
### Tag Cloud
> \<?php `wp_tag_cloud();` ?>  
- restitusce tag (45 di default)
- accetta sino a 14 parametri
- accetta **query string**
> \<?php `wp_tag_cloud( 'unix=px' );` ?>  
> \<?php `wp_tag_cloud( 'unix=px&orderby=count' );` ?> *SENZA SPAZI 
- accetta array
> \<?php `$args = array(`  
     `'unit' => 'px',`  
      `'orderby' => 'count' );`   
**`wp_tag_cloud( $args );`** ?>  
