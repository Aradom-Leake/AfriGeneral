import Image from 'next/image';
import { FaGlobe, FaShippingFast, FaPhone } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const Feature = () => {
  return (
    <Fade bottom duration={1000} distance="10%">
    <section className="container-fluid overflow-hidden py-3 md:py-7 px-lg-0">
      <div className="container feature md:py-20 px-lg-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="feature-text wow fadeInUp flex flex-col gap-3">
            <h6 className="text-primary font-bold text-uppercase mb-3">Our Features</h6>
            <h1 className="text-4xl font-bold mb-5">We Are Trusted Logistics Company</h1>
            <div className="mb-5 wow fadeInUp">
              <div className='flex items-center gap-2'>
              <FaGlobe className="text-success text-4xl mb-3" />
              <h5 className="text-xl font-semibold mb-2">Worldwide Service</h5>
              </div>
              <div>
                
                <p>
                  With our extensive network spanning every corner of the continent, we bring you unparalleled convenience and seamless connectivity. Whether you're a thrill-seeker, a culture enthusiast, or a nature lover, we have something for everyone.
                </p>
              </div>
            </div>
            <div className="mb-5 wow fadeIn">
              <div className='flex items-center gap-2'>
              <FaShippingFast className="text-success text-4xl mb-3" />
              <h5 className="text-xl font-semibold mb-2">On Time Delivery</h5>
              </div>
              <div>
                
                <p>
                  Introducing our logistics and trading company, where on-time delivery is our top priority! At Afri General Trading, we understand the importance of timely shipments and the impact it has on your business. With our dedicated team of professionals and state-of-the-art technology, we ensure that your goods reach their destination promptly and securely. Whether it's local or international shipping, we meticulously plan every step of the process to guarantee efficient and reliable delivery. Trust us to handle your logistics needs, and experience the peace of mind that comes with on-time delivery.
                </p>
              </div>
            </div>
            <div className="wow fadeInUp">
              <div className='flex items-center gap-2'>
              <FaPhone className="text-success text-4xl mb-3" />
              <h5 className="text-xl font-semibold mb-2">24/7 Telephone Support</h5>
              </div>
              <div>
                
                <p>We are available around the clock, 24 hours a day and 7 days a week.</p>
              </div>
            </div>
          </div>
          <div className="wow fadeInRight">
            <div className="relative h-96">
              <Image
                src="/img/feature.jpg"
                alt="Feature"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default Feature;