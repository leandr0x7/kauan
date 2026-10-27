
/* ============================================================
   MODO DA PÁGINA, a única chave que muda entre as duas versões
     "zap"    → todos os botões vão pro WhatsApp
     "form"   → todos os botões vão pro formulário (MODO.formURL)
     "nenhum" → portfólio puro, sem nenhum botão de ação
   ============================================================ */
const MODO = {
  cta: "zap",
  formURL: "COLOQUE_AQUI_O_LINK_DO_FORMULARIO"
};

const CONFIG = {
  whatsapp: "5581979043528",
  vagas: { restam: 4, total: 20 },
  msgPadrao: "Oi! Vi o site e quero saber mais sobre os criativos pra campanha.",
  instagram: "https://instagram.com/kauan.cac",
  email: "contatokauancarlos@gmail.com",
  clientes:  { valor: 1200, rotulo: "Negócios atendidos" },
  criativos: { valor: 3000, rotulo: "Peças entregues" }
};

const FORMATOS = [
  { nome:"Hard Copy", preco:70, pasta:"hardcopy",
    desc:"Você já tem o produto e precisa de anúncio agora. Voz + texto na tela guiam do problema à compra — sem ninguém na câmera.",
    videos:[1] },
  { nome:"IA", preco:70, pasta:"ia",
    desc:"Sem material e sem vontade de gravar? A cena nasce com IA: cenário, objeto e pessoa, com roteiro humano por trás.",
    videos:[1] },
  { nome:"Viral", preco:70, pasta:"viral",
    desc:"Material solto pedindo ritmo. Cortes rápidos, texto grande e trilha no tempo do feed — o formato que o algoritmo já conhece.",
    videos:[1] },
  { nome:"Hard Motion", preco:90, pasta:"hardmotion",
    desc:"Hard Copy com movimento: texto animado, zoom e transições no pulso da narração, pra segurar até o CTA final.",
    videos:[1] },
  { nome:"UGC", preco:175, pasta:"ugc",
    desc:"Pessoa real com o seu produto, no tom de indicação de amigo. Confiança na tela e conversão de quem ainda não te conhece.",
    videos:[1] },
  { nome:"Motion Design", preco:297, pasta:"motion",
    desc:"Animação do zero, acabamento de estúdio. Ideal pra lançamento, pitch de produto ou campanha que precisa destacar no feed.",
    videos:[1,2] }
];

const brl = n => "R$" + n.toLocaleString("pt-BR");


const TRABALHOS = [
  { nome:"Criativo 04", id:"1FjCQOp8Cs5No_jsZsr5wm3dmNP5AVsJN" },
  { nome:"Criativo 05", id:"1gluVkyhohxLVsWOCSOoUOpL4YpWFXouS" },
  { nome:"Criativo 06", id:"1lsE5Sgi4KQ4hRyZing_NBbhcQo4Lq1-F" },
  { nome:"Criativo 07", id:"1UMlZ1o-dIwHoyNfURR7zmnAf059laOJB" },
  { nome:"Criativo 09", id:"1GJpBTG6AM9CgO97TWtCw8fSg9704HxiP" },
  { nome:"Criativo 10", id:"1G-E6HnQKU4ofq82cHPN9IbRJFsDhoRzt" },
  { nome:"Criativo 11", id:"19lAXsIS5b0JPnztVQIOwf3odflSYwFs3" },
  { nome:"Criativo 12", id:"1fuT2AT9cITmcthmxeddefUiEhiX2lH5f" },
  { nome:"Criativo 13", id:"11dyeOvFgDypqh3yvkgRCDuvy_PLt5ScB" },
  { nome:"Criativo 14", id:"12J6mXY85nt5UQ6wRJnpYdwM5FgCT93kP" },
  { nome:"Criativo 15", id:"1FQSQkPXsvkAwfxJ5bR_SEVGsdqYZZ3OF" },
  { nome:"Criativo 17", id:"1NcFx_RmGMeZUdRPmD0C_orCJBOJQyATP" },
  { nome:"Criativo 18", id:"16zApj4jZ9APopuVa135xcSmK0G-sKchr" },
  { nome:"Criativo 19", id:"1SI2etJzf0-Or7B0SX1Rq9YvU8bOl-CyD" },
  { nome:"Criativo 20", id:"1UvYpICdNU23wvLkR3RxS2hA1s-PeWBub" },
  { nome:"Criativo 21", id:"1RlKj2b6Q9qx_KUmtu8I0LxlEZy_bBMuk" },
  { nome:"Criativo 22", id:"1mgfbp4cIbs8vv4_ZZJ0bz-bK_YL0GC1c" },
  { nome:"Criativo 23", id:"1EytxofgmJTgiIAC5QgHRCGQT1ZZqDsI6" },
  { nome:"Criativo 24", id:"1-JxJm-Vpf6oUbeTeCWHaJ7QX9MhknhOR" },
  { nome:"Criativo 25", id:"12amHq-38X7TmFbnMBRFu5yX2il_tblKc" },
  { nome:"Criativo 26", id:"1zm8BMpFINzO6kfToe1v3PN2Vz6wbatjB" },
  { nome:"Criativo 27", id:"1N7tsG5ICGBuokxZTz5Dq55CFfbd1lGoR" },
  { nome:"Criativo 28", id:"1p7tsYYy17JOiL9pTystw6_BCWN6KW6Xx" },
  { nome:"Criativo 30", id:"1EroyfZfhNERQVjfp4eN0kSKQhMRIUrEu" },
  { nome:"Criativo 32", id:"1pDqwV9PtoaJLxYX46Gx_E_BZhMoIsMwl" },
  { nome:"Criativo 33", id:"1O9fGBFT5-SgPCd77MT3F6rMh6O5A4w3C" },
  { nome:"Criativo 34", id:"1E81m9PhlgBlSljpfhcWS3XcS9clL7bFf" },
  { nome:"Criativo 35", id:"1io_RBN9ud5Qtlfia6erk6gxTEzSXowTx" }
];

const DEPO_VIDEOS = [
  { nome:"Ana Costa", linha:"Gestora de tráfego", inicial:"AC",
    texto:"Troquei criativo genérico pelos dele e o CPA caiu na primeira semana. Simples, direto e no prazo." },
  { nome:"Pedro Lima", linha:"Dono de e-commerce", inicial:"PL",
    texto:"Pedí o Pacote 5 e usei pra testar ângulos. Dois criativos seguraram a campanha o mês inteiro." },
  { nome:"Marina Souza", linha:"Infoprodutora", inicial:"MS",
    texto:"O Hard Copy vendeu sem eu aparecer na câmera. Roteiro e voz certeiros pro meu público." },
  { nome:"Rafael Nunes", linha:"Agência local", inicial:"RN",
    texto:"Cliente pediu urgência, entregou em 48h. Motion limpo e fácil de rodar no Meta Ads." },
  { nome:"Julia Mendes", linha:"Lançamento digital", inicial:"JM",
    texto:"UGC com cara de indicação real. Comentários e conversão subiram no mesmo criativo." },
  { nome:"Thiago Alves", linha:"Infoproduto", inicial:"TA",
    texto:"Passei do briefing pro vídeo sem reunião. Comunicação clara e resultado que performa." }
];

const FAQ = [
  { p:"Qual o investimento?",
    r:"Hard Copy, IA e Viral saem em pacote: 3 vídeos por R$195, 5 por R$310 ou 10 por R$580. Hard Motion é R$90, UGC R$175 e Motion Design R$297 por peça. Cada vídeo é sob medida — roteiro, estilo e acabamento pensados na sua oferta. O valor na tela é o valor final." },
  { p:"Dá pra pedir só um vídeo?",
    r:"Hard Copy, IA e Viral começam no Pacote 3: um criativo sozinho quase não mostra o que performa; com três você testa ângulos. Hard Motion, UGC e Motion Design podem ser avulsos." },
  { p:"Qual o prazo?",
    r:"Hard Copy, IA, Viral e Hard Motion: até 48h após o briefing. UGC: 3 a 4 dias (gravação com pessoa real). Motion Design: 5 a 7 dias (animação do zero)." },
  { p:"Como começo?",
    r:"Chama no WhatsApp. Eu abro um grupo com você, alinho o briefing e a produção começa. Sem reunião obrigatória." },
  { p:"Tem rodada de ajuste?",
    r:"Sim. Pacote 3: 1 rodada; Pacote 5: 2; Pacote 10: 3. Organizado pra chegar no resultado sem ficar infinito." },
  { p:"Como recebo o arquivo?",
    r:"O vídeo final chega no grupo do WhatsApp, no formato certo pra subir na campanha." },
  { p:"Os arquivos ficam meus?",
    r:"Sim. A peça entregue é sua, liberada pras suas campanhas pelo tempo que precisar." },
  { p:"Como é o pagamento?",
    r:"Valor integral via link que eu mando no WhatsApp. A produção inicia assim que confirma." },
  { p:"Qual pacote faz mais sentido no início?",
    r:"Pacote 3 pra descobrir o ângulo que vende. Pacote 5 é o mais pedido — volume pra testar de verdade." },
  { p:"Atendem qualquer nicho?",
    r:"Sim. Já são mais de 1.200 negócios e 3.000 peças — de infoproduto a serviço local." },
  { p:"Vocês usam IA nos vídeos?",
    r:"Sim: no estilo IA a cena nasce por inteligência artificial, sempre com roteiro e direção humana." },
  { p:"Tem gravação com pessoa real?",
    r:"Sim — é o UGC: alguém real usa e mostra o produto, no tom de indicação. R$175 por vídeo." },
  { p:"E se eu quiser algo mais elaborado?",
    r:"Motion Design: animação do zero, acabamento de estúdio. R$297 por vídeo, de 5 a 7 dias." }
];

/* acervo do muro: img/mural/NNN.jpg + videos/mural/NNN.mp4
   Fora da lista por capa quase igual a outra (05/09): 041, 063, 072, 077, 082, 085, 101, 204, 208, 213, 214, 215, 218, 223, 224, 227, 230, 231 */
const MURAL = [
  "001", "002", "003", "004", "006", "007", "008", "010",
  "011", "012", "013", "016", "017", "018", "019", "020",
  "021", "022", "023", "024", "025", "026", "027", "028",
  "029", "030", "031", "032", "033", "035", "037", "038",
  "039", "040", "042", "043", "044", "045", "047", "049",
  "050", "051", "052", "053", "054", "055", "056", "057",
  "058", "059", "060", "062", "065", "066", "067", "068",
  "069", "070", "071", "073", "075", "076", "079", "080",
  "081", "083", "086", "087", "088", "089", "092", "093",
  "094", "096", "201", "202", "203", "205", "206", "207",
  "209", "210", "211", "212", "216", "217", "219", "220",
  "221", "222", "225", "226", "228", "229", "232", "233",
  "234"
];



