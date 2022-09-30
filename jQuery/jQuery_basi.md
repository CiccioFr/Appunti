jQuery Lez.4 24/Gen/22

il DOM
anche tutta la mia pg html è un oggetto che si chiama document con i suoi attributi

jQuery framework,   
La libreria esterna va scaricata (https://jquery.com/)  
```js
a[0].style.background = 'red' //a è una collection
```

usiamo la versione CDN -> fondo sessione https://code.jquery.com -> jQuery Core 3.6.0 - uncompressed

```js
$() //è l'alias di jQuery
//abbreviazione per: 
$( document ).ready();
```

jQuery utiliza gli stessi selettori di CSS  
```js
$('h3');     //tag  
$('#id');    //id  
$('.class'); //Classe  
```

```js
// come si fa in jQuery
$('h3').css('background', '#00ff00');
console.log('ciao');
```
```js
// come si fa in vanilla
let c = document.getElementsByTagName('h2');
console.log(c);
for (let i = 0; i < c.length; i++) {
    c[i].style.background = '#00ffbb';
}
```

```js
$() 
```
-   

## Selettori

```js
$(".miaClasse"); //tutti gli elementi con attributo class "miaClasse"
```

```js
$(".miaClasse, #mioId, ul#mioMenu li");
//cerca una classe, un id e gli elementi di una specifica lista puntata
```

> nel caso di ricerca con selettori CSS, è possibile passare alla funzione un secondo argomento per indicare un contesto nel quale operare:  

```js
$(".miaClasse",document.getElementById('mioId'));
//Tutti gli elementi con classe "miaClasse" dentro l'elemento DOM con id mioId
```

$ accetta come primo argomento anche riferimenti diretti ad elementi del DOM:
```js
$(document.getElementById('mioId'));
$(window);
```



## >
- solo gli elementi lista diretti discendenti del tag ul  

    $("ul > li");

## il selettore '+'
precedente + adiacente indica gli elementi che sono selezionati dal selettore a destra e che siano immediatamente preceduti dal elementi selezionati dal selettore a sinistra


## selettore `˜` (tilde):
 precedente  seguente indica tutti i fratelli seguenti anche non adiacenti  
    $('div ~ span')


## il motore [Sizzle](https://github.com/jquery/sizzle/wiki)
A partire dalla versione 1.3 il creatore di jQuery, John Resig, ha deciso di riscrivere e rendere indipendente il codice che ora è disponibile come progetto standalone. Secondo Resig, il motore Sizzle, questo il nome, potrà crescere indipendentemente da jQuery 

## Selezionare per attributi
- ### selettori di attributi 

```js
$("a[target='_blank']");  
//tutti i link che si aprono in nuove finestre

$("a[title^='nuova']");  
//link con titolo che inizia per "nuova"

$("a[title$='pagina']");  
//link con titolo che finisce per "pagina"
```


concatenare i selettori di
attributi per raffinare al meglio la nostra ricerca:
```js
$("a[target='_blank'][title='nuova pagina']");
```
