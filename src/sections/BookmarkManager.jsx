import React, { useState } from 'react';

const BookmarkManager = () => {
  // 1. Manage current view: 'home', 'form', or 'list'
  const [view, setView] = useState('home');
  const [category, setCategory] = useState('news');
  
  // 2. State for the list of all bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  
  // 3. State for current input values
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleAddBookmark = () => {
    if (!name || !url) {
      alert("Please fill in both fields");
      return;
    }
    // Add new object to the bookmarks array
    const newBookmark = { name, url, category, id: Date.now() };
    setBookmarks([...bookmarks, newBookmark]);
    
    // Clear inputs and show the list
    setName('');
    setUrl('');
    setView('list');
  };

  const deleteBookmark = (id) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  };

  // Filter bookmarks based on selected category for the list view
  const filteredBookmarks = bookmarks.filter(b => b.category === category);

  return (
    <main style={{ margin: '50px auto', maxWidth: '500px', fontFamily: 'sans-serif' }}>
      
      {/* HOME VIEW */}
      {view === 'home' && (
        <section>
          <h1 style={{ textAlign: 'center' }}>Bookmark Manager</h1>
          <div>
            <label>Select a category: </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="news">News</option>
              <option value="entertainment">Entertainment</option>
              <option value="work">Work</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => setView('list')}>View Category</button>
            <button onClick={() => setView('form')}>Add Bookmark</button>
          </div>
        </section>
      )}

      {/* FORM VIEW */}
      {view === 'form' && (
        <section>
          <h2 style={{ textAlign: 'center' }}>Add to {category.toUpperCase()}</h2>
          <div style={{ marginBottom: '10px' }}>
            <label>Name: </label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>URL: </label>
            <input 
              type="text" 
              value={url} 
              onChange={(e) => setUrl(e.target.value)} 
            />
          </div>
          <button onClick={() => setView('home')}>Go Back</button>
          <button onClick={handleAddBookmark}>Save Bookmark</button>
        </section>
      )}

      {/* LIST VIEW */}
      {view === 'list' && (
        <section>
          <h2 style={{ borderBottom: '1px solid #ccc' }}>{category.toUpperCase()} Bookmarks</h2>
          <ul style={{ minHeight: '100px' }}>
            {filteredBookmarks.length > 0 ? (
              filteredBookmarks.map((book) => (
                <li key={book.id} style={{ marginBottom: '10px' }}>
                  <a href={book.url} target="_blank" rel="noreferrer">{book.name}</a>
                  <button 
                    onClick={() => deleteBookmark(book.id)}
                    style={{ marginLeft: '10px', fontSize: '0.7rem', color: 'red' }}
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p>No bookmarks in this category.</p>
            )}
          </ul>
          <button onClick={() => setView('home')}>Back to Home</button>
          <button onClick={() => setView('form')}>Add New</button>
        </section>
      )}
    </main>
  );
};

export default BookmarkManager;