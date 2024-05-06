import React from 'react';
import './ContactComponent.css'; // Import the CSS file for styling

function ContactComponent() {
  return (
    <section className="section-5">
      <div className="flex-container contact-container">
        <img src= "https://parfumo.app/img/01_en_double.png" alt="Phone" className="contact-image" />
        <div className="contact-details">
          <h2>Get Perfume Alchemy app</h2>
          <p>We will send you a link, open it on your phone to download the app</p>
          <div className="flex-container radio-container">
            <div>
              <input type="radio" name="fill" id="email" defaultChecked />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="radio" name="fill" id="phone" />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="flex-container email-container">
            <input className="input-field" type="text" />
            <label htmlFor="" className="placeholder-label">Email</label>
            <button>Share App link</button>
          </div>
          <p className="download-message">Download App from</p>
          <div className="flex-container app-icons">
            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="App Icon 1" />
            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="App Icon 2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
