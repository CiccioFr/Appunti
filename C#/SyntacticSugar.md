# Syntactic Sugar

## Escape
```c#
string string2a = "Path C:\\Windows";   // Path C:\Windows
```
## @ - identificatore Verbatim
```c#
string string2b = @"Path C:\Windows";   // Path C:\Windows
```
## $ - Interpolazione di stringhe
```c#
int num = 5;
string string3a = $"num è {num}";       // num è 5
string string3b = $"num è {{num}}";     // num è {5}
```