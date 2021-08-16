let nome = prompt("Qual seu nome?");
const container = document.getElementById('container');
const corretas = document.getElementById('corretas');
const incorretas = document.getElementById('incorretas');
const explicacao = document.getElementById('explicacao');

let begin = Number(prompt("Deseja iniciar a prova? Coloque a opção desejada abaixo: \n 1.SIM 2.NÃO"));
if(begin === 2) {
    document.write("Jogo cancelado!")
} else{
document.getElementById('acertos').innerHTML='Respostas corretas';
document.getElementById('erros').innerHTML='Respostas incorretas';

const questao1 = Number(prompt("Qual o hormônio responsável pelo crescimento humano? \n 1.GH   \n 2.FSH   \n 3.LH"));
    if(questao1==1){
        document.getElementById('correta1').innerHTML = `Questão 1. (❌${questao1} |✅1)`;
    } else {
        document.getElementById('incorreta1').innerHTML = `Questão 1.(❌${questao1} |✅1) `;
}

const questao2 = Number(prompt("Em qual fase da meiose ocorre a separação dos centrômeros? \n 1.Telófase I     \n 2.Metáfase II    \n 3. Anáfase I"));
    if(questao2===3){
        document.getElementById('correta2').innerHTML = `Questão 2. ❌${questao2} |✅1)`;
    } else { 
        document.getElementById('incorreta2').innerHTML = `Questão 2.(❌${questao2} |✅1)`;
}

const questao3 = Number(prompt("Qual a característica presente nos Chondrichthyes? \n 1.Escamas placóides \n 2.Sete pares de brânquias \n 3.Nadadeiras lobadas"));
    if(questao3===1){
        document.getElementById("correta3").innerHTML = `Questão 3. (❌${questao3}   ✅1)`;
    } else {
        document.getElementById('incorreta3').innerHTML = `Questão 3.(❌${questao3}   ✅1)`;
    } 

    container.innerHTML = `Jogo finalizado, ${nome}! Você pode conferir seu desempenho abaixo.`
    explicacao.innerHTML = `❌= sua resposta | ✅= resposta esperada`
    container.style.backgroundColor = '#FFF';
    corretas.style.backgroundColor = '#FFF';
    incorretas.style.backgroundColor = '#FFF';
    explicacao.style.backgroundColor = '#FFF';
} 







