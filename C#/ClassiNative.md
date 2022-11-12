# Classi Native di C#

## int

- `Parse`
```c#
string stringConValNumerico = "5";
int num = int.Parse(stringConValNumerico);  // 5
```

---
## [la Classe `String`](https://learn.microsoft.com/it-it/dotnet/api/system.string?view=net-7.0)
> Le stringhe sono immutabili

```c#
string stringa = "Testo della Stringa scritto il 04-8-1979";
```

### `Lenght` - Lunghezza della stringa // int
```c#
stringa.Length;     // int 40
```

### `IndexOf();` - posizione della prima occorenza
```c#
// param_1  char | string - Testo da ricercare
// return int ->   -1 se non trovato | posizione
stringa.IndexOf('l');  // 8
```

### `Substring();` - estrazione di porzione di stringa
```c#
// param_1 int - Posizione iniziale
// param_2 int - [opzionale] Lunghezza da estrarre
// return string
stringa.Substring(6);       // della Stringa scritto il 04-8-1979
stringa.Substring(6, 9);    // della Str
```

### `using System.Threading.Tasks;` - 
- [link](https://www.youtube.com/watch?v=iWDJoqNyYKo&list=PLei8GCf80DGOXPHMIEvaokEyduCQ5l9Ee&index=19)

### `using System.Diagnostics;` - 
- [link](https://www.youtube.com/watch?v=iWDJoqNyYKo&list=PLei8GCf80DGOXPHMIEvaokEyduCQ5l9Ee&index=19)

```c#
// istanziazione di un cronometro
Stopwatch sw = new Stopwatch;
// avvio del cronometro
sw.Start();

// --- codice ...
Task t1 = new Task(() => {metodoMultiThread(); }); // il costruttore di Task vuole una funzione che restituisca un System.Action
// --- codice ...

// Ferma cronometro
sw.Stop();
Console.WriteLine($"Fine: {sw.ElapsedMilliseconds} ms");
```

### `__________________` - 
### `__________________` - 
### `__________________` - 
### `__________________` - 
### `__________________` - 