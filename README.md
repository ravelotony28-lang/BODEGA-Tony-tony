# 🏪 Bodega Tony Tony

**Una aplicación web moderna para gestión de tienda online - Mini Market con entregas a domicilio**

![Estado](https://img.shields.io/badge/Estado-Activo-brightgreen)
![Versión](https://img.shields.io/badge/Versión-2.0-blue)
![Licencia](https://img.shields.io/badge/Licencia-MIT-green)

---

## 📱 Características Principales

✅ **Catálogo de Productos** - Búsqueda, filtros por categoría, variantes dinámicas  
✅ **Carrito de Compras** - Interfaz fluida, actualización en tiempo real  
✅ **Múltiples Métodos de Pago** - Efectivo, Pago Móvil, Transferencia  
✅ **Entregas a Domicilio** - Zonas de cobertura configurables  
✅ **Panel Admin Completo** - Gestión de productos, pedidos, cupones, analytics  
✅ **Chat en Tiempo Real** - Comunicación cliente-admin con Firebase  
✅ **Sistema de Puntos** - Recompensas para clientes frecuentes  
✅ **Progressive Web App (PWA)** - Funciona offline con Service Worker  
✅ **Diseño Responsive** - Optimizado para todos los dispositivos  
✅ **Notificaciones Push** - Alertas para nuevos pedidos (admin)

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura semántica y PWA |
| **CSS3** | Diseño responsive y animaciones fluidas |
| **JavaScript Vanilla** | Lógica de aplicación sin dependencias pesadas |
| **Firebase** | Base de datos (Firestore) y autenticación |
| **Chart.js** | Gráficos de analytics en admin |
| **Service Worker** | Caché offline y mejora de rendimiento |

---

## 📂 Estructura del Proyecto

```
Bodega-Tony-tony/
├── index.html          # Página principal (cliente)
├── admin.html          # Panel de administración
├── sw.js               # Service Worker para PWA
├── manifest.json       # Configuración PWA
├── logo.png            # Logo de la aplicación
├── politica.html       # Política de privacidad
├── terminos.html       # Términos de servicio
└── README.md           # Este archivo
```

---

## 🚀 Instalación y Uso

### Para Clientes:
1. **Acceder a la tienda**: [Bodega Tony Tony](https://ravelotony28-lang.github.io/BODEGA-Tony-tony/)
2. **Registrarse o iniciar sesión**
3. **Explorar productos** por categoría
4. **Agregar al carrito** y proceder al pago
5. **Realizar pedido** e indicar dirección de entrega

### Para Administradores:
1. **Acceder a**: `/admin.html`
2. **Ingresar PIN**: `300419` (configurable en Firestore)
3. **Gestionar**:
   - 📦 Productos (crear, editar, eliminar)
   - 📋 Pedidos (actualizar estados)
   - 💳 Métodos de pago
   - 🗺️ Zonas de entrega
   - 💬 Chat con clientes
   - 📊 Analytics en tiempo real

---

## ⚙️ Configuración Inicial

### Firebase Setup
La aplicación usa Firebase Firestore. Los datos están organizados así:

```
firestore/
├── config/
│   ├── tienda (whatsapp, metodos, horarios)
│   └── seguridad (adminPin)
├── productos (catálogo)
├── pedidos (historial)
├── chats (mensajes cliente-admin)
├── clientes (usuarios registrados)
├── cupones (códigos de descuento)
├── resenas (opiniones)
├── repartidores (lista de delivery)
└── zonas (áreas de cobertura)
```

**Cambiar PIN Admin:**
1. Ve a Firestore Console
2. Navega a `config` → `seguridad`
3. Edita el campo `adminPin`

---

## 📊 Panel Admin

### Pestañas Disponibles:

| Pestaña | Función |
|---------|----------|
| 📊 **Dashboard** | Estadísticas en tiempo real (ventas, pedidos, gráficos) |
| 📦 **Productos** | Agregar, editar, eliminar productos con variantes |
| 📋 **Pedidos** | Gestionar estados (pendiente → entregado) |
| 💬 **Chat** | Comunicación con clientes |
| 🛵 **Repartidores** | Registrar personal de delivery |
| 🗺️ **Zonas** | Crear áreas de cobertura con costos |
| 🎟️ **Cupones** | Códigos de descuento (% o $ fijo) |
| ⭐ **Reseñas** | Ver opiniones de clientes |
| 📞 **Soporte** | Reportes y problemas reportados |
| ⚙️ **Config** | Configuración de la tienda |

---

## 🔒 Seguridad

✅ Validación XSS (función `escapeHtml()`)  
✅ Protección de datos con PIN de admin  
✅ Variables de entorno en Firestore (no hardcodeadas)  
✅ Reglas de seguridad en Firestore Rules  
✅ HTTPS requerido en producción  

---

## 📱 PWA (Aplicación Web Progresiva)

La app puede instalarse en dispositivos:

1. **En Chrome/Edge**: Menú → "Instalar Bodega Tony Tony"
2. **En iOS**: Safari → Compartir → Añadir a pantalla de inicio
3. **Funciona Offline**: El Service Worker cachea recursos principales

---

## 🎨 Personalización

### Cambiar Colores (en HTML):
Busca la sección `:root` en el `<style>` y modifica:
```css
:root{
  --rojo:#e63946;           /* Color principal */
  --amarillo:#f4d35e;       /* Acentos */
  --verde:#2dc653;          /* Verde (chat, confirmación) */
  --oscuro:#1a1a2e;         /* Fondo oscuro */
  --bg:#f7f7f7;             /* Fondo claro */
}
```

### Cambiar Nombre y Logo:
1. Reemplaza `logo.png` (512x512px mínimo)
2. Actualiza en `manifest.json`
3. Busca "Bodega Tony Tony" en ambos HTML

---

## 📞 Soporte y Contacto

- **WhatsApp**: Configurable en Admin → Config
- **Email**: ravelotony.28@gmail.com
- **Issues**: [Reportar problema](../../issues)

---

## 📄 Licencia

Este proyecto está bajo licencia **MIT** - Libre para usar, modificar y distribuir.

---

## 🤝 Contribuciones

¿Encontraste un bug? ¿Tienes una mejora?
1. Abre un [Issue](../../issues)
2. Crea un [Pull Request](../../pulls)

---

## 📈 Roadmap Futuro

- [ ] App móvil nativa (React Native)
- [ ] Sistema de lealtad mejorado
- [ ] Integración con pasarelas de pago
- [ ] Multi-idioma
- [ ] Análisis de comportamiento de clientes
- [ ] Automatización de marketing

---

**Hecho con ❤️ por Tony Ravelo**  
*Última actualización: Junio 2026*