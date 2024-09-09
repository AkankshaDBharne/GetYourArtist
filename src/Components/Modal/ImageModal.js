import React from 'react';
import ReactDOM from 'react-dom';

const ImageModal = ({ isOpen, onClose, imageSrc, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-white p-4 rounded-lg absolute max-w-4xl w-full max-h-[90vh] overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-900 text-4xl font-bold bg-red rounded-full p-2 shadow-lg focus:outline-none" 
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="relative max-h-[80vh] overflow-auto">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
