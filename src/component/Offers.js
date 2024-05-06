import React from 'react';
import './offer.css'; // Import CSS file

class Offers extends React.Component {
    render() {
        return React.createElement('div', { className: 'offers' },
          React.createElement('div', { className: 'flash-sale-offers' },
            React.createElement('p', null, 'Flash Sales Offers')
          ),
          React.createElement('div', { className: 'flash-sale-offers-below' },
            React.createElement('p', null, '(OFFER ONLY VALID FOR THE UNBOXED & DAMAGED BOX CATEGORY)')
          ),
          React.createElement('div', { className: 'threebox' },
            React.createElement('div', { className: 'threebox1' },
              React.createElement('p', null, 'EXTRA 5% DISCOUNT ON PURCHASE'),
              React.createElement('p', null, 'ABOVE 5999'),
              React.createElement('h5', null, 'COUPON CODE- “FLASH5”')
            ),
            React.createElement('div', { className: 'threebox2' },
              React.createElement('p', null, 'EXTRA 10% DISCOUNT ON PURCHASE'),
              React.createElement('p', null, 'ABOVE 10999'),
              React.createElement('h5', null, 'COUPON CODE- “FLASH10”')
            ),
            React.createElement('div', { className: 'threebox3' },
              React.createElement('p', null, 'EXTRA 15% DISCOUNT ON PURCHASE'),
              React.createElement('p', null, 'ABOVE 50999'),
              React.createElement('h5', null, 'COUPON CODE- “FLASH15”')
            )
          )
        );
      }
}

export default Offers;