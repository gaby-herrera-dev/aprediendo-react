interface Myobj { nombre: string 
    edad: number
}


function Saludar({nombre, edad} : Myobj){
  return <h1>Hola soy {nombre} tengo {edad} años </h1>

}
export default Saludar