function gerarChavesRSA_Didaticas(p, q) {
    if (p <= 1 || q <= 1) return null; 
    
    const N = p * q;
    const phi_N = (p - 1) * (q - 1);
    
    let E = 3;
    while (E < phi_N) {
        if ((phi_N % E !== 0) && ((p - 1) % E !== 0) && ((q - 1) % E !== 0)) {
            break;
        }
        E++;
    }

    let D = 1;
    while (D < phi_N) {
        if ((D * E) % phi_N === 1) {
            break;
        }
        D++;
    }
    
    return {
        publica: { E, N }, //  cifrar
        privada: { D, N }  // decifrar
    };
}

/*========================
   FUNÇÃO DE CIFRAGEM RSA
 =========================*/
function cifrarRSA_Didatico(mensagem, E, N) {
    const resultado = [];

    for (let i = 0; i < mensagem.length; i++) {
        let x = mensagem.charCodeAt(i);
        let C = 1;
        for (let j = 0; j < E; j++) {
            C = (C * x) % N;
        }
        resultado.push(C);
    }

    return resultado;
}

/*========================
   FUNÇÃO DE DECIFRAGEM RSA
=========================*/
function decifrarRSA_Didatico(mensagemCifrada, D, N) {
    let resultado = '';

    for (let i = 0; i < mensagemCifrada.length; i++) {
        let C = mensagemCifrada[i];
        let x = 1;
        for (let j = 0; j < D; j++) {
            x = (x * C) % N;
        }
        resultado += String.fromCharCode(x);
    }

    return resultado;
}

/*========================
   TESTE DIDÁTICO
=========================*/
const PRIMO_1 = 17;
const PRIMO_2 = 19;
const CHAVES = gerarChavesRSA_Didaticas(PRIMO_1, PRIMO_2); 

const textoOriginal = "OLA"; 

// 1. Cifrar com a Chave Pública
const cifrado = cifrarRSA_Didatico(textoOriginal, CHAVES.publica.E, CHAVES.publica.N);
console.log("RSA Cifrado:", cifrado); // Array de números

// 2. Decifrar com a Chave Privada
const decifrado = decifrarRSA_Didatico(cifrado, CHAVES.privada.D, CHAVES.privada.N);
console.log("RSA Decifrado:", decifrado); // Esperado: "OLA"
