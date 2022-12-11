creare una chiave SSH:

- per Linux:

- Windows:
C:\Users\accountWin> `ssh-keygen -t rsa -b 4096 -C "nickNameSviluppatore"`
```dos
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\accountWin/.ssh/id_rsa): 
Created directory 'C:\Users\accountWin/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again: 
Passphrases do not match.  Try again.
Enter passphrase (empty for no passphrase):
Enter same passphrase again: 
Your identification has been saved in C:\Users\accountWin/.ssh/id_rsa.
Your public key has been saved in C:\Users\accountWin/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:ZibrCDioUKxr32urNjtFAJLV4gIVoi/8m44iOUpAhLA email@email.it
The key's randomart image is:
+---[RSA 4096]----+
|==+o.            |
|=+.oo.           |
|E.oo..           |
|+=  o..          |
|O.o ..  S .      |
|++...o o +       |
|o+ o+o. . .      |
|B o+o...         |
|=oo**o.          |
+----[SHA256]-----+
```

PS C:\Users\accountWin> type C:\Users\accountWin\.ssh\id_rsa.pub           
```dos
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC1bnxmlpABT2fUpHa6pTpL/cP9mov2Q5jECidAWMn1j6O2YTCIzMvVD8I2kxbG2IpOECvStygXu2D9FiJhsyEAJb1zxldLQ43rt3Kx45B9gddAKzNfFpMcRF/nCAUQfQFNrgfU7wktKMn49/sXsk3oxHGc7x606R0MybcpEFkEXY86g9uTeELG3Jxj4UXXnfioqUT3cL8cyvEn7vvcVuzCV1GdR/CdeqJzW5Kh0Nn1iDOGCid5sXiGngAzfkpqsYrLxYV5sttM1wveQxYa9dyvzCTO/onHYGthrS1SbVF2XXNmSFXzUsU74P/08Gd6euM9DiPDnSYw2apkLQCTUmj1r/Yjfaw1bm6EVKucG6V1ljP5gP/W2TVCr8ywk5gvQUu7zHmU1OYQ49q8E4q2TIpIkI6PPlFEq6aVogKd6JeSkWeEBMS6lVnAAIcnL0Op4J/pJuN78yT2jASXBrIZlyRv1TigLpgq7969x8INW32hECBPNKJ+34EwMtxtf7kUTKb3cns7+BAGvJkJRrsZ/pVU1uwx2MWBBkrQVvRoFdb8aGGqj7LpZS21poSBllnubC5BXKWGOKs4wQjQfYhnzShWI772ojFe9tlwBiXrs7d7YBOPzF8YbW1siyWSNft9ZAVmv9+eNPT4VKydaSYIU7mpiVmUcb9byr/0SaTxUfb3zw== nickNameSviluppatore
```

https://github.com/accountGitHub/nomeProgetto.git
git@github.com:accountGitHub/nomeProgetto.git