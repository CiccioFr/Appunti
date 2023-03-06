# Resilience4j
https://resilience4j.readme.io/  
a fault tolerance library (libreria di tolleranza ai guasti)

Resilience4j è una libreria completa per la gestione della tolleranza ai guasti nei sistemi distribuiti, ergo fornisce un insieme di strumenti per la gestione della resilienza dei servizi, ovvero la capacità di un sistema di continuare a funzionare in presenza di fallimenti o errori.  
Offre la possibilità di integrarsi con Spring Boot, la possibilità di monitorare le metriche tramite Micrometer, la possibilità di personalizzare le configurazioni tramite Properties o Yaml e la possibilità di gestire i fallback tramite il pattern del Decorator. Inoltre, Resilience4j è modulare e leggero, il che significa che è possibile utilizzare solo le funzionalità necessarie senza dover aggiungere dipendenze superflue.
Resilience4j è progettato per essere facile da usare, configurare e integrare in un'architettura a microservizi.

## Funzionalità
- [Circuit Breaker](./Resilience4j_CircuitBreaker.md):  
    interrompe temporaneamente le richieste a un servizio quando quest'ultimo è in uno stato di errore, al fine di evitare che il sistema si blocchi. Quando il servizio torna disponibile, il Circuit Breaker ripristina automaticamente il flusso delle richieste.
- Retry:  
    tenta automaticamente di ripetere le richieste fallite, al fine di migliorare le probabilità di successo.
- Rate Limiter:  
    limita la velocità delle richieste per evitare sovraccarichi o congestioni.
- Bulkhead: separa le risorse disponibili per il servizio in modo da limitare gli effetti dei guasti su altre parti del sistema.
- TimeLimiter:  
    definisce un limite di tempo massimo entro cui una richiesta deve essere completata.
