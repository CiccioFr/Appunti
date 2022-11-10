## Field (campi) e Property (proprietà) di una classe/oggetto

```c#
class Assegn {              // membri interni
    private byte _n = 1;        // field
    public int N {              // Property
        get { return _n; }      // get => _n;
        set {                   // set => _n = value;
            if (value <= 30 && value > 0)
                _n = (byte) value;
            else throw new InvalidOperationException();
        }
    }   
    // public int N { get; private set; } = 1  // in questa forma non servono field
}

static void Main(string[] args) {
    Assegn nr = new Assegn();
    try { nr.N = 45; }
    catch (InvalidOperationException e) {
        Console.WriteLine("Non valido");
    }
    Console.Write(nr.N); 
}
// output
//    Non valido
//    1
```
Nota: La presenza dei field sono estremamente utili per la Reflection, l'assenza porterebbe ad una incoerenza di gestione

## Altre sintassi per field - property // `readonly`
```c#
class Assegn {
    // field  
    private byte n = 1;        // field praticamente readonly
    public int N {             // Property readonly con private al set
        get => n;
        private set => n = value;   // <--
    }
    // piccolo guadagno prestazionale in lettura rispetto a una property o metodo getter
    public readonly string txt = "";  // cmq mai consigliato field public!!
}
```
Nota: indicate private il Setter, renderebbe la Property Readonly


## Property readonly di fatto
```c#
class Assegn {
    private double costoSenzaIva = 12.0;
    private int IVA = 4;
    public double CostoIvaInclusa => costoSenzaIav * (1 + IVA / 100)  // <--
}
```

## AutoProperty
```c#
// AutoProperty (in questa forma non servono field)
class Assegn {
    public int N { get; set; }
    public int M { get; private set; } = 1
}
```