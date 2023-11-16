import { useState } from 'react';

function OperationCard() {
  const [selected, setSelected] = useState(1);
  const operationContents = [
    {
      title: 'Tranfser money to anyone, instantly! No fees, no BS. ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
      icon: '/img/icons.svg#icon-upload',
    },
    {
      title: 'Buy a home or make your dreams come true, with instant loans.',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      icon: '/img/icons.svg#icon-home',
    },
    {
      title: 'No longer need your account? No problem! Close it instantly.',
      content:
        ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui  officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat.',
      icon: '/img/icons.svg#icon-user-x',
    },
  ];

  const butns = [
    {
      step: '01',
      title: 'Instant Transfers',
    },
    {
      step: '02',
      title: 'Instant Loans',
    },
    {
      step: '03',
      title: 'Instant Closing',
    },
  ];
  return (
    <>
      <div className='operations__tab-container'>
        {butns.map((btn, i) => (
          <button
            key={btn.step}
            onClick={() => setSelected(i + 1)}
            className={`btn operations__tab operations__tab--${i + 1} ${
              selected === i + 1 ? 'operations__tab--active' : ''
            }`}>
            <span>{btn.step}</span>
            {btn.title}
          </button>
        ))}
      </div>
      {operationContents.map((content, i) => (
        <div
          key={content.title}
          className={`operations__content operations__content--${i + 1} ${
            selected === i + 1 ? 'operations__content--active' : ''
          } `}>
          <div className={`operations__icon operations__icon--${i + 1}`}>
            <svg>
              <use xlinkHref={content.icon}></use>
            </svg>
          </div>
          <h5 className='operations__header'>{content.title}</h5>
          <p>{content.content}</p>
        </div>
      ))}
    </>
  );
}

export default OperationCard;
