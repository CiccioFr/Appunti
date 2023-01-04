# HTTP (Hypertext Transfer Protocol)
è un linguaggio di testo che consente la comunicazione tra client e server attraverso internet.  
Questa comunicazione avviene tramite una richiesta (`Request`) ed una risposta (`Response`).

# Request
Una richiesta HTTP è composta dalle seguenti parti:  
```
[method] [URI] [version]
[headers]
[body]
```
Esempio:  
```
GET /index.html HTTP/1.1  
Host: www.cgmconsulting.it  
Accept: text/html  
User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64)  
```

---
## method - i verbi HTTP
verbi | descriz.
-- | --
GET | Recupera una risorsa dal server
POST | Invia una risorsa al server
PUT | Memorizza una risorsa sul server
PATCH | Modifica parzialmente una risorsa
DELETE | Cancella una risorsa dal server

## URI (Uniform Resource Identifier)
E’ l'indirizzo o il percorso univoco che identifica la risorsa che il client desidera.

## headers
Le intestazioni forniscono molte informazioni supplementari
 . | descriz.
-- | --
Host | Specifica il server dove è ospitata la risorsa richiesta
Accept | Specifica quali formati di file (i MIME Type) sono accettati dal client
Accept-Language | Indica quale lingua supporta il client
Accept-Charset | Indica il set di caratteri accettato dal client
User-Agent | Specifica quale applicazione sta effettuando la richiesta

## body
Nel body viene passata la risorsa su cui agire nel caso in cui il method sia POST, PUT, PATCH o DELETE.

---
# RESPONSE
Il client invia la richiesta al server, quindi attende la risposta (response). L'obiettivo del server è quindi di interpretare la richiesta del client e restituire una risposta.  
Come per la request, una response HTTP è composta dalle seguenti parti:  
```
[version] [status code] [reason]
[headers]
[body]
```
Esempio:
```html
HTTP/1.1 200 OK
Date: Wed, 08 Aug 2018 21:23:53 GMT
Connection: keep-alive, Keep-Alive
Server: Apache
Content-Type: text/html; charset=UTF-8
<!DOCTYPE html>
<html lang="it">
  <head>
    <title>Protocollo HTTP</title>
  </head>
  <body>
    <p>Questo è un testo di prova</p>
  </body>
</html>
```
## status code, reason
Comunica il risultato della richiesta al client
.|.|.
-|-|-
200 | OK | La richiesta è andata a buon fine
404 | Not | Found La risorsa richiesta non è stata trovata
500 | Internal Server Error | Il server è andato in errore nell’elaborazione della response

## headers
Come per la request anche la response contiene delle intestazioni forniscono molte
informazioni supplementari
Accept Specifica quali formati di file (i MIME Type) sono accettati dal client
Content-Type Indica quale lingua supporta il client
Date Data e ora in cui la response è stata inviata
Server Nome del server che ha elaborato la response

## body
Nel body viene passata la risorsa richiamata dalla request.

---
[Cosa sono le API](https://www.redhat.com/it/topics/api)