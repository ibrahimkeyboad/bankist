import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const feature = document.querySelector('#section--1');
      const opeation = document.querySelector('#section--1');
      const testimonial = document.querySelector('#section--1');
      const top1 = feature.offsetTop;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop >= top1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = isSticky ? 'sticky' : '';

  return (
    <header className='header'>
      <nav className={`nav ${navbarClass}`}>
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
            <Link
              className='nav__link'
              offset={0}
              smooth={true}
              duration={500}
              href=''
              to='section--1'>
              Features
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              className='nav__link'
              smooth={true}
              href=''
              offset={0}
              duration={500}
              to='section--2'>
              Operations
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              className='nav__link'
              smooth={true}
              href=''
              offset={0}
              duration={500}
              to='section--3'>
              Testimonials
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              className='nav__link nav__link--btn btn--show-modal'
              offset={0}
              href=''
              smooth={true}
              duration={500}
              to='#'>
              Open account
            </Link>
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
