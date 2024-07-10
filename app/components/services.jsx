import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { Fade } from 'react-reveal';


const ServicePage = () => {
  return (

    <Fade bottom duration={1000} distance="10%">
    <section className="flex min-h-screen flex-col items-center justify-between p-3 md:p-8 w-11/12 m-auto">
      
      <div className="container py-20">
        <div className="text-center wow fadeInUp">
          <h6 className="text-primary font-bold text-uppercase mb-2">Our Services</h6>
          <h1 className="text-4xl font-bold mb-5">Explore Our Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <div className="service-item p-6 bg-gray-100 rounded-lg wow fadeInUp">
            <div className="overflow-hidden mb-4">
              <Image
                src="/img/service-1.jpg"
                alt="Air Freight"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4 className="text-xl font-semibold mb-3">Air Freight</h4>
            <a href="#" className="btn-slide mt-2 flex items-center hover:text-primary text-success">
              <FaArrowRight className="mr-2" />
              <span>Read More</span>
            </a>
          </div>
          
         
          <div className="service-item p-6 bg-gray-100 rounded-lg wow fadeInUp">
            <div className="overflow-hidden mb-4">
              <Image
                src="/img/service-2.jpg"
                alt="Ocean Freight"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4 className="text-xl font-semibold mb-3">Ocean Freight</h4>
            <a href="#" className="btn-slide mt-2 flex items-center hover:text-primary text-success">
              <FaArrowRight className="mr-2" />
              <span>Read More</span>
            </a>
          </div>
        
          <div className="service-item p-6 bg-gray-100 rounded-lg wow fadeInUp">
            <div className="overflow-hidden mb-4">
              <Image
                src="/img/service-3.jpg"
                alt="Road Freight"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4 className="text-xl font-semibold mb-3">Road Freight</h4>
            <a href="#" className="btn-slide mt-2 flex items-center hover:text-primary text-success">
              <FaArrowRight className="mr-2" />
              <span>Read More</span>
            </a>
          </div>
          <div className="service-item p-6 bg-gray-100 rounded-lg wow fadeInUp">
            <div className="overflow-hidden mb-4">
              <Image
                src="/img/service-4.jpg"
                alt="Train Freight"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4 className="text-xl font-semibold mb-3">Train Freight</h4>
            <a href="#" className="btn-slide mt-2 flex items-center hover:text-primary text-success">
              <FaArrowRight className="mr-2" />
              <span>Read More</span>
            </a>
          </div>
          <div className="service-item p-6 bg-gray-100 rounded-lg wow fadeInUp">
            <div className="overflow-hidden mb-4">
              <Image
                src="/img/service-5.jpg"
                alt="Customs Clearance"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4 className="text-xl font-semibold mb-3">Customs Clearance</h4>
            <a href="#" className="btn-slide mt-2 flex items-center hover:text-primary text-success">
              <FaArrowRight className="mr-2" />
              <span>Read More</span>
            </a>
          </div>
          <div  className="service-item p-6 bg-gray-100 rounded-lg wow fadeInUp">
            <div className="overflow-hidden mb-4">
              <Image
                src="/img/service-6.jpg"
                alt="Warehouse Solutions"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <h4 className="text-xl font-semibold mb-3">Warehouse Solutions</h4>
            <a href="#" className="btn-slide mt-2 flex items-center hover:text-primary text-success">
              <FaArrowRight className="mr-2" />
              <span>Read More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    </Fade>
   
  );
};

export default ServicePage;