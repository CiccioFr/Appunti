# Rest e Codici di Stato

### REST (Representational State Transfer)
è un insieme di vincoli architetturali, non un protocollo né uno standard. Chi sviluppa API può implementare i principi REST in diversi modi.
- `approccio architetturale` alla creazione di Web API basate sul protocollo HTTP, che tenga conto delle seguenti carateristiche:
    - Risorse accessibili tramite EndPoint URL
    - Utilizzo del formato Json o XML
    - Senza stato (stateless, come http)
    - Impiego dei principali Metodi HTTP (get, post, put, delete..)

>EndPoints
    >- punti d'ingresso (tipicamente pattern url) usati per accedere ai servizi offerti dall'API (a cui è abbinata 1 o più tipologie di richieste)
---

### Come è fatto un `messaggio di richiesta`:
- Riga di richiesta (descrizione della richiesta da implementare)
- Sezione Header (eventuali informazioni aggiuntive)
- Riga vuota (indica che le meta-informazioni sono state inviate) che le info specifiche son state inviate
- Body (corpo del messaggio, opzionale)

***es. di richiesta:***
- GET http://www.google.it http/1.1
- il metodo / l'url / il protocollo

>in `REST`, per convenzione, il metodo HTTP utilizzato nell'effettuare una richiesta ad un EndPoint dell'API, corrisponde alla tipologia di azione che vogliamo compiere
>- GET recuperare una risorsa
>- POST creare una nuova risorsa
>- PUT / PATCH aggiornare una risorsa
>- DETELE cancellare una risorsa
>    - una risorsa rappresenta normalmente una entità dati, come un tweet, un prodotto, un post...
---

### il `messaggio di risposta` (simile al messaggio di richiesta):
- Riga di stato (codice di stato della richiesta - success or failure)
- Sezione Header (eventiali informazioni aggiuntive)
- Riga vuota (indica che le meta-informazioni sono state inviate)
- Body (opzionale)

es. di riga di stato in un messaggio di risposta
- http/1.1 200 ok
- ver. protocollo http / codice di stato della risposta stessa

>Le 5 categorie di risposta:
>- 1xx - Informational
>- 2xx - Success
>- 3xx - Redirezione
>- 4xx - Client Error
>- 5xx - Server Error

Alcuni esempi tipici:
- 200 -> ok
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> forbidden (proibito vietato interdetto)
- 404 -> Not Found
- 405 -> Method not Allowed (Operazione non permessa)

---
---

### Esempi di richeiste tipiche a API RESTful di un negozio online:
EndPoint URL | Metodo HTTP | Esito Atteso | Status Code 
:----------- | :---------: | :----------: | :---:
/prod/       |  GET        | elenca tutti i prod. (Json) | 200 ok
/prod/17/ (esiste) |  GET  | dettaglio prod 17 (Json) | 200 ok
/prod/21/ (non esiste) | GET | nessun prod. errore | 404 Not Found
/prod/       |  POST       | creaz. prod. | 201 Created
/prod/15/    |  PUT        | Agg. prod. | 200 ok
/prod/15/    |  DELETE     | cancell. prod | 204 No Content

