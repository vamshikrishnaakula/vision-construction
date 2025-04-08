
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const positions = [
  {
    title: "Senior Project Manager",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "8+ years",
  },
  {
    title: "Civil Engineer",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
  },
  {
    title: "Architecture Designer",
    location: "Karimnagar, India",
    type: "Full-time",
    experience: "4-6 years",
  },
  {
    title: "Construction Supervisor",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "5+ years",
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="relative py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl mb-8">
                Build your career with one of India's leading construction companies
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {positions.map((position) => (
                <Card key={position.title} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Briefcase className="w-8 h-8 text-blue-600" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <p className="text-gray-600 mb-4">{position.location}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span>{position.type}</span>
                          <span>{position.experience}</span>
                        </div>
                        <Button>Apply Now</Button>
                      </div>
                    </div>
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

export default CareersPage;
