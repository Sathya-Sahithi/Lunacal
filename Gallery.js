import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteEmGqcuG-9UHJzy_I-_DDNs-4yEfBgwEVbT0pCbuoCPB10zhqAbao8WGV_9J8s_pQLw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHJHaQZDNlRfFl2J55tPM3PsqTCnMyeOvgeubyssw0LPGLnc1Su-nv-2xE3PPOxHy3wA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdv0JzXT2dZ1_lvIr9dpn1Aw7_BCirdTuCr3DBR26AqMG0fh4J92TEH08PabC0lPfKFQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ulMkEK7B_8F-azVI_y0hlC-3BY_q265jqbpjyClheZNibZU61iytb7CFWvOtQTuBp7I&usqp=CAU'
    ]);  //Images

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle image upload
    const handleAddImage = (e) => {
    const files = e.target.files;
    const imageFiles = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageFiles]); // Add images to the gallery
    e.target.value = null; // Reset file input after adding images
  };

  //  Handle left arrow click
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  // Handle right arrow click
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };
 

  return (
    <div className="gallery">
      <div className="circle">
       <i className="bi bi-question-circle"></i>
      </div>
      <div className="grid">
       <i className="bi bi-grid-3x2-gap-fill"></i>
      </div>

      <div className="gallery-header">
        <button className="gal">Gallery</button>
        <label className="add">+ Add Image
        <input
          type="file"
          accept="image/*"
          onChange={handleAddImage}
          multiple
          style={{ display: 'none' }}
        />
        </label>
        <button className="prev" onClick={prevImage}>←</button>
        <button className="next" onClick={nextImage}>→</button>
      </div>
   
      {/* Current Image */}
        <div className="image-scroll-container">     
          <img 
          src={images[currentIndex]} 
          alt="Current" 
          className="img-fluid"   
          />
           
      {/* Remaining Images */}
         
        {images.map((image, index) =>  (
          index !== currentIndex && (
            <div key={index} className="image-box">
            <img 
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{maxHeight: '150px', objectFit: 'cover'}}
              className="gallery-image"
            />
            </div>
          )
         ))}
        
        </div>


    </div>
    
  );
};

export default Gallery;