# MVC
## Model-View-Controller  
è un pattern architetturale  
in grado di separare la logica di presentazione dei dati dalla logica di business.  
Questo pattern si posiziona nel livello logico o di business e di presentazione in una architettura multi-tier.

- `Model` fornisce i metodi per accedere ai dati utili all'applicazione;
- `View` visualizza i dati contenuti nel model e si occupa dell'interazione con utenti (client);
- `Controller` riceve i comandi dell'utente (in genere attraverso la view) e li attua modificando lo stato degli altri due componenti.


È importante far notare che sia la View che il Controller dipendono direttamente dal Model, il quale non dipende dagli altri. Questo è uno dei fattori più importanti di questa architettura, poiché permette al modello di essere implementato e testato indipendentemente dallo strato di visualizzazione.
[link wikipedia](https://it.wikipedia.org/wiki/Model-view-controller)  