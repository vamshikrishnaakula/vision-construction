
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-primary">
              fiverr
            </a>
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search for services"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 w-64"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Become a Seller</Button>
            <Button variant="ghost">Sign In</Button>
            <Button>Join</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
