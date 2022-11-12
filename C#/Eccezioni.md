# Eccezioni

## `InvalidOperationException`
```c#
throw new InvalidOperationException("Testo restituito al verificarsi dell'eccezione");
```
<details> <summary>Spoiler warning</summary>

```c#
// intercettazione dell'eccezione
try{
    if(varNum < 0 ) throw new InvalidOperationException("numero negativo");
}
catch{
}
```
</details>