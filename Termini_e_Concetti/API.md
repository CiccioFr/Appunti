# `API` - `Application Programming Interface`

- Insieme di procedure atte a risolvere uno specifico problema di comunicazione tra diversi computer o tra diversi software o tra diversi componenti di software  
(permettono lo scambio di informazioni tra due componenti software)
- Facilita lo sviluppo software fornendo dei componenti che possono essere impiegati dai programmatori
- è un set di strumenti, definizioni e protocolli che serve a integrare software e servizi applicativi e che consente a prodotti e servizi di comunicare con altri prodotti e servizi, eliminando la necessità di creare ogni volta nuove infrastrutture per connetterli.

## `RESTful` e `SOAP`
hanno consentito di semplificare la progettazione delle `API` e di facilitarne l'implementazione.  

## `SOAP` (`Simple Object Access Protocol`)
**specifica di protocollo** Ha lo scopo di uniformare le richieste e i formati dei messaggi, agevola la comunicazione tra app di diversi ambienti o scritte con linguaggi differenti.  
Le API progettate con il protocollo SOAP usano il linguaggio XML come formato del messaggio e ricevono le richieste tramite HTTP o SMTP.  

## `REST` (`Representational State Transfer`)
è un **tipo di architettura** fondato su **sei linee guida** che risultano più semplici da seguire rispetto a un protocollo prescritto. Ciò implica l'assenza di uno standard ufficiale per le API web RESTful.  
Questo influisce sulla maggiore frequenza d'uso delle `API RESTful` rispetto ai metodi `SOAP`.  
Le API web che rispettano i vincoli architetturali REST vengono definite API RESTful

le API sono definibili RESTful se rispettano i sei vincoli di un sistema RESTful:
- **Architettura client-server**: l'architettura REST è costituita da client, server e risorse e gestisce le richieste tramite il protocollo HTTP.
- **Statelessness**: nessun contenuto client è archiviato nel server tra le richieste. Le informazioni relative allo stato della sessione sono invece contenute nel client.
- **Supporto cache**: il caching può eliminare la necessità di alcune interazioni client-server.
- **Sistema a livelli**: le interazioni client-server possono essere mediate da livelli aggiuntivi, i quali possono offrire altre funzionalità, come bilanciamento del carico, condivisione della cache o sicurezza.
- **Codice on demand** (opzionale): i server possono ampliare la funzionalità di un client trasferendo del codice eseguibile.
- **Interfaccia uniforme**: è il vincolo principale per la progettazione di API RESTful e prevede 4 aspetti:
    - **Identificazione delle risorse nelle richieste**: le risorse vengono identificate nelle richieste e vengono distinte dalle rappresentazioni restituite al client.
    - **Manipolazione delle risorse tramite le rappresentazioni**: i client ricevono file che rappresentano le risorse e che devono contenere le informazioni necessarie per consentirne la modifica o l'eliminazione.
    - **Messaggi autodescrittivi**: ogni messaggio restituito a un client contiene le informazioni necessarie per descrivere come il client deve elaborare l'informazione.
    - **Ipermedia come motore dello stato dell'applicazione**: accedendo alla risorsa, il client REST deve poter individuare, attraverso hyperlink, tutte le altre azioni disponibili al momento.

Benché sembrino numerosi, questi vincoli sono molto più semplici rispetto a un protocollo prescritto e, proprio per questo, le API RESTful sono molto più diffuse dei metodi SOAP.

---
## [api-endpoint](https://kinsta.com/it/knowledgebase/api-endpoint/) VISIONARE!
https://blog.logrocket.com/graphql-vs-rest-api-why-you-shouldnt-use-graphql/  
[Cosa sono le `API`](https://www.redhat.com/it/topics/api)  
[`RESTful`](https://www.redhat.com/it/topics/api/what-are-application-programming-interfaces#api-soap-e-rest)  
[caching](https://aws.amazon.com/it/caching/)