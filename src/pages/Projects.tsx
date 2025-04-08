import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

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

const project2 = [
  {
    title: "Plan for 3BHK Independent House",
    location: "Hyderabad, India",
    category: "",
    image: "myworks/Construction_1_video.mp4",
    description:
      "Luxury 3 BHK Independent House with modern amenities and sustainable design..",
  },

  {
    title: "Independent House",
    location: "Hyderabad, India",
    category: "",
    image: "myworks/site_video.mp4",
    description:
      "Luxury 3 BHK Independent House with modern amenities and sustainable design..",
  },

  {
    title: "Hanuman Temple Survey",
    location: "Ramagundam, India",
    category: "",
    image: "myworks/machine_cvideo.mp4",
    description:
      "Hanuman Temple Survey with Temple Authorities",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">
              Our Projects
            </h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              A showcase of our finest construction projects across India
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    {/* <span className="text-400 text-sm mb-2">
                      {project.category}
                    </span> */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{project.location}</span>
                      {/* <Button variant="outline" className=" border-white">
                        View Details
                      </Button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br></br>
            <br></br>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {project2.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <video
                    src={project.image}
                    autoPlay
                    muted
                    loop
                    className="w-full h-[400px] object-cover group-hover:scale-110  duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <span className="text-blue-400 text-sm mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{project.location}</span>
                      {/* <Button variant="outline" className=" border-white">
                        View Details
                      </Button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br></br>
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div
                  className="group relative overflow-hidden rounded-lg"
                >
                 <img
                    src="myworks/Hanuman_temple_Top.jpeg"
                    alt="Top View"
                    className="w-full h-[800px] object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <span className="text-blue-400 text-sm mb-2">
                      Temple Project
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Hanuman Temple Ramagundam
                    </h3>
                    <p className="text-gray-300 mb-4">Hanuman Temple Ramagundam</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Ramagundam India</span>
                      {/* <Button variant="outline" className=" border-white">
                        View Details
                      </Button> */}
                    </div>
                  </div>
                </div>

            </div>
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div
                  className="group relative overflow-hidden rounded-lg"
                >
                 <img
                    src="myworks/HanumanTemple_frontview.jpeg"
                    alt="Top View"
                    className="w-full"
                  />
                  <div className="absolute inset-0  flex flex-col justify-end p-6">
                    <span className="text-blue-400 text-sm mb-2">
                      Temple Project
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Hanuman Temple Ramagundam
                    </h3>
                    <p className="text-gray-300 mb-4">Hanuman Temple Ramagundam</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Ramagundam India</span>
                      {/* <Button variant="outline" className=" border-white">
                        View Details
                      </Button> */}
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
