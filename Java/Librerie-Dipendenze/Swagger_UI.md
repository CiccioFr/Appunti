# Swagger UI

Libreria open source per la documentazione di API.  
Permette di creare una documentazione web interattiva per le API REST, generando una **interfaccia utente grafica che permette agli sviluppatori di testare le API direttamente dal browser** e di visualizzare informazioni dettagliate su di esse.  
Inoltre, Swagger UI fornisce un editor OpenAPI per creare e modificare i file di specifica delle API, semplificando il processo di sviluppo e documentazione delle API. La libreria è altamente configurabile e supporta numerose piattaforme di sviluppo e di hosting, inclusi Java, Node.js e .NET.

```xml
<!-- Swagger UI -->
<!-- http://{host}:{port}/{context-path by yaml}/swagger-ui/index.html#/ -->
<!-- http://http//localhost:8090/user/swagger-ui/index.html#/user-controller/signup -->
<!-- verrà resa disponibile una interfaccia
se ci serve una response, ci mostra già lui il Json -->
<dependency>
<groupId>org.springdoc</groupId>
<artifactId>springdoc-openapi-ui</artifactId>
<version>${springdoc-openapi-ui}</version>
</dependency>
```