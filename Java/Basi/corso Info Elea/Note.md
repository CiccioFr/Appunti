# Note

## [SOLID](https://it.wikipedia.org/wiki/SOLID) principles
- princio di segregazione: ogni cosa deve fare una cosa

## [Metodologia Agile] o sviluppo agile del software
- [link](https://it.wikipedia.org/wiki/Metodologia_agile)

## Label:
Quando viene invocato break, termina l'istruzione etichettata,
ovvero l'istruzione che segue someLabel
```java
someLabel:
    for (i = 0; i < 100; i++) {
        for (j = 0; j < 100; j++) {
            if (i % 20 == 0) {
                break someLabel;
            }
        }
    }
```
[link stackoverflow.com](https://stackoverflow.com/questions/27696712/java-label-outer-middle-inner)
[link docs.oracle.com](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html)


## Regex - Espressioni Regolari
simbolismo per dereminare un insieme di regole per effettuare un replace
- `[a-z]` tutti i caratteri dalla a alla z
- `[0-9]` tutti i caratteri dalla 0 alla 9