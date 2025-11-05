let calificaciones = { nombre: 'juan', 
                        ingles:5, 
                        programacion: 8, 
                        html: 7,
                        init: function (i,p,h){
                            this.ingles=i;
                            this.programacion=p;
                            this.html=h},
                        sumCalif: function(){return this.ingles+this.programacion+this.html},
                        mediaCalif: function(){return this.sumCalif()/3},
                    };

/*calificaciones.init(9,8,7);
console.log(calificaciones);*/

console.log(`El alumno ${calificaciones.nombre} ha obtenido una nota de media de ${calificaciones.mediaCalif()}`);

let producto = {
                precio: 400,
                descuento: 10,
                initProducto: function (pr,de){
                    this.precio=pr;
                    this.descuento=de},
                neto: function(){return this.precio-(this.precio*this.descuento/100)}
};
console.log (producto.neto());

class piedra {constructor(m,v){
                    this.masa=m;
                    this.volumen=v;
                }
                densidad=function(m,v){return this.masa/this.volumen}
            }

let oro = new piedra (194,10);
console.log(oro.densidad());

cuentaEfectivo = function(ntit,sa){
                        this.nombreTitular=ntit;
                        this.saldo=sa;
                        this.ingresar=function(cantidad){
                            this.saldo +=cantidad
                        }
                        this.retirar=function(cantidad){
                        if (cantidad<=this.saldo){
                            this.saldo -=cantidad
                            }
                        }
                    }
let cuenta = new cuentaEfectivo ('Pedro',20);
console.log(cuenta);
cuenta.ingresar (1000);
console.log(`Acaba de ingresar y ahora el saldo de su cuenta es ${cuenta.saldo}`);
cuenta.retirar (100);
console.log (`Acaba de retirar  y ahora el saldo de su cuenta es ${cuenta.saldo}`);

class ficha {constructor (nom){
                this.nombre='nom';
                this.sesiones=[];
                this.numsesions=0;
            }
            anotar=function(km){
                this.sesiones[this.numsesions]=km;
                this.numsesions++;
            }
            media=function(){
                let media=0;
            
for(let i=0;i<this.sesiones.length;i++){
        media+=this.sesiones[i];
        }
    return media/this.numsesions
            } 
}

let fichaJuan = new ficha('Juan');
fichaJuan.anotar(8);
fichaJuan.anotar(10);
fichaJuan.anotar(6);
console.log(fichaJuan.media());

class Bus {constructor(conductor, cap){
            this.capacidad=cap;
            this.pasajeros=0;
            this.conductor=conductor;
            }   
             subir=function(num){
                if (this.pasajeros+num < this.capacidad){
                    this.pasajeros+=num;
                }
                else{
                    this.pasajeros = this.capacidad
                }
            }
            bajar=function(num){
                if (num<=this.pasajeros){
                    this.pasajeros -=num;
                }
                else{
                    this.pasajeros = 0;
                }
            }
             
        }

class Conductor{ constructor(nomconductor,licencia){
                    this.nomcondu=nomconductor;
                    this.lic=licencia;
}
}

let cond1=new Conductor ("José",1234);
let linea1=new Bus (cond1,40);
console.log(`El autobús de la línea 1 puede llevar ${linea1.pasajeros} y su conductor se llama ${cond1.nomcondu}`)
linea1.subir(25);
console.log(linea1.pasajeros);
linea1.subir(35);
console.log(linea1.pasajeros);
linea1.bajar(40);
console.log(linea1.pasajeros);
linea1.subir(35);
linea1.bajar(40);
console.log(linea1.pasajeros);

