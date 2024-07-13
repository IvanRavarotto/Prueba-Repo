// Definimos el tipo de los objetos que estarán en la colección
// interface Cosas {
//   id: number;
//   name: string;
//   description: string;
// }

// Creamos el módulo cosas
const cosas = {
  // Creamos la colección de objetos
  collection: [
    { id: 1, name: "Objeto 1", description: "Descripción del objeto 1" },
    { id: 2, name: "Objeto 2", description: "Descripción del objeto 2" },
    { id: 3, name: "Objeto 3", description: "Descripción del objeto 3" },
  ],
};

function getAll() {
  return cosas.collection
}

function getById(id: number) {
  for (let i = 0; i < cosas.collection.length; i++) {
    if (cosas.collection[i].id == id) {
      return cosas.collection[i];
    }
  }
}

export {
  getAll,
  getById
}