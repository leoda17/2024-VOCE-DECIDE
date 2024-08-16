const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Qual é a principal função do levantador em um time de voleibol?",
        alternativas: [
            {
                texto: "Fazer pontos diretamente",
                afirmacao: "O levantador não é responsável por fazer pontos diretamente, mas por levantar a bola para os atacantes.",
                correta: false
            },
            {
                texto: "Levantar a bola para os atacantes",
                afirmacao: "Correto! O levantador é responsável por levantar a bola para os atacantes, facilitando a finalização dos pontos.",
                correta: true
            }
        ]
    },
    {
        enunciado: "Quantos jogadores cada time tem em quadra durante uma partida de voleibol?",
        alternativas: [
            {
                texto: "6",
                afirmacao: "Correto! Cada time tem 6 jogadores em quadra durante uma partida de voleibol.",
                correta: true
            },
            {
                texto: "7",
                afirmacao: "Incorreto. Cada time tem 6 jogadores em quadra durante uma partida de voleibol.",
                correta: false
            }
        ]
    },
    {
        enunciado: "Qual é o número de sets necessários para vencer uma partida de voleibol?",
        alternativas: [
            {
                texto: "Melhor de 3 sets",
                afirmacao: "Na maioria das competições, as partidas são decididas no formato melhor de 5 sets.",
                correta: false
            },
            {
                texto: "Melhor de 5 sets",
                afirmacao: "Correto! A maioria das partidas de voleibol é jogada no formato melhor de 5 sets.",
                correta: true
            }
        ]
    },
    {
        enunciado: "Qual é o nome do golpe utilizado para devolver a bola com um toque suave, geralmente com os dedos, sem ela tocar o chão?",
        alternativas: [
            {
                texto: "Manchete",
                afirmacao: "A manchete é usada para defender a bola com os braços estendidos, não para devolver com um toque suave.",
                correta: false
            },
            {
                texto: "Toque de bola (ou 'Finger Pass')",
                afirmacao: "Correto! O 'toque de bola' (ou 'finger pass') é o golpe usado para devolver a bola suavemente com os dedos.",
                correta: true
            }
        ]
    },
    {
        enunciado: "O que é um 'ace' no voleibol?",
        alternativas: [
            {
                texto: "Um ponto ganho diretamente do saque",
                afirmacao: "Correto! Um 'ace' é um ponto ganho diretamente do saque, quando a bola cai no chão sem ser tocada pelo adversário.",
                correta: true
            },
            {
                texto: "Um bloqueio bem-sucedido",
                afirmacao: "Incorreto. Um 'ace' é um ponto ganho diretamente do saque, não um bloqueio.",
                correta: false
            }
        ]
    },
    {
        enunciado: "Qual é a altura da rede de voleibol para uma partida masculina?",
        alternativas: [
            {
                texto: "2,43 metros",
                afirmacao: "Correto! A altura da rede para o voleibol masculino é de 2,43 metros.",
                correta: true
            },
            {
                texto: "2,24 metros",
                afirmacao: "Incorreto. A altura da rede para o voleibol masculino é de 2,43 metros.",
                correta: false
            }
        ]
    },
    {
        enunciado: "Qual é a principal diferença entre o voleibol de praia e o voleibol de quadra em termos de número de jogadores?",
        alternativas: [
            {
                texto: "Voleibol de praia tem 2 jogadores por time, enquanto o de quadra tem 6.",
                afirmacao: "Correto! No voleibol de praia, cada time tem 2 jogadores, enquanto no voleibol de quadra, cada time tem 6 jogadores.",
                correta: true
            },
            {
                texto: "Ambos têm 4 jogadores por time.",
                afirmacao: "Incorreto. No voleibol de praia, cada time tem 2 jogadores e no voleibol de quadra, cada time tem 6 jogadores.",
                correta: false
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let acertos = 0;
let erros = 0;
let historiaFinal = "";
let respostasEscolhidas = [];

function mostrarPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const correta = opcaoSelecionada.correta;
    if (correta) {
        acertos++;
    } else {
        erros++;
    }
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    respostasEscolhidas.push({
        pergunta: perguntaAtual.enunciado,
        respostaEscolhida: opcaoSelecionada.texto,
        correta: correta
    });
    atual++;
    mostrarPerguntas();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim do quiz!";
    caixaAlternativas.textContent = "";

    textoResultado.textContent = `Acertos: ${acertos} | Erros: ${erros}`;
    
    const resultadoDetalhado = document.createElement('div');
    resultadoDetalhado.innerHTML = '<h3>Detalhes das Respostas:</h3>';
    
    respostasEscolhidas.forEach(resposta => {
        const respostaElemento = document.createElement('p');
        respostaElemento.innerHTML = `
            <strong>Pergunta:</strong> ${resposta.pergunta}<br>
            <strong>Resposta Escolhida:</strong> ${resposta.respostaEscolhida}<br>
            <strong>Status:</strong> ${resposta.correta ? 'Correta' : 'Incorreta'}
        `;
        resultadoDetalhado.appendChild(respostaElemento);
    });

    caixaResultado.appendChild(resultadoDetalhado);
}

mostrarPerguntas();
