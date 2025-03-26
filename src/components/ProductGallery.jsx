import React, { useState } from 'react';

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    'src/assets/Image/products/image 8.png',
    'src/assets/Image/products/image 9.png',
    'src/assets/Image/products/image 10.png',
    'src/assets/Image/products/image 11.png',
    'src/assets/Image/products/image 12.png',
    'src/assets/Image/products/image 13.png'
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square rounded-lg overflow-hidden border border-gray-300">
        <img 
          src={images[selectedImage]} 
          alt="Product" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-16 h-16 border-2 rounded-md overflow-hidden ${
              selectedImage === index ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;