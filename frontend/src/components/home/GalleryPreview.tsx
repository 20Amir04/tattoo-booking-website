import { Link } from "react-router-dom";
import { galleryPreviewData } from "../../data/galleryPreviewData";

function GalleryPreview() {
    return(
        <section className="bg-neutral-100 px-4 text-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-light font-mono uppercase tracking-wide sm:text-5xl lg:text-6xl">
                        Our Work
                    </h2>
                </div>

                <div className="columns-1 gap-1 space-y-4 sm:columns-2 lg:columns-4">
                    {galleryPreviewData.map((item) => (
                        <Link
                            key={item.id}
                            to={`/gallery?category=${item.slug}`}
                            className="group relative mb-4 block overflow-hidden break-inside-avoid"
                        >
                            <img
                            src={item.image}
                            alt={item.category}
                            className="w-full object-cover transition duration-500 group-hover:scale-120"
                            />

                            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25"/>

                            <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-black px-5 py-4 text-white transition duration-300 group-hover:translate-y-0">
                                <p className="text-2xl font-medium font-mono">{item.category}</p>
                                <p className="mt-1 text-sm text-neutral-300">
                                    {item.imageCount} pics
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GalleryPreview;