Codigo para Desafío Latam

Prueba de conceptos de backend con Node y Express

Instalar dependencias en Like Me (Client): 
    npm i --legacy-peer-deps
Modificar scripts "start" y  "build" en package.json por:    
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",

Instalar dependencias en Like_Me_(Backend): 
    npm i 

Ejecutar primero Backend con:
    node Like_Me_\(Backend\)/Backend/Server (Se ejecutará en host 3000)
Ejecutar segundo Client (aplicación React):
    npm run start 
    Aceptar el cambio de host con tecla Y