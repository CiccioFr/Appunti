# Modificatori di accesso in C#
link:
- [Modificatori di accesso (Riferimenti per C#)](https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/keywords/access-modifiers)
- [Modificatori di accesso (Guida per programmatori C#)](https://learn.microsoft.com/it-it/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)
- [spiega assembly](https://codicepragmatico.it/coding/modificatori-di-accesso/)

## Cinque modificatori di accesso - sette livelli di accessibilità 
- `public`: l'accesso non è limitato.
- `protected`: l'accesso è limitato alla classe o ai tipi derivati dalla classe che li contiene.
- `internal`: l'accesso è limitato all'assembly corrente.
- `protected internal`: l'accesso è limitato all'assembly corrente o ai tipi derivati dalla classe che li contiene.
- `private`: l'accesso è limitato al tipo contenitore.
- `private protected`: l'accesso è limitato alla classe o ai tipi derivati dalla classe che li contiene all'interno dell'assembly corrente.
- `file`: il tipo dichiarato è visibile solo nel file di origine corrente. I tipi con ambito file vengono in genere usati per i generatori di origine.
- default:
```c#
namespace MyCompany {
    class Outer {
        void Foo() {}
        class Inner {}
    }
}
// è equivalente a
namespace MyCompany {
    internal class Outer {
        private void Foo() {}
        private class Inner {}
    }
}
```
- Un membro di una classe base può essere ```virtual```, cioè può essere sovrascritto da una classe derivata (quindi la classe derivata ne fa una diversa implementazione).
- Una classe base può essere ``abstract``; una classe astratta non può essere istanziata direttamente ma solo tramite una classe derivata.
- Una classe `sealed` è invece una classe che non può essere derivata.

- [`delegate`](https://learn.microsoft.com/it-it/dotnet/csharp/programming-guide/delegates/)

[Aggiungere modificatori di accessibilità](https://learn.microsoft.com/it-it/dotnet/fundamentals/code-analysis/style-rules/ide0040)