$(document).ready(function(){

$('button').click(function(){

})

$('form').on('submit', function(e){
    e.preventDefault();
    const adicionarNovaTarefa = $('#descricao-tarefa').val();
    const novoItem = $('<li></li>');

    $(`<p id="${adicionarNovaTarefa}">${adicionarNovaTarefa}</p>`).appendTo(novoItem);

    $(novoItem).appendTo('ul');

    $("li").click(function() {
        $(this).toggleClass("riscado");
    });
    
    $('#descricao-tarefa').val('');
});

})

