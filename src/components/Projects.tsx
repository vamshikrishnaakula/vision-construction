
const projects = [
  {
    title: "2BHK Independent House",
    location: "Karimnagar, India",
    category: "Residential",
    image: "myworks/Proj_independent_1.jpeg",
    description:
      "A 2 BHK Independent House with modern amenities and sustainable design.",
  },
  {
    title: "3BHK Independent House",
    location: "Karimnagar, India",
    category: "Residential",
    image: "myworks/Proj_2_independent_2.jpeg",
    description:
      "Luxury 3 BHK Independent House with modern amenities and sustainable design..",
  },
  {
    title: "Duplex  Bedroom Hall Kitchen",
    location: "Karimnagar, India",
    category: "Residential",
    image: "myworks/Proj_4_independent.jpeg",
    description:
      "Modern Duplex with 4 Bedroom Hall Kitchen and Spacious Living Area",
  },
  {
    title: "Plan for 3BHK Independent House",
    location: "Hyderabad, India",
    category: "",
    image: "myworks/proj_5_independent.jpeg",
    description: "Independent infrastructure and amenities.",
  },
];

export const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our landmark projects across India
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
