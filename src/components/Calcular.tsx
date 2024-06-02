import { useState } from 'react';

export const PI = 3.1416;

export function Calcular() {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [resultado, setResultado] = useState<number>(0);

    function handleSumar(){
        const suma = num1 + num2;
        setResultado(suma);
    }
    
    return (
        <div className="calculador">
            <h1>Calcular</h1>

            <input
                type="number"
                placeholder="num 1"
                value={num1} 
                onChange={(e) => setNum1(Number(e.target.value))}
            />

            <input 
                type="number" 
                placeholder="num 2" 
                value={num2} 
                onChange={(e) => setNum2(Number(e.target.value))} 
            />

            <button onClick={handleSumar}>Sumar</button>
            <p>Resultado es: {resultado}</p>
        </div>
    );
}