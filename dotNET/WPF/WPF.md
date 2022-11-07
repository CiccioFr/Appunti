# WPF - Windows Presentation Foundation

- nome in codice `Avalon`
- libreria di classi del Framework [.NET](../ReadMe.md) per lo sviluppo dell'interfaccia grafica utente che crea applicazioni client desktop.
- `WPF` usa il linguaggio [`XAML`](../XAML/XAML.md) (Extensible Application Markup Language)  
    quale linguaggio per descrivere le interfacce grafiche
- in abbinamento con il **Pattern Architetturale `MVVM`**  
    prevede una netta separazione tra gli aspetti di presentazione (GUI), il codice che rappresenta la logica di funzionamento e di elaborazione, e la sorgente dati (Model)
    - **`Data Binding`** (stile dichiarativo)  
        Meccanismo che consente di associare e sincronizzare una fonte dati agli elementi dell'interfaccia utente.  
        In fase di design, grazie a XAML, possiamo descrivere in maniera dichiarativa le relazioni di Binding senza preoccuparci di collegare la fonte dati: senza scrivere codice procedurale ma descrivendo relazioni che legano una casella di testo con un campo di una tabella di un bd o di una sorgente dati qualunque, poi l'aggiornamento bidirezzionale avverrà in automatico

---
## Un progetto WPF
- in partenza 2 unità di codice:
    - App
    - MainWindows   

    Entrambe splittate in:
    - la parte di interfaccia: file `*.xaml`
    - la parte del così detto `code behind`: file `*.xaml.cs`  
    cioè il codice C# delle classi associate al quel file .xaml

In fase di compilazione:
- la parte .xaml verrà letta ed interpretata e farà da guida alla generazione di altro codice C# che andrà ad integrare quello già presente

Struttura iniziale di un [progetto WPF](./ProgInizialeWPF.md):
- App  
    è di fatto la classe che corrisponde all'intera applicazione
    - nel file .xaml  
        evidenzia che il codice descrive l'applicazione nella sua globalità per la presenza del blocco `<Application ..> ... </Application>`  
        

---
## [Elementi](./../XAML/ElementiXAML.md) in XAML

---
## Binding Object
il legame che si stabilisce grazie alla mediazione di un Binding Object
tra una o più Property di una sorgente dati e tra una o più Property di un target
Le **DependencyObject** sono quegli oggetti/property adatte per implementare il meccanismo del binding
- Ogni elemento di una view / ogni suo controllo (come la ComboBox) ha una proprietà **DataContext**
	che è un oggetto dal quale poter recuperare i dati che dovranno essere gestiti tramite il controllo stesso
	- se un elemento non ha un DataContext di suo, in automatico eredita quello del suo contenitore

## [DependencyObject Class](https://learn.microsoft.com/en-us/dotnet/api/system.windows.dependencyobject?view=windowsdesktop-6.0) - microsoft.com  
Rappresenta un oggetto che partecipa al sistema di dipendenza di proprietà.  
La **classe DependencyObject** abilita i servizi del sistema di proprietà di Windows Presentation Foundation (WPF) nelle sue numerose classi derivate. Calcola i valori delle proprietà e fornisce notifiche di sistema sui valori che sono stati modificati.   

## DependencyProperty
Un'altra classe chiave che partecipa al sistema di proprietà.  
**DependencyProperty** consente la registrazione delle proprietà di dipendenza nel sistema di proprietà e fornisce identificazione e informazioni su ciascuna proprietà di dipendenza, mentre **DependencyObject** come classe base consente agli oggetti di utilizzare le proprietà di dipendenza.

---
## [Browser API .NET](https://learn.microsoft.com/it-it/dotnet/api/?view=windowsdesktop-6.0)
## [System.Windows Namespace eng](https://learn.microsoft.com/en-us/dotnet/api/system.windows?view=windowsdesktop-6.0)
## [System.Windows Namespace ita](https://learn.microsoft.com/it-it/dotnet/api/system.windows?view=windowsdesktop-6.0)
Fornisce diverse importanti classi di elementi di base di `WPF`, che supportano il sistema di proprietà WPF e la logica degli eventi e altri tipi utilizzati in modo più ampio da WPF core e WPF framework.

## System.Windows.Controls [Spazio dei nomi](https://learn.microsoft.com/it-it/dotnet/api/system.windows.controls?view=windowsdesktop-6.0)

---
### Link esterni
- [Che cos'è Windows Presentation Foundation (WPF)?](https://learn.microsoft.com/it-it/visualstudio/designers/getting-started-with-wpf?view=vs-2022)
- [Documentazione di Windows Presentation Foundation](https://learn.microsoft.com/it-it/dotnet/desktop/wpf/?view=netdesktop-6.0)
- [Panoramica di XAML (WPF .NET)](https://learn.microsoft.com/it-it/dotnet/desktop/wpf/xaml/?view=netdesktop-6.0)
- [Progettare XAML in Visual Studio](https://learn.microsoft.com/it-it/visualstudio/xaml-tools/designing-xaml-in-visual-studio?view=vs-2022)

---
XAML   Attibuto dell'Elemento  
C#     Proprietà dell'Oggetto  
link ([proprietà di dipendenza](https://learn.microsoft.com/it-it/dotnet/desktop/wpf/properties/dependency-properties-overview?view=netdesktop-6.0))