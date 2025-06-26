const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [

    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "afirmacao"
            },
            {
                texto: "alternativa2",
                afirmacao: "afirmacao"
            }
        ]
    }
    ,
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "afirmacao"
            },
            {
                texto: "alternativa2",
                afirmacao: "afirmacao"
            }
        ]
    }
    ,
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "afirmacao"
            },
            {
                texto: "alternativa2",
                afirmacao: "afirmacao"
            }
        ]
    }
    ,
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "afirmacao"
            },
            {
                texto: "alternativa2",
                afirmacao: "afirmacao"
            }
        ]
    }
    ,
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "afirmacao"
            },
            {
                texto: "alternativa2",
                afirmacao: "afirmacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.lenght){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();