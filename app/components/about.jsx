import Image from 'next/image';
import { FaGlobe, FaShippingFast } from 'react-icons/fa';



const About = () => {
  return (
    <section className="container-fluid overflow-hidden py-3 md:py-7 px-lg-0">
      <div className="container about py-20 px-lg-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="wow fadeInLeft">
            <div className="relative h-96">
              <Image
                src="/img/about.jpg"
                alt="About"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="about-text wow fadeInUp">
            <h6 className="text-primary font-bold text-uppercase mb-3">About Us</h6>
            <h1 className="text-4xl font-bold mb-5">Quick Transport and Logistics Solutions</h1>
            <p className="text-lg mb-5">
              We guarantee to supply the highest quality row materials as well as a selection of merchandising goods and machineries. With our responsive and skilled customer service, and our reputation for rapid and reliable distribution, we are more than happy to share expertise and our access to the best producers with you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
              <div className="wow fadeIn">
                <FaGlobe className="text-success text-4xl mb-3" />
                <h5 className="text-xl font-semibold">Global Coverage</h5>
              </div>
              <div className="wow fadeIn">
                <FaShippingFast className="text-success text-4xl mb-3" />
                <h5 className="text-xl font-semibold">On Time Delivery</h5>
              </div>
            </div>
            <button href="#" className="btn bg-success rounded text-white py-3 px-5">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;