[The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script):
```js
<script>
```
### Importare nel file HTML codice Js / jQuery:
```HTML
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<!-- Carica la libreria jQuery dal CDN di jQuery -->
<!-- il download remoto avviene tramite un sistema CDN che permette di ridurre al minimo la latenza -->
```

```HTML
<!-- ed anche:  -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
```

```HTML
<!-- backup (in caso non va quello on-line) con file locale  -->
<script type="text/javascript">
    if(!window.jQuery && document.write('<script type="text/javascript" src="assets/js/jquery.min.js"></script>'))
</script>
```
Ref: [Il modo migliore per caricare la libreria jQuery (con fallback)](https://gist.github.com/jacksonfdam/2853345)

```HTML
<!-- da file lovale-->
<script src="ccc_script.js"></script>
```
---


---
> $( document ).ready( function() { .. } );
- `ready()` rileva lo stato di preparazione, esegue la funzione solo quando l'intera pagina (immagini o iframe) ed il Document Object Model (DOM) sono pronti per l'esecuzione del codice  

    [link](https://learn.jquery.com/using-jquery-core/document-ready/)




---
**`.change()`**  
- rafforza il metodo

---
## Pop-Up
confirm()   -> Pop-Up  Ok | Cancel  
alert()     -> Pop-Up    
prompt()    -> Pop-Up  inserisci testo  

---
## calendario a comparsa    
[es.1](http://www.w3big.com/it/jqueryui/example-datepicker.html)  
[es.2](https://www.html.it/pag/18702/datepicker/)
```js
.datepicker( {
    dateFormat: 'dd/mm/yy',
    minDate: 7,
} );
```

---
**jQuery è già disponibile in WordPress**.  
vedi  [import](../WordPress/Import_Js-CSS_in_functions.php.md)