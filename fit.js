// Versucht echtes Modul zu laden, fallback auf inline wenn file://
let ratedImport = null;
try {
  // Nur wenn über http:// geladen
  if (location.protocol !== 'file:') {
    const mod = await import('./respo.js');
    ratedImport = mod.rated;
    console.log('✅ respo.js Modul geladen · const rated aktiv');
  }
} catch(e) {
  console.log('⚠ respo.js Fallback inline — nutze http.server für Modul');
}
