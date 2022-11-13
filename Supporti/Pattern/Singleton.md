## `Singleton`  
Nella programmazione ad oggetti, il singleton è uno dei pattern fondamentali descritti dalla "Gang of Four" nel celebre libro Design Patterns  

```java
// Java
public class MySingleton {
    private static MySingleton instance;
    // altre variabili del caso
    private int n;
    private String pippo;
    
    private MySingleton() {
    }

    public synchronized static MySingleton getInstance() {
        if (instance == null) {
            instance = new MySingleton();
        }
        return instance;
    }
    
    public void faQualcosa() {
    }
}
// ----
class Main {
    public static void main(String args[]) {
        // instantiate Singleton class with obj1 
        MySingleton obj1 = MySingleton.getInstance();
        // instantiate Singleton class with obj2 
        MySingleton obj2 = MySingleton.getInstance();
    }
}
```