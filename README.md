9# Base de Datos de Parque de Atracciones

Este proyecto crea una base de datos para un parque de atracciones inteligente, con colecciones para **atracciones**, **empleados** y **visitantes**. Se incluyen scripts para inicializar la base de datos, ejecutar consultas de ejemplo y eliminar la base de datos.

## Requisitos

- [MongoDB Shell (mongosh)](https://www.mongodb.com/try/download/shell)
- Node.js (opcional, si deseas modificar o ampliar los scripts)

## Archivos del Proyecto

- **initDB.js**: Crea e inserta datos de ejemplo en la base de datos.
- **queries.js**: Ejecuta y muestra consultas (CRUD, agregaciones y consultas complejas).
- **dropDB.js**: Elimina la base de datos.

## Uso

### 1. Crear la Base de Datos

Ejecuta el siguiente comando para inicializar la base de datos y crear las colecciones con datos de ejemplo:

```sh
mongosh ./initDB.js
```

### 2. Ejecutar las Consultas

Para ejecutar las consultas y ver los resultados en la consola, utiliza:

```sh
mongosh ./queries.js
```

### 3. Eliminar la Base de Datos

Si deseas eliminar la base de datos por completo, ejecuta:

```sh
mongosh ./dropDB.js
```

---

## Código de los Scripts

### initDB.js

```javascript
db = db.getSiblingDB("parque_atracciones");

db.atracciones.drop();
db.empleados.drop();
db.visitantes.drop();

db.atracciones.insertMany([
  {
    nombre: "Montaña Rusa",
    tipo: "Aventura",
    ubicacion: "Zona A",
    capacidad: 30,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 25 },
      { line_id: 2, estado: "Cerrada", numero_personas: 0 }
    ],
    horarios: ["09:00", "18:00"]
  },
  {
    nombre: "Casa del Terror",
    tipo: "Susto",
    ubicacion: "Zona B",
    capacidad: 20,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 15 },
      { line_id: 2, estado: "Abierta", numero_personas: 5 }
    ],
    horarios: ["10:00", "22:00"]
  },
  {
    nombre: "Rueda de la Fortuna",
    tipo: "Familiar",
    ubicacion: "Zona C",
    capacidad: 40,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 30 },
      { line_id: 2, estado: "Abierta", numero_personas: 10 }
    ],
    horarios: ["08:00", "20:00"]
  },
  {
    nombre: "Carrusel",
    tipo: "Familiar",
    ubicacion: "Zona D",
    capacidad: 25,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 20 },
      { line_id: 2, estado: "Cerrada", numero_personas: 0 }
    ],
    horarios: ["09:00", "17:00"]
  },
  {
    nombre: "Torre del Terror",
    tipo: "Susto",
    ubicacion: "Zona E",
    capacidad: 15,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 10 },
      { line_id: 2, estado: "Abierta", numero_personas: 5 }
    ],
    horarios: ["11:00", "23:00"]
  },
  {
    nombre: "Laberinto Encantado",
    tipo: "Aventura",
    ubicacion: "Zona F",
    capacidad: 20,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 15 },
      { line_id: 2, estado: "Cerrada", numero_personas: 0 }
    ],
    horarios: ["10:00", "20:00"]
  },
  {
    nombre: "Tren Fantasma",
    tipo: "Susto",
    ubicacion: "Zona G",
    capacidad: 35,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 28 },
      { line_id: 2, estado: "Abierta", numero_personas: 7 }
    ],
    horarios: ["10:00", "21:00"]
  },
  {
    nombre: "Aventura Acuática",
    tipo: "Acuática",
    ubicacion: "Zona H",
    capacidad: 50,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 45 },
      { line_id: 2, estado: "Mantenimiento", numero_personas: 0 }
    ],
    horarios: ["08:00", "19:00"]
  },
  {
    nombre: "Zona de Juegos",
    tipo: "Infantil",
    ubicacion: "Zona I",
    capacidad: 60,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 50 },
      { line_id: 2, estado: "Abierta", numero_personas: 10 }
    ],
    horarios: ["09:00", "20:00"]
  },
  {
    nombre: "Simulador de Vuelo",
    tipo: "Virtual",
    ubicacion: "Zona J",
    capacidad: 20,
    filas: [
      { line_id: 1, estado: "Abierta", numero_personas: 15 },
      { line_id: 2, estado: "Cerrada", numero_personas: 0 }
    ],
    horarios: ["10:00", "18:00"]
  }
]);

db.empleados.insertMany([
  { nombre: "Juan Perez", puesto: "Operador", seccion: "Atracciones", atraccion: "Montaña Rusa" },
  { nombre: "Ana Gómez", puesto: "Mantenimiento", seccion: "Atracciones", atraccion: "Casa del Terror" },
  { nombre: "Carlos Ramirez", puesto: "Operador", seccion: "Atracciones", atraccion: "Casa del Terror" },
  { nombre: "Luis Martinez", puesto: "Seguridad", seccion: "Seguridad", atraccion: "" },
  { nombre: "Elena García", puesto: "Operador", seccion: "Atracciones", atraccion: "Rueda de la Fortuna" },
  { nombre: "Marta Sanchez", puesto: "Mantenimiento", seccion: "Atracciones", atraccion: "Carrusel" },
  { nombre: "Pedro Lopez", puesto: "Operador", seccion: "Atracciones", atraccion: "Tren Fantasma" },
  { nombre: "Sofia Rodriguez", puesto: "Atención al Cliente", seccion: "Servicios", atraccion: "" },
  { nombre: "Diego Torres", puesto: "Operador", seccion: "Atracciones", atraccion: "Laberinto Encantado" },
  { nombre: "Lucia Fernandez", puesto: "Operador", seccion: "Atracciones", atraccion: "Simulador de Vuelo" },
  { nombre: "Andres Moreno", puesto: "Mantenimiento", seccion: "Atracciones", atraccion: "Aventura Acuática" },
  { nombre: "Valeria Rojas", puesto: "Operador", seccion: "Atracciones", atraccion: "Zona de Juegos" }
]);

db.visitantes.insertMany([
  {
    nombre: "María López",
    edad: 28,
    ticket: "VIP",
    historial_visitas: [
      { atraccion: "Montaña Rusa", fecha: new Date("2023-04-01T10:00:00Z"), duracion: 15 },
      { atraccion: "Casa del Terror", fecha: new Date("2023-04-01T11:00:00Z"), duracion: 10 }
    ]
  },
  {
    nombre: "Pedro Martínez",
    edad: 35,
    ticket: "General",
    historial_visitas: [
      { atraccion: "Montaña Rusa", fecha: new Date("2023-04-02T12:00:00Z"), duracion: 20 }
    ]
  },
  {
    nombre: "Laura Jimenez",
    edad: 22,
    ticket: "General",
    historial_visitas: [
      { atraccion: "Carrusel", fecha: new Date("2023-04-03T09:00:00Z"), duracion: 10 },
      { atraccion: "Rueda de la Fortuna", fecha: new Date("2023-04-03T10:00:00Z"), duracion: 15 }
    ]
  },
  {
    nombre: "Carlos Díaz",
    edad: 40,
    ticket: "VIP",
    historial_visitas: [
      { atraccion: "Torre del Terror", fecha: new Date("2023-04-04T11:00:00Z"), duracion: 12 }
    ]
  },
  {
    nombre: "Sofía Mendoza",
    edad: 30,
    ticket: "General",
    historial_visitas: [
      { atraccion: "Tren Fantasma", fecha: new Date("2023-04-05T12:00:00Z"), duracion: 18 }
    ]
  },
  {
    nombre: "Andrés Gutiérrez",
    edad: 27,
    ticket: "VIP",
    historial_visitas: [
      { atraccion: "Aventura Acuática", fecha: new Date("2023-04-06T13:00:00Z"), duracion: 20 }
    ]
  },
  {
    nombre: "Camila Rivas",
    edad: 33,
    ticket: "General",
    historial_visitas: [
      { atraccion: "Laberinto Encantado", fecha: new Date("2023-04-07T14:00:00Z"), duracion: 15 }
    ]
  },
  {
    nombre: "Esteban Cortes",
    edad: 29,
    ticket: "VIP",
    historial_visitas: [
      { atraccion: "Simulador de Vuelo", fecha: new Date("2023-04-08T15:00:00Z"), duracion: 10 }
    ]
  },
  {
    nombre: "Gabriela Soto",
    edad: 24,
    ticket: "General",
    historial_visitas: [
      { atraccion: "Zona de Juegos", fecha: new Date("2023-04-09T16:00:00Z"), duracion: 20 }
    ]
  },
  {
    nombre: "Fernando Aguilar",
    edad: 31,
    ticket: "General",
    historial_visitas: [
      { atraccion: "Montaña Rusa", fecha: new Date("2023-04-10T17:00:00Z"), duracion: 15 }
    ]
  }
]);

db.atracciones.createIndex({ nombre: 1 });
db.empleados.createIndex({ puesto: 1, seccion: 1 });

print("Base de datos 'parque_atracciones' inicializada exitosamente.");
```

### queries.js

```javascript
db = db.getSiblingDB("parque_atracciones");

print("Query 1: Buscar atracción 'Montaña Rusa'");
const query1 = db.atracciones.find({ nombre: "Montaña Rusa" }).toArray();
printjson(query1);
print("--------------------------------------------------");

print("Query 2: Actualizar estado de la fila (line_id 1) en 'Montaña Rusa' a 'Mantenimiento'");
const query2 = db.atracciones.updateOne(
  { nombre: "Montaña Rusa", "filas.line_id": 1 },
  { $set: { "filas.$.estado": "Mantenimiento" } }
);
printjson(query2);
print("--------------------------------------------------");

print("Query 3: Eliminar visitante 'Pedro Martínez'");
const query3 = db.visitantes.deleteOne({ nombre: "Pedro Martínez" });
printjson(query3);
print("--------------------------------------------------");

print("Query 4: Agregación: Agrupar atracciones por tipo y contar total");
const query4 = db.atracciones.aggregate([
  { $group: { _id: "$tipo", total: { $sum: 1 } } }
]).toArray();
printjson(query4);
print("--------------------------------------------------");

print("Query 5: Buscar empleados que sean Operadores en Atracciones o de Mantenimiento en 'Casa del Terror'");
const query5 = db.empleados.find({
  $or: [
    { $and: [ { puesto: "Operador" }, { atraccion: "Casa del Terror" } ] },
    { $and: [ { puesto: "Mantenimiento" }, { atraccion: "Casa del Terror" } ] }
  ]
}).toArray();
printjson(query5);
print("--------------------------------------------------");
```

### dropDB.js

```javascript
db = db.getSiblingDB("parque_atracciones");

print("Eliminando la base de datos 'parque_atracciones'...");
db.dropDatabase();
print("Base de datos eliminada exitosamente.");
```
