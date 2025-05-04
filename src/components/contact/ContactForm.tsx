import React from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-secondary-50 to-primary-50 backdrop-blur-sm rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        <Send className="h-6 w-6 text-secondary-600 mr-2" />
        Send us a Message
      </h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary-500 focus:ring-secondary-500 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary-500 focus:ring-secondary-500 transition-colors"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary-500 focus:ring-secondary-500 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary-500 focus:ring-secondary-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <select
            id="subject"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary-500 focus:ring-secondary-500 transition-colors"
            required
          >
            <option value="">Select a subject</option>
            <option value="appointment">Appointment Inquiry</option>
            <option value="medical">Medical Question</option>
            <option value="billing">Billing & Insurance</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary-500 focus:ring-secondary-500 transition-colors"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-3 px-4 rounded-md hover:from-secondary-700 hover:to-primary-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <Send className="h-5 w-5" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;