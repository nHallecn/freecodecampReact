import React, { useState } from 'react';

const MarkdownToHtml = () => {
  const [textInput, setTextInput] = useState('');
  const [html, setHtml] = useState('');

  const convertMarkdown = (value) => {
    return value
      .replace(/^(?:\s*)### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^(?:\s*)## (.+)$/gm, "<h2>$1</h2>")
      .replace(/^(?:\s*)# (.+)$/gm, "<h1>$1</h1>")
      // Blockquotes
      .replace(/^(?:\s*)> (.+)$/gm, "<blockquote>$1</blockquote>")
      // Images & Links
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" style="max-width:100%">')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
      // Bold & Italic
      .replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>')
      .replace(/(\*|_)(.*?)\1/g, '<em>$2</em>')
      // Line breaks
      .replace(/\n/g, '<br />');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTextInput(value);
    setHtml(convertMarkdown(value));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Markdown to HTML Converter</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h2>Markdown Input</h2>
          <textarea 
            style={{ width: '100%', height: '300px', padding: '10px' }}
            placeholder='Enter your markdown here...'
            value={textInput}
            onChange={handleChange}
          />
        </div>

        <div>
          <h2>HTML Preview</h2>
          <div 
            style={{ 
              border: '1px solid #ddd', 
              padding: '10px', 
              height: '300px', 
              overflowY: 'auto',
              backgroundColor: '#fff' 
            }}
            // This renders the string as actual HTML
            dangerouslySetInnerHTML={{ __html: html }} 
          />
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Raw HTML Output</h2>
        <pre style={{ 
          background: '#f4f4f4', 
          padding: '15px', 
          borderRadius: '5px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all'
        }}>
          {html}
        </pre>
      </div>
    </div>
  );
};

export default MarkdownToHtml;