import React from "react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Clothing",
    image:
      "https://i.ibb.co.com/7xhxFysd/premium-photo-1675186049222-0b5018db6ce9.jpg",
  },
  {
    id: 3,
    name: "Food Items",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Furniture",
    image:
      "https://i.ibb.co.com/Cs8Zd2Z7/mid-century-modern-living-room-interior-design-with-monstera-tree.jpg",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2
        className="
          text-3xl 
          md:text-4xl 
          lg:text-5xl 
          font-bold 
          mb-8 
          text-center 
          bg-gradient-to-r 
          from-purple-500 
          via-pink-500 
          to-red-500 
          bg-clip-text 
          text-transparent
        "
      >
        Featured Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-default"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center font-semibold">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
