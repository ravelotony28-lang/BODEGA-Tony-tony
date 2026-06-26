importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBdv2cOMgbeBuW-V9Buz8EzGAoElnvySoI",
  authDomain: "bodegatonytony.firebaseapp.com",
  projectId: "bodegatonytony",
  storageBucket: "bodegatonytony.firebasestorage.app",
  messagingSenderId: "763208241886",
  appId: "1:763208241886:web:dd4a04d68c2c72ed24a84f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || '🛒 Nuevo pedido';
  const options = {
    body: payload.notification?.body || 'Un cliente realizó un pedido',
    icon: '/BODEGA-Tony-tony/logo.png',
    badge: '/BODEGA-Tony-tony/logo.png',
    vibrate: [200, 100, 200],
    data: { url: '/admin.html?tab=pedidos' },
    actions: [{ action: 'ver', title: '📋 Ver pedido' }]
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'ver') {
    event.waitUntil(clients.openWindow('/admin.html?tab=pedidos'));
  } else {
    event.waitUntil(clients.openWindow('/admin.html'));
  }
});
