let tradutorBotao = document.getElementById('tradutor');
tradutorBotao.addEventListener('click', () => {
    alert('Esse botão está em produção!');
})

let gmail = document.querySelector('#form');
gmail.addEventListener('submit', (e) => { 
    e.preventDefault();

    emailjs.init({
        publicKey: 'lhqvIe35GivxFJF0D'
    });

    emailjs.sendForm("service_w1iv7hg", "template_bfjah0k", form)
        .then((response) => alert('Mensagem enviada com sucesso!'))
        .catch((error) => {
            console.log(error);
            alert('Erro ao enviar a mensagem!');
        });

});

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
const limpar = document.getElementById('enviar');

limpar.addEventListener('click', () => {
    nome.value = ''; 
    email.value = '';
    mensagem.value = '';
})

// Comando temporario
let temp = document.getElementById('temporario');
temp.addEventListener('click', function() {
    alert('Desativado temporariamente!');
});
