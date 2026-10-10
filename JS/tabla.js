// Referenciar los elementos del html

const inputNumero = document.getElementById('numero')
const inputLimite = document.getElementById('limite')
const botonGenerar = document.getElementById('btnGenerar')
const mensaje = document.getElementById('mensaje')
const listaResultado = document.getElementById('resultado')


// Funciones

function generarTabla(){

    //Leer los valores de la pantalla y convertirlo a números
    const numero = Number(inputNumero.value)
    const limite = Number(inputLimite.value)

    //Borrar información visual anterior
    listaResultado.textContent = ''
    mensaje.textContent = ''

    //Verificar Campos Vacíos
    if(inputNumero.value === '' || inputLimite.value === ''){
        mensaje.textContent = 'Por favor complete los dos campos'
        //console.log("Campos obligatorios")
        return
    }

    if(limite < 1){
        mensaje.textContent= "El valor del Hasta debe ser mayor a cero"
        return
    }

    for(let i = 1; i <= limite; i++){
//      inicio       final     incremento

        let resultado = numero * i
        //crea una etiqueta <li> vacía
        const item = document.createElement('li')
        item.textContent = `${numero} * ${i}  = ${resultado}`

        if(resultado % 2 === 0){
            item.classList.add('par')
        }else{
            item.classList.add('impar')
        }

        listaResultado.appendChild(item)
    }
}



 //Evento del botón
 botonGenerar.addEventListener('click', generarTabla)

