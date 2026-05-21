import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useIsMobile } from "../hooks/useIsMobile";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const window = windows[windowKey];
    const isMobile = useIsMobile();

    const { isOpen, isMinimized, isMaximized, zIndex } = window;

    const ref = useRef(null);
    const draggableRef = useRef(null);

    /* ================= SHOW / HIDE ================= */
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      const visible = isOpen && !isMinimized;
      el.style.display = visible ? (isMobile ? "flex" : "block") : "none";

      if (isMobile) {
        gsap.set(el, { clearProps: "transform,opacity" });
      }
    }, [isOpen, isMinimized, isMobile]);

    /* ================= OPEN ANIMATION (desktop only) ================= */
    useGSAP(() => {
      if (isMobile) return;

      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power3.out" }
      );
    }, [isOpen, isMinimized, isMobile]);

    /* ================= DRAG (desktop only) ================= */
    useGSAP(() => {
      if (isMobile || !ref.current || isMaximized) return;

      const header = ref.current.querySelector("#window-header");
      if (!header) return;

      draggableRef.current?.kill();

      draggableRef.current = Draggable.create(ref.current, {
        trigger: header,
        handle: header,
        bounds: "main",
        inertia: true,
        onPress: () => focusWindow(windowKey),
      })[0];

      return () => draggableRef.current?.kill();
    }, [isMaximized, windowKey, isMobile]);

    /* ================= WINDOW SIZE ================= */
    const windowClasses = isMobile
      ? "mobile-app-window"
      : isMaximized
        ? "fixed top-0 left-0 w-screen h-screen rounded-none"
        : windowKey === "terminal"
          ? "absolute w-[600px] h-[400px]"
          : windowKey === "photos"
            ? "absolute w-fit h-fit"
            : "absolute w-fit h-fit";

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex:
            isMobile && isOpen && !isMinimized ? zIndex : isMobile ? -1 : zIndex,
        }}
        className={`${windowClasses} bg-white text-black rounded-xl shadow-xl border border-gray-200`}
        data-mobile={isMobile ? "true" : undefined}
      >
        <div className={isMobile ? "mobile-window-body" : "contents"}>
          <Component {...props} />
        </div>
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;