#  Casino Virtual Educativo

Proyecto semestral — **Ingeniería Web II**, Unidad Didáctica 1 (Sesiones 1 y 2)
Universidad Manuela Beltrán (UMB) — Periodo 2026-262

API REST para la gestión de un casino virtual educativo: **juegos, jugadores, partidas y puntuaciones**, desarrollada siguiendo el enfoque **API-first** con especificación **OpenAPI 3.0**.

---

##  Integrantes del grupo

| Nombre completo | Código |
|---|---|
| Natalia Sofia Larrañaga Gomez | 1123434594 |
| Jairo Andres Barrios Clavijo | 1123435470 |


---

##  Arquitectura

Arquitectura **cliente-servidor**: el backend (este repositorio) expone una API REST que procesa la lógica de negocio y responde en formato JSON. Implementado con **Node.js 22** y **Express**, aprovechando su modelo de E/S no bloqueante (bucle de eventos) para atender múltiples solicitudes simultáneas sin bloquear el hilo principal.

##  Recursos de la API

| Recurso | Descripción |
|---|---|
| `games` | Juegos disponibles en el casino (ruleta, blackjack, tragamonedas, etc.) |
| `players` | Jugadores registrados |
| `matches` | Partidas jugadas (relaciona un jugador con un juego) |
| `scores` | Puntuaciones / resultados obtenidos en cada partida |

Cada recurso expone operaciones CRUD completas (`GET`, `POST`, `PUT`, `DELETE`), documentadas formalmente en [`openapi.yaml`](./openapi.yaml).

##  Estructura del proyecto

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

##  Instalación y ejecución local

**Requisitos:** Node.js 22.x, npm, Git.

```bash
# 1. Clonar el repositorio
git clone https://github.com/nataliasolago-bit/casino-virtual-educativo.git
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

##  Middleware de logging

El proyecto incluye un middleware de logging (`src/middleware/logger.js`) que registra en consola el método HTTP, la ruta solicitada y el timestamp de cada request entrante. Fue generado y explicado con apoyo de **GitHub Copilot Chat**, siguiendo un proceso de revisión crítica del código sugerido (ver evaluación de Copilot en el informe de la actividad).

##  Documentación de la API (OpenAPI 3.0)

El contrato completo de la API está definido en [`openapi.yaml`](./openapi.yaml), con mínimo 5 endpoints CRUD sobre los 4 recursos. Puede validarse y visualizarse en [Swagger Editor](https://editor.swagger.io/) pegando el contenido del archivo.

Verbos HTTP utilizados según su función:

| Verbo | Uso |
|---|---|
| `GET` | Consultar recurso(s) |
| `POST` | Crear un nuevo recurso |
| `PUT` | Reemplazar un recurso existente |
| `DELETE` | Eliminar un recurso |

Códigos de estado: `2xx` éxito, `4xx` error del cliente, `5xx` error del servidor.
---

*Proyecto académico — Ingeniería Web II, UMB, 2026-262.*
