# Spring Boot Actuator
### Lo stato di salute del MicroServizio
Monitora la nostra app, raccoglie metriche, comprende il traffico o lo stato del nostro database.  
Libreria che fornisce funzionalità per monitorare e gestire un'applicazione Spring Boot in esecuzione. Essa include endpoint predefiniti che forniscono **informazioni sullo stato dell'applicazione**, come ad esempio le metriche, le informazioni sulla configurazione, la gestione delle connessioni e la tracciatura dei log. Inoltre, Actuator consente anche di personalizzare gli endpoint esistenti o crearne di nuovi, permettendo di esporre informazioni specifiche dell'applicazione. La libreria è integrata direttamente in Spring Boot e richiede solo poche configurazioni per attivarla.

### Visionare nel Browser le metriche:
- all'url:   http://{host}:{gateway port}/{context-path}/actuator/health  
    es. http://localhost:8090/post/actuator/health

### pom.xml
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

### Application.yaml
```yaml
management:
  health:
  endpoints:
    web:
      exposure:
        include: health # mostrami health
  endpoint:
    health:
      show-details: always # quando mostrarli
```


---
- https://www.geeksforgeeks.org/spring-boot-actuator
- https://www.baeldung.com/spring-boot-actuators
- https://spring.io/guides/gs/actuator-service/