# XAML

## Permette la descrizione di interfacce grafiche

- La grafica è definita in modalità vettoriale!
    L'interfaccia, essendo basata su descrizioni geometriche, potrà essere ridisegnata al meglio della risoluzione possibile su qualunque tipo di dispositivo, qualunque sia la dimensione ed il formato del display
- è un ponte per app per iOS e Android
- Data Binding (stile dichiarativo)  
    Meccanismo che consente di associare e sincronizzare una fonte dati agli elementi dell'interfaccia utente.  
    In fase di design, grazie a XAML, possiamo descrivere in maniera dichiarativa le relazioni di Binding senza preoccuparci di collegare la fonte dati: senza scrivere codice procedurale, ma descrivendo relazioni che legano una casella di testo con un campo di una tabella di un bd o di una sorgente dati qualunque, poi l'aggiornamento bidirezzionale avverrà in automatico

Un file XAML può essere compilato in un file .BAML (Binary Application Markup Language), che può essere inserito come risorsa in un assembly .NET Framework. In fase di esecuzione, il motore del framework estrae il file .BAML dalle risorse dell'assembly, lo analizza e crea un flusso di lavoro o un albero visivo WPF corrispondente.

## I principali tipi di contenitori
```dos
Panel   Classe da cui derivano tutti i principali contenitori
├── StackPanel
├── Grid
├── WrapPanel
├── DockPanel
├── VirtualizingPanel
└── Canvas
// ed anche
└── Window
```
### Caretteristiche:
Il comportamento, come ciascuno di questi gestisce il suo contenuto:
- `StackPanel`: orientamento (impila) in orizontale o verticale gli elementi contenuti, e tenderà a formare una sola fila di elementi (adattandoli - di default `Stretch` - alla max larghezza dell'altro senso)
    <details> <summary> spoiler esempio </summary>

    ```xml
    <StackPanel Orientation="Horizontal" VerticalAlignment="Botton/Center/Stretch/Top" >
        <Button> Click </Button>
        <Button> Click </Button>
    </StackPanel>
    <!-- ovvero -->
    <StackPanel Orientation="Vertical" Horizontalgnment="Botton/Center/Stretch/Top">
        <Button> Click </Button>
        <Button> Click </Button>
    </StackPanel>
    ```
    </details>

- `Grid`: permette di definire una griglia di righe e colonne  
    Prima di utilizzare un Greed, occorre definire la sua struttura, nei termini delle colonne con `ColumnDefinition` e delle sue righe con `RowDefinition`  
    Dimensionerà a `692 x 319` - al netto\* dei bordi/Intestazione della finestra (`Title="MainWindow" Height="350" Width="700"`)  
    \*dimensione protrebbe dipendere dall'IDE/S.O.  
    Senza parametri divide equamente.  
    Sulle intestazioni di riga/colonna è presente di default 1\* (una star), uno dei 3 modi di specificare le dimensioni (Star/Pixel/Auto)  
    Star definisce in quante parti (proporzionale) è suddiviso lo spazio (es. 1\*/2\*/1\*).  
    La priorità:
    1. `Pixel` / `Auto` (prende spazio in base al contenuto reale) 
    1. `Star` si adatta nel rimanente  
    
    Gli elementi vengono aggiunti (a livello di marcatura XAML) immediatamente dopo il blocco delle riche e delle colonne e prima della chiusura del `/greed`, e viene "assegnato il posto" come una matrice (partendo da 0)
    <details> <summary> spoiler esempio </summary>

    ```xml
    <Grid>
        <Grid.ColumnDefinition>
            <ColumnDefinition Width="1*" />
            <ColumnDefinition Width="2*" />
            <ColumnDefinition Width="400" />
        </Grid.ColumnDefinition>
    </Grid>
    <!-- ovvero -->
    <Grid>
        <Grid.RowDefinition>
            <RowDefinition Height="106" />
            <RowDefinition Height="106" />
            <RowDefinition Height="106" />
        </Grid.RowDefinition>
        <Button Content ="Button" Grid.Column="2" Grid.Row="1" Width="75" />
        <Label Grid.Column="0" Grid.Row="0" Grid.ColumnSpan="2" /> <!-- occupa 2 Grid orizontalmente -->
    </Grid>
    ```
    </details>

- `WrapPanel`: si comporta come il fluire di un testo: andrà a capo su una seconda riga..

- `DockPanel`: appiccicare al bordo gli elementi, aggiungendo una Property `DockPanel.Dock="Left/Top/Right/Bottom"`, un ulteriore elemento andrà ad occupare il resto dell'area

- `VirtualizingPanel`: è in grado di capire quali elemeti al suo interno sono veramente visibili, rispetto ad altri coperti da altre parti dell'interfaccia, in modo da comandare un ridisegno  sselettivo migliorando le performance

- `Canvas`: è una tela (significato del termine), cioè una superficie su cui "disegnare" in posizioni scelte in modo assoluto (questa è la differenza)
    <details> <summary> spoiler esempio </summary>

    ```xml
    <Canvas>
        <Button Canvas.Left="10"> Top left </Button>
        <Button Canvas.Right="10"> Top right </Button>
        <Button Canvas.Left="10" Canvas.Botton="10"> Botton left </Button>
        <Button Canvas.Right="10" Canvas.Botton="10"> Botton right </Button>
    </Canvas>
    ```
    </details>

// ed anche
- `Window`: contenitore di altri controlli **NE PUO' CONTENERE 1 SOLO**

Combinando tra loro questi container è possibile comporre interfacce molto complesse.  
Altri tipici controlli come bordi, bottoni, etichette, ecc, possono essere a loro volta usati come contenitori, pur di un solo singolo elemento, però se il singolo elemento fosse un grid, a quel punto si potrebbe poi mettere di tutto.  
Tutti questi layout condividono, limitandoci agli aspetti piu legati all'interfaccia in se, un nucleo di proprietà comuni:

## Principali proprietà comuni:
- Background
- Width
- Height
- MinWidth / MaxWidth
- MinHeight / MaxHeight
- Margin
- Visibility: Visible / Hidden / Collapsed
- IsEnabled  (è un bool)

**Tutte queste proprietà sono delle così dette "*Dependency Properties*"** in quanto è previsto un meccanismo dinamico con un algoritmo che in qualche modo va a calcolare e determinare il valore "giusto" per quella Properties, ovvero erediterà quella caratteristica dagli elementi contenuti (meccanismo di risparmio di informazioni)  
C'è un meccanismo di notifica automatica come quello che regola il discorso del bilding, che avvisa quando qualcosa è cambiato  
Gestibili con il cruscotto di controllo "Proprietà"

### Unità di Misura
```xml
- Auto        <Button Height="23" Width="Auto">
- Pixel       <Button Height="23" Width="96">
    <!-- o meglio units (unità elementare di misura) 96 in un pollice -->
- cm          <Button Height="23" Width="2.54">
- pollice     <Button Height="23" Width="1in">
- tipografici <Button Height="23" Width="72pt">
```
