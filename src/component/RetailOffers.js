import React from 'react';
import './offer.css'; // Import CSS file

class RetailOffers extends React.Component {
    render() {
        return React.createElement('div', { className: 'Retailoffers' },
          React.createElement('div', { className: 'Retail-sale-offers' },
            React.createElement('p', null, 'Retail Sales Offers')
          ),
          React.createElement('div', { className: 'Retail-sale-offers-below' },
            React.createElement('p', null, '(OFFER VALID ONLY FOR RETAIL BOX CATEGORY)')
          ),
          React.createElement('div', { className: 'threeboxR' },
            React.createElement('div', { className: 'threebox1R' },
              React.createElement('p', null, 'EXTRA 5% DISCOUNT ON PURCHASE'),
              React.createElement('p', null, 'ABOVE 10999'),
              React.createElement('h5', null, 'COUPON CODE- “RETAIL5”')
            ),
            React.createElement('div', { className: 'threebox2R' },
              React.createElement('p', null, 'EXTRA 10% DISCOUNT ON PURCHASE'),
              React.createElement('p', null, 'ABOVE 2099'),
              React.createElement('h5', null, 'COUPON CODE- “RETAIL10”')
            ),
            React.createElement('div', { className: 'threebox3R' },
              React.createElement('p', null, 'EXTRA 15% DISCOUNT ON PURCHASE'),
              React.createElement('p', null, 'ABOVE 3099'),
              React.createElement('h5', null, 'COUPON CODE- “RETAIL15”')
            )
          )
        );
      }
}

export default RetailOffers;