const PROCESSO = [
  { t:"Onboarding", d:"Depois do pagamento, eu abro o grupo e alinho o tom da comunicação." },
  { t:"Briefing",   d:"Você preenche o formulário com o essencial do projeto." },
  { t:"Copy",       d:"Escrevo a copy e envio pra sua aprovação." },
  { t:"Produção",   d:"Com o ok, eu começo a produção do criativo." },
  { t:"Entrega",    d:"Em até 48h (nos estilos rápidos), o material chega pronto no grupo." }
];

/* ============================================================
   ATALHOS
   ============================================================ */
const zapLink   = msg => !CONFIG.whatsapp ? CONFIG.instagram : `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.msgPadrao)}`;
const thumbURL  = id  => `https://drive.google.com/thumbnail?id=${id}&sz=w480`;

/* destino de todo botão de ação, conforme o MODO */
const semCTA  = MODO.cta === "nenhum";
const usaForm = MODO.cta === "form";
const destino = msg => usaForm ? MODO.formURL : zapLink(msg);

if (semCTA){
  /* portfólio puro: some com todo botão de ação e com a coluna de contato */
  document.documentElement.style.setProperty("--mostra-cta","none");
  document.querySelectorAll("[data-col-contato]").forEach(el => el.remove());
} else {
  document.querySelectorAll("[data-cta]").forEach(a => {
    a.href = destino(); a.target = "_blank"; a.rel = "noopener";
  });
  if (usaForm){
    document.querySelectorAll("[data-cta-txt]").forEach(el => {
      el.textContent = el.textContent.replace(/Falar no WhatsApp|Receber catálogo completo|WhatsApp/i, "Quero meus criativos");
    });
    document.querySelectorAll("[data-cta] svg").forEach(s => s.remove());
    const t = document.getElementById("cta-texto");
    if (t) t.textContent = "Preencha o formulário e eu volto com o formato certo e o prazo real.";
  }
}
document.querySelectorAll("[data-insta]").forEach(a => { a.href = CONFIG.instagram; a.target="_blank"; a.rel="noopener"; });
document.querySelectorAll("[data-email]").forEach(a => { a.href = "mailto:" + CONFIG.email; });
document.getElementById("ano").textContent = new Date().getFullYear();

/* ============================================================
   NAV
   ============================================================ */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("rolou", window.scrollY > 12), { passive:true });

/* menu hamburger removido — links ficam na barra */
const btnMenu = document.getElementById("menu-btn");
const gaveta  = document.getElementById("gaveta");
if (btnMenu && gaveta){
  const fecharGaveta = () => {
    gaveta.classList.remove("on"); btnMenu.classList.remove("on");
    btnMenu.setAttribute("aria-expanded","false");
  };
  btnMenu.addEventListener("click", () => {
    const abrindo = !gaveta.classList.contains("on");
    gaveta.classList.toggle("on", abrindo);
    btnMenu.classList.toggle("on", abrindo);
    btnMenu.setAttribute("aria-expanded", String(abrindo));
  });
  gaveta.querySelectorAll("a").forEach(a => a.addEventListener("click", fecharGaveta));
  document.addEventListener("keydown", e => { if (e.key === "Escape") fecharGaveta(); });
  document.addEventListener("click", e => {
    if (!gaveta.contains(e.target) && !btnMenu.contains(e.target)) fecharGaveta();
  });
}

const linksNav = [...document.querySelectorAll("#nav-links a")];
const secoes   = linksNav.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
const marcarAtivo = () => {
  const y = window.scrollY + window.innerHeight * 0.32;
  let atual = secoes[0];
  secoes.forEach(s => { if (s.offsetTop <= y) atual = s; });
  linksNav.forEach(a => a.classList.toggle("ativo", a.getAttribute("href") === "#" + atual.id));
};
window.addEventListener("scroll", marcarAtivo, { passive:true });

/* ============================================================
   CONTADOR DOS NÚMEROS
   ============================================================ */
const contar = el => {
  const alvo = +el.dataset.alvo, dur = 2000, ini = performance.now();
  const suave = t => 1 - Math.pow(1 - t, 3);
  const passo = agora => {
    const t = Math.min((agora - ini) / dur, 1);
    el.textContent = "+" + Math.round(alvo * suave(t)).toLocaleString("pt-BR");
    if (t < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
};
const obsNum = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting){ contar(e.target); obsNum.unobserve(e.target); }
}), { threshold:.5 });
document.querySelectorAll("[data-alvo]").forEach(el => obsNum.observe(el));

/* ---- barra de autoridade ---- */
(function numeros(){
  const caixa = document.getElementById("hero-stats");
  if (!caixa) return;
  const NUM = [
    { pre:"+",   n:2,                        suf:"",  l:"Anos de experiência" },
    { pre:"+R$", n:5,                        suf:"M", l:"Gerados para clientes" },
    { pre:"+",   n:CONFIG.clientes.valor,    suf:"",  l:"Clientes atendidos" },
    { pre:"+",   n:CONFIG.criativos.valor,   suf:"",  l:"Criativos produzidos" }
  ];
  caixa.innerHTML = NUM.map(x => `
    <div class="hstat">
      <div class="n"><span class="hs-pre">${x.pre}</span><span class="hs-num" data-fim="${x.n}">0</span><span class="hs-suf">${x.suf}</span></div>
      <div class="l">${x.l}</div>
    </div>`).join("");
  const conta = el => {
    const fim = +el.dataset.fim, t0 = performance.now(), dur = 1800;
    const passo = t => {
      const k = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(fim * e).toLocaleString("pt-BR");
      if (k < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  };
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ caixa.querySelectorAll(".hs-num").forEach(conta); obs.disconnect(); }
  }), { threshold:.3 });
  obs.observe(caixa);
})();

/* ============================================================
   MURO DE CRIATIVOS EM VIDEO
   Cada peça tem a capa e o preview do MESMO criativo. Só um punhado
   toca ao mesmo tempo: o resto fica na capa, senão o navegador afoga.
   ============================================================ */
(function heroMuro(){
  window.heroMuro = heroMuro;
  const campo = document.getElementById("hero-muro");
  if (!campo) return;

  /* MURAL: um criativo por peça, capa e vídeo do mesmo arquivo.
     Para crescer o acervo, solte o par em img/mural + videos/mural e cite aqui. */
  /* os 12 criativos do portfólio novo, nenhum se repete na tela */
  const NOVOS = [];
  (typeof FORMATOS !== "undefined" ? FORMATOS : []).forEach(f =>
    (f.videos || []).forEach(v => NOVOS.push({ pasta:f.pasta, n:v })));
  const PECAS = NOVOS.map(x => ({
    capa:  localUrl("/img/estilos/" + x.pasta + "-" + x.n + ".jpg"),
    video: localUrl("/videos/prev/"  + x.pasta + "-" + x.n + ".mp4")
  }));
  if (!PECAS.length) return;

  const estreito = window.matchMedia("(max-width:760px)").matches;
  const cw     = estreito ? 100 : 128;  /* precisa bater com o --cw do CSS */
  const gap    = 0;
  const escala = estreito ? 1.05 : 1.02; /* o mesmo scale() do .muro */
  const inclin = Math.sin(3 * Math.PI / 180);

  const larguraAlvo = (window.innerWidth  + window.innerHeight * inclin) / escala;
  const alturaAlvo  = (window.innerHeight + window.innerWidth  * inclin) / escala;
  /* NENHUM CRIATIVO SE REPETE. O acervo inteiro entra uma vez só, então a
     grade é um retângulo exato (colunas × linhas = total de peças) e a peça
     cresce até cobrir a tela. Acervo maior = peça menor. */
  const total = PECAS.slice();
  for (let i = total.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [total[i], total[j]] = [total[j], total[i]];
  }
  /* grade organizada: peça de tamanho fixo, colunas até cobrir a largura (com folga
     por causa da inclinação) e conteúdo repetido 2x pra girar sem buraco */
  const pw = estreito ? 82 : 164;
  const nCols = Math.ceil((innerWidth + pw) / (pw + gap)) + 2;
  const porMetade = Math.ceil((innerHeight * 1.2) / (pw * 16 / 9 + gap)) + 1;
  campo.style.setProperty("--cw", pw + "px");
  campo.style.setProperty("--gap", gap + "px");
  const duracoes = [64,78,58,72,86,61,80,68,84,60,76,66,88,70,74,62,82,69];
  /* distribuição sem repetir vídeo vizinho na mesma linha nem na mesma coluna */
  const colunas = Array.from({ length: nCols }, (_, c) => {
    const metade = Array.from({ length: porMetade }, (_, j) => total[(c * 7 + j * 4) % total.length]);
    return metade.concat(metade);
  });
  /* a peça nasce só com a capa: 70 elementos <video> no DOM derrubavam o
     quadro pra 15fps no celular. O <video> entra só em quem vai tocar. */
  const pecaHtml = p => `
    <div class="peca" data-video="${p.video}">
      <img src="${p.capa}" alt="" loading="eager" decoding="async" draggable="false">
    </div>`;

  campo.innerHTML = `<div class="muro">` + colunas.map((cards, i) => `
    <div class="muro-col ${i % 2 ? "desce" : ""}" style="--dur:${duracoes[i % duracoes.length]}s">
      ${cards.map(pecaHtml).join("")}
    </div>`).join("") + `</div>`;

  if (!semCTA) campo.querySelectorAll(".peca").forEach(c => {
    c.style.cursor = "pointer";
    c.addEventListener("click", () => window.open(destino(), "_blank", "noopener"));
  });

  /* ---- quem toca agora ----
     As colunas se movem, então a cada ciclo escolhemos de novo quais peças
     estão na tela e ligamos o vídeo num punhado delas, bem espalhado. */
  const todas = [...campo.querySelectorAll(".peca")];
  /* No computador todos tocam. No celular, 15 vídeos ao mesmo tempo travam o
     aparelho, toca um grupo por vez e vai trocando, então o muro continua
     vivo sem engasgar. */
  const LIMITE = estreito ? 10 : 999;   /* todos os que estão na tela tocam */
  const parado = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  const desligar = p => {
    const v = p.querySelector("video");
    if (v){ v.pause(); v.remove(); }
  };
  const ligar = p => {
    if (p.querySelector("video")) return;
    const v = document.createElement("video");
    v.muted = true; v.loop = true; v.playsInline = true; v.preload = "auto";
    v.disablePictureInPicture = true;
    v.setAttribute("controlsList", "nodownload noremoteplayback");
    v.src = p.dataset.video;
    v.addEventListener("playing", () => v.classList.add("on"), { once:true });
    v.addEventListener("error",   () => desligar(p),           { once:true });
    p.appendChild(v);
    const t = v.play();
    if (t && t.catch) t.catch(() => {});
  };
  const naTela = p => {
    const r = p.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth;
  };

  /* as peças que ganham vídeo são escolhidas UMA vez e ficam tocando enquanto
     o hero estiver na tela. Sem isso, cada volta do rodízio baixava arquivos
     novos sem parar. Como as colunas circulam, elas reaparecem sozinhas. */
  let escolhidas = null;
  /* Auto-curativo: a cada chamada completa quem ficou sem vídeo. Se a aba
     estava oculta, se a rede falhou ou se o ciclo anterior foi cortado no
     meio, a próxima passada resolve, o muro nunca fica parado de vez. */
  let volta = 0;
  const girar = () => {
    if (document.hidden) return;
    const vis = todas.filter(naTela);
    if (!vis.length) return;
    if (LIMITE >= vis.length){
      escolhidas = vis;
    } else if (!escolhidas){
      /* escolhe uma vez, espalhado pela grade, e deixa tocando: sem liga/desliga = sem tranco */
      const passo = vis.length / LIMITE;
      escolhidas = Array.from({ length: LIMITE }, (_, i) => vis[Math.floor(i * passo + passo / 2) % vis.length]);
      vis.filter(p => !escolhidas.includes(p)).forEach(desligar);
    } else if (false) {
      /* rodízio no celular: a cada ciclo entra outro grupo */
      const ini = (volta++ * LIMITE) % vis.length;
      const grupo = vis.slice(ini, ini + LIMITE);
      if (grupo.length < LIMITE) grupo.push(...vis.slice(0, LIMITE - grupo.length));
      vis.filter(p => !grupo.includes(p)).forEach(desligar);
      escolhidas = grupo;
    }
    const faltam = escolhidas.filter(p => !p.querySelector("video"));
    /* em fila: um a cada 180ms. Vários downloads ao mesmo tempo engasgam
       a conexão do celular e atrasam o resto da página. */
    faltam.forEach((p, i) => setTimeout(() => { if (!document.hidden) ligar(p); }, i * 180));
  };
  /* desligou (aba oculta ou topo fora da tela): zera a escolha, senão ao voltar
     ninguém religava e o muro ficava parado */
  const pararTudo = () => { if (escolhidas){ escolhidas.forEach(desligar); escolhidas = null; } };

  if (!parado){
    let noHero = true;
    const tentar = () => { if (noHero) girar(); };
    girar();
    addEventListener("load", tentar);
    [400, 1200, 2500, 5000].forEach(ms => setTimeout(tentar, ms));
    setInterval(tentar, 5000);              /* nunca é cancelado: é o que religa */
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) pararTudo(); else tentar();
    });
    /* o hero saiu da tela: desliga tudo e poupa o aparelho */
    new IntersectionObserver(es => es.forEach(e => {
      noHero = e.isIntersecting;
      if (noHero) girar(); else pararTudo();
    }), { threshold:0 }).observe(document.getElementById("inicio"));
  }

  let larguraAnterior = window.innerWidth, remontar;
  window.addEventListener("resize", () => {
    if (Math.abs(window.innerWidth - larguraAnterior) < 60) return;
    larguraAnterior = window.innerWidth;
    clearTimeout(remontar);
    remontar = setTimeout(() => window.heroMuro(), 220);
  });
})();

