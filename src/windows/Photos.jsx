import { Mail, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";

import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { gallery } from "#constants";
import useWindowStore from "#store/window";

const Photos = () => {
  const email = "kisku.anirudra@gmail.com";
  const { openWindow } = useWindowStore();
  const [contextMenu, setContextMenu] = useState(null);

  const setWallpaper = (img) => {
    document.body.style.backgroundImage = `url(${img})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.transition = "background-image 0.5s ease-in-out";
    localStorage.setItem("wallpaper", img);
    setContextMenu(null);
  };

  useEffect(() => {
    const saved = localStorage.getItem("wallpaper");
    if (saved) setWallpaper(saved);
  }, []);

  const openImage = (item, idx) => {
    openWindow("imgfile", {
      name: `Photo ${item.id}.png`,
      imageUrl: item.img,
      gallery,
      index: idx,
    });
    setContextMenu(null);
  };

  const handleContextMenu = (e, item, idx) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      item,
      idx,
    });
  };

  useEffect(() => {
    const handleClickOutside = () => setContextMenu(null);
    if (contextMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [contextMenu]);

  return (
    <div className="photos-window flex flex-col h-full min-h-0 w-full bg-white relative">
      {/* Desktop macOS title bar */}
      <div
        id="window-header"
        className="photos-desktop-header window-drag-handle flex items-center shrink-0 border-b border-gray-200 max-sm:hidden"
      >
        <WindowControls target="photos" />
        <h2 className="flex-1 text-center font-bold text-gray-800">Gallery</h2>
        <a
          href={`mailto:${email}`}
          className="p-2 mr-2 hover:bg-gray-100 rounded-md transition"
          title="Email me"
        >
          <Mail size={18} />
        </a>
      </div>

      <div className="photos-gallery-area flex-1 min-h-0 overflow-y-auto overscroll-contain">
        <ul className="photos-grid">
          {gallery.map((item, idx) => (
            <li key={item.id}>
              <button
                type="button"
                className="photos-grid-item"
                onClick={(e) => {
                  e.stopPropagation();
                  openImage(item, idx);
                }}
                onContextMenu={(e) => handleContextMenu(e, item, idx)}
                aria-label={`View photo ${item.id}`}
              >
                <img
                  src={item.img}
                  alt={`Gallery ${item.id}`}
                  className="photos-grid-img"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="fixed bg-white border border-gray-200 rounded-lg shadow-xl z-[10000] min-w-[200px] overflow-hidden"
          style={{
            left: `${Math.min(contextMenu.x, window.innerWidth - 220)}px`,
            top: `${Math.min(contextMenu.y, window.innerHeight - 120)}px`,
          }}
        >
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 flex items-center gap-2 border-b border-gray-100"
            onClick={() => openImage(contextMenu.item, contextMenu.idx)}
          >
            <Maximize2 size={14} />
            View Photo
          </button>
          <button
            className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 flex items-center gap-2"
            onClick={() => setWallpaper(contextMenu.item.img)}
          >
            <span>🖼️</span>
            Set as Wallpaper
          </button>
        </div>
      )}
    </div>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
