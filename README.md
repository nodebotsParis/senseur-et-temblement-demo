# senseurs et tremblements la demo

demo basique de récupération des donnée d'un module de distance a ultrason HC - SR04 + display sur une page web via socket.io

## installation  

### hard 

liez les pin trig et echo ensemble avec un strap et reliez les au pin 7 de l'arduino 
Vcc => 5v 
Gnd => Gng

et c'est parti pour le 

### soft

clonez/forkez le repo

les modules de type HC - SR04 (et la pluspart des senseur de distance) on besoin d'une version particuliere de firmata, cette version est dans ce repo ```pingFirmata/pingFirmata.ino```
uploadez sur votre arduino puis 

```
npm install
```

lancer le serveur ```node sonar.js```

puis visitez [cette page](http://localhost:4000)



## todo 

- lire le code ```sonar.js``` pour le serveur et ```/public/js/main.js``` pour le client
- lisser les valeurs du sonar
- déchaînez votre imagination
