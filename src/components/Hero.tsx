
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a"
          alt="Modern Construction"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl font-bold mb-6">
            Building Excellence, Delivering Dreams
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Vision Constructions: Where Innovation Meets Architecture
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Our Projects
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
