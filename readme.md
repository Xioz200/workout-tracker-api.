# Workout Tracker API

## Descripción

**Workout Tracker API** es una API REST desarrollada con **Node.js y Express** para gestionar usuarios, rutinas de entrenamiento y ejercicios.

El proyecto permite realizar operaciones para consultar, crear, actualizar y eliminar información utilizando los métodos HTTP **GET, POST, PUT, PATCH y DELETE**.

La API está organizada mediante diferentes routers para cada recurso:

* **Users:** gestión de usuarios.
* **Workouts:** gestión de rutinas de entrenamiento.
* **Exercises:** gestión de ejercicios.

Los datos enviados por el cliente se reciben mediante `req.body`, los identificadores mediante `req.params` y los filtros mediante `req.query`.

La API también utiliza códigos de estado HTTP para indicar el resultado de cada solicitud.

---

## Endpoints

### Users

| Método | Endpoint     | Función                             |
| ------ | ------------ | ----------------------------------- |
| GET    | `/users`     | Obtener todos los usuarios          |
| GET    | `/users/:id` | Obtener un usuario por ID           |
| POST   | `/users`     | Crear un usuario                    |
| PUT    | `/users/:id` | Actualizar completamente un usuario |
| PATCH  | `/users/:id` | Actualizar parcialmente un usuario  |
| DELETE | `/users/:id` | Eliminar un usuario                 |

### Workouts

| Método | Endpoint               | Función                         |
| ------ | ---------------------- | ------------------------------- |
| GET    | `/workouts`            | Obtener todos los workouts      |
| GET    | `/workouts/:id`        | Obtener un workout por ID       |
| GET    | `/workouts?limit=10`   | Limitar la cantidad de workouts |
| GET    | `/workouts?name=pecho` | Buscar workouts por nombre      |
| POST   | `/workouts`            | Crear un workout                |
| DELETE | `/workouts/:id`        | Eliminar un workout             |

### Exercises

| Método | Endpoint         | Función                      |
| ------ | ---------------- | ---------------------------- |
| GET    | `/exercises`     | Obtener todos los ejercicios |
| GET    | `/exercises/:id` | Obtener un ejercicio por ID  |
| POST   | `/exercises`     | Crear un ejercicio           |

### Otros

| Método | Endpoint | Función                               |
| ------ | -------- | ------------------------------------- |
| GET    | `/`      | Comprobar que la API está funcionando |
| GET    | `/error` | Probar el manejo de errores internos  |

---

## Ejemplos de solicitudes

### GET

**Comando en Thunder Client:**

```http
GET http://localhost:3000/users
```

**Resultado:**

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

**Estado:** `200 OK`

---

### POST

**Comando en Thunder Client:**

```http
POST http://localhost:3000/users
```

**Body:**

```json
{
  "name": "Juan",
  "email": "juan@email.com"
}
```

**Resultado:**

```json
{
  "mensaje": "Usuario creado correctamente",
  "user": {
    "id": 3,
    "name": "Juan",
    "email": "juan@email.com"
  }
}
```

**Estado:** `201 Created`

---

### PUT

**Comando en Thunder Client:**

```http
PUT http://localhost:3000/users/1
```

**Body:**

```json
{
  "name": "Miguel Angel",
  "email": "miguelangel@email.com"
}
```

**Resultado:**

```json
{
  "mensaje": "Usuario actualizado correctamente",
  "user": {
    "id": 1,
    "name": "Miguel Angel",
    "email": "miguelangel@email.com"
  }
}
```

**Estado:** `200 OK`

---

### PATCH

**Comando en Thunder Client:**

```http
PATCH http://localhost:3000/users/1
```

**Body:**

```json
{
  "name": "Miguel"
}
```

**Resultado:**

```json
{
  "mensaje": "Usuario actualizado correctamente",
  "user": {
    "id": 1,
    "name": "Miguel",
    "email": "miguelangel@email.com"
  }
}
```

**Estado:** `200 OK`

---

### DELETE

**Comando en Thunder Client:**

```http
DELETE http://localhost:3000/users/1
```

**Resultado:**

```text
204 No Content
```

**Estado:** `204 No Content`

---

## Funcionamiento

El cliente realiza una solicitud HTTP a uno de los endpoints. **Express** recibe la solicitud, identifica el router correspondiente, procesa los datos y devuelve una respuesta con información y un código de estado HTTP.

La API utiliza:

* `req.params` para obtener parámetros de la URL.
* `req.query` para recibir filtros y parámetros de consulta.
* `req.body` para recibir información enviada en POST, PUT y PATCH.
* Códigos HTTP como `200`, `201`, `204`, `400`, `404` y `500` para indicar el resultado de las operaciones.
