// BUSCAR LA RESPUESTA

fetch('json.json')
.then(Response=> Response.json())
.then(json=>{
    document.getElementById('adn').innerHTML=json.frase1;
    document.getElementById('id').innerHTML=json.frase2;
    document.getElementById('numero').innerHTML=json.cantidad1;
          console.log(json)
})