/* ============================================================
   FAIXA DE OFERTA RELÂMPAGO (onde era marcas)
   Esteira com o pacote do dia + timer ao vivo.
   ============================================================ */
(function faixaOferta(){
  const fila = document.getElementById("marcas-fila");
  const secao = document.getElementById("marcas");
  if (!fila || !secao) return;
  const chip = () => `
    <a class="kz-oferta-chip" href="#pacotes">
      <span class="kz-oferta-live"><i class="kz-pulse" aria-hidden="true"></i> Ao vivo</span>
      <span class="kz-oferta-sep" aria-hidden="true">·</span>
      <strong>Pacote 5 criativos</strong>
      <span class="kz-oferta-sep" aria-hidden="true">·</span>
      <span class="kz-oferta-preco"><b>R$310</b> <s>R$350</s></span>
      <span class="kz-oferta-sep" aria-hidden="true">·</span>
      <span class="kz-oferta-clock">acaba em <i class="tf-rel">00:00:00</i></span>
      <span class="kz-oferta-sep" aria-hidden="true">·</span>
      <span class="kz-oferta-go">Quero esse pacote →</span>
    </a>`;
  /* várias cópias pra a esteira nunca ficar curta em tela larga */
  fila.innerHTML = Array.from({ length: 8 }, chip).join("");
  const ritmo = () => {
    const meia = fila.scrollWidth / 2;
    if (meia > 40) fila.style.setProperty("--dur", Math.max(18, Math.round(meia / 70)) + "s");
  };
  ritmo();
  window.addEventListener("load", ritmo);
  window.addEventListener("resize", ritmo, { passive:true });
})();

/* ============================================================
   CASES / DEPOIMENTOS
   Vídeo só baixa quando a pessoa clica (preload none + capa).
   ============================================================ */
/* ============================================================
   GIRO CONTÍNUO
   Um trilho horizontal que anda sozinho, fluido, sem pulos. Só gira
   quando a fila não cabe na tela (celular). Pra fechar o laço, a fila
   ganha uma cópia no fim e, ao passar da metade, volta pro início sem
   ninguém perceber. Encostou o dedo, para; soltou, retoma. Palco aberto
   e aba escondida também param.
   ============================================================ */
const girarTrilho = (trilho, velocidade, opcoes) => {
  const forcar = () => { const f = opcoes && opcoes.forcar; return typeof f === "function" ? !!f() : !!f; };   /* fecha o laço mesmo quando a fila cabe na tela */
  const originais = [...trilho.children];
  if (originais.length < 2) return;
  let clones = [], x = 0, ultimo = 0, raf = 0, segurando = false, retoma = 0, naTela = false, arrasto = null, impulso = 0, alvo = null;
  /* largura de UMA fila (do primeiro original ao primeiro clone) */
  const fila = () => clones.length ? clones[0].offsetLeft - originais[0].offsetLeft : 0;
  const clonar = () => {
    if (clones.length) return;
    /* duas cópias: a fila do meio é a de partida, sobra espaço pra arrastar pros dois lados */
    for (let k = 0; k < 2; k++) originais.forEach(el => {
      const c = el.cloneNode(true); c.classList.add("clone", "in"); c.classList.remove("rv"); c.setAttribute("aria-hidden","true"); c.removeAttribute("tabindex");
      clones.push(c); trilho.appendChild(c);
    });
    if (trilho._aoClonar) trilho._aoClonar(clones);
    trilho.style.justifyContent = "flex-start";
    x = fila(); trilho.scrollLeft = x;
  };
  const desclonar = () => { clones.forEach(c => c.remove()); clones = []; trilho.style.justifyContent = ""; };
  /* passou da fila do meio: volta uma fila inteira, ninguém percebe porque as filas são iguais */
  const normaliza = () => {
    const f = fila(); if (!f) return 0;
    let d = 0;
    if (trilho.scrollLeft < f * .5) d = f; else if (trilho.scrollLeft >= f * 1.5) d = -f;
    if (d){ trilho.scrollLeft += d; x = trilho.scrollLeft; }
    return d;
  };
  const ajusta = () => {
    const precisa = forcar() || (trilho.scrollWidth - (clones.length ? fila() * 2 : 0) > trilho.clientWidth + 4);
    if (precisa) clonar(); else desclonar();
    x = trilho.scrollLeft;
  };
  const passo = t => {
    raf = 0;
    if (!naTela) return;
    const dt = Math.min(48, t - (ultimo || t)); ultimo = t;
    const palcoAberto = document.getElementById("palco").classList.contains("on");
    if (impulso && !segurando){
      /* soltou o dedo com velocidade: desliza e freia sozinho */
      x += impulso * dt / 1000; trilho.scrollLeft = x; normaliza();
      impulso *= Math.pow(.004, dt / 1000);
      if (Math.abs(impulso) < 15){ impulso = 0; alvo = encaixe(); }
    } else if (alvo !== null && !segurando){
      /* parou: encaixa no início do card mais perto, sem ficar cortado */
      x += (alvo - x) * Math.min(1, dt / 90); trilho.scrollLeft = x;
      if (Math.abs(alvo - x) < .6){ trilho.scrollLeft = alvo; x = alvo; alvo = null; }
    } else if (velocidade && clones.length && !segurando && !palcoAberto && !document.hidden && t > retoma){
      x += velocidade * dt / 1000;
      trilho.scrollLeft = x;
      normaliza();
    }
    raf = requestAnimationFrame(passo);
  };
  const liga = () => { if (!raf){ ultimo = 0; raf = requestAnimationFrame(passo); } };
  /* início do card mais próximo da posição atual (só faz sentido quando o dedo move o trilho) */
  const encaixe = () => {
    const passoCard = originais.length > 1 ? originais[1].offsetLeft - originais[0].offsetLeft : 0;
    if (!passoCard || !clones.length) return null;
    return Math.round(trilho.scrollLeft / passoCard) * passoCard;
  };
  /* a pessoa mexeu: para e, ao soltar, espera um pouco e segue de onde ela deixou */
  const segura = () => { segurando = true; };
  const solta  = () => { segurando = false; retoma = performance.now() + 2500; x = trilho.scrollLeft; };
  ["pointerdown","touchstart"].forEach(ev => trilho.addEventListener(ev, segura, { passive:true }));
  ["pointerup","pointercancel","touchend","touchcancel","mouseleave"].forEach(ev => trilho.addEventListener(ev, solta, { passive:true }));
  /* arrastar com o mouse ou com o dedo. No celular o trilho tem touch-action:pan-y:
     gesto vertical = o navegador rola a página e cancela o ponteiro (o trilho não sai
     do lugar); gesto horizontal = o navegador não mexe em nada e a gente move o trilho */
  trilho.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    impulso = 0; alvo = null;
    arrasto = { x0:e.clientX, s0:trilho.scrollLeft, mexeu:false, xa:e.clientX, ta:performance.now(), vx:0 };
  });
  trilho.addEventListener("pointermove", e => {
    if (!arrasto) return;
    const dx = e.clientX - arrasto.x0;
    if (!arrasto.mexeu && Math.abs(dx) > 6){ arrasto.mexeu = true; if (e.pointerType === "mouse") trilho.style.cursor = "grabbing"; }
    if (arrasto.mexeu){
      trilho.scrollLeft = arrasto.s0 - dx;
      arrasto.s0 += normaliza();      /* se deu a volta, a referência do arrasto acompanha */
      x = trilho.scrollLeft;
      const agora = performance.now(), dt = agora - arrasto.ta;
      if (dt > 0){ arrasto.vx = .7 * arrasto.vx + .3 * ((e.clientX - arrasto.xa) / dt); arrasto.xa = e.clientX; arrasto.ta = agora; }
    }
  });
  const fimArrasto = e => {
    if (!arrasto) return;
    const mexeu = arrasto.mexeu, vx = arrasto.vx, parou = performance.now() - arrasto.ta > 80;
    arrasto = null; trilho.style.cursor = "";
    x = trilho.scrollLeft;
    /* pointercancel = o navegador assumiu o gesto (rolagem vertical): sem inércia */
    if (mexeu && !parou && (!e || e.type !== "pointercancel")) impulso = Math.max(-2200, Math.min(2200, -vx * 1000));   /* teto: um piparote não atravessa a fila inteira */
    else if (mexeu) alvo = encaixe();
    if (mexeu){
      /* arrastou: o clique que vem junto não abre vídeo */
      const engole = ev => { ev.stopPropagation(); ev.preventDefault(); };
      trilho.addEventListener("click", engole, { capture:true, once:true });
      setTimeout(() => trilho.removeEventListener("click", engole, { capture:true }), 300);
    }
  };
  ["pointerup","pointercancel","mouseleave"].forEach(ev => trilho.addEventListener(ev, fimArrasto));
  trilho.addEventListener("wheel", () => { retoma = performance.now() + 2500; x = trilho.scrollLeft; }, { passive:true });
  /* rolagem do dedo ou da roda: fecha o laço e guarda a posição */
  trilho.addEventListener("scroll", () => {
    if (segurando || performance.now() < retoma){ normaliza(); x = trilho.scrollLeft; }
  }, { passive:true });
  new IntersectionObserver(es => es.forEach(e => { naTela = e.isIntersecting; if (naTela){ ajusta(); liga(); } }), { threshold:.15 }).observe(trilho);
  let tR; window.addEventListener("resize", () => { clearTimeout(tR); tR = setTimeout(ajusta, 150); });
  /* pronto desde a primeira tela: monta o laço já na carga, sem esperar aparecer
     (síncrono: com a aba em segundo plano o requestAnimationFrame nem roda) */
  ajusta();
  /* página terminou de carregar: se o navegador devolveu o trilho pro começo, volta pra fila do meio */
  window.addEventListener("load", () => { if (clones.length && !segurando && !arrasto) normaliza(); }, { once:true });
  document.addEventListener("visibilitychange", () => { if (!document.hidden){ ajusta(); liga(); } });
  trilho._estado = () => ({ naTela, segurando, retoma, raf, x, clones:clones.length, agora:performance.now() });
};

