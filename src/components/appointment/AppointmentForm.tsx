import React from 'react';

const AppointmentForm: React.FC = () => {
  return (
    <div className="bg-secondary-50/80 backdrop-blur-sm rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">Schedule Your Visit</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
          <select
            id="time"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
            <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
            <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
          </select>
        </div>
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Visit</label>
          <textarea
            id="reason"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;