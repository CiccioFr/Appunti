# XAML per WPF

## i File alla creazione di un progetto WPF
- App.xaml
```xml
<!-- IL FILE  App.xaml -->
<Application x:Class="WpfApp1.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:local="clr-namespace:WpfApp1"
             StartupUri="MainWindow.xaml">
    <!-- Primo Attributo: x:Class
        x:       - è una abbreviaviazione che fa riferimento allo spazio dei simboli definiti in documenti di cui sotto troviamo i link (xmlns)
        WpfApp1  - indica il namespace del progetto
        App      - nome della classe che corrisponde all'applicazione in funzione (codice c#) 
    Secondo attributo:  xmlns 
        link - vi sono le regole per documenti da considerarsi ben formati (correnti) 
    Terzo attributo:    xmlns:x
        link - contiene il significato da attribuire agli elementi/attributi (la semantica delle varie parti)
    Quarto attributo:   xmlns:local  
    Quinto attributo:   StartupUri
        è la view, cioè la finestra che per prima sarà presentata a video una volta che l'applicativo saràmandato in esecuzione    --> 
    <Application.Resources>
         
    </Application.Resources>
</Application>
```

- MainWindow.xaml
```xml
<!-- IL FILE  MainWindow.xaml con schermo splittato con anteprima di GUI 
La vista, a livello di codice, corrisponde alla classe all'interno del namespace (indicato nel'Attributo x:Class ) -->
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="400" Width="600">
    <!-- Primo Attributo: x:Class
        x:          - come sopra
        WpfApp1     - il namespace
        MainWindow  - nome della classe (C#) che corrisponde alla finestra    --> 
    <Grid>
    </Grid>
</Window> <!-- contenitore può contenere 1 SOLO controllo -->
```

- MainWindow.xaml.cs
```c#
// Il file MainWindow.xaml.cs
namespace WpfApp1
{
    /// <summary>
    /// Logica di interazione per MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow() // costruttore che richiama il metodo InitializeComponent();
        {
            InitializeComponent();  // metodo che va un pò a costruire tutti gli elementi che dovranno comparire come controlli visuali sulla finestra
        }
    }
}
```