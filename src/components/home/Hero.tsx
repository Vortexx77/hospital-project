import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { CalendarCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    title: 'Expert Medical Care for Your Family',
    description: 'Our team of experienced physicians provides comprehensive healthcare services with a focus on patient comfort and well-being.',
    cta: {
      primary: { text: 'Book Appointment', link: '/appointment' },
      secondary: { text: 'Our Services', link: '/services' }
    }
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg',
    title: 'Specialized Pediatric Care',
    description: 'Dedicated pediatric services ensuring the health and development of your children from infancy through adolescence.',
    cta: {
      primary: { text: 'Meet Our Pediatricians', link: '/doctors' },
      secondary: { text: 'Learn More', link: '/services#pediatrics' }
    }
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg',
    title: 'Modern Medical Facilities',
    description: 'State-of-the-art equipment and facilities providing advanced diagnostic and treatment options for our patients.',
    cta: {
      primary: { text: 'Tour Our Facility', link: '/about' },
      secondary: { text: 'Our Technology', link: '/services' }
    }
  }
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-12 h-1 bg-white/50 rounded-full transition-all duration-300 hover:bg-white"></span>`;
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70">
                <div 
                  className="absolute inset-0 opacity-20" 
                  style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '24px 24px'
                  }}
                />
              </div>
            </div>

            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100 mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to={slide.cta.primary.link}>
                      <Button intent="secondary" size="lg" className="group">
                        <CalendarCheck className="mr-2 h-5 w-5" />
                        {slide.cta.primary.text}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link to={slide.cta.secondary.link}>
                      <Button intent="outline-light" size="lg">
                        {slide.cta.secondary.text}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 rounded-full ${
                index === activeIndex 
                  ? 'w-12 bg-white' 
                  : 'w-8 bg-white/50'
              }`}
            />
          ))}
        </div>

        <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-300">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-300">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </Swiper>
    </section>
  );
};

export default Hero;