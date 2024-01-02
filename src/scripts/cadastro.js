const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnCadastrar = document.querySelector('#btn-cadastrar');
const btnLogin = document.querySelector('#btn-login');
const erroEmail = document.querySelector('.erro-email');
const erroSenha = document.querySelector('.erro-senha');

erroEmail.style.display = 'none';
erroSenha.style.display = 'none';

email.addEventListener('input', function() {
    if (!validarEmail(email.value)) {
        erroEmail.style.display = 'block';
    } else {
        erroEmail.style.display = 'none';
    }
});

senha.addEventListener('input', function() {
    if (!validarSenha(senha.value)) {
        erroSenha.style.display = 'block';
    } else {
        erroSenha.style.display = 'none';
    }
});

// Array: lista
let cadastrados = localStorage.getItem('cadastrados') ? JSON.parse(localStorage.getItem('cadastrados')) : [];

btnCadastrar.addEventListener('click', function() {
    const dadosCadastro = {
        email: email.value,
        senha: senha.value
    }

    const usuarioCadastrado = cadastrados.find((cadastrado) => cadastrado.email === dadosCadastro.email);

    if (usuarioCadastrado) {
        return alert('Usuário já existe');
    } else {
        cadastrados.push(dadosCadastro);
        localStorage.setItem('cadastrados', JSON.stringify(cadastrados));
        alert('Cadastro realizado com sucesso');
        window.location.href = '../../login.html';
    }

    // Mesmo IF acima utilizar o return pra finalizar a função e não precisar utilizar o ELSE
    // if (usuarioCadastrado) {
    //     alert('Usuário já existe');
    //     return;
    // }

    // cadastrados.push(dadosCadastro);
    // localStorage.setItem('cadastrados', JSON.stringify(cadastrados));
    // alert('Cadastro realizado com sucesso');

    //  Mesmo IF ELSE acima usando ternário

    //     usuarioCadastrado ? alert('Usuário já existe') : adicionarUsuario();

    //     function adicionarUsuario() {
    //         cadastrados.push(dadosCadastro);
    //         localStorage.setItem('cadastrados', JSON.stringify(cadastrados));
    //         alert('Cadastro realizado com sucesso');
    //     }
});

btnLogin.addEventListener('click', function() {
    redirectToLogin();
});

function redirectToLogin() {
    window.location.href = '../../login.html';
}

function validarEmail(email) {
    const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    console.log(regexEmail.test(email));
    return regexEmail.test(email);
}

function validarSenha(senha) {
    return senha.length === 8;
}