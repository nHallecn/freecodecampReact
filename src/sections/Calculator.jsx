import React, { useState } from 'react'

const Calculator = () => {

    const [input, setInput] = useState('')

    const buttons = [
        1, 2, 3, "clear", 4, 5, 6, "+", 7, 8, 9, "/", 0, "*", "-","="
    ]

    function handleChange(value){
        if(value === "clear") {
            setInput('');
        } else if(value === "="){
            try {
                setInput(String(eval(input)));
            } catch (error) {
                setInput("Error");
            }
        }else{
            setInput((prev)=> prev + value);
        }
    }

  return (
    <div style={{
        margin: '50px 200px',
        padding: '25px',
        border: '2px solid yellow',
        borderRadius: '10px',
        display: 'flex',
        flexDirection:'column',
        width:'400px', 
        textAlign:'center'
    }} >
        <h1>Calculator</h1>
        <input 
            onChange={(e)=>setInput(e.target.value)}
            value={input}
        />
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap:'10px',
    }}
        >
          {buttons.map((b)=>(
            <button key={b} onClick={()=>handleChange(b)}> {b} </button>
        ))}  
        </div>
        
    </div>
  )
}

export default Calculator