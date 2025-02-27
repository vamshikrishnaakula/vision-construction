
const projects = [
  {
    title: "Luxury Apartment Complex",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
  },
  {
    title: "Corporate Office Tower",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
  },
  {
    title: "Shopping Mall",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
