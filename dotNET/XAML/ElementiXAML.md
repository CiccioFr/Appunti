# Elementi di XAML

`x:Name="identificatoreElemento"` riferimento con i quali i comandi C# potranno interagire con gli elementi, e dotarli di funzionalità  
`x:` il riferimento abbreviato al namespace
```xml
<StackPanel Orientation="Horizontal" >
    <Border Background="LightBlue" BorderBrush="Black" BorderThickness="2"
    CornerRadius="45" Padding="25"> <!-- StackPanel non ha Padding, si può ovviare con un Border, Border può avere un solo figlio -->
        <StackPanel Margin="20" Width="Auto">
            <!-- Etichetta -->
            <TextBlock Text="Ciao" Margin="10,20,0,5" Padding="5,20" 
                Background="red" Width="15" Height="55"
                x:FieldModifier="private"/>
                <!-- l'attributo x:FieldModifier="private" 
                impedisce la modifica dell'elemento 
                da un metodo esterno (di un'altra classe) -->
            <TextBlock Margin="10"> testo alternativo </TextBlock>

            <Label Content="Testo della Label" Margin="10,15" Background="Orange"
                Grid.Column="0" Grid.Row="0"  Grid.ColumnSpan="2"/>

            <TextBox x:Name="coordinataZ" Width="200" x:FieldModifier="private" 
                Text="Coordinata Z"/>
            <TextBox> testo alternativo </TextBox>

            <ListBox Grid.Column="0" Grid.Row="1" Margin="2"/>

            <Button x:Name="buttonReset" Content="Testo del Button"
                Click="buttonReset_Click" 
                Width="100" Height="55"/>
            <Button> Testo del Button </Button>

            <ComboBox x:Name="cmb" x:FieldModifier="private" Margin="5,0"/>
        <StackPanel>
    </Border>
<StackPanel>
```
---
# System.Windows.Controls [Spazio dei nomi](https://learn.microsoft.com/it-it/dotnet/api/system.windows.controls?view=windowsdesktop-6.0)

La versione en differisce da ita: offrono diverse "soluzioni"

- [Border](https://learn.microsoft.com/it-it/dotnet/api/system.windows.controls.border?view=windowsdesktop-6.0)
- [Calendar](https://learn.microsoft.com/it-it/dotnet/api/system.windows.controls.calendar?view=windowsdesktop-6.0) - ita
- [CalendarView](https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.calendarview?view=winrt-22621) - en
