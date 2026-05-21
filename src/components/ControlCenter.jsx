import useControlStore from "#store/control";
import { Wifi, Bluetooth, Airplay, Moon, Sun } from "lucide-react";
import { useEffect, useRef } from "react";
import MusicPlayer from "#components/MusicPlayer";

const Toggle = ({ icon: Icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition
    ${active ? "bg-blue-500 text-white" : "bg-white/20 text-white hover:bg-white/30"}`}
  >
    <Icon size={18} />
    <span className="text-xs mt-1">{label}</span>
  </div>
);

const ControlCenter = () => {
  const {
    wifi,
    bluetooth,
    airdrop,
    darkMode,
    brightness,
    volume,
    isOpen,
    toggle,
    setBrightness,
    setVolume,
    togglePanel,
  } = useControlStore();

  const panelRef = useRef(null);

  /* 🌗 DARK MODE */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* 💡 BRIGHTNESS */
  useEffect(() => {
    document.body.style.filter = `brightness(${brightness}%)`;
  }, [brightness]);



//   /* ❌ CLOSE ON OUTSIDE CLICK */
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (panelRef.current && !panelRef.current.contains(e.target)) {
//         togglePanel();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClick);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, [isOpen]);


useEffect(() => {
  const handleClick = (e) => {
    // 🔥 if click is inside control center → do nothing
    if (panelRef.current?.contains(e.target)) return;

    // 🔥 if click is on navbar icon → do nothing (let toggle handle it)
    const toggleBtn = document.getElementById("control-toggle");
    if (toggleBtn?.contains(e.target)) return;

    // ✅ otherwise close
    togglePanel();
  };

  if (isOpen) {
    document.addEventListener("mousedown", handleClick);
  }

  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
}, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="
        fixed top-12 right-5 w-[300px]
        bg-black/60 backdrop-blur-xl text-white
        p-4 rounded-2xl shadow-2xl z-[9999]
        space-y-4
        animate-in slide-in-from-right duration-300
      "
    >
      {/* TOGGLES */}
      <div className="grid grid-cols-2 gap-3">
        <Toggle icon={Wifi} label="WiFi" active={wifi} onClick={() => toggle("wifi")} />
        <Toggle icon={Bluetooth} label="Bluetooth" active={bluetooth} onClick={() => toggle("bluetooth")} />
        <Toggle icon={Airplay} label="AirDrop" active={airdrop} onClick={() => toggle("airdrop")} />
        <Toggle
          icon={darkMode ? Sun : Moon}
          label="Mode"
          active={darkMode}
          onClick={() => toggle("darkMode")}
        />
      </div>

      {/* BRIGHTNESS */}
      {/* <div>
        <p className="text-xs mb-1 opacity-70">Brightness</p>
        <input
          type="range"
          min="50"
          max="120"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          className="w-full cursor-pointer"
        />
      </div> */}


<div>
  <p className="text-xs mb-2 opacity-70">Display</p>

  <div className="flex items-center gap-2">
    <span className="text-xs opacity-60"></span>

    {/* <input
      type="range"
      min="50"
      max="120"
      value={brightness}
      onChange={(e) => setBrightness(e.target.value)}
      className="mac-slider brightness"
    /> */}

    <input
  type="range"
  min="50"
  max="120"
  value={brightness}
  onChange={(e) => setBrightness(e.target.value)}
  className="mac-slider brightness"
  style={{
    "--progress": `${((brightness - 50) / 70) * 100}%`,
  }}
/>

    <span className="text-xs opacity-60"></span>
  </div>
</div>



      {/* VOLUME */}
      {/* <div>
        <p className="text-xs mb-1 opacity-70">Sound</p>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="w-full cursor-pointer"
        />
      </div> */}

      <div>
  <p className="text-xs mb-2 opacity-70">Sound</p>

  <div className="flex items-center gap-2">
    <span className="text-xs opacity-60"></span>

    {/* <input
      type="range"
      min="0"
      max="100"
      value={volume}
      onChange={(e) => setVolume(e.target.value)}
      className="mac-slider volume"
    /> */}
    <input
  type="range"
  min="0"
  max="100"
  value={volume}
  onChange={(e) => setVolume(e.target.value)}
  className="mac-slider volume"
  style={{
    "--progress": `${volume}%`,
  }}
/>

    <span className="text-xs opacity-60"></span>
  </div>
</div>

      {/* MUSIC */}
      <MusicPlayer volume={volume} />
    </div>
  );
};

export default ControlCenter;