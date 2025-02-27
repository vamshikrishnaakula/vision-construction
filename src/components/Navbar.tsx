
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/4790e21d-94fd-4d00-ba6b-86932eb2ed9c.png"
              alt="Vision Constructions"
              className="h-16"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/about">
              <Button variant="ghost">About Us</Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost">Services</Button>
            </Link>
            <Link to="/projects">
              <Button variant="ghost">Projects</Button>
            </Link>
            <Link to="/careers">
              <Button variant="ghost">Careers</Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
