# WPF - Windows Presentation Foundation

- nome in codice `Avalon`
- libreria di classi del Framework [.NET](../ReadMe.md) per lo sviluppo dell'interfaccia grafica utente che crea applicazioni client desktop.
- WPF usa il linguaggio `XAML` (Extensible Application Markup Language)  
    quale linguaggio per descrivere le interfacce grafiche
- in abbinamento con il **Pattern Architetturale `MVVM`**  
    prevede una netta separazione tra gli aspetti di presentazione (GUI), il codice che rappresenta la logica di funzionamento e di elaborazione, e la sorgente dati (Model)
    - **`Data Binding`** (stile dichiarativo)  
        Meccanismo che consente di associare e sincronizzare una fonte dati agli elementi dell'interfaccia utente.  
        In fase di design, grazie a XAML, possiamo descrivere in maniera dichiarativa le relazioni di Binding senza preoccuparci di collegare la fonte dati: senza scrivere codice procedurale ma descrivendo relazioni che legano una casella di testo con un campo di una tabella di un bd o di una sorgente dati qualunque, poi l'aggiornamento bidirezzionale avverrà in automatico

---
### vedi -> [XAML](../XAML/XAML.md)

---
## Funzionamento
Creazione di un progetto:
- in partenza 2 unità di codice:
    - App
    - MainWindows   

    Entrambe splittate:
    - nella parte di interfaccia (o solo di configurazione): il file con estensione `.xaml`
    - la parte del così detto `code behind`, cioè il codice C# delle classi associate al quel file .xaml

In fase di compilazione:
- la parte .xaml verrà letta ed interpretata e farà da guida alla generazione di altro codice C# che andrà ad integrare quello già presente

Struttura
- App  
    è di fatto la classe che corrisponde all'intera applicazione
    - nel file .xaml  
        evidenzia che il codice descrive l'applicazione nella sua globalità per la presenza del blocco `<Application ..> ... </Application>`  
        [XAML per WPF](../XAML/XAML_per_WPF.md) 

---
## [Elementi](./../XAML/ElementiXAML.md) in XAML

---
### Link esterni
- [Che cos'è Windows Presentation Foundation (WPF)?](https://learn.microsoft.com/it-it/visualstudio/designers/getting-started-with-wpf?view=vs-2022)
- [Documentazione di Windows Presentation Foundation](https://learn.microsoft.com/it-it/dotnet/desktop/wpf/?view=netdesktop-6.0)
- [Panoramica di XAML (WPF .NET)](https://learn.microsoft.com/it-it/dotnet/desktop/wpf/xaml/?view=netdesktop-6.0)
- [Progettare XAML in Visual Studio](https://learn.microsoft.com/it-it/visualstudio/xaml-tools/designing-xaml-in-visual-studio?view=vs-2022)

---
XAML   Elemento - Attibuto   
C#     ___ - Proprietà ([proprietà di dipendenza](https://learn.microsoft.com/it-it/dotnet/desktop/wpf/properties/dependency-properties-overview?view=netdesktop-6.0))