# `Lombok`
https://projectlombok.org/

Project Lombok è una libreria java che si collega automaticamente al tuo editor e crea strumenti, ravvivando il tuo java.  
Non scrivere mai più un altro metodo getter o equals, con un'annotazione la tua classe ha un builder completo, automatizza le tue variabili di registrazione e molto altro.

### Libreria di tipo `APT` (`Annotation Processing Tool`)  
Durante la compilazione del progetto esegue l’interpretazione delle annotation dichiarate a livello di classe. In fase di compilazione Lombok esegue delle operazioni e genera in automatico il codice aggiuntivo.  

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```

## @Annotation:

- `@NoArgsConstructor` per generare un costruttore senza argomenti;
- `@AllArgsConstructor` per generare un costruttore con tutti i campi dichiarati nel nostro Bean;
- `@Data` che a sua volta include 
    - `@ToString`
    - `@EqualsAndHashCode`
    - `@Getter`
    - `@Setter`
    - `@RequiredArgsConstructor`
- `@Getter` e `@Setter`: per generare automaticamente i getter e i setter per ogni proprietà della classe;
- `@EqualsAndHashCode`: per generare i metodi equals e hashCode della classe;
- `@ToString`: per generare la rappresentazione testuale;
- `@RequiredArgsConstructor`: per un costruttore con i campi richiesti (cioè i campi con final e `@NonNull`); - `???`
- `@Builder`: genera il builder del Bean (esempio: Dog dog = Dog.builder().name("Beethoven").age(20).build(););
