// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
     // AJAXX - Asynchronous JavaScript and XML
        // Interação entre o front end e o back end sem precisar recarregar a página
        // Requisição HTTP para o servidor
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();

        
//     })
// })

$(document).ready(function(){
    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        // parametro resposta é o retorno da requisição
        $.ajax(endpoint).done(function(resposta) {
            console.log(resposta);
        })
    })
})