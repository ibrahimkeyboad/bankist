import React from 'react';

function Testimonial() {
  return (
    <section className='section' id='section--3'>
      <div className='section__title section__title--testimonials'>
        <h2 className='section__description'>Not sure yet?</h2>
        <h3 className='section__header'>
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div className='slider'>
        <div className='slide'>
          <div className='testimonial'>
            <h5 className='testimonial__header'>
              Best financial decision ever!
            </h5>
            <blockquote className='testimonial__text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis facere pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.
            </blockquote>
            <address className='testimonial__author'>
              <img src='img/user-1.jpg' alt='' className='testimonial__photo' />
              <h6 className='testimonial__name'>Aarav Lynn</h6>
              <p className='testimonial__location'>San Francisco, USA</p>
            </address>
          </div>
        </div>

        <div className='slide'>
          <div className='testimonial'>
            <h5 className='testimonial__header'>
              The last step to becoming a complete minimalist
            </h5>
            <blockquote className='testimonial__text'>
              Quisquam itaque deserunt ullam, quia ea repellendus provident,
              ducimus neque ipsam modi voluptatibus doloremque, corrupti
              laborum. Incidunt numquam perferendis veritatis neque repellendus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              deserunt exercitationem deleniti.
            </blockquote>
            <address className='testimonial__author'>
              <img src='img/user-2.jpg' alt='' className='testimonial__photo' />
              <h6 className='testimonial__name'>Miyah Miles</h6>
              <p className='testimonial__location'>London, UK</p>
            </address>
          </div>
        </div>

        <div className='slide'>
          <div className='testimonial'>
            <h5 className='testimonial__header'>
              Finally free from old-school banks
            </h5>
            <blockquote className='testimonial__text'>
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </blockquote>
            <address className='testimonial__author'>
              <img src='img/user-3.jpg' alt='' className='testimonial__photo' />
              <h6 className='testimonial__name'>Francisco Gomes</h6>
              <p className='testimonial__location'>Lisbon, Portugal</p>
            </address>
          </div>
        </div>

        <button className='slider__btn slider__btn--left'>&larr;</button>
        <button className='slider__btn slider__btn--right'>&rarr;</button>
        <div className='dots'></div>
      </div>
    </section>
  );
}

export default Testimonial;
