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

}

function getById(id: number) {
}

export {
  getAll,
  getById
}