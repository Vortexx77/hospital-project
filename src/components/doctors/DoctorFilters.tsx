import React from 'react';
import { Search, Filter } from 'lucide-react';

const DoctorFilters: React.FC = () => {
  return (
    <div className="mb-8 p-6 bg-secondary-50/80 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-secondary-500 focus:ring-secondary-500"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select className="pl-10 pr-8 py-2 rounded-lg border-gray-300 focus:border-secondary-500 focus:ring-secondary-500">
              <option value="">All Specialties</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="family-medicine">Family Medicine</option>
              <option value="internal-medicine">Internal Medicine</option>
            </select>
          </div>
          
          <select className="py-2 px-4 rounded-lg border-gray-300 focus:border-secondary-500 focus:ring-secondary-500">
            <option value="">All Locations</option>
            <option value="main">Main Clinic</option>
            <option value="north">North Branch</option>
            <option value="south">South Branch</option>
          </select>
          
          <button className="bg-secondary-500 text-white px-6 py-2 rounded-lg hover:bg-secondary-600 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorFilters;