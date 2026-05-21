import { useState } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  ShieldHalf,
  Search,
} from "lucide-react";

/* ⭐ FAVORITES */
const favorites = [
  { name: "Website", icon: "/icons/web.png", url: "https://yourportfolio.com" },
  { name: "GitHub", icon: "/icons/github.png", url: "https://github.com" },
  { name: "LinkedIn", icon: "/icons/linkedin.png", url: "https://linkedin.com" },
  { name: "Twitter", icon: "/icons/twitter.png", url: "https://twitter.com" },
  { name: "Email", icon: "/icons/mail.png", url: "mailto:you@email.com" },
];

/* 🔁 FREQUENT */
const frequent = [
  { name: "YouTube", icon: "/icons/youtube.png", url: "https://youtube.com" },
  { name: "Google", icon: "/icons/google.png", url: "https://google.com" },
  { name: "Reddit", icon: "/icons/reddit.png", url: "https://reddit.com" },
  { name: "Dribbble", icon: "/icons/dribbble.png", url: "https://dribbble.com" },
  { name: "Pinterest", icon: "/icons/pinterest.png", url: "https://pinterest.com" },
  { name: "Figma", icon: "/icons/figma.png", url: "https://figma.com" },
];

const Safari = () => {
  const [query, setQuery] = useState("");

  /* 🔥 OPEN SITE */
  const openSite = (url) => {
    window.open(url, "_blank");
  };

  /* 🔍 SEARCH */
  const handleSearch = () => {
    if (!query) return;

    const value = query.trim();

    if (
      value.startsWith("http") ||
      value.includes(".com") ||
      value.includes(".in") ||
      value.includes(".org")
    ) {
      window.open(
        value.startsWith("http") ? value : `https://${value}`,
        "_blank"
      );
    } else {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(value)}`,
        "_blank"
      );
    }

    setQuery(""); // clear after search (optional)
  };

  return (
    <section className="flex flex-col w-[900px] h-[600px] max-sm:w-full max-sm:h-full max-sm:min-h-0 bg-[#f6f6f7] rounded-xl overflow-hidden">

      {/* HEADER */}
      <div
        id="window-header"
        className="flex items-center gap-3 px-4 py-2 bg-gray-100"
      >
        <WindowControls target="safari" />

        <ChevronLeft className="icon cursor-pointer" />
        <ChevronRight className="icon cursor-pointer" />

        {/* SEARCH BAR */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border w-[400px] max-sm:w-full max-sm:max-w-full">
            <ShieldHalf size={14} />
            <Search size={14} />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search or enter website name"
              className="flex-1 outline-none text-sm bg-transparent"
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-10 space-y-8 sm:space-y-10">

        {/* FAVORITES */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Favorites</h2>

          <div className="flex gap-6 flex-wrap">
            {favorites.map((item, i) => (
              <div
                key={i}
                onClick={() => openSite(item.url)}
                className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow">
                  <img
                    src={item.icon}
                    className="w-8"
                    onError={(e) =>
                      (e.target.src =
                        "https://cdn-icons-png.flaticon.com/512/565/565547.png")
                    }
                  />
                </div>
                <p className="text-xs">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FREQUENT */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Frequently Visited
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
            {frequent.map((item, i) => (
              <div
                key={i}
                onClick={() => openSite(item.url)}
                className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow">
                  <img
                    src={item.icon}
                    className="w-8"
                    onError={(e) =>
                      (e.target.src =
                        "https://cdn-icons-png.flaticon.com/512/565/565547.png")
                    }
                  />
                </div>
                <p className="text-xs text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PRIVACY */}
        <div className="bg-white rounded-xl p-5 shadow flex items-center gap-3">
          <ShieldHalf />
          <p className="text-sm">
            Safari blocked trackers from profiling you.
          </p>
        </div>
      </div>
    </section>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;