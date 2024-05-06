import React from 'react';

class CustomMarquee extends React.Component {
  render() {
    return React.createElement('section', null,
      React.createElement('div', { className: 'custom-marquee', role: 'region' },
        React.createElement('div', { className: 'track' },
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          // Repeat the other spans here
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
          React.createElement('span', { className: 'content marquee-text' }, 'GET 10% OFF ON ALL ORDER USE COUPON CODE FRAG10'),
        )
      )
    );
  }
}

export default CustomMarquee;  // CustomMarquee.js