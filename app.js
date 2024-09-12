document.getElementById("parceiroForm").addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome')
    if (nome.value === ""){
        alert("nome nao foi informado")
        nome.focus()
    }

  
    const email = document.getElementById('email').value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um endereco de e-mail valido. ");
        email.focus();
        return;
    }
    const telefone = document.getElementById('telefone').value;
    const regexTelefone = /^\d{11}$/;
    if (!regexTelefone.test(telefone)){
        alert("O numero de telefone deve ter exatamente 11 difitos.");
        return;
    }
    

    const site = document.getElementById('site').value;
    const regexSite = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+~#?&//=]*)$/gi;
    if (site && !regexSite.test(site)){
        alert(" Digite um endereço de site válido.")
        site.focus();
        return;
    }
    const parceria = document.getElementById('parceria')
    if (parceria.value === ""){
        alert(" parceria nao informado")
        parceria.focus()
        
    }

    const abrirpopup = document.getElementById('abrir-popup');

    abrirpopup.checked = true;

    const data = Object.fromEntries(new FormData(e.target).entries());

    const textoConteudo = document.getElementById('texto-conteudo');
    textoConteudo.innerHTML = JSON.stringify(data);

    // const data = Object.fromEntries(new FormData(e.target).entries());
    // console.log(data)

    // const response = await fetch('parceiros.json');
    // const listaParceiros = await response.json();

    // console.log("Fetched listaParceiros:", listaParceiros);

    // listaParceiros.push(data)

    // console.log("Fetched listaParceiros atualizada:", listaParceiros);
});

function validarFormulario(){


}