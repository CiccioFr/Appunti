## php.ini disabilitare la cache di opcache
> opcache.enable=1  ->  opcache.enable=0

---
`$GLOBALS` L'array $GLOBALS contiene tutte le variabili dichiarate fino a quel momento comprese le variabili predefinite ($_GET, $_POST, $_SERVER..).

## Variabili SuperGlobal

`$_SERVER`: contiene tutto ciò che viene inviato dal server nella riposta HTTP.  
`$_GET`: contiene i parametri passati tramite il metodo GET.  
`$_POST`: contiene i parametri passati tramite il metodo POST.  
`$_REQUEST`: contiene i valori degli array $_GET, $_POST e $_COOKIE.  
`$_COOKIE`: contiene i cookie inviati dal client al server.  
`$_SESSION`: contiene variabili registrate come variabili di sessione.  
`$_FILES`: contiene informazioni sui file inviati tramite il metodo POST.  

## Metodi
`isset($var);` => true | false // Determina se una variabile è dichiarata ed è diversa da null  
`empty($var);` => true | false // Determina se una variabile è vuota  
`unset($var);` => void // distrugge le variabili specificate  

## Metodi WP
`the_terms()` displays an HTML formatting string of term names belonging to a post  
`get_terms()` returns an array of terms objects that belongs to a specific taxonomy  
`get_the_terms()` returns an array of terms belonging to a post  
    
---
## include vs require
```php
include 'nomedelfile.php';  
```
```php
require 'nomedelfile.php';  
```

Il risultato è sostanzialmente identico tranne per come vengono gestiti gli errori. Se si verifica un errore all'interno del codice incluso con require l'esecuzione viene arrestata con un fatal error E_COMPILE_ERROR. Nel caso di errore con include l'esecuzione dello script prosegue e viene sollevato un E_WARNING.

@ silenziatori -> anteposti al metodo evitano il report degli errori

$ antoposto alla variabile quale parametro d'ingresso di un metodo, lo rende reference type