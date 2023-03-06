# Eureka

Libreria open source sviluppata da Netflix per la discovery del servizio, ovvero per individuare e localizzare i servizi all'interno di un'architettura a microservizi.  
Eureka consente ai servizi di registrarsi in un registro centralizzato, rendendo così possibile la loro identificazione e localizzazione da parte degli altri servizi all'interno dell'architettura.  
In particolare, Eureka utilizza un modello client-server, dove ogni servizio è dotato di un client che si registra presso un server Eureka. Il server Eureka memorizza le informazioni sui servizi registrati e le rende disponibili agli altri servizi all'interno dell'architettura, consentendo loro di localizzare e accedere ai servizi necessari per soddisfare le richieste dei client.

```xml
<!-- Eureka Server -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

```xml
<!-- Eureka Client -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```