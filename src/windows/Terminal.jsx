import { useState, useRef, useEffect } from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import { locations, techStack } from "#constants";

/* ================= FILE SYSTEM ================= */
const fileSystem = {
  name: "~",
  type: "folder",
  children: {
    about: {
      type: "folder",
      children: {
        "bio.txt": {
          type: "file",
          content: "I am Anirudra, a Full Stack Developer.",
        },
        "interests.txt": {
          type: "file",
          content: "AI, Web Dev, System Design",
        },
      },
    },
    "my-dream.cpp": {
      type: "file",
      content: `while (sleeping) {
    money++;
}`,
    },
  },
};

const commands = [
  "help",
  "ls",
  "cd",
  "pwd",
  "cat",
  "clear",
  "whoami",
  "skills",
  "projects",
  "open",
  // "theme",
];

/* ================= PROMPT ================= */
const Prompt = ({ path }) => (
  <>
    <span className="text-yellow-400">anirudra@portfolio</span>{" "}
    <span className="text-green-400">{path.join("/")}</span>{" "}
    <span className="text-red-500">›</span>
  </>
);

/* ================= COMPONENT ================= */
const Terminal = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", value: "Welcome to AnirudraOS Terminal 🚀" },
    { type: "output", value: "Type `help` to get started." },
  ]);

  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [path, setPath] = useState(["~"]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [history]);

  /* ================= HELPERS ================= */

  const getDir = () => {
    let dir = fileSystem;

    for (let i = 1; i < path.length; i++) {
      if (!dir.children?.[path[i]]) return null;
      dir = dir.children[path[i]];
    }

    return dir;
  };

  const addToHistory = (cmd, output) => {
    setHistory((prev) => [
      ...prev,
      { type: "command", value: cmd, path: [...path] },
      ...(output !== null ? [{ type: "output", value: output }] : []),
    ]);
  };

  /* ================= COMMAND SYSTEM ================= */

  const commandMap = {
    help: () =>
      `Available commands:
whoami, skills, projects, open <app>
ls, cd, pwd, cat, clear`,

    whoami: () =>
      "Anirudra — Full Stack Developer | React | Next.js | Building cool stuff ",

    skills: () =>
      techStack.map(
        (s) => `${s.category}: ${s.items.join(", ")}`
      ),

    projects: () =>
      locations.work.children.map((p) => `📁 ${p.name}`),

    open: (args) => {
      const target = args[1]?.toLowerCase();

      if (!target) return "Usage: open <app>";

      if (target.includes("project")) {
        setActiveLocation(locations.work);
        openWindow("finder");
        return "Opening Projects...";
      }

      if (target.includes("resume")) {
        openWindow("resume");
        return "Opening Resume...";
      }

      if (target.includes("contact")) {
        openWindow("contact");
        return "Opening Contact...";
      }

      if (target.includes("gallery")) {
        openWindow("photos");
        return "Opening Gallery...";
      }

      return "App not found";
    },

    // theme: (args) => {
    //   const mode = args[1];

    //   if (!mode) return "Usage: theme <dark|light>";

    //   if (mode === "dark") {
    //     document.documentElement.classList.add("dark");
    //     return "Dark mode enabled";
    //   }

    //   if (mode === "light") {
    //     document.documentElement.classList.remove("dark");
    //     return "Light mode enabled";
    //   }

    //   return "Invalid theme";
    // },

    clear: () => {
      setHistory([]);
      return null;
    },
  };

  /* ================= COMMAND HANDLER ================= */

  const handleCommand = (cmd) => {
    if (!cmd.trim()) return;

    const args = cmd.trim().split(/\s+/);
    const base = args[0];

    let output = "";
    const currentDir = getDir();
    if (!currentDir) return;

    // 👉 SYSTEM COMMANDS
    if (commandMap[base]) {
      const result = commandMap[base](args);

      if (result !== null) {
        output = Array.isArray(result)
          ? result.map((line, i) => <div key={i}>{line}</div>)
          : result;
      }

      addToHistory(cmd, output);
      setCmdHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
      return;
    }

    // 👉 FILE SYSTEM COMMANDS
    switch (base) {
      // case "ls":
      //   output = Object.keys(currentDir.children || {}).join("   ");
      //   break;
      case "ls":
        output = Object.keys(currentDir.children || {}).map((name) => {
          const item = currentDir.children[name];

          return (
            <span
              key={name}
              className={
                item.type === "folder"
                  ? "text-blue-400 mr-3 font-semibold"
                  : "text-gray-300 mr-3"
              }
            >
              {name}
            </span>
          );
        });
        break;

      case "pwd":
        output = path.join("/");
        break;

      case "cd": {
        const target = args[1];

        if (!target) {
          setPath(["~"]);
          return;
        }

        if (target === "..") {
          setPath((prev) =>
            prev.length > 1 ? prev.slice(0, -1) : prev
          );
          return;
        }

        const next = currentDir.children?.[target];

        if (!next) output = "No such folder";
        else if (next.type !== "folder") output = "Not a directory";
        else {
          setPath((prev) => [...prev, target]);
          return;
        }

        break;
      }

      // case "cat": {
      //   const file = currentDir.children?.[args[1]];
      //   output = file?.content || "File not found";
      //   break;
      // }

      case "cat": {
        const file = currentDir.children?.[args[1]];

        if (!file) {
          output = "File not found";
        } else {
          output = <pre className="whitespace-pre-wrap">{file.content}</pre>;
        }

        break;
      }

      default:
        output = `zsh: command not found: ${cmd}`;
    }

    addToHistory(cmd, output);
    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  /* ================= KEYBOARD ================= */

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }

    if (e.key === "ArrowUp") {
      if (!cmdHistory.length) return;

      const newIndex = Math.min(
        historyIndex + 1,
        cmdHistory.length - 1
      );
      setHistoryIndex(newIndex);
      setInput(cmdHistory[cmdHistory.length - 1 - newIndex]);
    }

    if (e.key === "ArrowDown") {
      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setInput(cmdHistory[cmdHistory.length - 1 - newIndex]);
    }

    if (e.key === "Tab") {
      e.preventDefault();

      const currentDir = getDir();
      if (!currentDir) return;

      const allOptions = [
        ...commands,
        ...Object.keys(currentDir.children || {}),
      ];

      const match = allOptions.find((item) =>
        item.startsWith(input.toLowerCase())
      );

      if (match) setInput(match);
    }
  };

  /* ================= UI ================= */

  return (
    <section className="flex flex-col h-full max-sm:min-h-0 w-full">
      {/* HEADER */}
      <div id="window-header" className="flex gap-3 p-2 bg-gray-200 shrink-0">
        <WindowControls target="terminal" />
      </div>

      {/* BODY */}
      <div
        className="flex-1 overflow-y-auto p-4 font-mono text-sm
        bg-[#0f172a]/80 backdrop-blur-xl text-white"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, i) => {
          if (item.type === "command") {
            return (
              <div key={i}>
                <Prompt path={item.path} /> {item.value}
              </div>
            );
          }

          return <div key={i}>{item.value}</div>;
        })}

        {/* INPUT */}
        <div className="flex gap-2">
          <Prompt path={path} />

          <input
            ref={inputRef}
            className="bg-transparent outline-none flex-1 text-white caret-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div ref={bottomRef} />
      </div>
    </section>
  );
};

export default WindowWrapper(Terminal, "terminal");