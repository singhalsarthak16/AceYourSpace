import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.jpg" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const 
HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-24">
        {/* Categories Section */}
        <section>
          <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
            Explore Our Categories
          </h1>
          <p className="text-center text-xl text-gray-300 mb-12">
            Discover the latest trends in eco-friendly fashion
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryItem category={category} key={category.name} />
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section>
          {!isLoading && Array.isArray(products) && products.length > 0 && (
            <>
              <FeaturedProducts featuredProducts={products} />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