(function depoimentos(){
  const grade = document.getElementById("cases-grade");
  if (!grade) return;
  const card = d => `
    <article class="kz-depo" aria-label="Depoimento de ${d.nome}">
      <p class="kz-depo-txt">“${d.texto}”</p>
      <div class="kz-depo-who">
        <span class="kz-depo-av" aria-hidden="true">${d.inicial}</span>
        <span><b>${d.nome}</b><i>${d.linha}</i></span>
      </div>
    </article>`;
  /* duas filas iguais: a animação anda pra esquerda e fecha o laço em -50% */
  grade.innerHTML = DEPO_VIDEOS.map(card).join("") + DEPO_VIDEOS.map(card).join("");
  [...grade.children].slice(DEPO_VIDEOS.length).forEach(c => {
    c.setAttribute("aria-hidden", "true");
    c.removeAttribute("aria-label");
  });
})();

/* ============================================================
   PROJETOS
   ============================================================ */
const FIG = {
  hardcopy:'<svg viewBox="0 0 24 24"><path d="M3 10v4h3l6 4V6L6 10z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/></svg>',
  ia:      '<svg viewBox="0 0 24 24"><path d="M10 3l1.6 4.4L16 9l-4.4 1.6L10 15l-1.6-4.4L4 9l4.4-1.6z"/><path d="M18 13l.9 2.1L21 16l-2.1.9L18 19l-.9-2.1L15 16l2.1-.9z"/></svg>',
  viral:   '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
  motion:  '<svg viewBox="0 0 24 24"><circle cx="7" cy="7" r="3.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/><path d="M14 4l5 0-2.5 4.5z"/><path d="M6 14v6M3 17h6"/></svg>',
  hardmotion:'<svg viewBox="0 0 24 24"><path d="M4 7h9"/><path d="M4 12h6"/><path d="M4 17h8"/><path d="M14 9l5 3-5 3z"/></svg>',
  surge:   '<svg viewBox="0 0 24 24"><path d="M3 17l5-5 4 4 8-9"/><path d="M14 7h6v6"/></svg>',
  ugc:     '<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2.5"/><circle cx="12" cy="9" r="2.4"/><path d="M8.6 15.5a3.6 3.6 0 0 1 6.8 0"/></svg>'
};
const TEMA = {hardcopy:["#7C3AED","#5B21B6","Sem aparecer"],ia:["#C026D3","#86198F","Sem gravar nada"],viral:["#F43F7A","#BE185D","Ritmo de feed"],hardmotion:["#FB7AA6","#E11D60","Texto em movimento"],ugc:["#0C0B10","#7C3AED","Pessoa real"],motion:["#0C0B10","#F43F7A","Acabamento de estúdio"]};
document.getElementById("lista-formatos").innerHTML = FORMATOS.map((f, k) => `
  <article class="formato rv${f.videos.length <= 2 ? " formato-poucos" : ""}" style="--tema:${(TEMA[f.pasta]||TEMA.hardcopy)[0]};--tema-2:${(TEMA[f.pasta]||TEMA.hardcopy)[1]}">
    <div class="formato-head">
      <span class="formato-fita">${(TEMA[f.pasta]||TEMA.hardcopy)[2]}</span>
      <span class="formato-fig" aria-hidden="true">${FIG[f.pasta] || ""}</span>
      <div class="formato-titulo">
        <h3 translate="no">${f.nome}</h3>
        <span class="formato-preco">${brl(f.preco)} por vídeo</span>
      </div>
      <p>${f.desc}</p>
    </div>
    <div class="formato-corpo">
    <div class="formato-videos${f.videos.length === 1 ? " um-video" : f.videos.length === 2 ? " dois-videos" : ""}">
      ${f.videos.map(v => {
        const mp4 = localUrl(`/videos/estilos/${f.pasta}-${v}.mp4`) || `assets/videos/${f.pasta}/${f.pasta}-${v}.mp4`;
        const capa = `assets/videos/${f.pasta}/${f.pasta}-${v}.jpg`;
        return `
        <div class="vitrine" data-nome="${f.nome}" data-src="${mp4}"
             role="button" tabindex="0" aria-label="Assistir exemplo de ${f.nome}">
          <img src="${capa}" alt="" loading="lazy" decoding="async" draggable="false">
          <video src="${mp4}" poster="${capa}" muted loop playsinline autoplay preload="auto"
                 controlsList="nodownload noremoteplayback" disablePictureInPicture></video>
          <span class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
          <button class="vitrine-som" type="button" aria-label="Assistir este criativo">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <span class="vitrine-tag">${f.nome}</span>
        </div>`; }).join("")}
    </div>
    ${semCTA ? "" : `<div class="formato-acoes">
      <a href="${destino(`Oi! Quero começar pelo ${f.nome}.`)}"
         target="_blank" rel="noopener" class="formato-mais"><span>Começar pelo <b>${f.nome}</b></span><i class="fm-seta" aria-hidden="true">&rsaquo;</i></a>
    </div>`}
    ${f.extra ? `
    <div class="formato-extra">
      <span class="extra-topo">
        <span class="extra-mais">+</span>
        <span>
          <b translate="no">${f.extra.nome}</b>
          <span class="extra-dif">Some ao estilo que você escolher</span>
        </span>
      </span>
      <p class="extra-desc">${f.extra.desc}</p>
      <ul class="extra-lista">${f.extra.inclui.map(i => `<li>${i}</li>`).join("")}</ul>
      ${semCTA ? "" : `<a class="btn btn-claro" target="_blank" rel="noopener"
        href="${destino('Olá! Quero gravação com modelo + ' + f.nome + ' (' + brl(f.extra.preco) + ' por vídeo).')}">
        Quero gravação com modelo + <span translate="no">${f.nome}</span></a>`}
    </div>` : ""}
    </div>
  </article>`).join("");

/* ============================================================
   OS CRIATIVOS RODAM SOZINHOS, TODOS, O TEMPO TODO
   Carrega em cascata (poucos por vez, na ordem da pagina) pra nao
   afogar a rede do celular, e nao pausa mais quem sai da tela:
   quando a pessoa desce, o video ja esta rodando no meio.
   ============================================================ */
const naTela = v => {
  const r = v.getBoundingClientRect();
  return r.bottom > -200 && r.top < innerHeight + 200;
};
/* tocar respeita o som: so muta quem nao foi ligado no dedo */
const tocar = v => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
const tocarMudo = v => { if (!naTela(v) || v.dataset.frio) return; if (!v.dataset.comSom) v.muted = true; tocar(v); };
const insistir = v => {
  tocarMudo(v);
  [150, 500, 1500].forEach(ms => setTimeout(() => { if (v.paused) tocarMudo(v); }, ms));
};

/* prévias locais: mantém o <video> com os arquivos de assets/videos/ */
const videos = [...document.querySelectorAll(".vitrine video")];

/* cascata: 4 de cada vez, na ordem em que aparecem na pagina */
const FRENTE = 2;
let proximo = 0, carregando = 0;
const solta = () => {
  while (carregando < FRENTE && proximo < videos.length){
    const v = videos[proximo++];
    if (v.src || !v.dataset.src) continue;
    if (!v.offsetParent) continue;            /* card escondido (4º no celular): não gasta rede */
    carregando++;
    const seguiu = () => { carregando--; solta(); };
    v.addEventListener("canplay",  () => { tocarMudo(v); seguiu(); }, { once:true });
    v.addEventListener("error",    seguiu, { once:true });
    setTimeout(seguiu, 8000);          /* rede ruim nao trava a fila */
    v.src = v.dataset.src; v.load();
    tocarMudo(v);
  }
};

