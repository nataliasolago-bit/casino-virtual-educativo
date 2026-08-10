# 🎰 Casino Virtual Educativo

Proyecto semestral — **Ingeniería Web II**, Unidad Didáctica 1 (Sesiones 1 y 2)
Universidad Manuela Beltrán (UMB) — Periodo 2026-262

API REST para la gestión de un casino virtual educativo: **juegos, jugadores, partidas y puntuaciones**, desarrollada siguiendo el enfoque **API-first** con especificación **OpenAPI 3.0**.

---

## 👥 Integrantes del grupo

| Nombre completo | Código |
|---|---|
| [Nombre completo integrante 1] | [Código] |
| [Nombre completo integrante 2] | [Código] |
| [Nombre completo integrante 3] | [Código] |

---

## 🧱 Arquitectura

Arquitectura **cliente-servidor**: el backend (este repositorio) expone una API REST que procesa la lógica de negocio y responde en formato JSON. Implementado con **Node.js 22** y **Express**, aprovechando su modelo de E/S no bloqueante (bucle de eventos) para atender múltiples solicitudes simultáneas sin bloquear el hilo principal.

## 📦 Recursos de la API

| Recurso | Descripción |
|---|---|
| `games` | Juegos disponibles en el casino (ruleta, blackjack, tragamonedas, etc.) |
| `players` | Jugadores registrados |
| `matches` | Partidas jugadas (relaciona un jugador con un juego) |
| `scores` | Puntuaciones / resultados obtenidos en cada partida |

Cada recurso expone operaciones CRUD completas (`GET`, `POST`, `PUT`, `DELETE`), documentadas formalmente en [`openapi.yaml`](./openapi.yaml).

## 📁 Estructura del proyecto

```
casino-virtual-educativo/
│
├── src/
│   ├── routes/          # Definición de rutas por recurso (games, players, matches, scores)
│   ├── controllers/     # Lógica de cada endpoint
│   ├── middleware/       # logger.js y otros middlewares
│   ├── data/             # Almacenamiento en memoria (arrays), sin base de datos real
│   └── app.js            # Configuración de Express y montaje de rutas
│
├── openapi.yaml           # Contrato OpenAPI 3.0
├── README.md
├── package.json
├── .gitignore
└── server.js              # Punto de entrada, arranca el servidor
```

## 🚀 Instalación y ejecución local

**Requisitos:** Node.js 22.x, npm, Git.

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd casino-virtual-educativo

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor
node server.js
# o, si se configuró en package.json:
npm start
```

El servidor queda disponible en:

```
http://localhost:3000
```

### Endpoint de prueba (Hello API)

```
GET http://localhost:3000/api/hello
```

Respuesta esperada:

```json
{ "message": "Hello API - Casino Virtual Educativo" }
```

## 🧩 Middleware de logging

El proyecto incluye un middleware de logging (`src/middleware/logger.js`) que registra en consola el método HTTP, la ruta solicitada y el timestamp de cada request entrante. Fue generado y explicado con apoyo de **GitHub Copilot Chat**, siguiendo un proceso de revisión crítica del código sugerido (ver evaluación de Copilot en el informe de la actividad).

## 📄 Documentación de la API (OpenAPI 3.0)

El contrato completo de la API está definido en [`openapi.yaml`](./openapi.yaml), con mínimo 5 endpoints CRUD sobre los 4 recursos. Puede validarse y visualizarse en [Swagger Editor](https://editor.swagger.io/) pegando el contenido del archivo.

Verbos HTTP utilizados según su función:

| Verbo | Uso |
|---|---|
| `GET` | Consultar recurso(s) |
| `POST` | Crear un nuevo recurso |
| `PUT` | Reemplazar un recurso existente |
| `DELETE` | Eliminar un recurso |

Códigos de estado: `2xx` éxito, `4xx` error del cliente, `5xx` error del servidor.

## 🤖 Uso de GitHub Copilot

Se usó GitHub Copilot (licencia Education Pack) como asistente de codificación durante la configuración del esqueleto y el diseño del contrato OpenAPI. Todo el código sugerido fue revisado críticamente antes de aceptarse, en cumplimiento del **ACM Code of Ethics 2023** y las consideraciones éticas de uso responsable de IA generativa de la guía de actividad.

## 📚 Referencias (APA 7)

- Brown, E. (2023). *Web Development with Node and Express* (3.ª ed.), Cap. 1. O'Reilly.
- Fielding, R., & Reschke, J. (2022). *HTTP Semantics*, RFC 9110, secciones 1-3. IETF. https://www.rfc-editor.org/rfc/rfc9110
- Traversy Media. (2024). *Node.js Crash Course* [Video]. YouTube. https://youtu.be/fBNz5xF-Kx4
- freeCodeCamp. (2024). *REST API Design Best Practices* [Video]. YouTube. https://youtu.be/fFEgSU2IWH0

## 🎥 Video de trabajo autónomo

Enlace al video (1-3 min, en inglés), publicado en el foro del LMS institucional: [enlace pendiente]

---

*Proyecto académico — Ingeniería Web II, UMB, 2026-262.*
