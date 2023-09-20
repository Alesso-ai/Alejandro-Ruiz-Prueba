/*Funcion para generar color aleatorio , const valor constante*/ 

function generarColorAleatorio(){
    const color="#"+ Math.floor(Math.random()*16777215).toString(16);
    console.log("Color hexadecimal generado: " + color)
    return color
}

function cambiarColorDeFondo() {
    const colorAleatorio = generarColorAleatorio();
    document.body.style.backgroundColor = colorAleatorio;
}

/*De esta manera tambien se puede hacer pasando el elemento con su id
const cambioColor = document.getElementById("miboton2");
cambioColor.addEventListener("click",cambiarColorDeFondo);
*/ 


