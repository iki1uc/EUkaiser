// ================================================================
//  axiom.map.js — Gruppe 7: Module-Karte
//  Reine Datentabelle: welches Nav-Ziel gehört zu welchem Label/
//  welcher Beschreibung. Der Router (stage/router.js) liest das,
//  um Status-Texte und (falls vorhanden) Zieldateien anzuzeigen.
// ================================================================

export const MODULES = {
  root:   { label: 'ROOT',   file: null,           desc: 'BRAIN-Startzustand' },
  core:   { label: 'CORE',   file: null,           desc: 'Kernel · Axiom · Vec · NC-Suite' },
  hdf:    { label: 'HDF',    file: null,           desc: 'ROM-Speicher d/e/i/n/o/r/s/u/w' },
  boerse: { label: 'BOERSE', file: 'modules/boerse/index.html', desc: 'Börsen-Daten-Stage' },
  dom:    { label: 'DOM',    file: 'modules/dom/stage.html',    desc: 'Dom-Struktur / NC-Raum' },
  eos:    { label: 'EOS',    file: 'modules/eos/index.html',    desc: 'EOS-Modul' },
  evo:    { label: 'EVO',    file: 'modules/evo/stage.html',    desc: 'Evolution / Axiom-Map' },
  markt:  { label: 'MARKT',  file: 'modules/markt/index.html',  desc: 'Marktsystem' },
  respo:  { label: 'RESPO',  file: 'modules/respo/respo.js',    desc: '9×9-Respo-Mesh, 81 Slots' },
  tool48: { label: 'TOOL48', file: 'modules/tool48/ui.html',    desc: 'Werkzeug 48' },
  breite: { label: 'BREITE', file: null,           desc: 'Achse Breite (X)' },
  tiefe:  { label: 'TIEFE',  file: null,           desc: 'Achse Tiefe (Z)' },
  hoch:   { label: 'HOCH',   file: null,           desc: 'Achse Höhe (Y)' },
};
