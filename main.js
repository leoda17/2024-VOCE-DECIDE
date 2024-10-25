const caixaPrincial = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você está se preparando para um torneio importante. Qual treino você escolhe para começar?",
        alternativas: [
            {
                texto: "Treino de saque para melhorar sua precisão.",
                afirmacao: "Você foca no saque e consegue aprimorar sua técnica, ganhando confiança para o torneio."
            },
            {
                texto: "Treino de defesa para fortalecer seu posicionamento.",
                afirmacao: "Você fortalece sua defesa, tornando-se mais ágil e preparado para receber ataques adversários."
            },
        ]
    },
    {
        enunciado: "Durante o torneio, o adversário está forte no ataque. O que você faz?",
        alternativas: [
            {
                texto: "Aumenta o bloqueio na rede para pressionar o atacante.",
                afirmacao: "Seu bloqueio faz efeito, e a equipe adversária começa a cometer erros de ataque."
            },
            {
                texto: "Concentra-se em melhorar a recepção para preparar contra-ataques rápidos.",
                afirmacao: "Sua equipe melhora a recepção e aproveita contra-ataques, surpreendendo o adversário."
            },
        ]
    },
    {
        enunciado: "É hora de um saque importante no final do set. Qual saque você escolhe?",
        alternativas: [
            {
                texto: "Saque flutuante para tentar desestabilizar a defesa adversária.",
                afirmacao: "O saque flutuante causa dificuldade na recepção do oponente e ajuda sua equipe a ganhar o ponto decisivo."
            },
            {
                texto: "Saque forte para ganhar o ponto diretamente.",
                afirmacao: "Você arrisca um saque forte e consegue um ace, garantindo a vitória no set."
            },
        ]
    },
    {
        enunciado: "No último set, sua equipe está cansada. Como você motiva seus colegas?",
        alternativas: [
            {
                texto: "Sugere uma jogada combinada para aumentar a moral e confiança.",
                afirmacao: "A jogada combinada traz energia à equipe, e vocês conseguem recuperar a vantagem no jogo."
            },
            {
                texto: "Incentiva todos a darem o máximo e lembra da importância do trabalho em equipe.",
                afirmacao: "Suas palavras inspiram o time, e todos se esforçam ainda mais, resultando em um desempenho sólido até o final."
            },
        ]
    },
    {
        enunciado: "Sua equipe vence o torneio. Como vocês comemoram?",
        alternativas: [
            {
                texto: "Celebram com uma reunião da equipe e planejam os próximos treinos.",
                afirmacao: "Fim."
            },
            {
                texto: "Agradecem aos torcedores e compartilham a vitória nas redes sociais.",
                afirmacao: "Fim."
            },
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = '';

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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa))
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
    caixaPerguntas.textContent = "Parabéns! A Jornada do Voleibol";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
