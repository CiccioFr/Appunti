# Array

```java
int[] unArray = new int[n];
int[] array = {0, 1, 2, 3};
int arrayLength = array.length;
```

## la classe Arrays
### Arrays.sort(array);      
- Array.sort è diabolico, se l'array non è ordinato, restituisce un valore fallace
System.out.println(Arrays.toString(array));

### Arrays.binarySearch(array, valore);
`int posizione = Arrays.binarySearch(array, 4); // DEVE essere prima Ordinato`
- è diabolico, se l'array non è ordinato, restituisce un valore fallace

### Arrays.deepToString(array);
`System.out.println(Arrays.deepToString(array));`

System.out.println(Arrays.equals(array1,array2));  // confronta 2 arrey

# Arrays.fill(...);
Arrays.fill(array, 0); //immagazina in tutti gli elementi dell'arrey il 2° valore

Arrays.fill(array, indexInizio, indexFine, valore);
- array, inizio index, fine index, valore da immetere


https://it.wikipedia.org/wiki/Hash_table
https://it.wikipedia.org/wiki/Funzione_di_hash