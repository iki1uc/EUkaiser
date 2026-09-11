<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>⚜️ EU · KAISER · v3</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  html,body{height:100%;overflow:hidden;
    background:#050308;color:#f0e0c0;
    font-family:'Consolas','Courier New',monospace;
    user-select:none;
    -webkit-tap-highlight-color:transparent;
  }
  canvas{
    display:block;width:100vw;height:100vh;
    touch-action:none;
    cursor:crosshair;
  }
  #hdr{
    position:fixed;top:12px;left:16px;
    font-size:10px;letter-spacing:4px;
    color:#f4d060;z-index:10;
    text-transform:uppercase;
    text-shadow:0 0 14px rgba(244,208,96,0.7);
    pointer-events:none;
  }
  #hdr .sub{
    display:block;font-size:8px;letter-spacing:2px;
    color:#8a7a5a;margin-top:2px;
  }
  #formula{
    position:fixed;top:12px;right:16px;
    background:rgba(8,5,15,0.82);
    border:1px solid rgba(212,168,60,0.35);
    border-left:3px solid #f4d060;
    padding:10px 14px;
    font-size:10px;line-height:1.8;
    z-index:10;
    backdrop-filter:blur(6px);
    pointer-events:none;
  }
  #formula .t{
    color:#f4d060;font-size:8px;
    letter-spacing:3px;text-transform:uppercase;
    border-bottom:1px solid rgba(212,168,60,0.2);
    padding-bottom:4px;margin-bottom:5px;
  }
  #formula .r{display:flex;justify-content:space-between;gap:14px;}
  #formula .k{color:#8a7a5a;}
  #formula .v{color:#f4e0a0;font-weight:bold;}
  #ces{
    position:fixed;bottom:12px;left:50%;
    transform:translateX(-50%);
    display:flex;gap:18px;
    background:rgba(8,5,15,0.82);
    border:1px solid rgba(212,168,60,0.25);
    padding:8px 18px;
    font-size:10px;letter-spacing:2px;
    z-index:10;
    backdrop-filter:blur(6px);
    pointer-events:none;
  }
  #ces .item{text-transform:uppercase;color:#8a7a5a;transition:color .4s;}
  #ces .item.on{color:#f4d060;text-shadow:0 0 10px rgba(244,208,96,0.9);}
  #ces .ar{color:#3a2a4a;}
  #st{
    position:fixed;bottom:12px;left:16px;
    font-size:9px;letter-spacing:1.5px;
    color:#8a7a5a;z-index:10;
    pointer-events:none;
    line-height:1.6;
  }
  #st .g{color:#f4d060;font-weight:bold;}
  #st .hb{color:#8cf0b0;font-weight:bold;}
  @media(max-width:520px){
    #formula{font-size:9px;padding:7px 9px;}
    #ces{font-size:9px;gap:10px;padding:6px 12px;}
    #st{font-size:8px;}
  }
</style>
</head>
<body>
<canvas id="c"></canvas>

<div id="hdr">⚜ EU · KAISER<span class="sub">Brücke · Gate · Atom · Waagschale</span></div>

<div id="formula">
  <div class="t">· Formel ·</div>
  <div class="r"><span class="k">UNI</span><span class="v">1</span></div>
  <div class="r"><span class="k">ROOM</span><span class="v">3</span></div>
  <div class="r"><span class="k">NC</span><span class="v">9</span></div>
  <div class="r"><span class="k">ATOM</span><span class="v">243</span></div>
  <div class="r"><span class="k">FLOW</span><span class="v">∞</span></div>
  <div class="r"><span class="k">ZAM</span><span class="v">門</span></div>
</div>

<div id="ces">
  <span class="item" id="cC">Ursache</span>
  <span class="ar">→</span>
  <span class="item" id="cE">Wirkung</span>
  <span class="ar">→</span>
  <span class="item" id="cS">Lösung</span>
</div>

