
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/4790e21d-94fd-4d00-ba6b-86932eb2ed9c.png"
              alt="Vision Constructions"
              className="h-16"
            />
          </a>
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost">About Us</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="ghost">Careers</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