/* quem esta perto da tela fura a fila */
const obsVideo = new IntersectionObserver(es => es.forEach(e => {
  const v = e.target;
  if (!e.isIntersecting){
    /* saiu da tela: PAUSA (decodificar 20 vídeos ao mesmo tempo travava o celular) */
    delete v.dataset.comSom;
    v.muted = true;
    if (!v.paused) v.pause();
    const b = v.closest(".vitrine").querySelector(".vitrine-som");
    if (b){
      b.classList.remove("ligado");
      b.setAttribute("aria-pressed","false");
      b.setAttribute("aria-label","Assistir este criativo");
    }
    return;
  }
  if (!v.src && v.dataset.src){
    v.src = v.dataset.src; v.load();
    ["canplay","loadeddata","loadedmetadata"].forEach(ev =>
      v.addEventListener(ev, () => tocarMudo(v), { once:true }));
  }
  insistir(v);
}), { threshold:.01, rootMargin:"200px 0px" });

const armaVitrineVideo = v => {
  const card = v.closest(".vitrine");
  v.addEventListener("loadeddata", () => { v.style.opacity = "1"; tocarMudo(v); });
  v.addEventListener("playing",    () => card.classList.add("tocando"));
  v.addEventListener("pause",      () => { card.classList.remove("tocando");
                                           if (naTela(v)) setTimeout(() => tocarMudo(v), 200); });
  v.addEventListener("error",      () => { v.style.display = "none"; card.classList.remove("tocando"); });
  obsVideo.observe(v);
};
videos.forEach(armaVitrineVideo);
window.armaVitrineVideo = v => { videos.push(v); armaVitrineVideo(v); };

/* TETO: só os vídeos mais perto do centro da tela tocam (3 no celular, 6 no PC);
   o resto fica parado na capa. Decodificar 9 ao mesmo tempo travava o celular. */
const TETO = matchMedia("(max-width:900px)").matches ? 3 : 6;
const reconciliar = () => {
  const lista = videos.filter(v => v.src && v.offsetParent).map(v => {
    const r = v.getBoundingClientRect();
    return { v, d: Math.abs((r.top + r.bottom) / 2 - innerHeight / 2), dentro: r.bottom > 0 && r.top < innerHeight };
  }).sort((a, b) => a.d - b.d);
  lista.forEach((o, i) => {
    if (o.dentro && i < TETO){
      if (o.v.dataset.frio){ delete o.v.dataset.frio; }
      if (o.v.paused && !document.hidden) tocarMudo(o.v);
    } else {
      o.v.dataset.frio = "1";
      if (!o.v.paused) o.v.pause();
    }
  });
};
let recT = 0;
const pedeRec = () => { if (recT) return; recT = setTimeout(() => { recT = 0; reconciliar(); }, 180); };
addEventListener("scroll", pedeRec, { passive:true });
addEventListener("resize", pedeRec, { passive:true });
setInterval(reconciliar, 1200);
reconciliar();
/* a fila só começa quando a seção de estilos chega perto: sem isso o site
   baixava criativo antes mesmo de o hero terminar de aparecer */
(function filaSobDemanda(){
  const alvo = document.getElementById("projetos");
  if (!alvo || !("IntersectionObserver" in window)) { solta(); return; }
  /* cascata DESLIGADA: baixar e decodificar os 21 de uma vez travava a rolagem no celular;
     cada vídeo só carrega quando entra perto da tela (obsVideo) */
  if (!alvo) return;
})();

/* o primeiro gesto destrava o que o navegador tiver segurado, e a volta
   do app pra frente tambem: o iOS pausa tudo quando a aba sai de foco */
const destravar = () => videos.forEach(v => { if (v.paused) tocarMudo(v); });
["touchstart","pointerdown","scroll","click"].forEach(ev =>
  addEventListener(ev, destravar, { once:true, passive:true }));
addEventListener("visibilitychange", () => { if (!document.hidden) destravar(); });
addEventListener("pageshow", destravar);

/* ---- som do criativo: só um toca com áudio por vez ---- */
const calarTodos = menos => {
  document.querySelectorAll(".vitrine").forEach(c => {
    if (c === menos) return;
    const v = c.querySelector("video"), b = c.querySelector(".vitrine-som");
    if (v){ delete v.dataset.comSom; v.muted = true; }
    if (b){
      b.classList.remove("ligado"); b.setAttribute("aria-pressed","false");
      b.setAttribute("aria-label","Assistir este criativo");
    }
  });
};
const armaSom = btn => {
  /* botão de assistir no card: abre o palco com som, igual ao clique no card */
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const card = btn.closest(".vitrine");
    abrirPalco(card.dataset.nome, card.dataset.src, (card.querySelector("img") || {}).currentSrc, true);
  });
};
document.querySelectorAll(".vitrine-som").forEach(armaSom);
/* saiu da tela, cala */
document.addEventListener("visibilitychange", () => { if (document.hidden) calarTodos(null); });


/* ============================================================
   PROCESSO E FAQ
   ============================================================ */
const PFIG = [
  '<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4"/><path d="M14 3v4h4"/><path d="M18 7v4"/><path d="M8.5 9h5M8.5 13h4"/><path d="m14 18 2 2 4-4.5"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M13 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l4 4v4"/><path d="M8.5 9h6M8.5 13h4"/><circle cx="16.5" cy="16.5" r="3"/><path d="m18.7 18.7 2.3 2.3"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h3"/></svg>',
  '<svg viewBox="0 0 24 24"><rect x="2.5" y="10" width="13" height="9" rx="1.5"/><path d="m15.5 13 6-3v9l-6-3"/><circle cx="6" cy="6.5" r="2.5"/><circle cx="12" cy="6.5" r="2.5"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="m4.5 12.5 5 5 10-11"/></svg>'
];
document.getElementById("timeline").innerHTML = PROCESSO.map((p, i) => `
  <li class="tl rv">
    <span class="tl-n"><i class="tl-fig">${PFIG[i]}</i><em>${String(i+1).padStart(2,"0")}</em></span>
    <h3>${p.t}</h3>
    <p>${p.d}</p>
  </li>`).join("");


document.getElementById("lista-faq").innerHTML = FAQ.map(f => `
  <div class="faq rv">
    <button class="faq-q">${f.p}<span class="pl">+</span></button>
    <div class="faq-a"><p>${f.r}</p></div>
  </div>`).join("");

document.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement, resp = item.querySelector(".faq-a");
    const aberto = item.classList.contains("open");
    document.querySelectorAll(".faq.open").forEach(i => {
      i.classList.remove("open"); i.querySelector(".faq-a").style.maxHeight = null;
    });
    if (!aberto){ item.classList.add("open"); resp.style.maxHeight = resp.scrollHeight + "px"; }
  });
});

/* ============================================================
   PALCO
   ============================================================ */
const palco      = document.getElementById("palco");
const palcoVideo = document.getElementById("palco-video");

const palcoLegenda  = document.getElementById("palco-legenda");
const palcoQuero    = document.getElementById("palco-quero");
const palcoOutros   = document.getElementById("palco-outros");
/* nome = estilo (vitrine) ou pessoa (depoimento); capa = imagem do card, aparece na hora enquanto o vídeo carrega;
   estilo = true mostra a legenda com "Quero nesse estilo!" e "Voltar" */
const abrirPalco = (nome, src, capa, estilo) => {
  calarTodos(null);
  document.querySelectorAll(".vitrine video").forEach(v => v.pause());
  if (capa) palcoVideo.poster = capa; else palcoVideo.removeAttribute("poster");
  if (estilo && !semCTA){
    palcoQuero.href = destino(`Oi! Gostei do ${nome} e quero saber mais informações sobre os criativos.`);
    palcoQuero.hidden = false; palcoLegenda.classList.remove("so-voltar"); palcoOutros.textContent = "Ver outros";
  } else { palcoQuero.hidden = true; palcoLegenda.classList.add("so-voltar"); palcoOutros.textContent = "Voltar"; }
  const mesmo = palcoVideo.getAttribute("src") === src && palcoVideo.readyState >= 2;
  if (!mesmo){
    palco.classList.add("carregando");
    palcoVideo.preload = "auto";
    palcoVideo.src = src;
  } else {
    palco.classList.remove("carregando");
    try { palcoVideo.currentTime = 0; } catch (_) {}
  }
  palcoVideo.muted = false;
  palco.classList.add("on"); palco.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  const tenta = () => palcoVideo.play().catch(() => { palcoVideo.muted = true; palcoVideo.play().catch(() => {}); });
  if (palcoVideo.readyState >= 2) tenta();
  else {
    const go = () => { palco.classList.remove("carregando"); tenta(); };
    palcoVideo.addEventListener("canplay", go, { once:true });
    palcoVideo.addEventListener("loadeddata", go, { once:true });
    tenta();
  }
};
const fecharPalco = () => {
  palco.classList.remove("on","carregando"); palco.setAttribute("aria-hidden","true");
  /* pausa sem limpar o src: reabrir o mesmo vídeo fica instantâneo */
  palcoVideo.pause();
  document.body.style.overflow = "";
  document.querySelectorAll(".vitrine video").forEach(v => {
    const r = v.getBoundingClientRect();
    if (v.src && r.bottom > 0 && r.top < window.innerHeight) tocar(v);
  });
};
/* aquecimento: no hover/toque o browser já começa a baixar o mp4 */
const preaquece = src => {
  if (!src || preaquece._ok.has(src)) return;
  preaquece._ok.add(src);
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "video";
  link.href = src;
  document.head.appendChild(link);
  const warm = document.createElement("video");
  warm.preload = "auto";
  warm.muted = true;
  warm.playsInline = true;
  warm.src = src;
  warm.load();
  preaquece._warm.push(warm);
};
preaquece._ok = new Set();
preaquece._warm = [];
const armaVitrineClique = v => {
  const abrir = () => abrirPalco(v.dataset.nome, v.dataset.src, (v.querySelector("img") || {}).currentSrc, true);
  v.addEventListener("click", abrir);
  v.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); abrir(); } });
  ["pointerenter","touchstart","focus"].forEach(ev =>
    v.addEventListener(ev, () => preaquece(v.dataset.src), { passive:true }));
};
document.querySelectorAll(".vitrine").forEach(armaVitrineClique);
window.armaVitrineClique = c => { armaVitrineClique(c); const b = c.querySelector(".vitrine-som"); if (b) armaSom(b); };
document.getElementById("palco-fechar").addEventListener("click", fecharPalco);
document.getElementById("palco-outros").addEventListener("click", fecharPalco);
palcoVideo.addEventListener("click", () => { if (palcoVideo.paused) tocar(palcoVideo); else palcoVideo.pause(); });
["playing","canplay","canplaythrough","loadeddata"].forEach(ev =>
  palcoVideo.addEventListener(ev, () => palco.classList.remove("carregando")));
