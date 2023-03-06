# Auth0 JWT (Json Web Token)

La libreria Auth0 JWT si utilizza all'interno di un'applicazione Spring per implementare la sicurezza basata su token, ad esempio per l'autenticazione e l'autorizzazione degli utenti. Per farlo, è necessario integrare la libreria Auth0 JWT nel progetto come dipendenza esterna e configurare l'applicazione Spring in modo appropriato per l'utilizzo della libreria.

```xml
<properties>
    <java.version>17</java.version>
    <java-jwt>3.18.3</java-jwt>
</properties>
<dependencies>
    <!-- Auth0 JWT (Json Web Token) -->
    <dependency>
        <groupId>com.auth0</groupId>
        <artifactId>java-jwt</artifactId>
        <version>${java-jwt}</version>
    </dependency>
</dependencies>
```