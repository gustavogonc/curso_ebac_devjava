const form = document.getElementById("form-envio");

let primeiroNumero = document.getElementById('numeroA');
parseInt(primeiroNumero, 10);

let segundoNumero = document.getElementById('numeroB');
parseInt(segundoNumero, 10);

let formEValido = false;




function numeroBMaiorA(valor1, valor2){
    let validacao = valor1 < valor2;
    return validacao;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const mensagemSucesso = `Os dados estão corretos! Formulário enviado.`
    const mensagemErro =`O valor digitado em A = <b>${primeiroNumero.value}</b>, é maior que o número B = <b>${segundoNumero.value}</b>`;

    formEValido = numeroBMaiorA(primeiroNumero.value, segundoNumero.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        primeiroNumero.value = '';
        segundoNumero.value = '';
    } else {
        const containerMensagemErro = document.querySelector('.mensagem-erro');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }

})

