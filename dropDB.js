db = db.getSiblingDB("parque_atracciones");

print("Eliminando la base de datos 'parque_atracciones'...");
db.dropDatabase();
print("Base de datos eliminada exitosamente.");