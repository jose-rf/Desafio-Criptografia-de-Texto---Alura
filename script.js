function capturarTexto(){
    var textarea = document.getElementById("caixa");
    var textoCapturado = textarea.value;
    console.log(textoCapturado);
    criptografar(textoCapturado);
}

function tirarVisibilidade() {
    var visibilidadeUm = document.getElementById('msgUm');
    var visibilidadeDois = document.getElementById('msgDois');

    visibilidadeUm.style.display = 'none';
    visibilidadeDois.style.display = 'none';
}

function criptografar(textoParaCriptografia){
    console.log(`oie ${textoParaCriptografia}`);
    let textoCriptografado = textoParaCriptografia.replace(/[aeiou]/g, function(match){
        if(match === 'a'){
            return 'ai';
        } if(match === 'e'){
            return 'enter';
        } if (match === 'i'){
            return 'imes';
        } if(match === 'o'){
            return 'ober';
        } if (match === 'u'){
            return'ufat';
        }
    });
    console.log(textoCriptografado);
    reescrever(textoCriptografado);
}

function reescrever(textoParaEscrita){
    document.getElementById("caixa").value = "";
    console.log("Texto reescrito");
    var textoExibido = document.getElementById("txtOriginal");
    textoExibido.innerHTML = textoParaEscrita;
}

function descriptografar(){
    var textoParaDescriptografar = document.getElementById("caixa");
    var mensagemCriptografada = textoParaDescriptografar.value;
    console.log(mensagemCriptografada);
        let textoMensagemCriptografada = mensagemCriptografada.replace(/ai|enter|imes|ober|ufat/g, function(match){
        if(match === 'ai'){
            return 'a';
        } if(match === 'enter'){
            return 'e';
        } if (match === 'imes'){
            return 'i';
        } if(match === 'ober'){
            return 'o';
        } if (match === 'ufat'){
            return'u';
        }
    });

    console.log(textoMensagemCriptografada);
    reescrever(textoMensagemCriptografada);

}

function copiarTexto(){
    let textoOriginal = document.getElementById("txtOriginal").textContent;

    // Criar um elemento de textarea temporário para armazenar e selecionar o texto
    let tempTextarea = document.createElement("textarea");
    tempTextarea.value = textoOriginal;

    // Adicionar o elemento temporário à página
    document.body.appendChild(tempTextarea);

    // Selecionar o texto no elemento temporário
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móveis

    try {
        // Executar o comando de cópia usando a API Clipboard
        document.execCommand("copy");
        alert("Texto Copiado");
    } catch (err) {
        console.error("Falha ao copiar o texto:", err);
    } finally {
        // Remover o elemento temporário
        document.body.removeChild(tempTextarea);
    }
}
