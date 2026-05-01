import React, { useState } from 'react'
import '../App.css'

const RealTimeCounter = () => {
    const [textInput, setTextInput] = useState('');
    const limit=50;

    function handleChange(e){
        const value= e.target.value;
        if(value.length <= limit){
            setTextInput(value);
        }
    }

  return (
    <div>
        <h1>RealTimeCounter</h1>

        <h2>Write a post</h2>
        <textarea id="text-input"
        placeholder="Whats on your mind..."
        value={textInput}
        onChange={handleChange}
        ></textarea>
    <p style={{color: textInput.length >=limit ? "red" : "white"}} >Character Count: {textInput.length}/{limit} </p>
    </div>
  )
}

export default RealTimeCounter