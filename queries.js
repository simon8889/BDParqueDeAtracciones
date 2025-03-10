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