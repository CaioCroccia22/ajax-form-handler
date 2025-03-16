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
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $(this);

        // this é o botão que foi clicado, ou seja #btn-buscar-cep
        // $(this) é um objeto jQuery que representa o botão clicado
        botao.find('i').addClass('d-none');
        botao.find('span').removeClass('d-none');

        // parametro resposta é o retorno da requisição
        $.ajax(endpoint).done(function(resposta) {
            // console.log(resposta);
            const logradourou = resposta.logradouro;
            const bairro = resposta.bairro;
            const localidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradourou}, ${bairro}, ${localidade}, ${estado}`;
            $('#endereco').val(endereco);

            setTimeout(function(){
                botao.find('i').removeClass('d-none');
                botao.find('span').addClass('d-none');
            }, 4000);
        })
    })
})


// Resposta JSON

// {
//     "cep": "11045-201",
//     "logradouro": "Avenida Siqueira Campos",
//     "complemento": "de 333 ao fim - lado ímpar",
//     "unidade": "",
//     "bairro": "Embaré",
//     "localidade": "Santos",
//     "uf": "SP",
//     "estado": "São Paulo",
//     "regiao": "Sudeste",
//     "ibge": "3548500",
//     "gia": "6336",
//     "ddd": "13",
//     "siafi": "7071"
// }