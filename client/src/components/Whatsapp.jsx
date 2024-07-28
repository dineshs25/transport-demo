/* eslint-disable no-unused-vars */
import React from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/918217643770', '_blank'); // Replace with the actual WhatsApp link
  };

  return (
    <div className="whatsapp-buttons">
      <button className="whatsapp-button" onClick={handleOpenWhatsApp}>
        <FaWhatsapp size={24} />
      </button>
      <button className="go-to-top-button" onClick={handleGoToTop}>
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
