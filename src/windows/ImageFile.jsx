import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageWindowContent = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  const [index, setIndex] = useState(data?.index ?? 0);
  const touchStartX = useRef(null);

  useEffect(() => {
    setIndex(data?.index ?? 0);
  }, [data?.index, data?.imageUrl]);

  if (!data) return null;

  const { name, imageUrl, gallery: galleryItems } = data;
  const hasGallery = Array.isArray(galleryItems) && galleryItems.length > 0;

  const currentSrc = hasGallery
    ? (galleryItems[index]?.img ?? galleryItems[index]?.imageUrl)
    : imageUrl;

  const currentName = hasGallery
    ? galleryItems[index]?.name ?? `Photo ${index + 1}.png`
    : name;

  const goPrev = () => {
    if (!hasGallery) return;
    setIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  };

  const goNext = () => {
    if (!hasGallery) return;
    setIndex((i) => (i + 1) % galleryItems.length);
  };

  const setWallpaper = (img) => {
    document.body.style.backgroundImage = `url(${img})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background-image 0.5s ease-in-out";
    localStorage.setItem("wallpaper", img);
  };

  return (
    <section className="imgfile-window w-xl flex flex-col max-sm:w-full max-sm:h-full max-sm:min-h-0">
      <div
        id="window-header"
        className="flex items-center gap-2 p-2 bg-gray-200 shrink-0"
      >
        <WindowControls target="imgfile" />

        {hasGallery && galleryItems.length > 1 && (
          <button
            type="button"
            className="imgfile-nav-btn max-sm:hidden"
            onClick={goPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        <h2 className="imgfile-title flex-1 text-center font-medium text-[#5f6266] truncate pointer-events-none">
          {currentName}
        </h2>

        {hasGallery && galleryItems.length > 1 && (
          <button
            type="button"
            className="imgfile-nav-btn max-sm:hidden"
            onClick={goNext}
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      <div
        className="preview flex-1 min-h-0 overflow-y-auto overscroll-contain relative"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (!hasGallery || touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (delta > 60) goPrev();
          else if (delta < -60) goNext();
          touchStartX.current = null;
        }}
      >
        {hasGallery && galleryItems.length > 1 && (
          <>
            <button
              type="button"
              className="imgfile-float-nav imgfile-float-nav-prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="imgfile-float-nav imgfile-float-nav-next"
              onClick={goNext}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {currentSrc ? (
          <img
            src={currentSrc}
            alt={currentName}
            className="imgfile-image"
          />
        ) : null}
      </div>

      {/* Bottom Wallpaper Button */}
      <div className="flex items-center justify-center gap-2 p-3 bg-gray-100 border-t border-gray-200 shrink-0">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
          onClick={() => setWallpaper(currentSrc)}
          aria-label="Set as wallpaper"
          title="Set as wallpaper"
        >
          <Image size={18} />
          Set Wallpaper
        </button>
      </div>
    </section>
  );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");

export default ImageWindow;
