import Feature from '@/components/feature';
import Foooter from '@/components/foooter';
import Header from '@/components/header';
import OperationSection from '@/components/operation/OperationSection';
import Signup from '@/components/signup';
import Testimonial from '@/components/testimonial';

function index() {
  return (
    <>
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