palcoVideo.addEventListener("waiting", () => {
  if (palco.classList.contains("on") && palcoVideo.readyState < 3) palco.classList.add("carregando");
});
palco.addEventListener("click", e => { if (e.target === palco) fecharPalco(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") fecharPalco(); });

/* ============================================================
   REVEAL
   ============================================================ */
const revelarTudo = () => document.querySelectorAll(".rv").forEach(el => el.classList.add("in"));
if (!("IntersectionObserver" in window)){
  revelarTudo();
} else {
  /* threshold 0 e sem margem negativa: em tela pequena um card alto podia
     nunca alcançar os 10% e ficava invisível pra sempre. */
  const obsRv = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add("in"); obsRv.unobserve(e.target); }
  }), { threshold:0, rootMargin:"0px 0px 10% 0px" });
  document.querySelectorAll(".rv").forEach(el => obsRv.observe(el));

  /* REDE DE SEGURANÇA, conteúdo invisível é pior que conteúdo sem animação.
     Quem estiver na tela revela na rolagem; o resto revela sozinho em 2,5s. */
  const revelarNaTela = () => document.querySelectorAll(".rv:not(.in)").forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 1.1 && r.bottom > -40) el.classList.add("in");
  });
  addEventListener("scroll", revelarNaTela, { passive:true });
  addEventListener("load", revelarNaTela);
  setTimeout(revelarNaTela, 600);
  setTimeout(revelarTudo, 2500);
}

document.addEventListener("contextmenu", e => {
  if (e.target.closest("video, .vitrine, .peca, .reel-card, .founder-foto")) e.preventDefault();
});
document.addEventListener("dragstart", e => { if (e.target.matches("img, video")) e.preventDefault(); });

marcarAtivo();

/* ============================================================
   FEEDBACKS DO WHATSAPP
   A esteira anda sozinha, devagar. Solte o print em img/feedbacks/NN.jpg,
   a miniatura em thumb/ e cite o número aqui.
   ============================================================ */
const FEEDBACKS = [];

(function feedbacks(){
  const fila = document.getElementById("fb-fila");
  if (!fila || !FEEDBACKS.length) return;

  const itens = FEEDBACKS.map(n => ({ tipo:"print", id:n }));

  /* sempre a versão de 520px: a de 258px ficava borrada no celular. */
  /* loading="eager" de propósito: a fila anda por transform, então os cards
     ficam "fora da tela" pro navegador e com lazy NENHUMA imagem baixava , 
     a faixa aparecia preta e vazia. */
  const cartao = (it, i) => `<figure class="fb-card" data-tipo="print" data-i="${i}" role="button" tabindex="0" aria-label="Ver feedback de cliente">
         <img src="${localUrl(`/img/feedbacks/thumb2x/${it.id}.jpg`)}"
              width="520" height="925"
              alt="Feedback de cliente no WhatsApp"
              loading="eager" fetchpriority="low" decoding="async" draggable="false"
              onerror="this.closest('.fb-card').remove()">
       </figure>`;

  /* A esteira mostra uma parte do acervo, sorteada: com os 57 a fila passava
     de 25.000px, estourava o limite de textura da GPU e o carrossel travava.
     O lightbox continua com todos os 57. */
  const naEsteira = matchMedia("(max-width:760px)").matches ? 16 : 24;
  const sorteio = itens.map((it, i) => ({ it, i }));
  for (let k = sorteio.length - 1; k > 0; k--){
    const j = Math.floor(Math.random() * (k + 1));
    [sorteio[k], sorteio[j]] = [sorteio[j], sorteio[k]];
  }
  const mostrados = sorteio.slice(0, Math.min(naEsteira, sorteio.length));
  const uma = mostrados.map(x => cartao(x.it, x.i)).join("");
  fila.innerHTML = uma + uma;
  /* velocidade constante (~120px/s), calculada pela largura real da fila */
  const ritmoFb = () => {
    const meia = fila.scrollWidth / 2;
    if (meia > 40) fila.style.setProperty("--fb-dur", Math.max(12, Math.round(meia / 120)) + "s");
  };
  ritmoFb();
  addEventListener("load", ritmoFb);
  addEventListener("resize", ritmoFb, { passive:true });

  /* só solta a animação com o primeiro lote de prints já desenhado: assim
     ninguém vê a fita andando vazia */
  fila.style.animationPlayState = "paused";
  const imgsFila = [...fila.querySelectorAll("img")];
  let prontas = 0;
  const conferirProntas = () => {
    prontas++;
    if (prontas >= Math.min(6, imgsFila.length)) { fila.style.animationPlayState = ""; ritmoFb(); }
  };
  imgsFila.forEach(im => {
    if (im.complete && im.naturalWidth) conferirProntas();
    else { im.addEventListener("load", conferirProntas, { once:true });
           im.addEventListener("error", conferirProntas, { once:true }); }
  });
  setTimeout(() => { fila.style.animationPlayState = ""; }, 4000);  /* rede lenta não trava a fita */

  /* ---- lightbox: abre print ou criativo ---- */
  const $luz   = () => document.getElementById("fb-luz");
  const $img   = () => document.getElementById("fb-img");
  const $conta = () => document.getElementById("fb-conta");
  let atual = 0;

  const mostrar = i => {
    atual = (i + itens.length) % itens.length;
    const it = itens[atual];
    $img().src = localUrl("/img/feedbacks/media/" + it.id + ".jpg");
    $conta().textContent = (atual + 1) + " de " + itens.length;
  };
  const abrir  = i => { mostrar(i); $luz().hidden = false; document.body.style.overflow = "hidden"; };
  const fechar = () => {
    $luz().hidden = true; $img().removeAttribute("src"); document.body.style.overflow = "";
  };

  let xDown = 0;
  fila.addEventListener("pointerdown", e => { xDown = e.clientX; });
  fila.addEventListener("click", e => {
    if (Math.abs(e.clientX - xDown) > 8) return;   /* foi arraste, não clique */
    const c = e.target.closest(".fb-card"); if (c) abrir(+c.dataset.i);
  });
  fila.addEventListener("keydown", e => {
    const c = e.target.closest(".fb-card");
    if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); abrir(+c.dataset.i); }
  });
  document.addEventListener("click", e => {
    if (e.target.hasAttribute("data-fechar-fb")) fechar();
    if (e.target.id === "fb-ant")  mostrar(atual - 1);
    if (e.target.id === "fb-prox") mostrar(atual + 1);
  });
  addEventListener("keydown", e => {
    const luz = $luz();
    if (!luz || luz.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft")  mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });
})();

/* a barra de aviso muda de altura quando o texto quebra no celular */
(function alturaNav(){
  const n = document.querySelector(".pill-nav");
  if (!n) return;
  const medir = () => document.documentElement.style.setProperty("--nav-h", (n.offsetTop + n.offsetHeight) + "px");
  medir(); addEventListener("resize", medir, { passive:true });
})();

/* ---- o muro segue o mouse de leve e reage ao scroll ---- */
(function muroVivo(){
  const campo = document.getElementById("hero-muro");
  if (!campo || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const muro = () => campo.querySelector(".muro");

  /* inclinação que acompanha o cursor, com folga curta */
  let alvoX = 14, alvoZ = -5, atualX = 14, atualZ = -5, rodando = false;
  if (document.querySelector("#inicio.v4")) return;   /* muro reto */
  addEventListener("pointermove", e => {
    if (innerWidth < 900) return;
    const dx = (e.clientX / innerWidth  - .5) * 2;   /* -1 a 1 */
    const dy = (e.clientY / innerHeight - .5) * 2;
    alvoZ = -5 + dx * 3.5;
    alvoX = 14 - dy * 4;
    if (!rodando){ rodando = true; requestAnimationFrame(passo); }
  }, { passive:true });

  function passo(){
    atualX += (alvoX - atualX) * .06;
    atualZ += (alvoZ - atualZ) * .06;
    const m = muro();
    if (m){
      m.style.setProperty("--mx", atualX.toFixed(2) + "deg");
      m.style.setProperty("--mz", atualZ.toFixed(2) + "deg");
    }
    if (Math.abs(alvoX-atualX) > .01 || Math.abs(alvoZ-atualZ) > .01) requestAnimationFrame(passo);
    else rodando = false;
  }

  /* ao descer a página o muro afunda um pouco: dá profundidade sem custar layout */
  addEventListener("scroll", () => {
    const y = Math.min(1, scrollY / (innerHeight || 1));
    campo.style.transform = "translateY(" + (y * 40).toFixed(1) + "px) scale(" + (1 + y * .06).toFixed(3) + ")";
    campo.style.opacity = (1 - y * .35).toFixed(2);
  }, { passive:true });
})();

/* carrossel de depoimentos: CSS puro (kz-depo-fila) — direita → esquerda */

/* ---- pacotes ---- */
/* ---- seletor de pacotes: clica e o carrossel desliza ---- */
(function seletorPacotes(){
  const seg = document.getElementById("pk-seg"), grade = document.getElementById("pk-grade");
  if (!seg || !grade) return;
  const btns = [...seg.querySelectorAll("button")], pill = seg.querySelector(".pk-seg-pill");
  const cards = () => [...grade.querySelectorAll(".pk")];
  const marca = i => {
    btns.forEach((b, k) => { b.classList.toggle("on", k === i); b.setAttribute("aria-selected", k === i); });
    const b = btns[i];
    pill.style.width = b.offsetWidth + "px";
    pill.style.transform = `translateX(${b.offsetLeft - 4}px)`;
  };
  const vai = i => {
    const c = cards()[i]; if (!c) return;
    marca(i);
    if (grade.scrollWidth > grade.clientWidth + 4){
      grade.scrollTo({ left: c.offsetLeft - (grade.clientWidth - c.offsetWidth) / 2, behavior:"auto" });
    } else {
      cards().forEach(x => x.classList.remove("pk-foco"));
      void c.offsetWidth; c.classList.add("pk-foco");
    }
  };
  btns.forEach((b, i) => b.addEventListener("click", () => vai(i)));
  /* arrastou com o dedo: o seletor acompanha */
  grade.addEventListener("scroll", () => {
    const meio = grade.scrollLeft + grade.clientWidth / 2;
    let melhor = 0, dist = 1e9;
    cards().forEach((c, i) => { const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - meio); if (d < dist){ dist = d; melhor = i; } });
    marca(melhor);
  }, { passive:true });
  const inicio = () => marca(1);
  requestAnimationFrame(inicio); addEventListener("load", inicio); addEventListener("resize", () => marca(btns.findIndex(b => b.classList.contains("on")) || 1));
})();

/* ---- personalizado ---- */
/* ---- topo: palco giratório com os melhores criativos ---- */
(function palcoTopo(){
  const pista = document.getElementById("hg-pista");
  if (!pista) return;
  const DESTAQUES = [
    { pasta:"hardcopy", n:1, nome:"Hard Copy" },
    { pasta:"ia",       n:1, nome:"IA" },
    { pasta:"viral",    n:1, nome:"Viral" },
    { pasta:"hardmotion", n:1, nome:"Hard Motion" },
    { pasta:"ugc",      n:1, nome:"UGC" },
    { pasta:"motion",   n:1, nome:"Motion Design" },
    { pasta:"motion",   n:2, nome:"Motion Design" }
  ];
  const N = DESTAQUES.length, TEMPO = 4200;
  pista.innerHTML = DESTAQUES.map((d, i) => `
    <button type="button" class="hg-cel" data-i="${i}" aria-label="Assistir criativo ${d.nome}">
      <img src="${localUrl(`/img/estilos/${d.pasta}-${d.n}.jpg`)}" alt="" decoding="async" draggable="false">
      <video muted loop playsinline preload="none" data-src="${localUrl(`/videos/prev/${d.pasta}-${d.n}.mp4`) || `assets/videos/${d.pasta}/${d.pasta}-${d.n}.mp4`}" disablePictureInPicture onplaying="this.classList.add('pronto')"></video>
      <span class="hg-chip">${d.nome}</span>
      <span class="hg-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
      <span class="hg-tempo"><i></i></span>
    </button>`).join("");
  const cels = [...pista.children];
  const nome = document.getElementById("hg-nome");
  const pontos = document.createElement("div");
  pontos.className = "hg-pontos";
  pontos.innerHTML = DESTAQUES.map((_, i) => `<i data-i="${i}"></i>`).join("");
  pista.parentElement.appendChild(pontos);
  let atual = 0, visivel = true, raf = null, trocando = false;
  const LIMITE = 7;                       /* segundos máximos de cada vídeo no centro */
  const vid = c => c.querySelector("video");
  const barra = c => c.querySelector(".hg-tempo i");

  const posicao = () => {
    const estreito = innerWidth < 760;
    const passo = estreito ? Math.round(pista.querySelector(".hg-cel").offsetWidth * .62) : (+pista.dataset.passo || 168);
    cels.forEach((c, i) => {
      let d = i - atual;
      if (d > N / 2) d -= N;
      if (d < -N / 2) d += N;
      const a = Math.abs(d);
      const esc = a === 0 ? 1 : a === 1 ? .8 : .64;
      const rot = d === 0 ? 0 : (d > 0 ? -28 : 28);
      c.style.transform = `translateX(${d * passo}px) perspective(1100px) rotateY(${rot}deg) scale(${esc})`;
      c.style.zIndex = 10 - a;
      const lim = estreito ? 1 : 2;
      c.style.opacity = a > lim ? 0 : a === 2 ? .45 : 1;
      c.style.pointerEvents = a > lim ? "none" : "auto";
      c.classList.toggle("on", a === 0);
      if (pontos.children[i]) pontos.children[i].classList.toggle("on", a === 0);
      /* só o do centro toca; os outros ficam parados na capa */
      const v = vid(c);
      if (a !== 0 && !v.paused){ v.pause(); }
      if (a !== 0){ v.classList.remove("pronto"); barra(c).style.transform = "scaleX(0)"; }
    });
  };

  const tocaCentro = () => {
    const c = cels[atual], v = vid(c);
    if (!v.src) v.src = v.dataset.src;
    try { v.currentTime = 0; } catch(e){}
    if (visivel) v.play().catch(() => {});
    nome.classList.add("troca");
    setTimeout(() => { nome.textContent = DESTAQUES[atual].nome; nome.classList.remove("troca"); }, 250);
  };

  /* barra = tempo real do vídeo; quando acaba (ou passa do limite), vai pro próximo */
  const acompanha = () => {
    cancelAnimationFrame(raf);
    const passo = () => {
      const c = cels[atual], v = vid(c);
      const fim = Math.min(LIMITE, v.duration || LIMITE);
      const k = v.readyState > 1 ? Math.min(v.currentTime / fim, 1) : 0;
      barra(c).style.transform = `scaleX(${k})`;
      if (visivel && !trocando && (k >= 1 || v.ended)){ vai(atual + 1); return; }
      raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
  };

  const vai = i => {
    trocando = true;
    atual = (i + N) % N;
    posicao();
    tocaCentro();
    setTimeout(() => { trocando = false; }, 700);
    acompanha();
  };

  cels.forEach((c, i) => c.addEventListener("click", () => {
    if (i !== atual){ vai(i); return; }
    const d = DESTAQUES[i];
    abrirPalco(d.nome, localUrl(`/videos/prev/${d.pasta}-${d.n}.mp4`) || localUrl(`/videos/estilos/${d.pasta}-${d.n}.mp4`) || `assets/videos/${d.pasta}/${d.pasta}-${d.n}.mp4`, localUrl(`/img/estilos/${d.pasta}-${d.n}.jpg`), true);
  }));
  document.getElementById("hg-ant").onclick  = () => vai(atual - 1);
  document.getElementById("hg-prox").onclick = () => vai(atual + 1);
  let x0 = null;
  pista.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive:true });
  pista.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) vai(atual + (dx < 0 ? 1 : -1));
  }, { passive:true });
  new IntersectionObserver(es => {
    visivel = es[0].isIntersecting;
    const v = vid(cels[atual]);
    if (!visivel){ v.pause(); cancelAnimationFrame(raf); }
    else { v.play().catch(() => {}); acompanha(); }
  }, { threshold:.15 }).observe(pista);
  addEventListener("resize", posicao, { passive:true });
  /* o próximo já vem carregado, pra troca não piscar */
  const preCarrega = () => { const v = vid(cels[(atual + 1) % N]); if (!v.src){ v.src = v.dataset.src; v.preload = "auto"; } };
  setInterval(preCarrega, 2000);
  posicao(); tocaCentro(); acompanha();
})();

