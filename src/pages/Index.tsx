
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-foreground">RentaHub</div>
          <div className="flex space-x-4">
            <Button variant="outline" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button className="bg-white text-primary hover:bg-gray-100" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-primary to-brand-blue-light text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Complete Rental Management Solution</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Simplify the rental experience for landlords, tenants, caretakers, and house hunters with a single platform.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg" onClick={() => navigate('/role-selection')}>
              Get Started
            </Button>
          </div>
        </section>
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions For Everyone</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">For Landlords</h3>
                <p className="text-muted-foreground">
                  Manage properties, track income, handle maintenance requests, and stay organized.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">For Tenants</h3>
                <p className="text-muted-foreground">
                  Pay rent online, submit maintenance requests, and access important documents.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">For Caretakers</h3>
                <p className="text-muted-foreground">
                  Register tenants, manage maintenance, and help keep properties running smoothly.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">For House Hunters</h3>
                <p className="text-muted-foreground">
                  Find the perfect rental property, schedule viewings, and apply online with ease.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to simplify your rental experience?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
              Join thousands of users who are already managing their rental experiences with RentaHub.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg" onClick={() => navigate('/role-selection')}>
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RentaHub</h3>
              <p className="text-primary-foreground/80">
                Your complete rental management solution
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Users</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Landlords</a></li>
                <li><a href="#" className="hover:underline">Tenants</a></li>
                <li><a href="#" className="hover:underline">Caretakers</a></li>
                <li><a href="#" className="hover:underline">House Hunters</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} RentaHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
