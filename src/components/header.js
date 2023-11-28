import HeroSection from './HeroSection';
import NavBar from './NavBar';

function Header() {
  return (
    <header className='header'>
      <NavBar />
      <HeroSection />
    </header>
  );
}

export default Header;
