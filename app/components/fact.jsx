import { FaPhone, FaUsers, FaShip, FaStar } from 'react-icons/fa';
 import Rotate from 'react-reveal/Rotate';
 import Zoom from 'react-reveal/Zoom';



const Fact = () => {
  return (
    <section className="container-xxl py-3 md:py-7">
      <div className="container md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <Zoom zoomLevel={2} transitionDuration={500} zoomType="in">
          <div className="wow fadeInUp">
            <h6 className="text-primary font-bold text-uppercase mb-3">Some Facts</h6>
            <h1 className="text-4xl font-bold mb-5">#1 Place To Manage All Of Your Shipments</h1>
            <div className="flex items-center">
              <FaPhone className="text-5xl flex-shrink-0 bg-success p-3 text-white" />
              <div className="pl-4">
                <h6 className="mb-1">Call for any query!</h6>
                <h3 className="text-success m-0">+25377497925</h3>
              </div>
            </div>
          </div>
          </Zoom>
         <Rotate rotationAngle={90} rotationDuration={1000} rotationAxis="y">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="wow fadeIn">
              <div className="bg-primary p-6 mb-6 rounded-lg">
                <FaUsers className="text-white text-4xl mb-3" />
                <h2 className="text-white text-3xl mb-2">1234</h2>
                <p className="text-white">Happy Clients</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <FaShip className="text-white text-4xl mb-3" />
                <h2 className="text-white text-3xl mb-2">5678</h2>
                <p className="text-white">Complete Shipments</p>
              </div>
            </div>
            <div className="wow fadeIn">
              <div className="bg-success p-6 rounded-lg">
                <FaStar className="text-white text-4xl mb-3" />
                <h2 className="text-white text-3xl mb-2">9012</h2>
                <p className="text-white">Customer Reviews</p>
              </div>
            </div>
          </div>
          </Rotate>
        </div>
      </div>
    </section>
  );
};

export default Fact;