/* ---- provas do topo contando do zero ---- */
(function contaProvas(){
  const els = document.querySelectorAll("[data-conta]");
  if (!els.length) return;
  const roda = el => {
    const fim = +el.dataset.conta, pre = el.dataset.pre || "", suf = el.dataset.suf || "", t0 = performance.now(), dur = 1800;
    const passo = t => {
      const k = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - k, 3);
      el.innerHTML = (pre ? `<i class="vt-pre">${pre}</i>` : "") + Math.round(fim * e).toLocaleString("pt-BR") + suf;
      if (k < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  };
  const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ roda(e.target); obs.unobserve(e.target); } }), { threshold:.5 });
  els.forEach(el => { el.innerHTML = (el.dataset.pre ? `<i class="vt-pre">${el.dataset.pre}</i>` : "") + "0" + (el.dataset.suf || ""); obs.observe(el); });
})();

/* ---- selo de vagas da semana ---- */
(function vagas(){
  const n = document.getElementById("vv-n"), b = document.getElementById("vv-barra");
  if (!n || !CONFIG.vagas) return;
  const { restam, total } = CONFIG.vagas;
  n.textContent = restam;
  if (restam === 1) n.parentElement.innerHTML = 'resta <em id="vv-n">1</em> vaga';
  setTimeout(() => { b.style.transform = `scaleX(${Math.min(1, (total - restam) / total)})`; }, 600);
})();

/* ---- "fantasma" que percorre o processo conforme a rolagem ---- */
(function fantasmaProcesso(){
  const lista = document.getElementById("timeline");
  const secao = document.getElementById("processo");
  if (!lista || !secao) return;
  const passos = [...lista.querySelectorAll(".tl")];
  if (!passos.length) return;
  lista.style.position = "relative";
  const fant = document.createElement("span");
  fant.className = "tl-fantasma"; fant.setAttribute("aria-hidden", "true");
  lista.appendChild(fant);
  const trilha = document.createElement("span");
  trilha.className = "tl-trilha"; trilha.setAttribute("aria-hidden", "true");
  lista.appendChild(trilha);
  let ultimo = -1, festa = false;
  const centro = el => {
    const r = el.getBoundingClientRect(), b = lista.getBoundingClientRect();
    return { x: r.left - b.left + r.width / 2, y: r.top - b.top + r.height / 2 };
  };
  const comemora = () => {
    const alvo = passos[passos.length - 1].querySelector(".tl-fig");
    alvo.classList.add("tl-festa");
    for (let i = 0; i < 18; i++){
      const c = document.createElement("i");
      c.className = "tl-confete";
      const ang = (i / 18) * Math.PI * 2, dist = 46 + Math.random() * 34;
      c.style.setProperty("--dx", Math.cos(ang) * dist + "px");
      c.style.setProperty("--dy", Math.sin(ang) * dist + "px");
      c.style.background = ["#1E6FE0","#0A1F44","#A78BFA","#4E97EC"][i % 4];
      alvo.appendChild(c);
      setTimeout(() => c.remove(), 1100);
    }
    setTimeout(() => alvo.classList.remove("tl-festa"), 1600);
  };
  const atualiza = () => {
    const r = lista.getBoundingClientRect(), h = innerHeight;
    /* progresso preso à linha dos passos: começa quando ela chega a 70% da tela
       e só termina quando sobe até 22% (a pessoa precisa rolar pra ver avançar) */
    const ini = h * (innerWidth > 760 ? .7 : .75), fim = h * (innerWidth > 760 ? .22 : .1);
    const prog = Math.min(1, Math.max(0, (ini - r.top) / (ini - fim + (innerWidth > 760 ? 0 : r.height * .6))));
    const pos = prog * (passos.length - 1);
    const i = Math.min(passos.length - 1, Math.floor(pos + .0001)), f = pos - i;
    const alvoI = Math.round(pos);
    const { x, y } = centro(passos[alvoI].querySelector(".tl-fig"));
    fant.style.transform = `translate(${x}px, ${y}px)`;
    fant.style.opacity = prog > 0 ? 1 : 0;
    const p0 = centro(passos[0].querySelector(".tl-fig"));
    trilha.style.cssText = innerWidth > 760
      ? `left:${p0.x}px;top:${p0.y}px;width:${Math.max(0, x - p0.x)}px;height:2px`
      : `left:${p0.x}px;top:${p0.y}px;height:${Math.max(0, y - p0.y)}px;width:2px`;
    const ativo = Math.round(pos);
    passos.forEach((p, k) => { p.classList.toggle("tl-aceso", k <= ativo); p.classList.toggle("tl-agora", k === ativo); });
    if (ativo !== ultimo){
      if (ativo === passos.length - 1 && !festa){ festa = true; comemora(); }
      if (ativo < passos.length - 1) festa = false;
      ultimo = ativo;
    }
  };
  addEventListener("scroll", atualiza, { passive:true });
  addEventListener("resize", atualiza, { passive:true });
  atualiza();
})();

