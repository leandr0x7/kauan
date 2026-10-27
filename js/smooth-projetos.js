
/* "Ver portfólio": desliza rápido até os estilos (meio segundo), sem pular de uma vez */
(function(){
  const alvo = document.getElementById("projetos"); if (!alvo) return;
  const ir = e => {
    e.preventDefault();
    const y0 = window.scrollY, y1 = alvo.getBoundingClientRect().top + y0 - 72, t0 = performance.now(), dur = 550;
    const passo = t => {
      const p = Math.min(1, (t - t0) / dur), e2 = 1 - Math.pow(1 - p, 3);
      window.scrollTo(0, y0 + (y1 - y0) * e2);
      if (p < 1) requestAnimationFrame(passo); else history.replaceState(null, "", "#projetos");
    };
    requestAnimationFrame(passo);
  };
  document.querySelectorAll('a[href="#projetos"]').forEach(a => a.addEventListener("click", ir));
})();
