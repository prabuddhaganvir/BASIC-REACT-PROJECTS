import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
  
    <div className="w-full h-screen flex justify-center items-center"
    style ={{backgroundColor:color}}
    
    >
      <div className="fixed flex flex-wrap
      justify-center inset-x-1 px-2">
        <div className="flex justify-center items-center
        gap-3 shadow-lg bg-[#efec34] px-40 py-20  rounded-3xl">
   
   <button onClick={()=>setColor("red")} className="outline-none px-20 py-4 rounded-full text-white shadow-lg text-2xl"
  style={{backgroundColor:"red"}}>Red</button>

   <button
   onClick={()=>setColor("green")} className="outline-none px-20 py-4 rounded-full text-white shadow-lg text-2xl"
  style={{backgroundColor:"green"}}>Green</button>


   <button onClick={()=>setColor("black")} className="outline-none px-20 py-4 rounded-full text-white shadow-lg text-2xl"
  style={{backgroundColor:"black"}}>black</button>


   <button onClick={()=>setColor("orange")} className="outline-none px-20 py-4 rounded-full text-white shadow-lg text-2xl"
  style={{backgroundColor:"orange"}}>orange</button>


   <button onClick={()=>setColor("teal")} className="outline-none px-20 py-4 rounded-full text-white shadow-lg text-2xl"
  style={{backgroundColor:"teal"}}>teal</button>


        </div>

      </div>
    </div>
  )
}

export default App
