import React from 'react';
import './RaiuvaPrototype.css';

const RaiuvaPrototype = () => {
  return (
    <div className="raiuva-prototype-container">
      <div className="prototype-header text-center mb-6">
        <h3 className="text-3xl font-black text-white">RaiUva Delivery</h3>
        <p className="text-slate-400 mt-2">Navegue pelo protótipo funcional abaixo</p>
      </div>

      <div className="phone-mockup-wrapper">
        <div className="phone-mockup">
          <div className="phone-notch"></div>
          <iframe 
            src="https://raiuva-prototype.vercel.app" 
            className="phone-screen"
            title="RaiUva App Prototype"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RaiuvaPrototype;