<div id="st">
  <div>Tick <span class="hb" id="sTick">0</span></div>
  <div>FPS <span class="g" id="sFps">0</span></div>
  <div>Flow <span class="g" id="sFlow">0/s</span></div>
  <div>Achsen <span class="g" id="sAx">0</span>/243</div>
</div>

<script>
"use strict";
// ═══════════════════════════════════════════════════════════════════
// ⚜️ EU · KAISER · v3 — ROBUST
// Kein Audio beim Start · Touch-safe · FPS sichtbar · DPR capped
// ═══════════════════════════════════════════════════════════════════

const cv = document.getElementById('c');
const ctx = cv.getContext('2d');
let W=0, H=0, CX=0, CY=0, R=0, DPR=1;

const S = {
  tick: 0,
  fps: 0,
  lastFpsT: 0,
  frameCount: 0,
  axisTick: 0,
  loadL: 0.5,
  loadR: 0.5,
  tilt: 0,
  flowCount: 0,
  flowRate: 0,
  ces: 0,
  cesTimer: 0,
  electrons: [],
  particles: [],
  sparks: [],
  flash: 0,
  shake: 0,
};

// ─── RESIZE ───────────────────────────────────────────────────────
function resize(){
  DPR = Math.min(2, window.devicePixelRatio || 1);
  W = window.innerWidth;
  H = window.innerHeight;
  cv.width = Math.floor(W * DPR);
  cv.height = Math.floor(H * DPR);
  cv.style.width = W + 'px';
  cv.style.height = H + 'px';
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  CX = W / 2;
  CY = H / 2;
  R = Math.min(W, H) * 0.20;
  initElectrons();
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', ()=>setTimeout(resize, 200));

function initElectrons(){
  S.electrons = [];
  for(let i = 0; i < 6; i++){
    S.electrons.push({
      a: (i / 6) * Math.PI * 2,
      r: R * (1.1 + 0.35 * (i % 3)),
      sp: (0.004 + 0.002 * (i % 3)) * (i % 2 === 0 ? 1 : -1),
      glow: 0,
    });
  }
}

// ─── SOUND (nur nach Klick) ───────────────────────────────────────
let AC = null;
let audioOK = false;
function initAudio(){
  if(audioOK) return;
  try{
    AC = new (window.AudioContext || window.webkitAudioContext)();
    audioOK = true;
  }catch(_){ audioOK = false; }
}
function beep(freq, dur){
  if(!audioOK || !AC) return;
  try{
    const o = AC.createOscillator();
    const g = AC.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    g.gain.value = 0.03;
    g.gain.exponentialRampToValueAtTime(0.0001, AC.currentTime + dur);
    o.connect(g); g.connect(AC.destination);
    o.start();
    o.stop(AC.currentTime + dur);
  }catch(_){}
}

// ─── SPARK ────────────────────────────────────────────────────────
function spark(x, y, color, n){
  n = n || 6;
  for(let i = 0; i < n; i++){
    const a = Math.random() * Math.PI * 2;
    const sp = 0.6 + Math.random() * 2.2;
    S.sparks.push({
      x, y,
      vx: Math.cos(a) * sp,
      vy: Math.sin(a) * sp,
      life: 0,
      max: 30 + Math.random() * 30,
      color: color || '#f4d060',
      size: 1 + Math.random() * 1.4,
    });
  }
}

// ─── FLOW-PARTIKEL ────────────────────────────────────────────────
function flow(fromLeft){
  if(S.particles.length > 100) return;
  S.particles.push({
    t: 0,
    sp: 0.006 + Math.random() * 0.006,
    dir: fromLeft ? 1 : -1,
    curve: (Math.random() - 0.5) * 50,
    size: 1.2 + Math.random() * 1.4,
    life: 0,
    max: 260,
    hue: fromLeft ? 45 : 190,
  });
  S.flowCount++;
}

// ─── ZEICHNEN ─────────────────────────────────────────────────────
function draw(){
  ctx.save();
  const sx = (Math.random() - 0.5) * S.shake;
  const sy = (Math.random() - 0.5) * S.shake;
  ctx.translate(sx, sy);

  // Hintergrund
  const bg = ctx.createRadialGradient(CX, CY, 0, CX, CY, Math.max(W, H) * 0.85);
  bg.addColorStop(0, '#1a0e1c');
  bg.addColorStop(0.5, '#0c0610');
  bg.addColorStop(1, '#050308');
  ctx.fillStyle = bg;
  ctx.fillRect(-20, -20, W + 40, H + 40);

  // Aura
  const ag = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 3.2);
  ag.addColorStop(0, 'rgba(244,208,96,0.07)');
  ag.addColorStop(1, 'rgba(212,168,60,0)');
  ctx.fillStyle = ag;
  ctx.beginPath(); ctx.arc(CX, CY, R * 3.2, 0, Math.PI * 2); ctx.fill();

  // Reihenfolge: Gate (hinten) → Atom → Kern → Waage (vorn) → Brücke → Flow → Funken
  drawGate();
  drawAtom();
  drawNucleus();
  drawBridge();
  drawBalance();
  drawParticles();
  drawSparks();

  ctx.restore();

  if(S.flash > 0.01){
    ctx.fillStyle = 'rgba(244,208,96,' + (S.flash * 0.35) + ')';
    ctx.fillRect(0, 0, W, H);
    S.flash *= 0.9;
    if(S.flash < 0.02) S.flash = 0;
  }
}

