import dayjs from "dayjs";
import { Signal, Wifi, BatteryFull } from "lucide-react";
import { dockApps } from "#constants";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import { locations } from "#constants";

const DOCK_APPS = dockApps.filter((a) => a.canOpen && ["finder", "safari", "contact", "trash"].includes(a.id));
// Gallery remains available on desktop, but is intentionally excluded from the
// mobile home screen.
const HOME_APPS = dockApps.filter((a) => a.canOpen && a.id !== "photos");

const MobileShell = () => {
  const { windows, openWindow, closeAllWindows } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const hasOpenApp = Object.entries(windows).some(
    ([, w]) => w.isOpen && !w.isMinimized
  );

  const openApp = (app) => {
    if (!app.canOpen) return;

    const win = windows[app.id];
    if (win?.isOpen && !win.isMinimized) {
      closeAllWindows();
      return;
    }

    closeAllWindows();

    if (app.id === "trash") {
      openWindow("finder");
      setActiveLocation(locations.trash);
      return;
    }

    openWindow(app.id);
  };

  const goHome = () => closeAllWindows();

  return (
    <section
      id="iphone-shell"
      className={hasOpenApp ? "app-open" : ""}
      aria-hidden={hasOpenApp}
    >
      <div className="iphone-screen">
        <header className="ios-status-bar" aria-hidden="true">
          <time>{dayjs().format("h:mm")}</time>
          <div className="dynamic-island" />
          <div className="status-icons">
            <Signal size={14} strokeWidth={2.5} />
            <Wifi size={14} strokeWidth={2.5} />
            <BatteryFull size={16} strokeWidth={2.5} />
          </div>
        </header>

        <div className="ios-home-screen">
          <div className="ios-app-grid">
            {HOME_APPS.map((app) => (
              <button
                key={app.id}
                type="button"
                className="ios-app-icon"
                onClick={() => openApp(app)}
                aria-label={app.name}
              >
                <span className="icon-squircle">
                  <img
                    src={`/images/${app.icon}`}
                    alt=""
                    loading="lazy"
                  />
                </span>
                <span className="app-label">{app.name}</span>
              </button>
            ))}
          </div>

          {/* <div className="ios-page-dots" aria-hidden="true">
            <span className="active" />
            <span />
          </div> */}

          <div className="ios-dock">
            {DOCK_APPS.map((app) => (
              <button
                key={app.id}
                type="button"
                className="ios-dock-icon"
                onClick={() => openApp(app)}
                aria-label={app.name}
              >
                <img src={`/images/${app.icon}`} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="home-indicator"
          onClick={goHome}
          aria-label="Go to Home Screen"
        />
      </div>
    </section>
  );
};

export default MobileShell;
