## Path:  
[stackoverflow.com](https://stackoverflow.com/questions/2354633/retrieve-wordpress-root-directory-path)

Le stampe di esempio sono oerientative, verificare senpre, possono cambiare in base alle impostazioni impostate

---
```PHP
if ( !defined('ABSPATH') )  
    define('ABSPATH', dirname(__FILE__) . '/');
`echo ABSPATH;` // This shows the absolute path of WordPress 
// ABSPATH is a constant defined in the wp-config.php file.
```
---
```PHP
echo "<br/>".get_home_url();     // https://mysiteurl.com

echo "<br/>".ABSPATH;            // /app/

echo "<br/>".get_home_path();    // /app/

echo "<br/>".get_site_url();     // https://mysiteurl.com

echo "<br/>".get_template_directory(); // /app/wp-content/themes/mytheme

echo "<br/>".dirname(__FILE__);  // /app/wp-content/plugins/myplugin/includes

echo "<br/>".get_theme_root();   // /app/wp-content/themes

echo "<br/>".plugin_dir_path( __FILE__ ); // /app/wp-content/plugins/myplugin/includes/

echo "<br/>".getcwd();           // /app/wp-admin


//aggiungere:
get_stylesheet_uri()
get_template_directory_uri()
plugins_url( '/js/gallery.js' , __FILE__ )
get_stylesheet_directory()
get_theme_root()

plugin_dir_url()
plugin_dir_path(__FILE__)   // /var/www/vhosts/www.sitoweb.it/httpdocs/wp-content/plugins/nome_plugin_corrente/
```
---
```PHP
define (ROOT_URL, get_site_url() );
define (ROOT_DIR, get_theme_root() );
```
---
```PHP
$wp_root_path = str_replace('/wp-content/themes', '', get_theme_root());
```

---
```PHP
 $path = get_home_path();
   print "Path: ".$path; 
// Return "Path: /var/www/htdocs/" or
// "Path: /var/www/htdocs/wordpress/" if it is subfolder
```
---
theme root directory path code
```PHP
 <?php $root_path = get_home_path(); ?> 
    // print "Path: ".$root_path;
    // Return "Path: /var/www/htdocs/" or "Path: /var/www/htdocs/wordpress/" if it is subfolder
```
---
Theme Root Path
```PHP

 $theme_root = get_theme_root();
 echo $theme_root
    // Results:- /home/user/public_html/wp-content/themes
```

---
```PHP
$path = get_home_path(); 
$path = wp_normalize_path ($path);

// now $path is ready to be used :)
```
> Per recuperare il percorso puoi usare una funzione <?php $path = get_home_path(); ?>. Non voglio semplicemente ripetere quanto già detto qui, ma voglio aggiungere un'altra cosa:  
Se stai utilizzando Windows Server, che è un caso raro per l'installazione di WordPress, ma a volte succede ancora, potresti riscontrare un problema con l'output del percorso. Potrebbe mancare un "\" da qualche parte e riceverai un errore se utilizzerai un tale percorso. Quindi durante l'uscita assicurati di sanificare il percorso: