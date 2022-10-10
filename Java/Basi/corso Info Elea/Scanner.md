# Scanner

```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

String nome = scanner.nextLine();

int num1 = scanner.nextInt();
scanner.nextLine(); // inserire dopo nextInt() per catturare il CR
