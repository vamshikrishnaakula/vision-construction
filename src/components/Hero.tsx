
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl font-bold mb-6">
            Find the perfect freelance services for your business
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Connect with talented freelancers and get your projects done
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
