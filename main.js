$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();  
        let task = $('#task-input').val(); // Obtém o valor do input
        if (task !== '') {
            addTask(task); // Adiciona a tarefa à lista
            $('#task-input').val(''); // Limpa o input
        }
    });

    function addTask(task) {
        let li = $('<li></li>').text(task);
        let deleteBtn = $('<button></button>').text('Remover').addClass('delete-btn');
    
        deleteBtn.on('click', function() {
            $(this).parent().remove(); 
        });

        li.append(deleteBtn);
        $('#task-list').append(li);
    }
});

alert('Hi, esta é a lista de tarefas, vamos lá! Digite o nome da sua tarefa:');