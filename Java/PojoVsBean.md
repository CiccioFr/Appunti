# Difference between a JavaBean and a POJO

java beans:                   |       Pojo:
-- | --
deve estendere Serializable o Externalizable.       |      no need to extends or implement.
must have public class .          |      must have public class
must have private instance variables. |     can have any access specifier variables.
must have public setter and getter method. |  may or may not have setter or getter method.
must have no-arg constructor.        | can have constructor with agruments.



Externalizable


---
(https://stackoverflow.com/questions/1394265/what-is-the-difference-between-a-javabean-and-a-pojo)