

async function buscaEndereço(cep) {
    var mensagemErro =document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepconvertida = await consultaCep.json();
        if (consultaCepconvertida.erro) {
            throw Error('CEP não existente')
        }
        var cidade = document.getElementById('cidade');
        var bairro = document.getElementById('bairro')
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepconvertida.localidade;
        bairro.value = consultaCepconvertida.bairro;
        logradouro.value = consultaCepconvertida.logradouro;
        estado.value = consultaCepconvertida.uf;

        console.log(consultaCepconvertida);
        return consultaCepconvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP inválido : Tente novamente! </p> `
        console.log(erro)
    }
}


var cep = document.getElementById("cep");
cep.addEventListener('focusout', () => buscaEndereço(cep.value));
