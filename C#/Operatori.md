# [Operatori ed espressioni C#](https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/operators/)

## Operatore **null-coalescing** `??` 
```c#
int? a = null;
int b = a ?? -1;
Console.WriteLine(b);  // output: -1
```

## Operatore di **assegnazione null-coalescing** `??=` 
```c#
int? numbers = null;
numbers ??= 5;
Console.WriteLine(numbers);  // output: 5
```

## Operatore **Null-conditional** (**Elvis** operator) `?.` in  C#
Prima di utilizzare un riferimento ad un oggetto, l'operatore Elvis verifica che non sia null, per non usarlo nel caso lo fosse, ed incappare in una eccezione
```c#
Oggetto ogg = null;
ogg?.metodo();  // NON lo esegue
ogg = valore;
ogg?.metodo();  // esegue
```

---