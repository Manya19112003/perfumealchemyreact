import React from 'react';
import './TopCollections.css';

function TopCollections() {
  return React.createElement(
    'div',
    { className: 'TopCollections' },
    React.createElement('h1', { className: 'heading' }, 'Top Collections'),
    React.createElement(
      'div',
      { className: 'collection-container' },
      React.createElement(
        'div',
        { className: 'collection-item' },
        React.createElement('img', { src: 'https://mummyfever.co.uk/wp-content/uploads/2023/06/fernando-andrade-potCPE_Cw8A-unsplash-1069x1536.jpg', alt: 'Image 1', className: 'collection-image' }),
        React.createElement('h4', null, 'Perfume')
      ),
      React.createElement(
        'div',
        { className: 'collection-item' },
        React.createElement('img', { src: 'https://images-cdn.ubuy.co.in/63c05c753bd5b114097ca6d3-victoria-s-secret-fragrance-mist-bare.jpg', alt: 'Image 2', className: 'collection-image' }),
        React.createElement('h4', null, 'Fragrance Mist')
      ),
      React.createElement(
        'div',
        { className: 'collection-item' },
        React.createElement('img', { src: 'https://m.media-amazon.com/images/I/71mHusN08-L.jpg', alt: 'Image 3', className: 'collection-image' }),
        React.createElement('h4', null, 'Shower Gel')
      )
    ),

    React.createElement('hr', { className: 'horizontal-line' }),

    React.createElement(
      'div',
      { className: 'collection-container' },
      React.createElement(
        'div',
        { className: 'collection-item' },
        React.createElement('img', { src: 'https://shop.dior.com.my/cdn/shop/files/3348901596244_1_450x.jpg?v=1683703206', alt: 'Image 1', className: 'collection-image' }),
        React.createElement('h4', null, 'Body Lotion')
      ),
      React.createElement(
        'div',
        { className: 'collection-item' },
        React.createElement('img', { src: 'https://auradecor.co.in/cdn/shop/products/IMG_2593_1.jpg?v=1678942766&width=823', alt: 'Image 2', className: 'collection-image' }),
        React.createElement('h4', null, 'Candles')
      ),
      React.createElement(
        'div',
        { className: 'collection-item' },
        React.createElement('img', { src: 'https://www.giftbasketdeluxe.com/europe/wp-content/uploads/sites/11/2022/11/spa-gift-sets.webp', alt: 'Image 3', className: 'collection-image' }),
        React.createElement('h4', null, 'Gift Hampers')
      ),
      
    ),
    // React.createElement('div', { className: 'viewmore' },
    //     React.createElement('a', { href: '#' }, 'View More')
    //   )
    
  );
}

export default TopCollections;  // TopCollections.js