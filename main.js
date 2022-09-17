$(document).ready(function() {

    //funcao para inserir as tarefas
    $('form').on('submit',function(e){
        e.preventDefault();
        const nomeNovaTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(` 
            <div class="nova-tarefa-area">
            ${nomeNovaTarefa}
            </div>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nova-tarefa').val('');
    })

    //funcao para clicar e riscar a tarefa, com outro clique ele vai remover o efeito do css
    $(document).on('click', 'li', function () {
        if ($(this).css('text-decoration') === 'none solid rgb(0, 0, 0)') {
            $(this).css('text-decoration', 'line-through')
        } else {
            $(this).css('text-decoration', 'none solid rgb(0, 0, 0)')
        }
    })

})
