var paulo = {
    nome: 'Paulo',
    abates: 2,
    mortes: 1,
    assistencias: 5,
    AMA: 0
}
var rafa = {
    nome: 'Rafa',
    abates: 3,
    mortes: 2,
    assistencias: 5,
    AMA: 0
}

var jogadores=[rafa,paulo]
function calculaAMA(jogador) {
    let abates = jogador.abates
    let mortes = jogador.mortes
    let assistencias = jogador.assistencias
    let AMA= (abates + assistencias) / mortes
    jogador.AMA=AMA.toFixed(1)
}
function exibirJogadores(jogadores) {
    var html='';
    for (let i = 0; i < jogadores.length; i++) {
        calculaAMA(jogadores[i])
        html += `<tr><td> ${jogadores[i].nome} </td>`;
        html += `<td> ${jogadores[i].abates} </td>` ;
        html += `<td> ${jogadores[i].mortes} </td>` ;
        html += `<td> ${jogadores[i].assistencias} </td>`;
        html += `<td> ${jogadores[i].AMA} </td>`;
        html += `<td><button onClick="adicionarAbates(${i})">Abates</button></td>`;
        html += `<td><button onClick="adicionarMortes(${i})">Mortes</button></td>`;
        html += `<td><button onClick="adicionarAssistencias(${i})">Assitências</button></td></tr>`;
    }
    var tabelaJgadores=document.getElementById('tabelaJogadores');
    tabelaJgadores.innerHTML = html
}
function criaJogador() {
    nomeJogador=document.getElementById('novoJogador').value;

}
function adicionarAbates(indice) {
    jogador = jogadores[indice];
    jogador.abates++
    exibirJogadores(jogadores)
}
function adicionarAssistencias(indice) {
    jogador = jogadores[indice];
    jogador.assistencias++
    exibirJogadores(jogadores)
}
function adicionarMortes(indice) {
    jogador = jogadores[indice];
    jogador.mortes++
    exibirJogadores(jogadores)
}
exibirJogadores(jogadores);