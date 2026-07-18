import { ChevronLeft } from "lucide-react";
import { locations, mobileAppTitles } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useIsMobile } from "../hooks/useIsMobile";

const MobileNavBar = () => {
  const isMobile = useIsMobile();
  const { windows, closeWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  if (!isMobile) return null;

  const openEntries = Object.entries(windows).filter(
    ([, w]) => w.isOpen && !w.isMinimized
  );

  if (openEntries.length === 0) return null;

  const topEntry = openEntries.reduce((best, curr) =>
    !best || curr[1].zIndex > best[1].zIndex ? curr : best
  );

  const topKey = topEntry[0];
  const title = mobileAppTitles[topKey] ?? topKey;

  const goBack = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Finder navigation is a state within the same window, so restore its
    // parent folder before dismissing the Finder itself.
    if (topKey === "finder" && activeLocation?.type !== "work") {
      setActiveLocation(locations.work);
      return;
    }

    closeWindow(topKey);
  };

  return (
    <div
      className="ios-nav-bar ios-nav-bar-global"
      role="navigation"
      aria-label="App navigation"
    >
      <button
        type="button"
        className="ios-back-btn"
        onClick={goBack}
        aria-label="Go back"
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
        <span>Back</span>
      </button>
      <h2 className="ios-nav-title">{title}</h2>
      <div className="ios-nav-spacer" aria-hidden="true" />
    </div>
  );
};

export default MobileNavBar;
