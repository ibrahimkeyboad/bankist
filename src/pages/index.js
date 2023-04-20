import Feature from '@/components/feature';
import Foooter from '@/components/foooter';
import Header from '@/components/header';
import Opeation from '@/components/opeation';
import Signup from '@/components/signup';
import Testimonial from '@/components/testimonial';
import React from 'react';

function index() {
  return (
    <>
      <Header />
      <Feature />
      <Opeation />
      <Testimonial />
      <Signup />
      <Foooter />
    </>
  );
}

export default index;
