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
    form.reset()
    emailjs.sendForm("service_w1iv7hg", "template_bfjah0k", form)
        .then((response) => alert('Mensagem enviada com sucesso!'))
        .catch((error) => {
            console.log(error);
            alert('Erro ao enviar a mensagem!');
        });

});

// Comando temporario
let temp = document.getElementById('temporario');
temp.addEventListener('click', function() {
    alert('Desativado temporariamente!');
});