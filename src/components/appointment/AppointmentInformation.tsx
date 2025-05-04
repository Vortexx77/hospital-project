import React from 'react';

const AppointmentInformation: React.FC = () => {
  return (
    <div className="bg-secondary-50/80 backdrop-blur-sm rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">Important Information</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
          <p className="text-gray-600">
            Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 1:00 PM<br />
            Sunday: Closed
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">What to Bring</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>• Valid ID</li>
            <li>• Insurance card</li>
            <li>• List of current medications</li>
            <li>• Medical records (if applicable)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">Cancellation Policy</h3>
          <p className="text-gray-600">
            Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInformation;