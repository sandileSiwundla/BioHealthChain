import Link from "next/link";

const resources = [
  {
    link: "/partners",
    label: "Reliable",
    width: 1200,
    height: 200,
  },
  {
    link: "/developers",
    label: "Available",
    width: 1200,
    height: 200,

  },
  {
    link: "/researchers",
    label: "Secure",
    width: 1200,
    height: 200,
  },
];

export default function Partner() {
  return (
    <div id="resources" className="py-24 bg-blue-100">
      <h2 className="text-3xl font-extrabold sm:text-4xl text-center mb-4 bg-clip-text text-transparent bg-black">
        Features
      </h2>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 items-center">
        {resources.map((resource, index) => (
          <Link key={index} href={resource.link}>
            <button
              className="w-full flex flex-col items-center justify-center rounded-xl shadow-xl transition-all duration-500 group hover:scale-110 hover:opacity-60 text-white font-bold py-6 relative"
              style={{ width: resource.width, height: resource.height }}
            >
              <span className="absolute text-2xl font-bold text-black">{resource.label}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
