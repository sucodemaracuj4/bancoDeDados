const url= 'https://raw.githubsercontent.com/guilhermeonrails/api/main/dados-globais.json';
async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json
}