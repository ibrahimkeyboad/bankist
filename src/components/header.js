import React from 'react';

function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <img
          src='img/logo.png'
          alt='Bankist logo'
          className='nav__logo'
          id='logo'
          designer='Jonas'
          data-version-number='3.0'
        />
        <ul className='nav__links'>
          <li className='nav__item'>
            <a className='nav__link' href='#section--1'>
              Features
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#section--2'>
              Operations
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#section--3'>
              Testimonials
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link nav__link--btn btn--show-modal' href='#'>
              Open account
            </a>
          </li>
        </ul>
      </nav>

      <div className='header__title'>
        <h1>
          When
          <span className='highlight'>banking</span>
          meets
          <br />
          <span className='highlight'>minimalist</span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        <button className='btn--text btn--scroll-to'>Learn more &#8595;</button>
        <img
          src='img/hero.png'
          className='header__img'
          alt='Minimalist bank items'
        />
      </div>
    </header>
  );
}

export default Header;
