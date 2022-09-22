$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: "(00) 00000-0000"
    })

    $('#cpf').mask('999.999.999-99', {
        placeholder: "123.456.789-00"
    })

    $('#cep').mask('99.999-999', {
        placeholder: "99.999-999"
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            }
        }, 
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
})
