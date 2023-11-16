import OperationCard from './OperationCard';

function OperationSection() {
  return (
    <section className='section' id='section--2'>
      <div className='section__title'>
        <h2 className='section__description'>Operations</h2>
        <h3 className='section__header'>
          Everything as simple as possible, but no simpler.
        </h3>
      </div>

      <div className='operations'>
        <OperationCard />
        <div className='operations__content operations__content--2'>
          <div className='operations__icon operations__icon--2'>
            <svg>
              <use xlinkHref='img/icons.svg#icon-home'></use>
            </svg>
          </div>
          <h5 className='operations__header'></h5>
          <p></p>
        </div>
        <div className='operations__content operations__content--3'>
          <div className='operations__icon operations__icon--3'>
            <svg>
              <use xlinkHref='img/icons.svg#icon-user-x'></use>
            </svg>
          </div>
          <h5 className='operations__header'>
            No longer need your account? No problem! Close it instantly.
          </h5>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OperationSection;
