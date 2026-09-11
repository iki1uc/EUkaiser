# BRAIN · ROOT — RUN-21-Master-Ordnung (echte Umsetzung)

## Wichtig zuerst

Dieses Projekt nutzt echte ES-Module (`import`/`export`) zwischen den Dateien.
Browser blockieren das Laden von Modulen über `file://` (Doppelklick auf
`index.html`) aus Sicherheitsgründen (CORS). Du brauchst einen der beiden Wege:

**A) Lokal testen:**
```bash
cd BRAIN-PROJECT
python3 -m http.server 8080
# dann im Browser: http://localhost:8080
```
oder mit Node: `npx serve .`

**B) Über dein GitHub-Repo (passt zu deinem iki1uc-Workflow):**
Einfach in ein Repo pushen und GitHub Pages aktivieren — dann läuft es
direkt über `https://iki1uc.github.io/<repo>/`.

## Was hier real ist und was nur Namensgebung

- **Vec3, Clock, springForce/damp/clamp**: echte, funktionierende Mathematik.
  Nichts davon ist Fantasie — das sind Standard-Techniken für 3D-Positionen,
  Animationszeit und weiche Annäherung an Zielwerte.
- **NC-Suite (Space/Time/Kraft/Figur)**: die Namen stammen aus deiner
  Vorgabe. Technisch sind es vier kleine, ehrliche Utility-Module — keine
  eigenständige "Physik-Engine". Das ist wichtig zu wissen, falls du das
  irgendwo als "physikalischen Unterbau" im engeren technischen Sinn
  präsentieren willst.
- **HDF-ROM-System**: ein echter Key-Value-Speicher pro Buchstabe
  (`localStorage`-basiert), kein Datenbank-System. Für ein Demo/Prototyp
  völlig ausreichend, für echte Mehrbenutzer-Daten bräuchtest du ein
  Backend.
- **RESPO-Mesh**: die 81 Slots berechnen tatsächlich einen Score aus
  echter Abweichung, keine Zufallszahlen-Show.
- **Dreieck-Screens**: echte 120°-Symmetrie über CSS-3D-Transforms.
- **Stage-Router**: ein echter, funktionierender Hash-Router
  (Browser-Zurück-Taste funktioniert).

## Ordnerstruktur

```
/BRAIN-PROJECT
├── /core
│   ├── vec.js          (Gruppe 2: VEC-System)
│   ├── NC_space.js      (Gruppe 1: Raumlogik)
│   ├── NC_time.js        (Gruppe 1: Zeitlogik)
│   ├── NC_kraft.js        (Gruppe 1: Kraftlogik)
│   ├── NC_figur.js         (Gruppe 1: Figurlogik)
│   ├── coord.js
│   ├── axiom.map.js         (Gruppe 7: Module-Karte)
│   └── OS_CORE.js            (Kernel)
├── /hdf
│   └── resolver.js             (Gruppe 3: HDF-ROM-System)
├── /modules
│   ├── /respo/respo.js           (Gruppe 4: RESPO-System)
│   └── /dreieck/dreieck.js        (Gruppe 5: Dreieck-Screen)
├── /stage
│   └── router.js                    (Gruppe 6: Stage-System)
└── index.html                         (BRAIN — verdrahtet alles)
```

Die Module `boerse`, `dom`, `eos`, `evo`, `markt`, `tool48` existieren als
Einträge in `axiom.map.js`, aber noch nicht als eigene Dateien — die Navigation
zeigt für sie aktuell nur den Status/Label an. Sag Bescheid, welches davon
zuerst wirklich befüllt werden soll, dann bauen wir das als echtes Modul aus.
