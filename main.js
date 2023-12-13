const form = document.getElementById('form-dados');
const ano = document.getElementById('ano'); 
let formEValido = false;

function validaAno() {
    var ano = parseFloat(document.getElementById('ano').value);
    var idade = parseFloat(document.getElementById('idade').value);
    return ano > idade
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();
//para não enviar o evento (não submeter o formulário) se o nome não estiver completo

    const idade = document.getElementById('idade');
    const mensagemSucesso = `Dados atualizados com sucesso. Idade: <b>${idade.value} anos.</b> Ano de nascimento: <b>${ano.value}</b>`;

    formEValido = validaAno(ano.value)
    if (formEValido){
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    ano.value = '';
    idade.value = '';
    //para que, após submeter o form, os campos apareçam vazios, sem os valores preenchidos

} else{
    ano.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
}
})

ano.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaAno (e.target.value);

    if (!formEValido){
        ano.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        ano.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }


})