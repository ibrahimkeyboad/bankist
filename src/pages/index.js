import Feature from '@/components/feature';
import Foooter from '@/components/foooter';
import Header from '@/components/header';
import OperationSection from '@/components/operation/OperationSection';
import Signup from '@/components/signup';
import Testimonial from '@/components/testimonial';
import Head from 'next/head';
import React from 'react';

function index() {
  return (
    <>
      <Head>
        <title>Bankist</title>
      </Head>
      <Header />
      <Feature />
      <OperationSection />
      <Testimonial />
      <Signup />
      <Foooter />
    </>
  );
}

export default index;
