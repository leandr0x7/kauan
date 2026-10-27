
/* a faixa "Apenas hoje" é fixa: mede a altura real dela (muda por celular) e empurra o topo e o menu pra baixo */
(function faixaNaoCobre(){
  const fx = document.querySelector(".tb-faixa"), ini = document.getElementById("inicio"), nav = document.querySelector(".pill-nav");
  if (!fx || !ini) return;
  const ajusta = () => {
    const h = Math.ceil(fx.getBoundingClientRect().height);
    if (!h) return;
    document.documentElement.style.setProperty("--faixa-h", h + "px");
    ini.style.setProperty("padding-top", (h + (innerWidth <= 900 ? 22 : 110)) + "px", "important");
    if (nav) nav.style.setProperty("top", (h + 8) + "px", "important");
  };
  ajusta(); addEventListener("resize", ajusta, { passive:true }); addEventListener("load", ajusta);
  setTimeout(ajusta, 300); setTimeout(ajusta, 1500);
  if ("ResizeObserver" in window) new ResizeObserver(ajusta).observe(fx);
})();
