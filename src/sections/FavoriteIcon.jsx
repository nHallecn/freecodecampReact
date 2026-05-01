import React, { useState } from 'react';

// A single reusable button component to handle its own state
const FavoriteButton = () => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <button 
      onClick={() => setIsFilled(!isFilled)}
      style={{ cursor: 'pointer', marginLeft: '10px' }}
    >
      {isFilled ? '❤️' : '♡'}
    </button>
  );
};

const App = () => {
  return (
    <div>
      <h1>Preferred protein</h1>
      <ul>
        <li>Chicken <FavoriteButton /></li>
        <li>Beans <FavoriteButton /></li>
        <li>Egg <FavoriteButton /></li>
      </ul>
    </div>
  );
};

export default App;