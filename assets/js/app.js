// Archivo JavaScript para la aplicación principal
// Se extraerá del index.html original

firebase.initializeApp({
  apiKey:"AIzaSyBdv2cOMgbeBuW-V9Buz8EzGAoElnvySoI",
  authDomain:"bodegatonytony.firebaseapp.com",
  projectId:"bodegatonytony",
  storageBucket:"bodegatonytony.firebasestorage.app",
  messagingSenderId:"763208241886",
  appId:"1:763208241886:web:dd4a04d68c2c72ed24a84f"
});

const db=firebase.firestore();

// ESTADO
let products=[],cart={},cat='Todos',geo=null,chatUnsub=null,chatOn=false;
let rPid=null,rFoto='',rStars=5;
let entrega='domicilio',comp64='',metodo='';
let cfg={
  whatsapp:'+584242520138',
  metodosPago:{efectivo:true,pagoMovil:true,transferencia:false},
  tiempoPreparacion:30,
  pagoMovil:{banco:'Banco del Tesoro',nombre:'Lisbe Ovalle',cedula:'6.966.714',telefono:'04241572275'},
  transferencia:{banco:'Banco del Tesoro',nombre:'Lisbe Ovalle',cuenta:''}
};

// Cargar configuración de Firebase
db.collection('config').doc('tienda').get().then(snap=>{
  if(!snap.exists)return;
  const d=snap.data();
  if(d.whatsapp)cfg.whatsapp=d.whatsapp;
  if(d.metodosPago)cfg.metodosPago=d.metodosPago;
}).catch(()=>{});

// Cargar productos
db.collection('productos').onSnapshot(snap=>{
  products=snap.docs.map(d=>({id:d.id,...d.data()})).filter(p=>p.visible!==false);
  renderStore();
});

// Funciones básicas
function showTab(t){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('view-'+t)?.classList.add('active');
  document.getElementById('tab-'+t)?.classList.add('active');
}

function toggleChat(){
  const m=document.getElementById('chatModal');
  if(m)m.classList.toggle('open');
}

function showToast(msg){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

function renderStore(){
  const el=document.getElementById('storeContainer');
  if(!products.length){
    el.innerHTML='<div class="empty"><p>No hay productos aún</p></div>';
    return;
  }
  let html='<h2>Bienvenido a Bodega Tony Tony</h2>';
  html+='<div class="products-grid">';
  products.forEach(p=>{
    html+='<div class="product-card">';
    html+='<div class="product-emoji">'+p.emoji+'</div>';
    html+='<div class="product-info">';
    html+='<div class="product-name">'+p.name+'</div>';
    html+='<div class="product-price">$'+p.price.toFixed(2)+'</div>';
    html+='</div></div>';
  });
  html+='</div>';
  el.innerHTML=html;
}

function renderCart(){
  const el=document.getElementById('cartContainer');
  if(!Object.keys(cart).length){
    el.innerHTML='<div class="empty"><p>Carrito vacío</p></div>';
    return;
  }
  let html='<div class="cart-item">Tu carrito</div>';
  el.innerHTML=html;
}

function renderTracking(){
  const el=document.getElementById('trackingContainer');
  el.innerHTML='<div class="empty"><p>No hay pedidos activos</p></div>';
}

function renderSoporte(){
  const el=document.getElementById('soporteContainer');
  el.innerHTML='<form onsubmit="return false;"><input type="text" placeholder="Tu mensaje"><button>Enviar</button></form>';
}

function renderPuntos(){
  const el=document.getElementById('puntosContainer');
  el.innerHTML='<div class="empty"><p>Sin puntos aún</p></div>';
}

// Inicialización
window.addEventListener('load',()=>{
  renderStore();
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(()=>{});
  }
});
