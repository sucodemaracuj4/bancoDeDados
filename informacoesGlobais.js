const url= 'https://raw.githubsercontent.com/guilhermeonrails/api/main/dados-globais.json';
async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_de_pessoas_mundo / 1e9)
    console.log(dados);
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_de_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão em alguma rede social e passam em média <span>${dados.tempo_medio}</span>horas conectadas.`
}

visualizarInformacoesGlobais();
