import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home } from "#components";
import {
  Contact,
  Finder,
  ImageFile,
  Photos,
  Resume,
  Safari,
  Terminal,
  TextFile,
} from "#windows";

import ControlCenter from "#components/ControlCenter";
import MobileShell from "#components/MobileShell";
import MobileNavBar from "#components/MobileNavBar";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main className="max-sm:iphone-root">

      {/* 💻 DESKTOP (macOS) */}
      <div id="desktop" className="relative w-full h-screen max-sm:hidden">
        <Home />
        <Navbar />
        <Dock />
      </div>

      {/* 📱 MOBILE (iPhone home screen) */}
      <div id="mobile" className="hidden max-sm:block relative w-full h-dvh">
        <MobileShell />
      </div>

      {/* 🪟 APP WINDOWS (shared desktop + mobile) */}
      <Finder />
      <Terminal />
      <Safari />
      <Resume />
      <TextFile />
      <ImageFile />
      <Contact />
      <Photos />

      <MobileNavBar />

      <div className="max-sm:hidden">
        <ControlCenter />
        <Welcome />
      </div>

    </main>
  );
};

export default App;