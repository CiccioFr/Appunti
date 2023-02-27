

```java
public boolean checkUserAndAuthority(long userId, String authorityName) {
    RestTemplate restTemplate = new RestTemplate();

    /*// non va bene perchè nel PostController vuole @RequestParam
    // la uri sotto è per un EndPoint è impostato con @PathVariable
    String uri = "http://localhost:8090/user/" + userId + "/" + authorityName;
    boolean existsUser = restTemplate.getForObject(uri, Boolean.class);*/

    // nel PostController l'EndPoint è impostato con @RequestParam
    // ovvero una uri http://localhost:8090/user?id=2&authorityName=ROLE_READER
    String uri = "http://localhost:8090/user?id={userId}&authorityName={authorityName}";
    boolean existsUser = restTemplate.getForObject(uri, Boolean.class, userId, authorityName);

    return existsUser;
}
```