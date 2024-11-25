
const formulario1 = document.querySelector(".pepe")
const modal = document.querySelector("#modal_suscriber")
const spanAlert = document.querySelector("#Error-Message")
const imputAlert = document.querySelector(".form-control")
console.log(formulario1); 

formulario1.addEventListener("submit", correo)

function correo(e){
    e.preventDefault()
    let formulario = new FormData(formulario1)
    const email = formulario.get("email")
    console.log(email)
    let arrayemail = email.split("@")

    if (email.includes("@") && arrayemail[1].includes(".") && arrayemail.length<=2) {
    /* alert("correro valido"); */
    abrircerrarmodal()
        }
    else {
            /* alert("correro no valido") */
            imputAlert.clasList.add("inputInvalid")
            spanAlert.clasList.remove("hidden")
    }
}

function abrircerrarmodal(){
const mymodal = new bootstrap.Modal(modal)
mymodal.show()
}
