
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Building, Hammer, HardHat, Users, Briefcase, Factory, Wrench } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "State-of-the-art commercial buildings including offices, retail spaces, and hospitality projects.",
  },
  {
    icon: Building,
    title: "Residential Projects",
    description: "Premium housing complexes, luxury apartments, and integrated townships.",
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description: "Manufacturing facilities, warehouses, and industrial infrastructure projects.",
  },
  {
    icon: HardHat,
    title: "Infrastructure Development",
    description: "Roads, bridges, and other critical infrastructure development projects.",
  },
  {
    icon: Wrench,
    title: "Renovation & Retrofitting",
    description: "Modernization of existing structures with minimal disruption.",
  },
  {
    icon: Hammer,
    title: "Interior Construction",
    description: "Complete interior construction and finishing services.",
  },
  {
    icon: Users,
    title: "Project Management",
    description: "End-to-end project planning, execution, and monitoring services.",
  },
  {
    icon: Briefcase,
    title: "Construction Consulting",
    description: "Expert consultation for construction projects of all scales.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
