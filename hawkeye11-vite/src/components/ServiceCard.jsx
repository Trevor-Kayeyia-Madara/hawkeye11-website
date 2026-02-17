import Button from "./Button";

export default function ServiceCard({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group opacity-0 animate-fade-in transform duration-300 hover:scale-103">
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Text */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 text-sm mb-6 leading-relaxed">{description}</p>

        <Button text="Learn More" href={link} variant="gold" size="sm" className="mt-2" />
      </div>
    </div>
  );
}
