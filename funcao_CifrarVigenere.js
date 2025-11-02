function cifrarVigenere(mensagem, palavraChave, modo = 'codificar') {
    let resultado = "";
    let chaveIndex = 0; // índice da palavra-chave
    const tamanhoChave = palavraChave.length;

    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];
        let codigo = mensagem.charCodeAt(i);

        // Função auxiliar para obter deslocamento da letra da chave
        function obterDeslocamento(letra) {
            if (letra >= 'A' && letra <= 'Z') return letra.charCodeAt(0) - 65;
            if (letra >= 'a' && letra <= 'z') return letra.charCodeAt(0) - 97;
            return 0;
        }

        // Somente letras são cifradas
        if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) {
            let deslocamento = obterDeslocamento(palavraChave[chaveIndex % tamanhoChave]);
            if (modo === 'decodificar') deslocamento = -deslocamento;

            if (codigo >= 65 && codigo <= 90) {
                // maiúsculas
                let novoCodigo = ((codigo - 65 + deslocamento) % 26 + 26) % 26 + 65;
                resultado += String.fromCharCode(novoCodigo);
            } else {
                // minúsculas
                let novoCodigo = ((codigo - 97 + deslocamento) % 26 + 26) % 26 + 97;
                resultado += String.fromCharCode(novoCodigo);
            }

            chaveIndex++; 
        } else {
            resultado += char; 
        }
    }

    return resultado;
}

