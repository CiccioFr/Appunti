# Spring ver. 3.0.2

## Differenze di versione..

### Eureka
```java
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
// posto sulla classe del main del MicroServizio
@EnableDiscoveryClient  sostituisce @EnableEurekaClient
```

```xml
<!-- SWAGGER -->
<!-- http://server:port/context-path/swagger-ui.html -->
<!-- http://localhost:8090/rating/swagger-ui.html -->
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.0.2</version>
</dependency>
```
zip & è migrati a micrometer