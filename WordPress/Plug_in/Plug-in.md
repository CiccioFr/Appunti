
## [Creare plug-in con .php](https://www.smashingmagazine.com/2011/09/how-to-create-a-wordpress-plugin/)
in `wp-content/plugins/nomePlugin/`**`nomePlugin.php`**

- ### [Codice](https://www.smashingmagazine.com/2011/09/how-to-create-a-wordpress-plugin/#preparing-our-function)  

```PHP
<?php  
/*  
Plugin Name: Nome Plugin  
Version: 1.0  
Description: Descrizione di cosa fa il Plug-in
Author: CiccioFr
Author URI: https://
Plugin URI: https://  
License: GPLv2 or later
License URI: https://
Text Domain: Dominio...
*/  
?>
```
[requisiti per l’header dei plugin](https://developer.wordpress.org/plugins/plugin-basics/header-requirements/)

---
- ### [Pulizia del Codice](https://www.smashingmagazine.com/2011/09/how-to-create-a-wordpress-plugin/#cleaning-up-after-yourself)
> [`register_activation_hook(string $file, callable $callback)`](https://developer.wordpress.org/reference/functions/register_activation_hook/)  

    Questo hook ti consente di creare una funzione che viene eseguita quando il tuo plugin è attivato.

> [`register_deactivation_hook(string $file, callable $callback)`](https://developer.wordpress.org/reference/functions/register_deactivation_hook/)

    eseguita ogni volta che il plug-in è disattivato. Suggerito l'utilizzo della funzione successiva durante l'eliminazione dei dati; da usarsi solo per le pulizie generali

> [`register_uninstall_hook(string $file, callable $callback)`](https://developer.wordpress.org/reference/functions/register_uninstall_hook/)

    eseguita quando l'amministratore del sito Web elimina il plug-in nel back-end di WordPress

> - `$file` -> (string) (Required) The filename of the plugin including the path.
> - `$callback` -> (callable) (Required) The function hooked to the 'activate_PLUGIN' action.


## Code Snippets
- permette l'inserimento di codice PHP (functions.php) in wordpress [esempio d'uso](https://www.youtube.com/watch?v=pXeLyN_vTKQ)

## WP Rocket 
- per pulire la cash

## wordend
- sicurezza - anti spam

## manca nome
- sicurezza - chiavi per il reCaptcha


## popup maker


## GDPR coocky consent


## WP activity log - wp white security

## limit login attemp