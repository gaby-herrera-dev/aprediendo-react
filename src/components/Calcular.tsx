export const PI = 3.1416
export function Calcular (){
    return (
        <div className="Calculadora">
            <h1>Calcular</h1>


            <input type="number" placeholder="num1"/>
            <input type="number" placeholder="num2"/>
            <button>sumar</button>
            <p>Resultado es: 0 </p>
        </div>
    )
}