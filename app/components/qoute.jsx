import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    freight: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch("/api/quotes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
        console.log('Response status:', response.status);

      const data = await response.json();
       console.log('Response data:', data);

      if (response.ok) {
        setSubmitMessage('Quote request submitted successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          freight: '',
          note: ''
        });
      } else {
        setSubmitMessage('Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Fade bottom duration={1000} distance="10%">
      <section className="container-xxl py-3 md:py-7">
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="wow fadeInUp">
              <h6 className="text-primary font-bold text-uppercase mb-3">Get A Quote</h6>
              <h1 className="text-4xl font-bold mb-5">Request A Free Quote!</h1>
              <p className="text-lg mb-5">Global reach, Local touch.</p>
              <div className="flex items-center">
                <FaPhone className="text-5xl flex-shrink-0 bg-success p-3 text-white" />
                <div className="pl-4">
                  <h6 className="mb-1">Call for any query!</h6>
                  <h3 className="text-success m-0">+25377497925</h3>
                </div>
              </div>
            </div>
            <div className="wow fadeIn">
              <div className="bg-gray-200 p-10 text-center">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="form-input w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="form-input w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Your Mobile"
                        className="form-input w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                        required
                      />
                    </div>
                    <div>
                      <select
                        name="freight"
                        value={formData.freight}
                        onChange={handleChange}
                        className="form-select w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                        required
                      >
                        <option value="true">Select A Freight</option>
                        <option value="1">Freight 1</option>
                        <option value="2">Freight 2</option>
                        <option value="3">Freight 3</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="Special Note"
                        className="form-textarea w-full py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="btn bg-success w-content p-10 text-white py-3 rounded-md font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </div>
                </form>
                {submitMessage && (
                  <p className={`mt-4 ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Quote;