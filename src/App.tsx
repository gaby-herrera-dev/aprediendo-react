
import { useState } from "react"

function App() {
  const [contador, setContador  ] = useState<number>(0)

  function click(){
    console.log("contador", contador)
    setContador(contador + 1)

  }
  return (
    <>
    <h2>contador</h2>
    <button onClick={click}> suma 1</button>
   <br/>
   <h1>
    {contador}
   </h1>
    </>
  )
}



export default App
