function cifrarAtbash(mensagem) {
    let resultado = '';

    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];

        if (char >= 'A' && char <= 'Z') {
            // Maiúsculas: 'A' é 65, 'Z' é 90
            resultado += String.fromCharCode(90 - (char.charCodeAt(0) - 65));
        } else if (char >= 'a' && char <= 'z') {
            // Minúsculas: 'a' é 97, 'z' é 122
            resultado += String.fromCharCode(122 - (char.charCodeAt(0) - 97));
        } else {
            // Não-letras permanecem inalteradas
            resultado += char;
        }
    }

    return resultado;
}


console.log(cifrarAtbash("")) //digite o teste !