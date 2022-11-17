let nome = window.document.getElementById('nome')
//por tag: getElementByIdTagName()


let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome é Invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome é valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail não valido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail valido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulario foi enviado com sucesso")
    } else {
        alert("Preencha o formulario corretamente antes de enviar")
    }
}

function mapaZoom(){
    mapa.style.width = '700px'
    mapa.style.height = '700px'

}

function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}