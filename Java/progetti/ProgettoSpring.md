# Progetto Spring

## Classe del main()

### Annotation di Classe
@EnableAsync

---
## Entity

### Annotation di Classe

### Dipendenza JPA (`javax.persistence.*`)
@Entity

### Dipendenza lombok (`import lombok.*`)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

---
## Controller

---
## Service

---
## Repository

---
## application.yaml
<details> 
<summary> parametri essenziali per connesione a DB</summary>

```yaml
server:
  port: 8083
spring:
  application:
    name: nomeApplicazione
  data:
    jpa:
      repositories:
        # valori ammessi:  DEFAULT - DEFERRED - LAZY 
        bootstrap-mode: DEFAULT
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/nome_del_DB?createDatabaseIfNotExist=true&autoReconnect=true&useSLL=false&useLegacyDatetimeCode=false
    username: root
    password: password
  jpa:
    hibernate:
      # valori ammessi:  none - create-drop - update
      ddl-auto: create-drop
    open-in-view: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL5InnoDBDialect
        '[format_sql]': true
        jdbc:
        '[time_zone]': Europe/Rome
        generate_statistics: false
    show-sql: true
    defer-datasource-initialization: true
  sql:
    init:
      # valori ammessi:  never - always - embedded
      mode: always
```
</details>