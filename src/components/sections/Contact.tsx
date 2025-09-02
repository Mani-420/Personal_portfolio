import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
import { AnimatedElement } from '../shared/AnimatedElement';
import { contactInfo, socialLinks } from '../../data/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Lahore, Pakistan',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: FiPhone,
      title: 'Available for',
      value: 'Freelance & Full-time',
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          animation="fade-in-up"
          duration={800}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedElement
            animation="fade-in-left"
            duration={800}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-dark-700 rounded-lg shadow-lg border border-gray-200 dark:border-dark-600 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-white dark:bg-dark-700 rounded-lg flex items-center justify-center shadow-lg ${method.color}`}>
                    <method.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {method.title}
                    </h4>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {method.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-dark-700 rounded-lg flex items-center justify-center shadow-lg text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-1 active:scale-95 transition-transform duration-200"
                    aria-label={link.name}
                  >
                    {link.name === 'GitHub' && <FiGithub size={24} />}
                    {link.name === 'LinkedIn' && <FiLinkedin size={24} />}
                    {link.name === 'Behance' && <FiMail size={24} />}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Contact Form */}
          <AnimatedElement
            animation="fade-in-right"
            duration={800}
            className="bg-white dark:bg-dark-700 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
