const campoDigitar = document.getElementById('campoDigitar');
const botao1 = document.querySelector('#botao1');
const conteudo = document.querySelector('#conteudo');

function enviarMensagem(){
    let msg = campoDigitar.value;
    if (msg === ''){
        return
    }
    let div = document.createElement('div');
    div.className = 'usuario';
    div.innerHTML = `<p><strong>Você diz:</p></strong>
                    <div class="mensagemusua">
                    <p>${msg}</p>
                    </div>`

    conteudo.appendChild(div);
    conteudo.scrollTop = conteudo.scrollHeight - conteudo.clientHeight;
    campoDigitar.value = '';
}

campoDigitar.addEventListener('keydown', enterMsg);

function enterMsg(event){
    if (event.key === 'Enter'){
        enviarMensagem();
    }
}




