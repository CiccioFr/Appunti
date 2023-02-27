# Actuator
### Lo stato di salute del MicroServizio
Monitora la nostra app, raccoglie metriche, comprende il traffico o lo stato del nostro database.
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