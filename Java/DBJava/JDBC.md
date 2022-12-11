# JDBC

---
```java
import java.sql.*;

public class JDBCexample {
    static final String DB_URL = "jdbc:mysql://localhost:3306/java";
    static final String USER = "utente";
    static final String PASS = "password";
    static final String QUERY = "SELECT nome FROM tabella";

    public static void main(String[] args) {
        // Open a connection
        try {
            // ottenere il collegamento del chiamante al database; ereditato da StoredProc
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(QUERY);
            //quando ho la connessione posso crea uno statement (la query)
            while (rs.next()) {
                //Display values
                System.out.print(rs.getString("nome"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```
https://www.ibm.com/docs/it/i/7.2?topic=procedures-java-parameter-style  
