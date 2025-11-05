//PARTE 1: CLASE LIBRO

class Libro {constructor(titulo,autor,isbn){
                    this.titulo=titulo;
                    this.autor=autor;
                    this.isbn=isbn;
                    this._prestado=false;// Estado inicial: disponible
                    };                            

            /* Cambia el estado del libro a prestado.*/
               prestar=function(){
                    if (this._prestado) {
                    console.log(`El libro "${this.titulo}" ya está prestado.`);
                    } else {
                    this._prestado = true;
                    console.log(`"${this.titulo}" ha sido prestado.`);
                    }
                }

            /* Cambia el estado del libro a disponible. */
                devolver=function(){
                    if (!this._prestado) {
                    console.log(`El libro "${this.titulo}" ya está disponible.`);
                    } else {
                    this._prestado = false;
                    console.log(`"${this.titulo}" ha sido devuelto.`);
                    }
                }

                getEstado=function() {
                    return this._prestado ? "Prestado" : "Disponible";//Retorna el estado del libro
                    }   
};

//Se instancia el objeto de la clase
const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");

//Ejemplos a ejecutar
console.log(`Estado inicial: ${libro.getEstado()}`); // "Disponible"

libro.prestar();
console.log(`Estado después de prestar: ${libro.getEstado()}`); // "Prestado"

libro.devolver();
console.log(`Estado después de devolver: ${libro.getEstado()}`); // "Disponible"

// Intentar prestar de nuevo
libro.prestar(); 
console.log(`Estado final: ${libro.getEstado()}`); // "Prestado"

//PARTE 2: CLASE BIBLIOTECA

