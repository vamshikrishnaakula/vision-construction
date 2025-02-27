
import { Navbar } from "@/components/Navbar";
import { Building, Users, Target, Award } from "lucide-react";

const values = [
  {
    icon: Building,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Our strength lies in our collaborative approach",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Embracing new technologies and methodologies",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Maintaining the highest standards in construction",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">About Vision Constructions</h1>
                <p className="text-gray-600 mb-4">
                  Founded in 1998, Vision Constructions has established itself as one of India's leading construction companies. 
                  With over two decades of experience, we've successfully delivered numerous landmark projects across the country.
                </p>
                <p className="text-gray-600">
                  Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for both 
                  commercial and residential projects. We take pride in our ability to transform architectural visions into reality.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                  alt="About Us"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