/* ---- topo estilo Turbo: vídeos e clique ---- */
(function alturaMosaico(){
  const m = document.querySelector(".tb-mosaico"), h = document.querySelector(".tb h1"), b = document.querySelector(".tb-ctas");
  if (!m || !h || !b) return;
  const ajusta = () => {
    if (innerWidth <= 900) return;
    m.style.marginTop = "0px";
    const ht = h.getBoundingClientRect().top, mt = m.getBoundingClientRect().top;
    const alto = b.getBoundingClientRect().bottom - ht + 24;
    m.style.setProperty("--mh", Math.round(alto) + "px");
    m.style.marginTop = Math.round(ht - mt - 12) + "px";
  };
  ajusta(); addEventListener("load", ajusta); addEventListener("resize", ajusta);
  if (document.fonts) document.fonts.ready.then(ajusta);
})();
(function topoTurbo(){
  /* monta a grade do hero só com os vídeos locais disponíveis */
  const PECAS = [];
  FORMATOS.forEach(f => (f.videos || []).forEach(n => PECAS.push({ pasta:f.pasta, n, nome:f.nome })));
  if (!PECAS.length) return;
  const tcHtml = (d, alto) => {
    const vid = localUrl(`/videos/prev/${d.pasta}-${d.n}.mp4`) || localUrl(`/videos/estilos/${d.pasta}-${d.n}.mp4`) || `assets/videos/${d.pasta}/${d.pasta}-${d.n}.mp4`;
    const img = localUrl(`/img/estilos/${d.pasta}-${d.n}.jpg`);
    return `<button type="button" class="tc${alto ? " tc-alto" : ""}" data-p="${d.pasta}" data-n="${d.n}" data-nome="${d.nome}" aria-label="Assistir criativo ${d.nome}">
      ${img ? `<img src="${img}" alt="" decoding="async" draggable="false">` : `<div class="case-placeholder" aria-hidden="true"></div>`}
      <video muted loop playsinline preload="none" data-src="${vid}" onplaying="this.classList.add('pronto')"></video>
      <span class="tc-chip">${d.nome}</span>
      <span class="tc-rod"><b>${d.nome}</b><i>Pronto</i></span>
    </button>`;
  };
  const fila = document.querySelector("#inicio .tb-trilho");
  if (fila){
    const loop = PECAS.concat(PECAS);
    fila.innerHTML = loop.map(d => tcHtml(d, false)).join("");
  }
  const cols = document.querySelectorAll("#inicio .tb-col .tb-anda");
  if (cols.length){
    cols.forEach((col, ci) => {
      const seq = [];
      for (let i = 0; i < 8; i++) seq.push(PECAS[(ci * 3 + i) % PECAS.length]);
      col.innerHTML = seq.map((d, i) => tcHtml(d, i % 2 === 0)).join("");
    });
  }
  const cards = document.querySelectorAll("#inicio .tc");
  if (!cards.length) return;
  const obs = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target.querySelector("video");
    if (!v) return;
    if (e.isIntersecting){ if (v.dataset.src && !v.src) v.src = v.dataset.src; v.play().catch(() => {}); }
    else if (!v.paused) v.pause();
  }), { threshold:.3 });
  cards.forEach(c => {
    obs.observe(c);
    const srcOf = () => localUrl(`/videos/prev/${c.dataset.p}-${c.dataset.n}.mp4`) || localUrl(`/videos/estilos/${c.dataset.p}-${c.dataset.n}.mp4`) || `assets/videos/${c.dataset.p}/${c.dataset.p}-${c.dataset.n}.mp4`;
    ["pointerenter","touchstart","focus"].forEach(ev =>
      c.addEventListener(ev, () => preaquece(srcOf()), { passive:true }));
    c.addEventListener("click", () => {
      abrirPalco(c.dataset.nome, srcOf(), localUrl(`/img/estilos/${c.dataset.p}-${c.dataset.n}.jpg`), true);
    });
  });
})();

document.querySelectorAll("[data-perso]").forEach(a => a.href = destino("Olá! Quero um projeto personalizado. Pode me ajudar a escolher o estilo e o modelo ideal?"));

/* ---- pacotes: versão mínima ---- */
(function pacotes(){
  const grade = document.getElementById("pk-grade");
  if (!grade) return;
  const AVULSO = 70;
  const PACOTES = [
    { qtd:3,  unit:65, tag:"Pra começar", frase:"Pra descobrir qual ângulo vende.",
      qtdTxt:"3 peças prontas pra anunciar", mais:[] },
    { qtd:5,  unit:62, tag:"Mais pedido", top:true, frase:"O tanto que dá pra testar de verdade.",
      qtdTxt:"5 peças pra testar ângulos diferentes", mais:["Legenda embutida + versão limpa","2 rodadas de ajuste"] },
    { qtd:10, unit:58, tag:"Melhor preço", frase:"Pra quem está começando a escalar.",
      qtdTxt:"10 peças pra começar a escalar", herda:["Legenda embutida + versão limpa"], mais:["Projeto personalizado: estilo e modelo ideais pro seu negócio","Fila prioritária na produção","3 rodadas de ajuste"] }
  ];
  const BASE = ["Roteiro, narração e edição","Entrega em até 48h"];
  const AJUSTE1 = "1 rodada de ajuste";
  /* ícones de linha por característica (mesmo traço fino em todos) */
  const IC = {
    criativos:'<rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/>',
    roteiro:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    prazo:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5.5l3.5 2"/>',
    ajuste:'<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 3v5h-5"/>',
    legenda:'<rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M6.5 11h5M14 11h3.5M6.5 15h3M12 15h5.5"/>',
    projeto:'<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
    fila:'<path d="M4 6h16M4 12h10M4 18h6"/><path d="M17 15l3 3-3 3"/>'
  };
  const qual = t => /criativos/.test(t) ? "criativos" : /Roteiro/.test(t) ? "roteiro" : /Entrega/.test(t) ? "prazo"
    : /rodada/.test(t) ? "ajuste" : /Legenda/.test(t) ? "legenda" : /personalizado/i.test(t) ? "projeto" : /Fila/.test(t) ? "fila" : "criativos";
  const item = (t, cls) => `<li class="${cls}">
      <svg class="pk-ic" viewBox="0 0 24 24" aria-hidden="true">${IC[qual(t)]}</svg>
      <span class="pk-tx">${t}</span>
      <i class="pk-ck" aria-hidden="true"></i>
    </li>`;
  grade.innerHTML = PACOTES.map((p, k) => {
    const total = p.unit * p.qtd, cheio = AVULSO * p.qtd;
    return `
    <article class="pk rv d${k + 1}${p.top ? " pk-top" : ""}">
      <div class="pk-cabeca">
        <h3>Pacote ${p.qtd}</h3>
        <span class="pk-tag">${p.top ? '<svg class="pk-coroa" viewBox="0 0 64 44" aria-hidden="true"><path d="M4 40 L8 12 L22 26 L32 4 L42 26 L56 12 L60 40 Z"/></svg>' : ""}${p.tag}</span>
      </div>
      <p class="pk-de">De <s>${brl(cheio)}</s> <span>(${p.qtd} x ${brl(AVULSO)})</span></p>
      <div class="pk-preco"><span>por</span><b>${brl(total)}</b></div>
      <p class="pk-frase">${p.frase}</p>
      <ul class="pk-itens">
        ${item(p.qtdTxt, "pk-qtd")}
        ${p.mais.map(t => item(t, "pk-mais")).join("")}
        ${(p.herda || []).concat(BASE).map(t => item(t, "")).join("")}
        ${p.mais.some(t => /rodadas/.test(t)) ? "" : item(AJUSTE1, "")}
      </ul>
      ${semCTA ? "" : `<a class="pk-btn" target="_blank" rel="noopener"
         href="${destino(`Oi! Quero fechar o Pacote ${p.qtd} (${p.qtd} criativos por ${brl(total)}).`)}">Fechar Pacote ${p.qtd}</a>`}
    </article>`;
  }).join("");
  /* no celular, abre centralizado no mais pedido */
  if (innerWidth < 900){
    const top = grade.querySelector(".pk-top");
    const centra = () => { if (top) grade.scrollLeft = top.offsetLeft - (grade.clientWidth - top.offsetWidth) / 2; };
    requestAnimationFrame(centra); addEventListener("load", centra);
    let feito = false;
    addEventListener("scroll", () => { if (feito) return; const r = grade.getBoundingClientRect(); if (r.top < innerHeight){ feito = true; centra(); } }, { passive:true });
  }
})();
(function extras(){
  const caixa = document.getElementById("pk-extras");
  if (!caixa) return;
  const EXTRAS = [
    { nome:"Hard Motion",   preco:90,  desc:"Texto animado, zoom e transições no ritmo da fala." },
    { nome:"UGC",           preco:175, desc:"Pessoa real gravando com o seu produto." },
    { nome:"Motion Design", preco:297, desc:"Animação feita do zero, acabamento de estúdio." }
  ];
  caixa.innerHTML = EXTRAS.map((e, k) => `
    <article class="pk-extra rv d${k + 1}">
      <div class="pk-extra-topo"><h3>${e.nome}</h3><b>${brl(e.preco)}</b></div>
      <p>${e.desc}</p>
      ${semCTA ? "" : `<a target="_blank" rel="noopener" href="${destino(`Oi! Quero um criativo ${e.nome} (${brl(e.preco)}).`)}">Quero esse estilo →</a>`}
    </article>`).join("");
})();


