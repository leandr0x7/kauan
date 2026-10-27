/* padding do hero sem a faixa/oferta flutuante antigas */
(function ofertaLayout(){
  const ini = document.getElementById("inicio");
  if (ini) ini.style.setProperty("padding-top", (innerWidth <= 900 ? "28px" : "48px"), "important");
  document.documentElement.style.setProperty("--faixa-h", "0px");
  document.documentElement.style.setProperty("--nav-h", "0px");
})();
