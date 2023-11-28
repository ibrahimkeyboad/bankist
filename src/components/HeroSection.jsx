import Image from 'next/image';

function HeroSection() {
  return (
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
      <Image
        width={600}
        height={400}
        src='/img/hero.png'
        className='header__img'
        alt='Minimalist bank items'
      />
    </div>
  );
}

export default HeroSection;
