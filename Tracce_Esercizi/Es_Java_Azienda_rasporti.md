# Traccia progetto

L'azienda di trasporti privata Alfa s.r.l. commissiona la realizzazione di un gestionale 
che memorizzi l'elenco delle fermate e l'elenco delle linee pullman. 
Ogni fermata ha un Id, il nome, se è urbana o extraurbana e una lettera che rappresenta la zona. 
Più linee possono fermarsi ad essa.

Questo gestionale ha una tabella preventivi con i costi giornalieri del servizio 
operato da fornitori esterni. Ogni preventivo ha il nome dell'azienda, 
il nome del piano, il massimo numero di fermate disponibili, il  numero massimo 
di fermate extraurbane, in numero massimo di zone e il prezzo.

Specifiche funzionali

Realizzare un'applicazione web con SERVLET e JSP (o Spring). 
Creare una homepage che permetta di aprire tre ulteriori pagine, 
una per l'elenco delle fermate, una per l'elenco dei preventivi 
e una per l'elenco delle linee. 
Non è richiesta la creazione di maschere d'inserimento, 
modifica o cancellazione ma è sufficiente la visualizzazione dell'elenco. 
L'elenco delle linee, per ogni voce, deve visualizzare in un campo aggiuntivo 
il preventivo migliore se disponibile, con il nome della ditta e la tariffa.

L'accesso al database deve essere realizzato attraverso MySQL e connessione JDBC.

Consegnare la cartella zippata con tutti i file all'interno.

Compito da fare a casa per vedere se si è capito:
- Nell'elenco delle fermate mostrare le linee che fermano
- Creare una pagina per ogni linea, per mostrare l'elenco delle fermate

## Tabelle
- Linee (id, nome, )
- Fermate (id, nome, zone)
- Preventivi (id, azienda, piano, maxFermate, maxFermEstraUrb, maxZone, prezzo)
- TabRelFermateLinee (id, idLinee, idFermate)

file csv, per caricare velocemente una tabella
come fare un csv:
avere un elenco compatibile con tabella:

,Piazza Castello,U
,Collegno,A
,Alba,A
,fifenze,E

salvare in un file file.csv
importa ->