import React from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState("");
  const [password, setpassword]=useState("")

  const generatepassword= () =>{
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$!+=-/?"
    let pass= ""

    for (let i=1; i<=Number(length); i++){
      const index= Math.floor(Math.random() * chars.length)
      pass += chars[index]
    }
    return pass
  }

  const handleclick = (e) => {
    e.preventDefault()

    return setpassword(generatepassword())
  }

  return (
    <>
      <div className="bg-red-400 h-screen w-screen flex items-center justify-center">
        <div className="w-[550px] h-56 bg-cyan-500 rounded-md flex items-center justify-center flex-col gap-y-5">
          
          <h1 className="text-2xl font-semibold">
            Random Password Generator
          </h1>

          <div className="flex items-center justify-center gap-x-5">
            <input
              type="number"
              className="bg-amber-50 h-7 rounded-md outline-none text-center"
              onChange={(e) => setLength(e.target.value)}
            />

            <button className="bg-black text-white h-7 w-20 px-2 rounded-md" onClick={handleclick}>
              Click
            </button>
          </div>

          <input
            type="text"
            className="bg-white h-7 rounded-md outline-none text-center" value={password} readOnly/>

        </div>
      </div>
    </>
  );
}

export default App;
