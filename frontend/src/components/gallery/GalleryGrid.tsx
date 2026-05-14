import { useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  galleryCategories,
  galleryData,
  type GalleryCategory,
} from "../../data/galleryData";

function formatCategoryLabel(category: GalleryCategory) {
  if (category === "all") return "All";
  if (category === "fine line") return "Fine Line";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function getValidCategory(value: string | null): GalleryCategory {
  if (value && galleryCategories.includes(value as GalleryCategory)) {
    return value as GalleryCategory;
  }

  return "all";
}



function GalleryGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
    const sectionRef = useRef<HTMLElement | null>(null);
    
    const scrollToGalleryTop = () => {
        sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

  const activeCategory = getValidCategory(searchParams.get("category"));

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return galleryData;
    }

    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: GalleryCategory) => {
    if (category === "all") {
      setSearchParams({});
      return;
    } else {
        setSearchParams({ category });
    }

    scrollToGalleryTop();
  };

  const handleCardClick = (category: Exclude<GalleryCategory, "all">) => {
    if (activeCategory !== "all") return;

    setSearchParams({ category });
    scrollToGalleryTop();
  };

  return (
    <section
        ref={sectionRef}
        className="bg-neutral-100 px-4 py-20 text-black sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {galleryCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`text-lg transition ${
                  isActive
                    ? "font-semibold font-mono underline underline-offset-8 text-black"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {formatCategoryLabel(category)}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const showCategoryOverlay = activeCategory === "all";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleCardClick(item.category)}
                className={`group relative overflow-hidden bg-white text-left ${
                  activeCategory === "all" ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="h-105 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {showCategoryOverlay && (
                  <>
                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                    <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-black px-5 py-4 text-white transition duration-300 group-hover:translate-y-0">
                      <p className="text-2xl font-medium font-mono">
                        {formatCategoryLabel(item.category)}
                      </p>
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GalleryGrid;