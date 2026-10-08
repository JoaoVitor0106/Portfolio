import React from 'react';
import './MyZonePrototype.css';

const MyZonePrototype = () => {
  return (
    <div className="myzone-mockup-wrapper">
      <div className="mockup-info-top">
        <h3>MyZone - Backend & Dashboard</h3>
        <p>
          Adicione uma imagem com o nome <strong>myzone-screenshot.png</strong> na pasta <code>public/</code> do projeto para exibi-la dentro deste mockup de computador.
        </p>
      </div>

      <div className="desktop-mockup-container">
        <div className="desktop-mockup">
          <div className="desktop-screen-bezel">
            <div className="desktop-camera"></div>
            <div className="desktop-screen">
              {/* O usuário deve colocar a imagem real em public/myzone-screenshot.png */}
              <img 
                src="/myzone-screenshot.png" 
                alt="MyZone Screenshot" 
                className="desktop-mockup-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/1280x800/161925/ffffff?text=Adicione+myzone-screenshot.png+na+pasta+public";
                }}
              />
            </div>
            <div className="desktop-logo-space"></div>
          </div>
          <div className="desktop-base">
            <div className="desktop-base-top"></div>
            <div className="desktop-base-bottom">
              <div className="desktop-touchpad-cutout"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyZonePrototype;
