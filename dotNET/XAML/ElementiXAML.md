
`x:Name="identificatoreElemento"` riferimento con i quali i comandi C# potranno interagire con gli elementi, e dotarli di funzionalità  
`x:` il riferimento abbreviato al namespace
```xml
<StackPanel Orientation="Horizontal" >
    <Border> <!-- StackPanel non ha Padding, si può pvviare con un Border -->
        <StackPanel Margin="20" Width="Auto">
            <TextBlock Text="Ciao" Margin="10,20,0,5" Padding="5,20" 
                Background="red" Width="15" Height="55"/> <!-- Etichetta -->
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
