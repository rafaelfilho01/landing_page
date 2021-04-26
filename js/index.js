var caixaEmail = document.getElementById('caixaEmail')
var email = document.getElementById('email').value
var sucesso = document.getElementById('sucesso')

function clicar() {
    document.getElementById('promoçao').style.display = "none"
    document.getElementById('caixaEmail').style.display = "block"
}

var receber = document.getElementById('receber').value

function rec() {
    if (!document.getElementById("email").value) {
        document.getElementById('aviso').innerHTML = 'Insira seu e-mail, por favor'
        document.getElementById('aviso').style.color = '#DC143C'
        document.getElementById('aviso').style.fontSize = '15px'
        document.getElementById('aviso').style.marginLeft = '5px'
    } else {
        sucesso.style.display = 'flex'
        document.getElementById('caixaEmail').style.display = "none"

    }
}

    function nao(){
        document.getElementById('promoçao').style.display = "flex"
        sucesso.style.display = 'none'
       document.getElementById('siteLoja').style.display='block'
       document.getElementById('siteLoja').innerHTML='VISITE O NOSSO SITE'
        document.getElementById('sim').style.backgroundColor='#ff024e2c '
       }
       