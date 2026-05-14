export const galleryCategories = [
    "all",
    "blackwork",
    "geometric",
    "floral",
    "fine line",
    "color",
    "anime",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
    id: number;
    image: string;
    category: Exclude<GalleryCategory, "all">;
};

export const galleryData: GalleryItem[] = [
    { id: 1, image: "/assets/gallery/blackwork-1.jpg", category: "blackwork" },
    { id: 2, image: "/assets/gallery/geometric-1.jpg", category: "geometric" },
    { id: 3, image: "/assets/gallery/floral-1.jpg", category: "floral" },
    { id: 4, image: "/assets/gallery/fineLine-1.jpeg", category: "fine line" },
    { id: 5, image: "/assets/gallery/color-1.jpg", category: "color" },
    { id: 6, image: "/assets/gallery/anime-1.jpg", category: "anime" },

    { id: 7, image: "/assets/gallery/blackwork-2.jpg", category: "blackwork" },
    { id: 8, image: "/assets/gallery/geometric-2.jpg", category: "geometric" },
    { id: 9, image: "/assets/gallery/floral-2.jpg", category: "floral" },
    { id: 10, image: "/assets/gallery/fineLine-2.jpg", category: "fine line" },
    { id: 11, image: "/assets/gallery/color-2.jpg", category: "color" },
    { id: 12, image: "/assets/gallery/anime-2.jpg", category: "anime" },

    { id: 13, image: "/assets/gallery/blackwork-3.jpeg", category: "blackwork" },
    { id: 14, image: "/assets/gallery/geometric-3.jpg", category: "geometric" },
    { id: 15, image: "/assets/gallery/floral-3.jpg", category: "floral" },
    { id: 16, image: "/assets/gallery/fineLine-3.jpg", category: "fine line" },
    { id: 17, image: "/assets/gallery/color-3.jpg", category: "color" },
    { id: 18, image: "/assets/gallery/anime-3.jpg", category: "anime" },

    { id: 19, image: "/assets/gallery/blackwork-4.jpg", category: "blackwork" },
    { id: 20, image: "/assets/gallery/geometric-4.jpg", category: "geometric" },
    { id: 21, image: "/assets/gallery/floral-4.jpg", category: "floral" },
    { id: 22, image: "/assets/gallery/fineLine-4.jpg", category: "fine line" },
    { id: 23, image: "/assets/gallery/color-4.jpg", category: "color" },
    { id: 24, image: "/assets/gallery/anime-4.jpg", category: "anime" },

    { id: 25, image: "/assets/gallery/blackwork-5.jpg", category: "blackwork" },
    { id: 26, image: "/assets/gallery/geometric-5.jpg", category: "geometric" },
    { id: 27, image: "/assets/gallery/floral-5.jpeg", category: "floral" },
    { id: 28, image: "/assets/gallery/fineLine-5.jpg", category: "fine line" },
    { id: 29, image: "/assets/gallery/color-5.jpg", category: "color" },
    { id: 30, image: "/assets/gallery/anime-5.jpg", category: "anime" },

    { id: 31, image: "/assets/gallery/blackwork-6.jpg", category: "blackwork" },
    { id: 32, image: "/assets/gallery/geometric-6.jpg", category: "geometric" },
    { id: 33, image: "/assets/gallery/floral-6.jpg", category: "floral" },
    { id: 34, image: "/assets/gallery/fineLine-6.jpg", category: "fine line" },
    { id: 35, image: "/assets/gallery/color-6.jpeg", category: "color" },
    { id: 36, image: "/assets/gallery/anime-6.jpg", category: "anime" },

    { id: 37, image: "/assets/gallery/blackwork-7.jpg", category: "blackwork" },
    { id: 38, image: "/assets/gallery/geometric-7.jpg", category: "geometric" },
    { id: 39, image: "/assets/gallery/floral-7.jpg", category: "floral" },
    { id: 40, image: "/assets/gallery/fineLine-7.jpg", category: "fine line" },
    { id: 41, image: "/assets/gallery/color-7.jpg", category: "color" },
    { id: 42, image: "/assets/gallery/anime-7.jpg", category: "anime" },

    { id: 43, image: "/assets/gallery/blackwork-8.png", category: "blackwork" }, 
    { id: 44, image: "/assets/gallery/geometric-8.jpeg", category: "geometric" },  
    { id: 45, image: "/assets/gallery/floral-8.jpg", category: "floral" },  
    { id: 46, image: "/assets/gallery/fineLine-8.jpeg", category: "fine line" },
    { id: 47, image: "/assets/gallery/color-8.jpg", category: "color" },
    { id: 48, image: "/assets/gallery/anime-8.jpg", category: "anime" },
];