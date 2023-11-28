import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const feature = document.querySelector('#section--1');

      const top1 = feature.offsetTop;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;

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
    <nav className={`nav ${navbarClass}`}>
      <img
        src='/img/logo.png'
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
          <button className='nav__btn btn--show-modal'>Open account</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
