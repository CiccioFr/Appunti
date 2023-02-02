# Docker

Tecnologia per l'isolamento delle risorse  

Termini:  
- Container
    - I container sono pacchetti di software che contengono tutti gli elementi necessari per l'esecuzione in qualsiasi ambiente. In questo modo, i container virtualizzano il sistema operativo e sono eseguibili ovunque, da un data center privato al cloud pubblico o anche sul laptop di uno sviluppatore.
- da Chroot a Kubernetes
    - Kubernetes è un sistema open-source di orchestrazione e gestione di container. Inizialmente sviluppato da Google, adesso è mantenuto da Cloud Native Computing Foundation. Funziona con molti sistemi di containerizzazione, compreso Docker.


![Docker](./docker_cheatsheet.png)

---
# Creare un Container
Prerequisito:
- MAVEN

## 1. Generare il file .jar
da CLI in root del progetto (DOVE STA POM.XML)
```dos
mvn clean package
```
- `clean` ripulisce la directory target dal bytecode
- `package` compila direttamente il codice  
### verra creato il jar nella cartella `target`

## `Dockerfile`
Istruisce Docker circa le operazioni da eseguire per creare un'immagine dell'applicazione  
Per app Java, deve essere posto nella root del progetto (dove c'è pom.xml)  
```Docker
# partendo dall'immagine `openjdk` che carica la vers. `19` di java ver `slim` (leggera)
FROM openjdk:19-slim
# crea un container che esponi sulla porta (dal file yaml)
EXPOSE 8761
# alla creaz. aggunge il .jar in "path/nomeFile.jar" e lo copia all'interno dell'imag che sta creando (carica il file nell'immagine del container)
ADD target/discovery-0.0.1-SNAPSHOT.jar discovery-0.0.1-SNAPSHOT.jar 
# quando il container parte (start) parte ilm microservizio
ENTRYPOINT ["java","-jar","/discovery-0.0.1-SNAPSHOT.jar"]
```
## 2. Dockerizzazione
Da CLI nella directory del `pom.xml` e del `Dockerfile`  
`docker build -t discovery:0.0.1-SNAPSHOT .`  
- il file si chiamerà `discovery` e la versione sarà `0.0.1-SNAPSHOT`
6. scaricare image Docker da https://hub.docker.com/search?q=
7. prendere l'mmagine e trasformarla in un container

## Istruzioni Docente
- Apro il prompt di dos
- mi posiziono nella cartella del progetto (dove c'è il pom.xml)
- creo il file jar lanciando il comando:  mvn clean package (verra creato il jar nella cartella 'target')
- lancio il comando: `docker build -t discovery:0.0.1-SNAPSHOT .`
  dove "discovery" è il nome che voglio dare alla mia immagine e "0.0.1-SNAPSHOT" è la versione della mia immagine;
  in questo modo creo l'immagine del mio container.
- lancio il comando : `docker run -d --name=discovery -p 8761:8761 discovery:0.0.1-SNAPSHOT`
    - la prima porta è quella che viene esposta all'esterno (il punto d'accesso)  
        quella da dichiarare per contattare ill container
    - la seconda è la porta interna  
        internamente fa un routing ala seconda porta
  "discovery" è il nome del mio container che sarà esposto sulla porta 8761 partendo dall'immagine "discovery" con tag "0.0.1-SNAPSHOT"
// crea un hashcode con cui identifica il container



## DB
- `-v` i dati vengono mappati nella cartella seguente
- `--env=` nel container è obbligatorio settare una PW


`docker run --name=mysql-container -p 127.0.0.1:6603:3306 -v c:/Users/Public/docker_data/mysql:/var/lib/mysql --env="MYSQL_ROOT_PASSWORD=mysqlDocker"  -d mysql/mysql-server:latest` 
- entrare su mysql dal CLI 
```sql
CREATE USER 'administrator'@'%' IDENTIFIED BY 'mysqlDocker'; 
GRANT ALL PRIVILEGES ON * . * TO 'administrator'@'%'; 
FLUSH PRIVILEGES; // i privilegi vengono persistiti
```
// ** ok end *// 

// allow remote access replacing ip with 0.0.0.0  
`docker run --name=mysql-container -p 0.0.0.0:6603:3306 -v c:/Users/Public/docker_data/mysql:/var/lib/mysql --env="MYSQL_ROOT_PASSWORD=mysqlDocker"  -d mysql/mysql-server:latest`


- il Sistema Operativo è quel VLS2..
---


Cubernates è un orchestratore di Container
- si assume la responsabilità che i ms siano up, che le chiamate funzionino: diano come esito 200/300, ecc
- è una dashboard molto evoluta..

---
## Docker https://www.docker.com  
### Download
 - https://www.docker.com/products/docker-desktop/
### istruzioni per installarlo su win
 - https://docs.docker.com/desktop/install/windows-install/
### installare substrato linux disponibile da ver win10
- https://learn.microsoft.com/it-it/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

---
https://www.youtube.com/watch?v=k1A1CdD1yFc