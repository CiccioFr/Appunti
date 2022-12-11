## file App.xaml
```xml
<Application x:Class="WpfApp1ConTendina.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:local="clr-namespace:WpfApp1ConTendina"
             StartupUri="MainWindow.xaml">
    <Application.Resources>
         
    </Application.Resources>
</Application>
```

## file App.xaml.cs
```C#
namespace WpfApp1ConTendina
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
    }
}
```

## file MainWindows.xaml
```xml
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="400" Width="600">

    <StackPanel>
        <StackPanel Orientation="Horizontal" >
            <StackPanel Margin="20" Width="Auto">

                <!-- <Border Padding=""></Border> liv.up -->
                <StackPanel Orientation="Horizontal" Margin="20,10,0,5">
                    <TextBlock Text="x:" Width="15" />
                    <TextBox x:Name="coordinataX" Width="200" x:FieldModifier="private" Text="Coordinata X"/>
                </StackPanel>

                <StackPanel Orientation="Horizontal" Margin="20,5,0,5">
                    <TextBlock Text="y:" Width="15" />
                    <TextBox x:Name="coordinataY" Width="200" x:FieldModifier="private" Text="Coordinata Y"/>
                </StackPanel>

                <StackPanel Orientation="Horizontal" Margin="20,5,0,25">
                    <TextBlock Text="z:" Width="15"/>
                    <TextBox x:Name="coordinataZ" Width="200" x:FieldModifier="private" Text="Coordinata Z"></TextBox>
                </StackPanel>

                <StackPanel Orientation="Horizontal" >
                    <Button x:Name="buttonReset" Click="ButtonReset_Click" Width="100" Content="Reset"/>
                    <TextBlock x:Name="reset" Width="50"/>
                </StackPanel>
            </StackPanel>
        </StackPanel>


        <StackPanel>
            <Button x:Name="button" Click="Button_Click">Reset test</Button>
            <TextBlock x:Name="txtGenerico" Width="50"/>
        </StackPanel>

        <Grid>

            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="Auto" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="32"/>
                <RowDefinition Height="*"/>
            </Grid.RowDefinitions>

            <Label Grid.Column="0" Grid.Row="0" Margin="2" Grid.ColumnSpan="2" Background="Orange" Content="Elenco Clienti" />
            <ListBox Grid.Column="0" Grid.Row="1" Margin="2" />

            <StackPanel Grid.Column="1" Grid.Row="1" Margin="2">
                <Button>Nuovo</Button>
                <Button>Dettaglio</Button>
                <Button>Modifica</Button>
                <Button>Elimina</Button>
            </StackPanel>

        </Grid>
    </StackPanel>
</Window>
```

## file MainWindows.xaml.cs
```C#
namespace WpfApp1
{
    /// <summary>
    /// Logica di interazione per MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private void TxtButton_Click(object sender, RoutedEventArgs e)

        private void ButtonReset_Click(object sender, RoutedEventArgs e)
        {
            FunReset();
        }

        private void FunReset()
        {
            coordinataX.Text = "";
            coordinataY.Text = "";
            coordinataZ.Text = "";
            //throw new NotImplementedException();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            txtGenerico.Text = $"{coordinataX.Text}!!"; // il codice accede all'attributo dell'elemento il cui x:name è "coordinataX"
        }

    }
}
```