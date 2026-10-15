function updateArbeitProgress() {
  const active = moduleState.filter(m => m.active).length;
  // Nutze rated wenn vorhanden, sonst alte Rechnung
  const r = (ratedImport || rated || window.rated)?.arbeit(active, MODULES.length, localMaster.zack) 
         || { progress: active/MODULES.length, respo: 0 };
  
  document.getElementById('mpActive').textContent = `${active}/${MODULES.length}`;
  document.getElementById('mpProg').textContent = (r.progress*100).toFixed(0)+'%';
  // ...
}
