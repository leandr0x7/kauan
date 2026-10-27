/* oferta flutuante + padding do hero */
(function ofertaFlutuante(){
  const offer = document.getElementById("kz-offer");
  const ini = document.getElementById("inicio");
  if (ini) ini.style.setProperty("padding-top", (innerWidth <= 900 ? "28px" : "48px"), "important");
  document.documentElement.style.setProperty("--faixa-h", "0px");
  document.documentElement.style.setProperty("--nav-h", "0px");
  const x = document.getElementById("kz-offer-x");
  if (offer && x) x.addEventListener("click", () => offer.classList.add("off"));
})();
