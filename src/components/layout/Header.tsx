import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-secondary to-primary shadow-md py-2' 
          : 'bg-gradient-to-r from-secondary to-primary py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Chanse Medical Clinic Logo" 
              className="h-24 w-24 object-contain rounded-lg border-2 border-white shadow-lg"
            />
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">Chanse</span>
                <span className="text-2xl font-medium text-white ml-2">Medical</span>
              </div>
              <span className="text-lg text-white/90">Physician & Children's Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/services" active={isActive('/services')}>Services</NavLink>
            <NavLink to="/doctors" active={isActive('/doctors')}>Doctors</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
          </nav>

          {/* Contact button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-white">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <Link to="/appointment">
              <Button intent="primary" size="md">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-secondary to-primary border-t border-white/10 absolute w-full left-0">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" active={isActive('/')} onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/about" active={isActive('/about')} onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink to="/services" active={isActive('/services')} onClick={toggleMenu}>Services</MobileNavLink>
              <MobileNavLink to="/doctors" active={isActive('/doctors')} onClick={toggleMenu}>Doctors</MobileNavLink>
              <MobileNavLink to="/contact" active={isActive('/contact')} onClick={toggleMenu}>Contact</MobileNavLink>
              <Link to="/appointment" onClick={toggleMenu}>
                <Button intent="primary" size="sm" className="w-full">
                  Book Appointment
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`text-base font-medium transition-colors hover:text-white ${
        active ? 'text-white' : 'text-white/80'
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, active, children, onClick }) => {
  return (
    <Link
      to={to}
      className={`text-base font-medium py-2 transition-colors ${
        active ? 'text-white' : 'text-white/80'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;