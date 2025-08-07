const nomes = ["Fernando", "Eduardo", "Alexandre", "Pedro Zopolatto", "Matheus Gabriel", "Maria Victoria", "Bruno"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)