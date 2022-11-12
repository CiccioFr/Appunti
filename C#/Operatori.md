# [Operatori ed espressioni C#](https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/operators/)

## Operatore **null-coalescing** `??`
Verifica il valore della variabile a sinistra,  
nel caso sia null, considera quello a destra
```c#
int? nullo = null;
int? num = nullo ?? -12;
Console.WriteLine(num);  // output: -12
```

## Operatore di **assegnazione null-coalescing** `??=`
Evita l'assegnazione di un valore null
```c#
int? nullo = null;
int? num = 77;
num ??= nullo;
Console.WriteLine(num);  // output: 77
```

## Operatore **Null-conditional** (**Elvis** operator) `?.` in  C#
Prima di utilizzare un riferimento ad un oggetto,  
l'**operatore Elvis verifica che non sia null**,  
per non usarlo nel caso lo fosse, ed incappare in una eccezione
```c#
Oggetto ogg = null;
ogg?.metodo();  // NON lo esegue
ogg = valore;
ogg?.metodo();  // esegue
```

---