# Changelog - Bodega Tony Tony

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [2.0.0] - 2026-06-14

### ✨ Agregado
- 📄 **README.md** - Documentación completa del proyecto
- 🔧 **.gitignore** - Control de versiones mejorado
- 📱 **PWA Mejorada** - Service Worker v2.0 con caché más robusto
- 🔐 **XSS Prevention** - Función `escapeHtml()` en admin.html
- 📊 **Analytics** - Gráficos de ventas y pedidos en dashboard
- 🔔 **Notificaciones Push** - Alertas para nuevos pedidos (admin)
- 💬 **Chat en Tiempo Real** - Comunicación cliente-admin
- 🎟️ **Sistema de Cupones** - Códigos de descuento dinámicos
- ⭐ **Reseñas** - Sistema de opiniones de clientes
- 📱 **Pago Móvil Integrado** - Soporte para pagos móviles
- 🛵 **Gestión de Repartidores** - Control de equipo de entrega
- 🗺️ **Zonas de Cobertura** - Áreas de entrega configurables

### 🔧 Mejorado
- Optimización de Service Worker (network-first strategy)
- Manifest.json con soporte PWA completo
- Mejor manejo de errores en caché offline
- Validación XSS en formularios admin
- Animaciones más fluidas en productos
- Interfaz responsive mejorada

### 🐛 Corregido
- Función `escapeHtml()` faltante en admin.html
- Atributos HTML truncados completados
- Validación de datos en formularios
- Manejo de eventos en Service Worker

### 📚 Documentación
- README.md con guía completa
- CHANGELOG.md (este archivo)
- Comentarios en código mejorados
- Instrucciones de instalación

---

## [1.0.0] - 2026-05-25

### ✨ Inicial
- 🛒 Tienda online funcional
- 📦 Catálogo de productos
- 🛵 Entregas a domicilio
- 💳 Métodos de pago múltiples
- ⚙️ Panel admin básico
- 🏪 PWA para instalar en dispositivos

---

## Convenciones de Commit

- ✨ **feat**: Nueva característica
- 🔧 **refactor**: Cambio sin nueva funcionalidad
- 🐛 **fix**: Corrección de bugs
- 📚 **docs**: Cambios en documentación
- 🎨 **style**: Cambios de estilos
- ⚡ **perf**: Mejoras de rendimiento
- 🔒 **security**: Mejoras de seguridad
- 📱 **mobile**: Cambios para móvil
- 🚀 **deploy**: Cambios para producción

---

**Última actualización**: Junio 14, 2026