# Schedulazione

## Annotation spring
### `@EnableScheduling`
Abilitazione della funzionalità con annotation posta sopra la classe del `main`
### @Scheduled
Attivazione del metodo
- `@Scheduled(fixedRate = 60000)` // millisecondi
- `@Scheduled(cron = "* * * * * *")` // ambiente UNIX
- `@Scheduled(cron = "0 * * * * MON-FRI")` // OGNI MINUTO DA LUNEDì A VENERDì
- `@Scheduled(cron = "*/1 * * * * *")` // OGNI SECONDO

Parti del modulo `spring-context`, è una dipendenza di base** di Spring Boot e di Spring Web.  
Questo modulo fornisce funzionalità core per la creazione di applicazioni Spring, tra cui la gestione del ciclo di vita dei bean, l'iniezione delle dipendenze e la gestione degli eventi.  
** non fa parte specificamente di Spring Boot o Spring Web, ma può essere utilizzato in entrambi i contesti, non è necessario aggiungere manualmente questa dipendenza nel file pom.xml o build.gradle del progetto, poiché Spring Boot e Spring Web lo gestiscono automaticamente.