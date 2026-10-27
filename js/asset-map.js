/* Auto-generated â€” local asset resolver */
window.__ASSET_BY_FILE = {
  "airmanager.png": "assets/042-airmanager.png",
  "bf.png": "assets/047-bf.png",
  "combatehub.png": "assets/051-combatehub.png",
  "desthack.png": "assets/045-desthack.png",
  "ellafit.png": "assets/043-ellafit.png",
  "fb-01.jpg": "assets/018-fb-01.jpg",
  "fb-02.jpg": "assets/019-fb-02.jpg",
  "fb-03.jpg": "assets/022-fb-03.jpg",
  "fb-04.jpg": "assets/021-fb-04.jpg",
  "fb-05.jpg": "assets/024-fb-05.jpg",
  "fb-06.jpg": "assets/025-fb-06.jpg",
  "fb-07.jpg": "assets/030-fb-07.jpg",
  "fb-08.jpg": "assets/027-fb-08.jpg",
  "fb-09.jpg": "assets/028-fb-09.jpg",
  "fb-10.jpg": "assets/032-fb-10.jpg",
  "fb-11.jpg": "assets/031-fb-11.jpg",
  "fb-12.jpg": "assets/035-fb-12.jpg",
  "fb-13.jpg": "assets/036-fb-13.jpg",
  "fb-14.jpg": "assets/037-fb-14.jpg",
  "fb-15.jpg": "assets/033-fb-15.jpg",
  "fb-16.jpg": "assets/038-fb-16.jpg",
  "fb-17.jpg": "assets/039-fb-17.jpg",
  "fb-18.jpg": "assets/040-fb-18.jpg",
  "fb-19.jpg": "assets/034-fb-19.jpg",
  "fb-20.jpg": "assets/041-fb-20.jpg",
  "fb-21.jpg": "assets/020-fb-21.jpg",
  "fb-22.jpg": "assets/023-fb-22.jpg",
  "fb-23.jpg": "assets/029-fb-23.jpg",
  "fb-24.jpg": "assets/026-fb-24.jpg",
  "hardcopy-1.jpg": "assets/videos/hardcopy/hardcopy-1.jpg",
  "hardcopy-1.mp4": "assets/videos/hardcopy/hardcopy-1.mp4",
  "hardcopy-2.jpg": "assets/053-hardcopy-2.jpg",
  "hardcopy-3.jpg": "assets/009-hardcopy-3.jpg",
  "hardmotion-1.jpg": "assets/videos/hardmotion/hardmotion-1.jpg",
  "hardmotion-1.mp4": "assets/videos/hardmotion/hardmotion-1.mp4",
  "hardmotion-2.jpg": "assets/058-hardmotion-2.jpg",
  "hardmotion-3.jpg": "assets/059-hardmotion-3.jpg",
  "hbs.png": "assets/046-hbs.png",
  "ia-1.jpg": "assets/videos/ia/ia-1.jpg",
  "ia-1.mp4": "assets/videos/ia/ia-1.mp4",
  "ia-2.jpg": "assets/006-ia-2.jpg",
  "ia-3.jpg": "assets/055-ia-3.jpg",
  "lecore.png": "assets/050-lecore.png",
  "motion-1.jpg": "assets/videos/motion/motion-1.jpg",
  "motion-1.mp4": "assets/videos/motion/motion-1.mp4",
  "motion-2.jpg": "assets/videos/motion/motion-2.jpg",
  "motion-2.mp4": "assets/videos/motion/motion-2.mp4",
  "motion-3.jpg": "assets/064-motion-3.jpg",
  "quik.png": "assets/048-quik.png",
  "surge-1.jpg": "assets/004-surge-1.jpg",
  "surge-2.jpg": "assets/060-surge-2.jpg",
  "surge-3.jpg": "assets/061-surge-3.jpg",
  "ugc-1.jpg": "assets/videos/ugc/ugc-1.jpg",
  "ugc-1.mp4": "assets/videos/ugc/ugc-1.mp4",
  "ugc-2.jpg": "assets/062-ugc-2.jpg",
  "ugc-3.jpg": "assets/001-ugc-3.jpg",
  "vilao.png": "assets/052-vilao.png",
  "viral-1.jpg": "assets/videos/viral/viral-1.jpg",
  "viral-1.mp4": "assets/videos/viral/viral-1.mp4",
  "viral-2.jpg": "assets/056-viral-2.jpg",
  "viral-3.jpg": "assets/057-viral-3.jpg",
  "vizepay.png": "assets/044-vizepay.png",
  "vulon.png": "assets/049-vulon.png"
};
window.localUrl = function (path) {
  if (!path) return path;
  if (/^(assets\/|data:|blob:|https?:|mailto:|tel:|#)/i.test(path)) return path;
  var clean = String(path).split("?")[0];
  var base = clean.split("/").pop();
  var hit = window.__ASSET_BY_FILE[base];
  if (hit) return hit;
  if (/^https?:/i.test(path)) return path;
  if (/^\/?(img|videos)\//i.test(clean)) return "";
  return path;
};
