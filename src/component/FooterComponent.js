import React from 'react';
import './FooterComponent.css';

function FooterComponent() {
  return (
    React.createElement('section', { className: 'footer-section' },
      React.createElement('div', { className: 'section-7' },
        React.createElement('div', { className: 'first-section' },
          React.createElement('div', null,
            React.createElement('img', { src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSA6N0sHHmFZqyptklGvtagXH26RKNCUNO-YEdEifOI40rTqPr_', alt: 'Icon' })
          ),
        //   React.createElement('div', { className: 'first-1' },
        //     React.createElement('div', null,
        //       React.createElement('span', null, 'India')
        //     ),
        //     React.createElement('div', null,
        //       React.createElement('span', null, 'English')
        //     )
          //)
        ),
        React.createElement('div', { className: 'second-section' },
          React.createElement('div', null,
            React.createElement('h4', null, 'About our app'),
            React.createElement('a', { href: '#' }, 'Who we are'),
            React.createElement('a', { href: '#' }, 'Blog'),
            React.createElement('a', { href: '#' }, 'Work with us'),
            React.createElement('a', { href: '#' }, 'Investor relations'),
            React.createElement('a', { href: '#' }, 'Report fraud'),
            React.createElement('a', { href: '#' }, 'Press kit'),
            React.createElement('a', { href: '#' }, 'Contact us')
          ),
          React.createElement('div', null,
            React.createElement('h4', null, 'Perfume alchemy'),
            React.createElement('a', { href: '#' }, 'Nykaa'),
            React.createElement('a', { href: '#' }, 'Sephora'),
            React.createElement('a', { href: '#' }, 'Amazon'),
            React.createElement('a', { href: '#' }, 'Flipkart'),
            React.createElement('a', { href: '#' }, 'Plum')
          ),
          React.createElement('div', null,
            React.createElement('h4', null, 'For Sales'),
            React.createElement('a', { href: '#' }, 'Partner with us'),
            React.createElement('a', { href: '#' }, 'Apps for you'),
            React.createElement('a', { href: '#' }, 'Perfume for enterprise')
          ),
          React.createElement('div', null,
            React.createElement('h4', null, 'Learn More'),
            React.createElement('a', { href: '#' }, 'Privacy'),
            React.createElement('a', { href: '#' }, 'Security'),
            React.createElement('a', { href: '#' }, 'Terms'),
            React.createElement('a', { href: '#' }, 'Sitemap')
          ),
          React.createElement('div', { className: 'social-box' },
            React.createElement('h4', null, 'Social Links'),
            React.createElement('div', null,
              React.createElement('i', { className: 'fab fa-facebook' }),
              React.createElement('i', { className: 'fab fa-twitter' }),
              React.createElement('i', { className: 'fab fa-instagram' })
            ),
            React.createElement('img', { src: 'https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png', alt: 'App Icon 1' }),
            React.createElement('img', { src: 'https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png', alt: 'App Icon 2' })
          )
        ),
        React.createElement('hr', null),
        React.createElement('p', { className: 'footer-message' }, '\u00A9, perfumealchemy.co.in By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Perfume Alchemy™ Ltd. All rights reserved.')
      )
    )
  );
}

export default FooterComponent;
