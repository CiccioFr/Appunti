# JPA Annotation
## Declaration
```java
import javax.persistence.*;
```

## Annotation di Classe
```java
@Entity
public class Classe { .. }
```

## Annotation di Attributi
```c++
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

// updatable=false Attributo non aggiornabile: No UPDATE, solo insert
@Column(nullable = false, updatable = false)
private String comment;

// la data di creazione non può essere aggiornata
@Column(updatable = false)
private LocalDateTime createdAt;
```