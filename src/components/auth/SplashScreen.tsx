
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useAuth();
  const { toast } = useToast();
  const [animateContent, setAnimateContent] = useState(false);

  const handleGetStarted = () => {
    toast({
      title: "Welcome to QwetuLink",
      description: "Your complete rental management solution",
    });
    navigate('/role-selection');
  };

  useEffect(() => {
    if (isAuthenticated && role) {
      navigate(`/dashboard/${role}`);
    }
    
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setAnimateContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate, role]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/90 to-secondary/90 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
          alt="QwetuLink Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/30 blur-3xl"></div>
        </div>
      </div>
      
      {/* Content with staggered animation */}
      <div className={`flex flex-col items-center z-10 px-6 text-center transition-all duration-700 transform ${
        animateContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Logo or app name with shadow for better readability */}
        <div className="mb-6 transform transition-all duration-700 delay-100">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-2 font-aptos drop-shadow-md">
            QwetuLink
          </h1>
          <div className="h-1 w-24 bg-white/70 mx-auto rounded-full my-3"></div>
        </div>
        
        {/* Tagline with animation delay */}
        <p className={`text-white/90 text-xl md:text-2xl mb-10 font-aptos max-w-md leading-relaxed transition-all duration-700 delay-200 transform ${
          animateContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Your complete rental management solution, simplified and streamlined
        </p>
        
        {/* Call to action button with animation delay */}
        <div className={`transition-all duration-700 delay-300 transform ${
          animateContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Button 
            onClick={handleGetStarted} 
            size="lg"
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-aptos group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
