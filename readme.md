# Workout Tracker API

API RESTful desarrollada con Node.js y Express para gestionar usuarios, rutinas de entrenamiento, ejercicios y registros de progreso.

## Tecnologías utilizadas

* Node.js
* Express
* MySQL2
* dotenv
* Nodemon

## Instalación

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm start
```

Para desarrollo:

```bash
npm run dev
```

El servidor funciona en:

```text
http://localhost:3000
```

---

# Recursos de la API

## Users

Permite gestionar los usuarios registrados.

| Método | Endpoint     | Descripción                |
| ------ | ------------ | -------------------------- |
| GET    | `/users`     | Obtener todos los usuarios |
| GET    | `/users/:id` | Obtener un usuario por ID  |
| POST   | `/users`     | Crear un usuario           |
| PUT    | `/users/:id` | Actualizar todos los datos |
| PATCH  | `/users/:id` | Actualizar parcialmente    |
| DELETE | `/users/:id` | Eliminar un usuario        |

---

## Workouts

Permite gestionar las rutinas de entrenamiento.

| Método | Endpoint        | Descripción               |
| ------ | --------------- | ------------------------- |
| GET    | `/workouts`     | Obtener todas las rutinas |
| GET    | `/workouts/:id` | Obtener una rutina por ID |
| POST   | `/workouts`     | Crear una rutina          |
| PUT    | `/workouts/:id` | Actualizar una rutina     |
| PATCH  | `/workouts/:id` | Actualizar parcialmente   |
| DELETE | `/workouts/:id` | Eliminar una rutina       |

También permite filtrar y limitar resultados:

```text
GET /workouts?limit=10
```

```text
GET /workouts?name=pecho
```

---

## Exercises

Permite gestionar los ejercicios.

| Método | Endpoint         | Descripción                  |
| ------ | ---------------- | ---------------------------- |
| GET    | `/exercises`     | Obtener todos los ejercicios |
| GET    | `/exercises/:id` | Obtener un ejercicio por ID  |
| POST   | `/exercises`     | Crear un ejercicio           |
| PUT    | `/exercises/:id` | Actualizar un ejercicio      |
| PATCH  | `/exercises/:id` | Actualizar parcialmente      |
| DELETE | `/exercises/:id` | Eliminar un ejercicio        |

---

## Progress

Permite registrar y consultar el progreso de los usuarios.

| Método | Endpoint        | Descripción                 |
| ------ | --------------- | --------------------------- |
| GET    | `/progress`     | Obtener todos los registros |
| GET    | `/progress/:id` | Obtener un registro por ID  |
| POST   | `/progress`     | Crear un registro           |
| PUT    | `/progress/:id` | Actualizar todos los datos  |
| PATCH  | `/progress/:id` | Actualizar parcialmente     |
| DELETE | `/progress/:id` | Eliminar un registro        |

---

# Ejemplos de solicitudes

## GET

Obtener todos los usuarios:

```http
GET http://localhost:3000/users
```

Resultado:

```json
[
  {
    "id": 1,
    "name": "Miguel",
    "email": "miguel@email.com"
  },
  {
    "id": 2,
    "name": "Carlos",
    "email": "carlos@email.com"
  }
]
```

---

## POST

Crear un usuario:

```http
POST http://localhost:3000/users
```

Body:

```json
{
  "name": "Ana",
  "email": "ana@email.com"
}
```

Resultado:

```json
{
  "mensaje": "Usuario creado correctamente",
  "user": {
    "id": 3,
    "name": "Ana",
    "email": "ana@email.com"
  }
}
```

Código de respuesta:

```text
201 Created
```

---

## PUT

Actualizar completamente un usuario:

```http
PUT http://localhost:3000/users/1
```

Body:

```json
{
  "name": "Miguel Actualizado",
  "email": "miguel.nuevo@email.com"
}
```

Resultado:

```json
{
  "mensaje": "Usuario actualizado correctamente",
  "user": {
    "id": 1,
    "name": "Miguel Actualizado",
    "email": "miguel.nuevo@email.com"
  }
}
```

Código de respuesta:

```text
200 OK
```

---

## PATCH

Actualizar parcialmente un usuario:

```http
PATCH http://localhost:3000/users/1
```

Body:

```json
{
  "name": "Miguel"
}
```

Resultado:

```json
{
  "mensaje": "Usuario actualizado correctamente",
  "user": {
    "id": 1,
    "name": "Miguel",
    "email": "miguel.nuevo@email.com"
  }
}
```

Código de respuesta:

```text
200 OK
```

---

## DELETE

Eliminar un usuario:

```http
DELETE http://localhost:3000/users/2
```

Resultado:

```text
204 No Content
```

El código `204` indica que el recurso fue eliminado correctamente y no se devuelve contenido en la respuesta.

---

# Códigos de respuesta HTTP

| Código | Significado                                    |
| ------ | ---------------------------------------------- |
| 200    | Solicitud procesada correctamente              |
| 201    | Recurso creado correctamente                   |
| 204    | Solicitud procesada sin contenido de respuesta |
| 400    | Solicitud incorrecta o datos inválidos         |
| 404    | Recurso no encontrado                          |
| 500    | Error interno del servidor                     |

---

# Manejo de errores

La API devuelve respuestas JSON cuando ocurre un error.

Ejemplo:

```json
{
  "error": "Usuario no encontrado"
}
```

Para probar un error interno:

```http
GET http://localhost:3000/error
```

Respuesta:

```json
{
  "error": "Error interno del servidor"
}
```

Código:

```text
500 Internal Server Error
```

---

# Headers HTTP

La API utiliza headers HTTP para recibir y enviar información.

Ejemplo:

```text
Content-Type: application/json
Authorization: Bearer 123456
```

También se envía un header personalizado:

```text
X-API-Key: workout-tracker-api
```

---


## Funcionamiento

La aplicación utiliza Express para recibir las solicitudes HTTP y dirigirlas a las rutas correspondientes.

Las rutas `/users`, `/workouts`, `/exercises` y `/progress` utilizan controladores separados para manejar la lógica de cada recurso.

Los datos actualmente se manejan en memoria mediante arreglos dentro de los controladores. Por esta razón, los datos vuelven a su estado inicial cuando se reinicia el servidor.
