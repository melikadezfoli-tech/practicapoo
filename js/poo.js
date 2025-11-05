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

class Biblioteca {constructor(nombre,libro){
                        this.nombre=nombre;
                        this.libros = []; //Array para almacenar instancias de libros
                    }

                    agregarLibro=function(libro) {// Verificar si el libro ya existe por ISBN
                        const existe = this.buscarPorIsbn(libro.isbn);
                        if (existe) {
                            console.log(`El libro con ISBN ${libro.isbn} ya existe en la biblioteca.`);
                        } else {
                            this.libros.push(libro);
                            console.log(`"${libro.titulo}" añadido a la biblioteca.`);
                        }
                    }

                    buscarPorIsbn=function(isbn) {//buscar un libro por isbn
                        return this.libros.find(libro => libro.isbn === isbn);
                    }

                    prestarLibro=function(isbn) {
                        const libro = this.buscarPorIsbn(isbn);
                        if (libro) {
                            libro.prestar();
                        } else {
                            console.log(`Libro con ISBN ${isbn} no encontrado.`);
                        }
                    }

                    devolverLibro=function(isbn) {
                        const libro = this.buscarPorIsbn(isbn);
                        if (libro) {
                            libro.devolver();
                        } else {
                            console.log(`Libro con ISBN ${isbn} no encontrado.`);
                        }
                    }
   
                    mostrarLibros=function() {
                        
                        if (this.libros.length === 0) {
                            console.log("La biblioteca está vacía.");
                        } else {
                            this.libros.forEach(libro => {
                                console.log(`"${libro.titulo}" de ${libro.autor}, ISBN: ${libro.isbn}, Estado: ${libro.getEstado}`);
                            });
                        }
                        
                    }
                }

//EJEMPLOS

const biblio = new Biblioteca("Biblioteca Central");

// Crear instancias de libros
const libro1 = new Libro("1984", "George Orwell", "12345");
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", "67890");
const libro3 = new Libro("El Principito", "Antoine de Saint-Exupéry", "11122");

// Agregar libros a la biblioteca
biblio.agregarLibro(libro1);
biblio.agregarLibro(libro2);
biblio.agregarLibro(libro3);

// Mostrar el estado inicial de los libros
biblio.mostrarLibros();

// Prestar un libro
biblio.prestarLibro("12345");
biblio.prestarLibro("67890");
// Intentar prestar un libro que no existe
biblio.prestarLibro("99999"); 

// Mostrar el estado después de los préstamos
biblio.mostrarLibros();

// Devolver un libro
biblio.devolverLibro("12345");

// Mostrar el estado final
biblio.mostrarLibros();

