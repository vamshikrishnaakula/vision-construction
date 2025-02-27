
import { Card, CardContent } from "./ui/card";
import { Building2, Hammer, Users, HardHat } from "lucide-react";

const services = [
  {
    title: "Commercial Construction",
    description: "State-of-the-art commercial buildings and office spaces",
    icon: Building2,
  },
  {
    title: "Residential Projects",
    description: "Premium housing complexes and luxury apartments",
    icon: Hammer,
  },
  {
    title: "Infrastructure Development",
    description: "Roads, bridges, and critical infrastructure projects",
    icon: HardHat,
  },
  {
    title: "Project Management",
    description: "End-to-end project planning and execution",
    icon: Users,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Delivering excellence in construction with innovative solutions and unmatched expertise
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
  );
};
