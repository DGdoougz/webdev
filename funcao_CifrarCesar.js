function cifrarCesar(mensagem, chave) {
    let resultado = '';

    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];

        if (char >= 'A' && char <= 'Z') {
            // Maiúsculas
            let codigo = ((char.charCodeAt(0) - 65 + chave) % 26) + 65;
            resultado += String.fromCharCode(codigo);
        } else if (char >= 'a' && char <= 'z') {
            // Minúsculas
            let codigo = ((char.charCodeAt(0) - 97 + chave) % 26) + 97;
            resultado += String.fromCharCode(codigo);
        } else {
            // Não-letras permanecem inalteradas
            resultado += char;
        }
    }

    return resultado;
}

console.log (cifrarCesar("")) // digite o teste !//