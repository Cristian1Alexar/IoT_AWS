
//Crear una instancia del WebSocket utilizando la API de Websocket
var ws = new WebSocket("ws://localhost:8080");

//Requerir elementos mediante el DOM 
var door = document.getElementById('door');
var led1 = {
    on: document.getElementById('led1on'),
    off: document.getElementById('led1off'),
    no: 1

}
var led2 = {
    on: document.getElementById('led2on'),
    off: document.getElementById('led2off'),
    no: 2
}
var led3 = {
    on: document.getElementById('led3on'),
    off: document.getElementById('led3off'),
    no: 3
}
//declaración de respuestas a enviar al websocket 
opendoor = {
    "action": "request",
    "door": 1,
    "angle": 90, 
    "led": 5, 
}
ledon = {
    "action": "request",
    "door": 0,
    "angle": 0, 
    "led": 1, 
}
ledoff = {
    "action": "request",
    "door": 0,
    "angle": 0, 
    "led": 0, 
}
var respuesta = {
    "message": " "
}

//Programación de eventos click para enviar las respuestas al websocket 
door.addEventListener("click", function(){
    door.className = "btn on";
    ws.send(JSON.stringify(opendoor));
    ws.onmessage = function (event) {
        console.log(event.data);
        document.getElementById('doorlabel').innerHTML= "Puerta Abierta";
        door.className = "btn btn-sucesss btn-lg";
        setTimeout(function(){ document.getElementById('doorlabel').innerHTML= "Puerta Cerrada";
        door.className = "btn";}, 5000);
      } 
});
led1.on.addEventListener("click", function(){
    led1.on.className = "btn on";
    led1.off.className = "btn btn-secondary";
    ledon.led = led1.no;
    console.log(ledon);
    ws.send(JSON.stringify(ledon));
})
led1.off.addEventListener("click", function(){
    led1.off.className = "btn off";
    led1.on.className = "btn btn-secondary";
    console.log(ledoff);
    ws.send(JSON.stringify(ledoff));
})
led2.on.addEventListener("click", function(){
    led2.on.className = "btn on";
    led2.off.className = "btn btn-secondary";
    ledon.led = led2.no;
    console.log(ledon);
})
led2.off.addEventListener("click", function(){
    led2.off.className = "btn off";
    led2.on.className = "btn btn-secondary";
})
led3.on.addEventListener("click", function(){
    led3.on.className = "btn on";
    led3.off.className = "btn btn-secondary";
})
led3.off.addEventListener("click", function(){
    led3.off.className = "btn off";
    led3.on.className = "btn btn-secondary";
})


