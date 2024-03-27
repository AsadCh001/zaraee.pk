"use client"
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const categories = [
    {
      name: "Equipments",
      subcategories: ["Tunnel-Farming", "Milking-Machine", "Spray-Machine"],
    },
    
    {
        name: "Pesticides",
        subcategories: ["Herbicides", "Fungicides", "Insecticides"],
      },
    "Veterinary Medicines",
    {
        name: "Cattle Feed",
        subcategories: ["Minerals"],
      },
    {
        name:  "Fertilizers",
        subcategories: ["Bio-Stimulants", "Micro-Nutrients", "Macro-Nutrients", "Silage-inoculant"],
      },
   {
    name:  "Seeds",
    subcategories: ["Vegetable-Seeds", "Hybrid-Corn", "Fodder"],
  },

  ];

  const [showSubcategories, setShowSubcategories] = useState(null);

  const handleMouseEnter = (category) => {
    setShowSubcategories(category);
  };

  const handleMouseLeave = () => {
    // Don't hide subcategories if the mouse is over them
    if (!document.querySelector(".subcategories:hover")) {
      setShowSubcategories(null);
    }
  };

  return (
    <aside className="bg-white w-60 border h-auto m-8">
      <h2 className="text-xl bg-green-100 font-semibold mb-4 border-b p-1 flex justify-center">
        Categories
      </h2>
      <ul>
        {categories.map((category, index) => (
          <li
            key={category.name || category}
            className="mb-3 ml-8 relative"
            onMouseEnter={() => handleMouseEnter(category.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
            className="text-black-400  hover:text-green-600"
              href={`/categories/${category.name?.toLowerCase() || category.toLowerCase()}`}
              passHref
            >

                {category.name || category}
            
            </Link>
            {category.subcategories && showSubcategories === category.name && (
              <div className="absolute left-44 top-0 w-48 bg-white shadow-md ml-8 subcategories">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <Link
                    className="text-black-400 flex justify-center hover:text-green-600 p-2 border-b "
                      href={`/categories/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                      passHref
                    >
                      
                        {subcategory}
                 
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
