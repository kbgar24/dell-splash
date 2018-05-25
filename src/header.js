import React from 'react';

const Header = () => (
  <div className='header'>
    <div className='fin-logo'>[FinExpert]</div>
    <div className='icon1'>
      <img src='/assets/img/location-icon.png'/>
      <div>
        <div>267 Park Avenue</div>
        <div>New York, NY 90210</div>
      </div>
    </div>
    <div className='icon2'>
      <img src='/assets/img/phone-icon.png' />
      <div>
        <div>(123) 45678910</div>
        <div>info@demolink.com</div>
      </div>
    </div>
    <div className='icon3'>
      <img src='/assets/img/clock-icon.png' />
      <div>
        <div>Sunday CLOSED</div>
        <div>Mon - Sat 0900 - 1800</div>
      </div>
    </div>
  </div>
);

export default Header;
