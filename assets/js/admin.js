// Archivo JavaScript para el panel de administración
// Se extraerá del admin.html original

firebase.initializeApp({
  apiKey:"AIzaSyBdv2cOMgbeBuW-V9Buz8EzGAoElnvySoI",
  authDomain:"bodegatonytony.firebaseapp.com",
  projectId:"bodegatonytony",
  storageBucket:"bodegatonytony.firebasestorage.app",
  messagingSenderId:"763208241886",
  appId:"1:763208241886:web:dd4a04d68c2c72ed24a84f"
});

const db=firebase.firestore();

const PIN_LOCAL='300419';
let ADMIN_PIN=PIN_LOCAL;
let pinEntered='';
let products=[];
let adminInitialized=false;

async function loadAdminPin(){
  try{
    const snap=await db.collection('config').doc('seguridad').get();
    if(snap.exists&&snap.data().adminPin){
      ADMIN_PIN=snap.data().adminPin;
    }
  }catch{}
}

loadAdminPin();

function pinPress(d){
  if(pinEntered.length>=6)return;
  pinEntered+=d;
  updatePinDots();
  if(pinEntered.length===6)setTimeout(checkPin,200);
}

function pinClear(){
  pinEntered=pinEntered.slice(0,-1);
  updatePinDots();
  document.getElementById('pinError').textContent='';
}

function updatePinDots(){
  for(let i=0;i<6;i++){
    const d=document.getElementById('dot'+i);
    if(d)d.classList.toggle('filled',i<pinEntered.length);
  }
}

async function checkPin(){
  if(!ADMIN_PIN){
    document.getElementById('pinError').textContent='Cargando seguridad...';
    await loadAdminPin();
    if(!ADMIN_PIN)return;
  }
  if(pinEntered===ADMIN_PIN){
    document.getElementById('lockScreen').style.display='none';
    document.getElementById('adminPanel').style.display='block';
    pinEntered='';
    updatePinDots();
    initAdmin();
  }else{
    document.getElementById('pinError').textContent='PIN incorrecto';
    pinEntered='';
    updatePinDots();
    setTimeout(()=>{document.getElementById('pinError').textContent='';},2000);
  }
}

function lockPanel(){
  document.getElementById('lockScreen').style.display='flex';
  document.getElementById('adminPanel').style.display='none';
  pinEntered='';
  updatePinDots();
}

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

function initAdmin(){
  if(adminInitialized)return;
  adminInitialized=true;
  showToast('✅ Bienvenido al admin');
}

function showAdminTab(tab){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  const view=document.getElementById('view-'+tab);
  const btn=document.getElementById('tab-'+tab);
  if(view)view.classList.add('active');
  if(btn)btn.classList.add('active');
}

window.addEventListener('load',()=>{
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(()=>{});
  }
});
