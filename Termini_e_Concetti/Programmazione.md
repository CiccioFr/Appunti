# Termini Concetti e Definizioni in Programmazione

## `Funzione lambda` o funzione anonima
funzione definita, e possibilmente chiamata, senza essere legata ad un identificatore.  
Da usare nei casi in cui serve definire una breve funzione che ha poche linee di codice e che verrà utilizzata una sola volta (non può essere richiamata essendo priva di identificatore)  
Esempio in Js:  
1. `function(a, b) { return a + b; }`
2. `(a, b) => a + b;` *
    - \* wrappare con le graffe { } per eseguire più istruzioni

In Java le funzioni anonime sono state inserite nella versione 8 (rilasciata nel 2014)

## Sintassi 
CamelCase, snake_case, kebab-case… 

## `ReGex` - `Regular Expression` (Espressione Regolare)
Sequenza di simboli scritta con sintassi specifica che identifica un insieme di stringhe  
[link google](https://support.google.com/a/answer/1371415?hl=it)

## `Snippet`  
frammento di codice sorgente

## `Short Code` - Tipici di WordPress  
Codici brevi o brevi sequenze di numeri, utilizzati per indirizzare i messaggi nel sistema di messaggistica multimediale e i sistemi di servizi  
Tipi:  
- Self-closing Shortcodes  
- Enclosing Shortcode  
[link su wordpress](../CMS/WordPress/ShortCode/ShortCode.md)

## `Run-time system` (o runtime system)
Software che fornisce i servizi necessari all'esecuzione di un programma, pur non facendo parte in senso stretto del sistema operativo.  
Esempi di runtime system sono:
- il **software generato dal compilatore** per la gestione dello stack
- la libreria software per la gestione della memoria (es. malloc)
- il codice che gestisce il caricamento dinamico e il linking
- il codice di debugging generato in compilazione o in esecuzione
- il codice di gestione dei thread di livello applicativo

Anche gli interpreti di codice e le macchine virtuali possono essere considerati runtime system, mentre servizi attivi in processi concorrenti sono considerati come middleware.  
[Wikipedia](https://it.wikipedia.org/wiki/Run-time_system)

## `Data Binding`
Meccanismo che consente di associare e sincronizzare una fonte dati agli elementi dell'interfaccia utente.  
In fase di design, grazie a XAML, possiamo descrivere in maniera dichiarativa le relazioni di Binding senza preoccuparci di collegare la fonte dati: senza scrivere codice procedurale ma descrivendo relazioni che legano una casella di testo con un campo di una tabella di un bd o di una sorgente dati qualunque, poi l'aggiornamento bidirezzionale avverrà in automatico

## [Costrutti di Controllo](http://www.dacrema.com/Informatica/Costrutti_controllo.htm)  
I costrutti di controllo di un linguaggio di programmazione strutturata sono quei dispositivi sintattici che permettono di combinare tra loro istruzioni elementari creando cosi istruzioni complesse o blocchi di istruzioni, controllando il flusso della loro esecuzione. I costrutti di controllo fondamentali si possono classificare in:  
![](asset/Costrutti_mini.png)
- **Esecuzione in Sequenza**  
    Il modo più semplice per combinare istruzioni tra di loro consiste nell'eseguirle una dopo l'altra, in sequenza. In C, C++ e Java è possibile creare una sequenza o blocco di istruzioni semplicemente scrivendo le istruzioni una di seguito all' altra e racchiudendo questa sequenza tra parentesi graffe.
- **Costrutti Iterativi**  
    I costrutti iterativi servono per eseguire dei cicli, cioè per ripetere un determinato blocco di istruzioni in modo controllato.
    `while`, `do-while`, `for`
- **Costrutti di Selezione**  
    Costrutti di selezione in C, C++ e Java sono rappresentativi di quelli generalmente disponibili in qualsiasi linguaggio di programmazione di alto livello. Possiamo distinguere due tipi fondamentali di costrutto di selezione: 
    `if-else`, `switch`

# algoritmo di ordinamento
giusto per citarne alcuni: Bubble sort, Heap sort, Merge sort, Quicksort, Shell sort 