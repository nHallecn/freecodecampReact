import React, { useState } from 'react';

const LightboxGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, thumb: "https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg", alt: "Stonehenge" },
    { id: 2, thumb: "https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg", alt: "Storm" },
    { id: 3, thumb: "https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg", alt: "Trees" },
  ];

  const openLightbox = (thumbSrc) => {
    const fullSrc = thumbSrc.replace("-thumbnail", "");
    setSelectedImage(fullSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ padding: '20px' }}>

        <h1>Lightbox Viewer</h1>

        <div style={{ display: 'flex', gap: '10px' }}>
        {images.map((img) => (
          <img
            key={img.id}
            src={img.thumb}
            alt={img.alt}
            onClick={() => openLightbox(img.thumb)}
            style={{ cursor: 'pointer', borderRadius: '8px', width: '150px' }}
          />
        ))}
        </div>

      {selectedImage && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <button 
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '2rem',
              color: 'white',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            &times;
          </button>
          
          <img 
            src={selectedImage} 
            alt="Full size" 
            style={{ maxWidth: '90%', maxHeight: '80%', borderRadius: '4px' }} 
          />
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;