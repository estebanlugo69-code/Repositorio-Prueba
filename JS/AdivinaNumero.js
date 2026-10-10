const numero = document.getElementById("numero")
const btnJugar=document.getElementById("btnJugar")
const btnReiniciar=document.getElementById("btnReiniciar")
const resultado = document.getElementById("resultado")
const intentos = document.getElementById("intentos")


let numeroSecreto = Math.floor(Math.random()*100)+1
let intentosRestantes = 7

function reiniciar(){

     numeroSecreto = Math.floor(Math.random()*100)+1
     intentosRestantes = 7
     resultado.textContent=""
     intentos.textContent=""
     numero.value=""
     btnJugar.disabled = false;
    
}
function jugar(){

    numeroConvertido= Number(numero.value)
    intentosRestantes -= 1
    if (intentosRestantes === 0 ) {
        resultado.textContent="PERDISTE EL NUMERO A ADIVINAR ERA " + numeroSecreto
        intentos.textContent="Te quedaron " + intentosRestantes + " intentos restantes"
        btnJugar.disabled = true 
        return

    }
    
    if (numeroConvertido>=1 && numeroConvertido<=100){
        if (numeroConvertido === numeroSecreto){
            resultado.textContent="GANASTE"
            btnJugar.disabled = true;
            return
        }
        else if (numeroConvertido > numeroSecreto){
            resultado.textContent="El numero a adivinar es menor!" 
            intentos.textContent="Te quedan " + intentosRestantes + " intentos restantes" 
        }else{
            resultado.textContent="El numero a adivinar es mayor!"
            intentos.textContent="Te quedan " + intentosRestantes + " intentos restantes"
        }
    }else{
        resultado.textContent="Numero fuera de rango, intenta nuevamente"
        intentos.textContent="Te quedan " + intentosRestantes + " intentos restantes"
    }
    numero.value=""
    
}
btnReiniciar.addEventListener("click",reiniciar)
btnJugar.addEventListener("click",jugar)