function drawGate(){
  const gw = R * 3.4;
  const gh = R * 2.0;
  const x0 = CX - gw / 2;
  const x1 = CX + gw / 2;
  const yT = CY - gh;
  const yB = CY - R * 1.7;
  const pw = Math.max(4, R * 0.06);
  const th = Math.max(8, R * 0.14);
  const pulse = 1 + 0.03 * Math.sin(S.tick * 0.05);

  ctx.save();
  ctx.shadowColor = '#e04a3a';
  ctx.shadowBlur = 22;
  ctx.fillStyle = '#e04a3a';

  ctx.fillRect(x0 - gw * 0.04, yT, gw * 1.08, th);
  ctx.fillRect(x0 - gw * 0.02, yT + th * 1.6, gw * 1.04, th * 0.5);
  ctx.fillRect(x0, yT, pw * pulse, yB - yT);
  ctx.fillRect(x1 - pw * pulse, yT, pw * pulse, yB - yT);

  ctx.shadowBlur = 0;
  ctx.restore();

  // 門
  ctx.save();
  ctx.fillStyle = 'rgba(244,208,96,0.7)';
  ctx.font = 'bold ' + Math.round(R * 0.75) + 'px "Yu Mincho","Hiragino Mincho ProN",serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = '#f4d060';
  ctx.shadowBlur = 18;
  ctx.fillText('門', CX, yT + (yB - yT) / 2);
  ctx.restore();
}

