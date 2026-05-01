import React, { useState } from 'react'

const BackgroundColor = () => {

    const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];

  const [color, setColor] = useState('#110815')

  function getRandomIndex(){
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }

  function changeColor(){
    const newColor= darkColorsArr[getRandomIndex()];

    setColor(newColor);

  }

  function handleClick(){
    changeColor();
  }



  return (
    <div style={{
        backgroundColor:color,
        margin: '50px',
        padding: '50px',
        border: '2px solid white'
    }}>
        <h1>Random Background Color changer</h1>
        <section>
            <p>Hex code: <span>{color}</span></p>
        </section>
        <button onClick={handleClick}>Change Background Color</button>
    </div>
  )
}

export default BackgroundColor