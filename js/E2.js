function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const numeroAleatorio = Math.floor(Math.random() * 100);
            console.log(`Número aleatorio generado: ${numeroAleatorio}`);
            
            if (numeroAleatorio % 2 === 0) {
                resolve("Consulta exitosa");
            } else {
                reject("Error en la consulta");
            }
        }, 3000);
    });
}

consultarBaseDeDatos()
    .then(mensaje => {
        console.log(mensaje);  
    })
    .catch(error => {
        console.error(error);  
    });
