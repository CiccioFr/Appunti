# C#

[C# su VS Code](./Cs_su_VSCode.md)

## [Operatori ed espressioni C#](https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/operators/)

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

### Link Web
- [Documentazione di C#](https://learn.microsoft.com/it-it/dotnet/csharp/) - Microsoft
- [Guida C#](https://www.html.it/guide/guida-c1/) - html.it
- Da `C# 9` a `C# 10` (.NET 6) - F. Camuso  
    global using, miglioramenti al pattern matching e altro - [link youtube](https://www.youtube.com/watch?v=KvJja_WiiTQ&list=PL0qAPtx8YtJeX-qXWVo59IY7IfzeUToPZ)

- [C#](http://www.carlovecchio.altervista.org/c-.html) - Carlo Vecchio
- [Ereditarietà - Hiding e Override](http://www.carlovecchio.altervista.org/c----ereditarieta--inheritance-.html) - Carlo Vecchio

---
[C# Keywords](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/) - en  
[C# Keywords](https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/keywords/) - it

