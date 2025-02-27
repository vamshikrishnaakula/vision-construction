
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "World Trade Center",
    location: "Mumbai, India",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    description: "A 40-story commercial complex with modern amenities and sustainable design.",
  },
  {
    title: "Green Valley Residences",
    location: "Bangalore, India",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    description: "Luxury residential project with 500+ premium apartments and world-class facilities.",
  },
  {
    title: "City Center Mall",
    location: "Delhi, India",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    description: "Modern shopping mall with entertainment zones and food courts.",
  },
  {
    title: "Tech Park",
    location: "Hyderabad, India",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "IT park with state-of-the-art infrastructure and amenities.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Our Projects</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A showcase of our finest construction projects across India
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.title} className="group relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <span className="text-blue-400 text-sm mb-2">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{project.location}</span>
                      <Button variant="outline" className="text-white border-white hover:bg-white/10">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
