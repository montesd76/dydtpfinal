var nombre = document.getElementById ("nombre")
var apellido = document.getElementById ("apellido")
var email = document.getElementById ("email")
var form = document.getElementById ("form")
const parrafo = document.getElementById("warnings")
 
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    
    if(nombre.value.length <5){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    if(apellido.value.length <6){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
  

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})