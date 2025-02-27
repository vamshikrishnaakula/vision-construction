
import { Card } from "./ui/card";

const categories = [
  { name: "Graphics & Design", icon: "🎨" },
  { name: "Digital Marketing", icon: "📱" },
  { name: "Writing & Translation", icon: "✍️" },
  { name: "Video & Animation", icon: "🎥" },
  { name: "Music & Audio", icon: "🎵" },
  { name: "Programming & Tech", icon: "💻" },
  { name: "Business", icon: "💼" },
  { name: "Lifestyle", icon: "🌟" },
];

export const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="group hover:shadow-lg transition-all duration-300">
              <button className="w-full h-full p-6 text-left">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
