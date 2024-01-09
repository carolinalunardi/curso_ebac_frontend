$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){

        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-quadros button').click(function(){
        const destino = $('#contato');
        const nomeQuadro = $(this).parent().find('h3').text();

        $('#quadro-interesse').val(nomeQuadro);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    
    })






})