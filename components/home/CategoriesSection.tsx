import CategoryCard from '@/components/cards/CategoryCard';
import { categories } from '@/data/opportunities';

export default function CategoriesSection() {
  return (
    <section id="categories" className="px-4 sm:px-6 lg:px-8 py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
          <p className="text-gray-500 text-sm">
            Pick a category that matches your skills and start earning.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
