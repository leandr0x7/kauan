
/* conta quanto falta até 23:59 de hoje (hora do visitante) — todos os .tf-rel / #tf-rel */
(function relogioHoje(){
  const tick = () => {
    const n = new Date();
    const f = new Date(n); f.setHours(23, 59, 59, 999);
    let d = Math.max(0, f - n);
    const h = Math.floor(d / 36e5), m = Math.floor(d % 36e5 / 6e4), s = Math.floor(d % 6e4 / 1e3);
    const txt = `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    document.querySelectorAll("#tf-rel, .tf-rel").forEach(el => { el.textContent = txt; });
  };
  tick(); setInterval(tick, 1000);
})();
