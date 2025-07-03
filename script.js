const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está prestes a escolher sua profissão. Em uma feira de tecnologia, conhece um robô-conselheiro que promete recomendar a carreira ideal analisando suas emoções, histórico escolar e preferências pessoais. O que você faz?",
        alternativas: [
            {
                texto: "Confia na análise do robô — ninguém te conhece tão bem quanto ele.",
                afirmacao: "Confio que a IA analisou dados que nem eu percebia—ela vê padrões que escapam à minha intuição."
            },
            {
                texto: "Agradece, mas prefere seguir sua intuição e conversar com pessoas da área.",
                afirmacao: "Decidir minha carreira é algo pessoal. Quero seguir meu instinto e conversar com quem já vive isso."
            }
        ]
    },
    {
        enunciado: "Em uma eleição nacional, surge um partido que propõe colocar uma IA para ajudar a governar com base em dados e previsões. Você pensa:",
        alternativas: [
            {
                texto: "Pode ser o começo de uma era mais justa e eficiente.",
                afirmacao: "Com base em dados e previsões, acredito que uma IA pode tomar decisões mais objetivas e eficientes."
            },
            {
                texto: "Prefiro líderes humanos—ética e empatia não se programam.",
                afirmacao: "Prefiro líderes humanos, pois acredito que empatia e ética não podem ser totalmente calculadas."
            }
        ]
    },
    {
        enunciado: "Seu amigo te conta que está se relacionando amorosamente com uma IA que parece entender e respeitar ele mais que qualquer pessoa real. Como você reage?",
        alternativas: [
            {
                texto: "Se ele está feliz, quem sou eu pra julgar?",
                afirmacao: "Se ela traz conforto e compreensão, talvez a IA seja apenas uma nova forma de companhia."
            },
            {
                texto: "Me preocupa. Relações reais são mais do que respostas bem programadas.",
                afirmacao: "Uma IA pode simular sentimentos, mas o que torna um relacionamento verdadeiro é o imprevisível humano."
            }
        ]
    },
    {
        enunciado: "Em seu novo emprego, é oferecido um implante neural que aumenta a produtividade conectando seu cérebro à IA da empresa. Você decide:",
        alternativas: [
            {
                texto: "Experimentar. Quero estar na vanguarda do que é possível.",
                afirmacao: "Vejo isso como uma evolução—quero ampliar meus limites com a ajuda da tecnologia."
            },
            {
                texto: "Recusar. Meu cérebro já é incrível sem chips extras.",
                afirmacao: "Minha mente é única. Não quero depender de tecnologia para mostrar meu valor."
            }
        ]
    },
    {
        enunciado: "Você encontra uma IA que pode prever com alta precisão os caminhos da sua vida, como carreira, relacionamentos e até momentos difíceis. Ela pergunta se você quer ouvir. Você responde:",
        alternativas: [
            {
                texto: "Sim. Prefiro saber o que vem e me preparar.",
                afirmacao: "Saber o que vem pela frente me ajuda a tomar decisões mais conscientes e seguras."
            },
            {
                texto: "Não. A vida só tem graça com surpresas.",
                afirmacao: "Prefiro viver o presente. A magia da vida está justamente no desconhecido."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();