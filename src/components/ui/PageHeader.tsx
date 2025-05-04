import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '24px 24px'
          }}
        ></div>
      </div>
      
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-64 md:h-80 object-cover"
      />
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;