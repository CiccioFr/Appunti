# Override di ToString()

La keyWord `override` è indispensabile per richiamare automaticamente il metodo.
Omettendo la KeyWord, al richiamo della stampa dell'oggetto, il meccanismo andrebbe a chiamare quello ereditato dalla classe Object, restituendo lo spazio dei nomi e il noome della classe. In questo caso occorrere specificare il metodo ToString() per richiamare quello scritto da noi.

```c#
// con override del metodo ToString()
namespace Prova {
    class Ogg {
        public string Txt { get; set; }
        public override string ToString() {
            return Txt;
        }
    }
    class ClasseMain {
        static void Main(string[] args) {
            Ogg ogg = new Ogg();
            ogg.Txt = "testo";
            Console.WriteLine(ogg);   // Testo
        }
    }
}
```
```c#
// senza override del metodo ToString()
namespace NameSpaceProva {
    class Ogg {
        private string txt = "Testo Default";
        public string Txt { get => txt; set => txt = value; }
        public string ToString() {
            return txt;
        }
    }
    class ClasseMain {
        static void Main(string[] args) {
            Ogg ogg = new Ogg();
            ogg.Txt = "testo";
            Console.WriteLine(ogg);         // NameSpaceProva+Ogg
            Console.WriteLine(ogg.ToString());  // testo
        }
    }
}       
```