
const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "1000+", label: "Happy Clients" },
  { number: "2500+", label: "Employees" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
