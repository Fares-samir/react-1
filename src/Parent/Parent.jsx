import React, { useState } from 'react';
import img from '../assets/port3.png';
import img1 from '../assets/poert1.png';
import img2 from '../assets/port2.png';

export default function Parent() {
  const imgList = [img, img1, img2,img, img1, img2];
  const [selectedImage, setSelectedImage] = useState(null);  

  const handleLayerClick = (image) => {
    setSelectedImage(image); 
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container text-center">
      <h2 className='h1'>      portfolio component
      </h2>



      <div className="row g-5 mb-4 m-2">
        {imgList.map((image, index) => (
          <div key={index} className="col-md-4">
            <div className="img-cover position-relative">
              <img
                src={image}
                className="w-100 rounded-3"
                alt={`img-${index}`}
              />
              <div
                className="layer position-absolute"
                style={{ cursor: 'pointer' }} 
                onClick={() => handleLayerClick(image)} 
              >
                <i
                  className="fa-solid fs-6 plus fa-plus"
                  style={{ color: '#FFFFFF' }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
          }}
          onClick={closeModal} 
        >
          <div
            className="modal-content position-relative"
            style={{
              maxWidth: '50%',
              maxHeight: '100%',
            }}
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-100 h-auto rounded-3"
            />
          </div>
        </div>
      )}
    </div>
  );
}
