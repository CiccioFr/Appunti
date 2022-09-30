//	$.noConflict();	// libera l'uso del simbolo $ per altre librerie, occorrerà scrivere jQuery


$("<p>Nuovo <strong>paragrafo</strong></p>");
$("p").html("Testo del <strong>paragrafo</strong>");
$("p").append("<li>lista</li>"); 

//due modi per inserire una nuova lista DOPO una già presente
$("li").after("<ul id='menu1'>unioi</ul>");
$("<ul id='menu2'>due</ul>").insertAfter("#menu");
// //due modi per inserire una nuova lista PRIMA di una già presente
// $("#menu").before("<ul id='menu2'></ul>");
// $("<ul id='menu2'></ul>").insertBefore("#menu");

$("p").wrap("<div id='2'></div>");
$("p").wrapAll("<div id='3'></div>");

//rimpiazza l'elemento segnaposto
$("#3").replaceWith("<p>Nuovo contenuto</p>");

$("a").css("color");

//restituisce il colore esadecimale del primo elemento link
$("a").css("color","#FF0000"); //imposta il colore dei link
$("a").css({
	"color" : "#FF0000", //imposta il colore
	"display" : "block" // imposta la visualizzazione
});

$("a").bind("click",function (event) {
    alert($(this).attr("href"));
});


// abbandono dei un input / cambio focus	-	funzione	blur()
function formatta_testo() {
	$("#idCasellaTesto").val("nuovo testo");
}
$("#idCasellaTesto").blur(formatta_testo);

// ci sono istruzioni che dovrebbero essere esguite dopo aver la certezza che il modello del DOM che il browser costruisce è stato completato; potrebbe capitare che l'aggancio del gestore dell'evento sia tentato prima la "casella di testo" sia stata effettivamente generata dal browser nel suo modello
// Per avere la certezza che una funzione sia eseguita dopo che tutti gli elementi della pagina siano stati generati, si incorpora in:	$(	function()	{ ...qui...	} )
$(
	function () {
		$("#idCasellaTesto").blur(formatta_testo);
	}
)
// alternative:
$().ready ( function () { } );
$(document).ready ( function () { } );
$(window).ready ( function () { } );

//si usa una funzione anonima (per la quale non si indica un identificatore), in questo modo non si 'ingolfa' lo spazio globale dei nomi con gli identificatori di funzioni  'usa e getta', le parentesi tonde indicano la sua invocazione, con il corpo delimitato dalle graffe
// ATTENZIONE questo non conprende che le immagini pur già incorporare nel layout html siano state caricate; nel caso occorre scrivere nel gestore dell'evenbnto load 	
$(windows).on("load",forza_stesso_formato);


// La variabile dichiarata "var" e locale all'interno di un blocco come un corpo di un ciclo for, INTERFERISCONO con variabili che hanno lo stesso nome ANCHE SE esterne al blocco dello stesso ciclo for 
// supporta il concetto di località a livello di funzione, MA NON il principio di località a livello di blocco di istruzione racchiuse dai limitatori di parentesi graffe, come accade in C
// let	-  recuperare il conceto di visibilità a livello di blocco: in ECMA Script 6 è stato inntrodotto il let che supporta ANCHE il principio di località a livello di blocco di istruzione come if - for, ecc
// verificare a livello di funzione il var