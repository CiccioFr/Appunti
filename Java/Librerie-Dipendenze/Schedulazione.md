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