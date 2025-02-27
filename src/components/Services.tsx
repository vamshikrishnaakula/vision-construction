
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "I will design modern and minimalist logo",
    description: "Professional logo design with unlimited revisions and source files included",
    price: 29.99,
    rating: 4.9,
    reviews: 2837,
    seller: {
      name: "Alex Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      level: "Top Rated Seller",
    },
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "I will be your professional content writer",
    description: "SEO-optimized content writing for your website or blog",
    price: 49.99,
    rating: 4.8,
    reviews: 1523,
    seller: {
      name: "Sarah Writer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      level: "Level 2 Seller",
    },
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "I will develop your React application",
    description: "Full-stack development using React, Node.js, and MongoDB",
    price: 99.99,
    rating: 5.0,
    reviews: 892,
    seller: {
      name: "David Dev",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      level: "Rising Talent",
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "I will create stunning social media designs",
    description: "Eye-catching social media graphics for your brand",
    price: 39.99,
    rating: 4.7,
    reviews: 1238,
    seller: {
      name: "Emma Creative",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      level: "Level 1 Seller",
    },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

export const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
