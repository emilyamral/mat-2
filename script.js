const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Quando foi lançado o primeiro filme de Harry Potter?",
    alternativas: [
        {
            texto:"Custos elevados",
            afirmacao: "2001"
        },
        {
        texto:"Conscientização e educação",
        afirmacao: "2003"
        }
    ]
},

{
    enunciado: "Para qual casa Harry Potter foi direcionado?",
    alternativas: [
        {

        texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",
        afirmacao: "Grifinória"
        },
        {
        texto:"Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",
        afirmacao: "Sonserina"
        }
    ]
},

{
    enunciado: "Com quantos anos se entra em Hogwarts?",
    alternativas: [
        {
        texto:"Promover a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
        afirmacao: "11 anos"
        },
        {
        texto:"Defender políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
        afirmacao: "13 anos"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergu
