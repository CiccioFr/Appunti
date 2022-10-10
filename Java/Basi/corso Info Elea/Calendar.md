# Calendar

già presente nella ver. 1.5

[guida Orale.com](https://docs.oracle.com/javase/7/docs/api/java/util/Calendar.html)
[guida HTML.it](https://www.html.it/pag/60831/gestione-delle-date-con-date-e-calendar/)

```java
import java.util.Calendar;

Calendar calendario = Calendar.getInstance();
int ora = calendario.get(Calendar.HOUR_OF_DAY);
int minuto = calendario.get(Calendar.MINUTE);
```