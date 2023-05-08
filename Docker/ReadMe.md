# `Docker`

Tecnologia per l'isolamento delle risorse  
Piattaforma software open-source per eseguire processi informatici in ambienti isolabili, minimali e facilmente distribuibili chiamati `Container Linux` (o anche soltanto container), con l'obiettivo di semplificare i processi di deployment di applicazioni software.  
[Link amazon](https://aws.amazon.com/it/docker/)  
[Link ibm](https://www.ibm.com/it-it/cloud/learn/docker)  
[Link microsoft](https://learn.microsoft.com/it-it/dotnet/architecture/microservices/container-docker-introduction/docker-defined)  

Termini:  
- Container
    Pacchetti di software che contengono tutti gli elementi necessari per l'esecuzione in qualsiasi ambiente. In questo modo, i container virtualizzano il sistema operativo e sono eseguibili ovunque, da un data center privato al cloud pubblico o anche sul laptop di uno sviluppatore.
- Chroot (contrazione di change e root)  
    in informatica ed in particolare nei sistemi operativi Unix e Unix-like, indica un'operazione che consiste nel cambiare la directory di riferimento dei processi che sono in esecuzione corrente e per i processi generati da questi ultimi (cosiddetti processi figlio). 


![Docker](./docker_cheatsheet.png)

---

### Container
Pacchetti di software che contengono tutti gli elementi necessari (librerie, strumenti di sistema, codice e runtime) per l'esecuzione in qualsiasi ambiente. In questo modo, i container virtualizzano il sistema operativo e sono eseguibili ovunque, da un data center privato al cloud pubblico o anche sul laptop di uno sviluppatore.  
[Link google](https://cloud.google.com/learn/what-are-containers?hl=it#section-3)
- Creazione del Container:  
    Da un'immagine (eseguendo il comando docker run) Docker eseguirà il download dell'immagine dal docker hub ed eseguirà un'istanza di redis.  
    [Link thesolving](https://thesolving.com/it/containerizzazione/come-creare-un-container-con-docker/)
- Immagini Docker:  
    Raccolta di software da eseguire come container che contiene un set di istruzioni per la creazione di un container da eseguire sulla piattaforma Docker. Le immagini sono immutabili e le modifiche apportate a un'immagine richiedono la creazione di una nuova immagine.  
    [Link oracle](https://www.oracle.com/it/cloud/cloud-native/container-registry/what-is-docker/)  
- volumi in Docker  
    Un volume di Docker permette di scambiare dati tra questi container o rendere persistenti dati provenienti da un container Docker.  
    [Link ionos](https://www.ionos.it/digitalguide/server/know-how/volumi-dei-container-docker/)  
- rimuovere contenitori, immagini, volumi e reti docker
    tilizzare il comando docker container rm seguito dall'ID dei contenitori che si desidera rimuovere.  
    [Link joecomp](https://it.joecomp.com/how-remove-docker-containers)  

[YouTube](https://www.youtube.com/watch?v=0TBvInxREIk)  
[Containerizzazione](https://thesolving.com/it/containerizzazione/)  
Kubernetes?  

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

## Docker https://www.docker.com  
### Download
 - https://www.docker.com/products/docker-desktop/
### istruzioni per installarlo su win
 - https://docs.docker.com/desktop/install/windows-install/
### installare substrato linux disponibile da ver win10
- https://learn.microsoft.com/it-it/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

---
https://www.youtube.com/watch?v=k1A1CdD1yFc

- Installazione Windows -> 
    [Guida 1](https://www.ictpower.it/sistemi-operativi/installazione-e-gestione-dei-container-windows-e-linux-con-docker-desktop-in-windows-10-versione-1909.htm) / 
    [Guida 2](https://thesolving.com/it/containerizzazione/come-installare-docker-mini-guida-pratica/) / 
    [Download](https://hub.docker.com/editions/community/docker-ce-desktop-windows ) 