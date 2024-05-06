import React from 'react';
import './Home.css';
// Create link elements--
const iconLink = document.createElement('link');
iconLink.rel = 'icon';
iconLink.href = 'https://i.pinimg.com/564x/3d/a6/21/3da6217c94fbf28270593d25c259febe.jpg';

const perfumeStylesheet = document.createElement('link');
perfumeStylesheet.rel = 'stylesheet';
perfumeStylesheet.href = 'perfume.css';

const boxiconsStylesheet = document.createElement('link');
boxiconsStylesheet.rel = 'stylesheet';
boxiconsStylesheet.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';

const fontAwesomeStylesheet = document.createElement('link');
fontAwesomeStylesheet.rel = 'stylesheet';
fontAwesomeStylesheet.href = 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';

// Create script element
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://kit.fontawesome.com/dbed6b6114.js';
fontAwesomeScript.setAttribute('crossorigin', 'anonymous');

// Append elements to the head of the document
document.head.appendChild(iconLink);
document.head.appendChild(perfumeStylesheet);
document.head.appendChild(boxiconsStylesheet);
document.head.appendChild(fontAwesomeStylesheet);
document.head.appendChild(fontAwesomeScript);



const Home = () => {
  return (
    <section className="Home">
      <div className="Home-content">
        <h1>Perfume & Aroma</h1>
        <h3>Scented Elegance</h3>
        <p>
          Elevate your experience with us because we don't settle for<pre></pre>
          less than the best! Where every moment is an opportunity.
        </p>
        <div className="btn-box">
          <a href="#">Shop now</a>
        </div>
      </div>
      <div className="home-sci">
        <a href="#"><i className="bx bxl-facebook"></i></a>
        <a href="#"><i className="bx bxl-twitter"></i></a>
        <a href="#"><i className="bx bxl-linkedin"></i></a>
      </div>
      
    </section>
  );
}

export default Home; //Home.js