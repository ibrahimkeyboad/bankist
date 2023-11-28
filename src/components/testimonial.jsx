import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Testimonial() {
  const slides = [
    {
      title: 'Best financial decision ever!',
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Accusantium quas quisquam non? Quas voluptate nulla minima
    deleniti optio ullam nesciunt, numquam corporis et asperiores
    laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
    id alias reiciendis, perferendis facere pariatur dolore veniam
    autem esse non voluptatem saepe provident nihil molestiae.`,
      img: '/img/user-1.jpg',
      name: 'Aarav Lynn',
      location: 'San Francisco, USA',
    },
    {
      title: 'The last step to becoming a complete minimalist',
      desc: ` Quisquam itaque deserunt ullam, quia ea repellendus provident,
    ducimus neque ipsam modi voluptatibus doloremque, corrupti
    laborum. Incidunt numquam perferendis veritatis neque repellendus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.`,
      img: '/img/user-2.jpg',
      name: 'Miyah Miles',
      location: 'London, UK',
    },
    {
      title: 'Finally free from old-school banks',
      desc: ` Debitis, nihil sit minus suscipit magni aperiam vel tenetur
    incidunt commodi architecto numquam omnis nulla autem,
    necessitatibus blanditiis modi similique quidem. Odio aliquam
    culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
    deleniti saepe aliquid quos inventore sequi. Necessitatibus id
    alias reiciendis, perferendis facere.`,
      img: '/img/user-3.jpg',
      name: 'Francisco Gomes',
      location: 'Lisbon, Portugal',
    },
  ];
  return (
    <section className='section' id='section--3'>
      <div className='section__title section__title--testimonials'>
        <h2 className='section__description'>Not sure yet?</h2>
        <h3 className='section__header'>
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div className='slider'>
        <Swiper
          spaceBetween={500}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}>
          {slides.map((slide) => (
            <SwiperSlide key={slide.name}>
              <div className='slide'>
                <div className='testimonial'>
                  <h5 className='testimonial__header'>{slide.title}</h5>
                  <blockquote className='testimonial__text'>
                    {slide.desc}
                  </blockquote>
                  <address className='testimonial__author'>
                    <Image
                      width={100}
                      height={100}
                      src={slide.img}
                      alt={slide.name}
                      className='testimonial__photo'
                    />
                    <h6 className='testimonial__name'>{slide.name}</h6>
                    <p className='testimonial__location'>{slide.location}</p>
                  </address>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button className='slider__btn slider__btn--left'>&larr;</button>
        <button className='slider__btn slider__btn--right'>&rarr;</button>
        <div className='dots'></div> */}
      </div>
    </section>
  );
}

export default Testimonial;
