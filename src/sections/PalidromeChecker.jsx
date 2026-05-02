import React, { useState } from 'react';

const PalindromeChecker = () => {
  const [textInput, setTextInput] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    const value = textInput.trim();

    if (value === "") {
      alert('Please enter a value');
      return;
    }

    const cleaned = value.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
      setResult(`"${value}" is a palindrome.`);
    } else {
      setResult(`"${value}" is not a palindrome.`);
    }
  };

  return (
    <div style={{
      margin: '50px auto',
      maxWidth: '500px',
      border: '1px solid #ddd',
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Palindrome Checker</h1>

      <div style={{ marginBottom: '20px' }}>
        <p>Enter a text to check if it's a palindrome:</p>
        <input 
          type='text'
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="e.g. Racecar"
          style={{ 
            padding: '10px', 
            width: '70%', 
            borderRadius: '4px', 
            border: '1px solid #ccc' 
          }}
        />
        <button 
          onClick={handleCheck} 
          style={{ 
            padding: '10px 15px', 
            marginLeft: '10px', 
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          CHECK
        </button>
      </div>

      <div style={{ 
        fontWeight: 'bold', 
        fontSize: '1.2rem', 
        textAlign: 'center', 
        minHeight: '30px',
        color: result.includes('is a palindrome') ? 'green' : 'red'
      }}>
        {result}
      </div>

      <p style={{ 
        marginTop: '30px', 
        fontSize: '0.9rem', 
        color: '#666', 
        lineHeight: '1.4',
        borderTop: '1px solid #eee',
        paddingTop: '15px'
      }}>
        💡 <strong>A palindrome</strong> is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
      </p>
    </div>
  );
};

export default PalindromeChecker;