function drawAtom(){
  // 3 Bahnen
  for(let ring = 0; ring < 3; ring++){
    ctx.beginPath();
    ctx.arc(CX, CY, R * (1.1 + ring * 0.35), 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(168,136,255,' + (0.06 + ring * 0.02) + ')';
    ctx.setLineDash([3, 8]);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // 6 Elektronen
  for(let i = 0; i < S.electrons.length; i++){
    const e = S.electrons[i];
    e.a += e.sp;
    e.glow *= 0.95;
    const x = CX + Math.cos(e.a) * e.r;
    const y = CY + Math.sin(e.a) * e.r * 0.55;

    const g = ctx.createRadialGradient(x, y, 0, x, y, 14);
    g.addColorStop(0, 'rgba(168,136,255,' + (0.75 + e.glow * 0.25) + ')');
    g.addColorStop(1, 'rgba(168,136,255,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2); ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, 2 + e.glow * 1.6, 0, Math.PI * 2);
    ctx.fillStyle = '#d8b8ff';
    ctx.shadowColor = '#a888ff';
    ctx.shadowBlur = 10 + e.glow * 15;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

function drawNucleus(){
  const pulse = 1 + 0.05 * Math.sin(S.tick * 0.06);
  const cr = R * 0.55 * pulse;

  const g1 = ctx.createRadialGradient(CX, CY, 0, CX, CY, cr * 2.2);
  g1.addColorStop(0, 'rgba(244,208,96,0.55)');
  g1.addColorStop(0.5, 'rgba(212,168,60,0.18)');
  g1.addColorStop(1, 'rgba(212,168,60,0)');
  ctx.fillStyle = g1;
  ctx.beginPath(); ctx.arc(CX, CY, cr * 2.2, 0, Math.PI * 2); ctx.fill();

  const g2 = ctx.createRadialGradient(CX, CY, 0, CX, CY, cr);
  g2.addColorStop(0, '#fff5d0');
  g2.addColorStop(0.4, '#f4d060');
  g2.addColorStop(1, '#d4a83c');
  ctx.fillStyle = g2;
  ctx.beginPath(); ctx.arc(CX, CY, cr, 0, Math.PI * 2); ctx.fill();

  // 8 Speichen
  ctx.save();
  ctx.translate(CX, CY);
  ctx.rotate(S.tick * 0.004);
  ctx.strokeStyle = 'rgba(10,6,12,0.75)';
  ctx.lineWidth = 2.4;
  for(let i = 0; i < 8; i++){
    const a = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * cr * 0.28, Math.sin(a) * cr * 0.28);
    ctx.lineTo(Math.cos(a) * cr * 0.88, Math.sin(a) * cr * 0.88);
    ctx.stroke();
  }
  ctx.restore();

  // 皇
  ctx.save();
  ctx.fillStyle = '#0a060c';
  ctx.font = 'bold ' + Math.round(cr * 0.95) + 'px "Yu Mincho","Hiragino Mincho ProN",serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('皇', CX, CY);
  ctx.restore();
}

function drawBalance(){
  const beamLen = R * 1.6;
  const by = CY + R * 0.55;

  ctx.save();
  ctx.translate(CX, by);
  ctx.rotate(S.tilt * 0.18);

  ctx.beginPath();
  ctx.moveTo(-beamLen, 0);
  ctx.lineTo(beamLen, 0);
  ctx.strokeStyle = 'rgba(244,208,96,0.85)';
  ctx.lineWidth = 2.4;
  ctx.shadowColor = '#f4d060';
  ctx.shadowBlur = 12;
  ctx.stroke();
  ctx.shadowBlur = 0;

  drawPan(-beamLen, 0, S.loadL, '#e04a3a');
  drawPan( beamLen, 0, S.loadR, '#6cf');

  ctx.restore();

  // Mittelpfeiler
  ctx.beginPath();
  ctx.moveTo(CX, CY + R * 0.25);
  ctx.lineTo(CX, by - 4);
  ctx.strokeStyle = 'rgba(244,208,96,0.35)';
  ctx.lineWidth = 1.4;
  ctx.stroke();

  // Fuß
  ctx.beginPath();
  ctx.moveTo(CX - R * 0.28, by + R * 0.42);
  ctx.lineTo(CX + R * 0.28, by + R * 0.42);
  ctx.strokeStyle = 'rgba(244,208,96,0.5)';
  ctx.lineWidth = 1.8;
  ctx.stroke();
}

function drawPan(px, py, load, color){
  const tl = R * 0.42;
  const pr = R * 0.22 + load * R * 0.22;

  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(px, py + tl);
  ctx.strokeStyle = 'rgba(200,180,140,0.4)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(px, py + tl, pr, 0, Math.PI);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.shadowColor = color;
  ctx.shadowBlur = 12;
  ctx.stroke();
  ctx.shadowBlur = 0;

  if(load > 0.02){
    ctx.beginPath();
    ctx.arc(px, py + tl, pr * 0.85, Math.PI * load, Math.PI);
    ctx.strokeStyle = color;
    ctx.globalAlpha = 0.6;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

function drawBridge(){
  const by = CY + R * 0.55;
  const beamLen = R * 1.6;

  // Bogen hin (gold)
  ctx.beginPath();
  ctx.moveTo(CX - beamLen, by);
  ctx.quadraticCurveTo(CX, by - 90, CX + beamLen, by);
  ctx.strokeStyle = 'rgba(244,208,96,0.15)';
  ctx.lineWidth = 1.2;
  ctx.setLineDash([4, 8]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Bogen her (cyan)
  ctx.beginPath();
  ctx.moveTo(CX + beamLen, by);
  ctx.quadraticCurveTo(CX, by - 120, CX - beamLen, by);
  ctx.strokeStyle = 'rgba(108,204,255,0.13)';
  ctx.lineWidth = 1.2;
  ctx.setLineDash([4, 8]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Pfeile
  arrow(CX + beamLen + 8, by, 1, 'rgba(244,208,96,0.5)');
  arrow(CX - beamLen - 8, by, -1, 'rgba(108,204,255,0.5)');
}

function arrow(x, y, dir, color){
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - dir * 10, y - 5);
  ctx.lineTo(x - dir * 10, y + 5);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawParticles(){
  const by = CY + R * 0.55;
  const beamLen = R * 1.6;

  for(let i = S.particles.length - 1; i >= 0; i--){
    const p = S.particles[i];
    p.t += p.sp;
    p.life++;

    const tt = Math.min(1, p.t);
    const fromX = p.dir === 1 ? CX - beamLen : CX + beamLen;
    const toX   = p.dir === 1 ? CX + beamLen : CX - beamLen;
    const x = fromX + (toX - fromX) * tt;
    const arcH = 90 + Math.abs(p.curve * 0.5);
    const arcY = by - arcH * 4 * tt * (1 - tt);
    const y = arcY + p.curve * 0.3;

    const alpha = 1 - p.life / p.max;
    const col = p.hue === 45
      ? 'rgba(244,208,96,' + alpha + ')'
      : 'rgba(108,204,255,' + alpha + ')';

    const g = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);
    g.addColorStop(0, col);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, p.size * 4, 0, Math.PI * 2); ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.hue === 45 ? '#fff5d0' : '#a0e0ff';
    ctx.shadowColor = p.hue === 45 ? '#f4d060' : '#6cf';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    if(p.t >= 1 || p.life > p.max){
      const ex = p.dir === 1 ? CX + beamLen : CX - beamLen;
      spark(ex, by, p.hue === 45 ? '#f4d060' : '#6cf', 4);
      S.particles.splice(i, 1);
    }
  }
}

function drawSparks(){
  for(let i = S.sparks.length - 1; i >= 0; i--){
    const s = S.sparks[i];
    s.x += s.vx;
    s.y += s.vy;
    s.vx *= 0.94;
    s.vy *= 0.94;
    s.life++;
    const a = 1 - s.life / s.max;
    ctx.fillStyle = s.color;
    ctx.globalAlpha = a;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size * a, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    if(s.life > s.max) S.sparks.splice(i, 1);
  }
}

// ─── UPDATE ───────────────────────────────────────────────────────
function update(dt){
  S.tick++;
  S.axisTick = (S.axisTick + 1) % 243;

  S.loadL += (Math.random() - 0.5) * 0.008;
  S.loadR += (Math.random() - 0.5) * 0.008;
  if(S.loadL < 0.15) S.loadL = 0.15;
  if(S.loadL > 0.9)  S.loadL = 0.9;
  if(S.loadR < 0.15) S.loadR = 0.15;
  if(S.loadR > 0.9)  S.loadR = 0.9;
  S.tilt = Math.max(-1, Math.min(1, (S.loadR - S.loadL) * 1.8));

  if(Math.random() < 0.04) flow(true);
  if(Math.random() < 0.04) flow(false);

  S.cesTimer++;
  if(S.cesTimer > 120){
    S.cesTimer = 0;
    S.ces = (S.ces + 1) % 3;
    updateCES();
  }

  S.shake *= 0.88;
  if(S.shake < 0.3) S.shake = 0;

  S.flash *= 0.9;
  if(S.flash < 0.02) S.flash = 0;
}

function updateCES(){
  const ids = ['cC', 'cE', 'cS'];
  for(let i = 0; i < ids.length; i++){
    const el = document.getElementById(ids[i]);
    if(i === S.ces) el.classList.add('on');
    else el.classList.remove('on');
  }
  const freqs = [392, 523, 784];
  beep(freqs[S.ces], 0.15);
}

// ─── HUD ──────────────────────────────────────────────────────────
function updateHUD(now){
  S.frameCount++;
  if(now - S.lastFpsT > 500){
    S.fps = Math.round(S.frameCount * 1000 / (now - S.lastFpsT));
    S.frameCount = 0;
    S.lastFpsT = now;
  }
  document.getElementById('sTick').textContent = S.tick;
  document.getElementById('sFps').textContent = S.fps;
  document.getElementById('sAx').textContent = S.axisTick;
}

setInterval(()=>{
  S.flowRate = S.flowCount;
  S.flowCount = 0;
  document.getElementById('sFlow').textContent = S.flowRate + '/s';
}, 1000);

// ─── LOOP (bulletproof) ───────────────────────────────────────────
let lastT = 0;
function loop(now){
  try{
    const dt = Math.min(48, now - lastT || 16);
    lastT = now;
    update(dt);
    draw();
    updateHUD(now);
  }catch(err){
    // Wenn ein Frame crasht, loggen wir und machen weiter
    console.error('Frame error:', err);
  }
  requestAnimationFrame(loop);
}

// ─── INPUT ────────────────────────────────────────────────────────
function onPress(x, y){
  initAudio();
  spark(x, y, '#f4d060', 8);
  if(x < CX){
    S.loadL = Math.min(0.95, S.loadL + 0.1);
    flow(true);
  } else {
    S.loadR = Math.min(0.95, S.loadR + 0.1);
    flow(false);
  }
  beep(523, 0.08);
  S.flash = Math.max(S.flash, 0.1);
}

cv.addEventListener('click', (e)=>{
  const r = cv.getBoundingClientRect();
  onPress(e.clientX - r.left, e.clientY - r.top);
});

cv.addEventListener('touchstart', (e)=>{
  e.preventDefault();
  const t = e.touches[0];
  if(!t) return;
  const r = cv.getBoundingClientRect();
  onPress(t.clientX - r.left, t.clientY - r.top);
}, { passive: false });

document.addEventListener('keydown', (e)=>{
  if(e.key === ' ' || e.key === 'Spacebar'){
    e.preventDefault();
    initAudio();
    for(const el of S.electrons) el.glow = 1;
    spark(CX, CY, '#f4d060', 22);
    beep(784, 0.3);
    S.flash = 0.5;
    S.shake = 6;
  }
});

// ─── INIT ─────────────────────────────────────────────────────────
resize();
updateCES();
S.lastFpsT = performance.now();
requestAnimationFrame(loop);

console.log('%c⚜️ EU · KAISER · v3 (robust)','color:#f4d060;font-weight:bold;font-size:14px;');
console.log('Wenn Tick + FPS hochzählen → Loop läuft.');
console.log('Wenn Tick stehen bleibt → bitte Konsole prüfen (F12).');
</script>
</body>
</html>
