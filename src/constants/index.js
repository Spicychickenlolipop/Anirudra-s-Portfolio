const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  // {
  //   id: 1,
  //   img: "/icons/wifi.svg",
  // },
  // {
  //   id: 2,
  //   img: "/icons/search.svg",
  // },
  // {
  //   id: 3,
  //   img: "/icons/user.svg",
  // },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Safari", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  // {
  //   id: "trash",
  //   name: "Archive", // was "Trash"
  //   icon: "trash.png",
  //   canOpen: true,
  // },
  {
  id: "trash",
  name: "Trash",
  icon: "trash.png",
  canOpen: true,
},
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Spicychickenlolipop",
  },
  {
    id: 2,
    text: "Mail",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=kisku.anirudra@gmail.com&tf=cm",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/AnirudraKi53795",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/anirudra-kisku-4335821b5/",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },

  { 
    id: 5, 
    img: "/images/gal5.png" 
  },
  { 
    id: 6, 
    img: "/images/gal6.png" 
  },
  { 
    id: 7, 
    img: "/images/Spiderman.jpg" 
  },

];

const mobileAppTitles = {
  finder: "Portfolio",
  safari: "Safari",
  photos: "Gallery",
  contact: "Contact",
  terminal: "Skills",
  resume: "Resume",
  txtfile: "Notes",
  imgfile: "Preview",
  trash: "Trash",
};

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  gallery,
  mobileAppTitles,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "ExamNotes.AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "ExamNotesAI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            [
              "ExamNoteAI is a smart learning platform designed to generate clear, exam-ready notes from any topic.",
              "Instead of spending hours summarizing content, it uses AI to instantly generate structured, easy-to-understand notes.",
              "Think of it as your personal study assistant—helping you focus on understanding instead of just organizing.",
              "Built with modern technologies, it delivers fast performance, a smooth user experience, and a clean, distraction-free interface."
            ]
          ],
        },
        {
          id: 2,
          name: "examnotesai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://examnotesaiclient-habf.onrender.com/auth",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ExamNotesAI.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ExamNoteAI.png",
        },
        {
          id: 5,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Spicychickenlolipop/ExamNotesAI",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "QuickChat",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "QuickChat.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "QuickChat is a fast and intuitive messaging platform designed for seamless real-time communication.",
            "Instead of slow and cluttered chat apps, it delivers instant messaging with a clean interface and smooth interactions.",
            "Think of it like your personal chat space—simple, responsive, and built to keep conversations flowing effortlessly.",
            "Built with modern technologies, it ensures speed, reliability, and a sleek experience across all devices."
          ]
        },
        {
          id: 2,
          name: "quickchat.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chat-app-two-bice-93.vercel.app/login",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "quickchat.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/QuickChat.png",
        },
        {
          id: 5,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Spicychickenlolipop/chat-app",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Expense Tracker",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[33vh] left-3",
      children: [
        {
          id: 1,
          name: "Expense Tracker.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Expense Tracker is a simple and efficient tool designed to help you manage your daily finances with ease.",
            "Instead of guessing where your money goes, it gives you a clear view of your income, expenses, and spending patterns.",
            "Think of it like your personal finance companion—keeping everything organized and under control.",
            "Built with modern technologies, it offers a smooth experience, fast performance, and a clean, user-friendly interface."
          ]
        },
        {
          id: 2,
          name: "expense-tracker.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://expense-tracker2-seven.vercel.app/login",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "expense-tracker.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ExpenseTracker.png",
        },
        {
          id: 5,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "VectorForge",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[5vh] left-35",
      children: [
        {
          id: 1,
          name: "VectorForge.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Engineered a vector database from scratch in C++, implementing HNSW, KD-Tree, and Brute Force nearest-neighbor search algorithms with cosine, Euclidean, and Manhattan distance metrics, exposed via a full REST API (insert, delete, search, benchmark endpoints).",
            "Built a Retrieval-Augmented Generation (RAG) pipeline integrating a local LLM (Ollama/Llama 3.2) with a custom HNSW index, enabling document embedding (nomic-embed-text, 768D), automatic text chunking, and context-grounded question answering.",
            "Designed an interactive web UI featuring live PCA-based 2D visualization of high-dimensional semantic vector space, real-time algorithm benchmarking/comparison, and a streaming chat interface for RAG queries.",
            " Implemented performance-critical data structures achieving O(log N) approximate search via a multilayer graph-based HNSW index, demonstrating algorithmic trade-offs (exact vs. approximate search) across dimensionality (16D demo vs. 768D document embeddings)."
          ]
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Spicychickenlolipop/VectorForge",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "VectorForge.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/VectorForge.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
     // ▶ Project 4
    {
      id: 9,
      name: "DPI Engine",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-75",
      windowPosition: "top-[20vh] left-35",
      children: [
        {
          id: 1,
          name: "DPI Engine.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built a multi-threaded C++ Deep Packet Inspection engine that classifies and filters network traffic by inspecting TLS SNI and HTTP Host headers.",
            "D Implemented a producer-consumer pipeline with load balancers and fast-path worker threads using consistent hashing for flow-aware packet routing.",
            "Engineered thread-safe queues with mutex and condition variables to enable high-throughput parallel processing of PCAP captures.",
            "Supported rule-based blocking by IP, application, and domain with real-time traffic statistics and application classification reporting."
          ]
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Spicychickenlolipop/Packet-Analyzer",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Demo Output.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/DPI Engine.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 right-72",
      imageUrl: "/images/MeInRoom.jpg",
    },
    {
      id: 3,
      name: "MeAndMe.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/meandme.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpg",
      description: [
        [
          "Hey! I’m Anirudra 👋, a developer who enjoys building cool, interactive websites that just feel right.",
          "I mostly work with React, JavaScript, and the MERN stack—bringing ideas to life on the web.",
          "I’m all about clean UI, smooth UX, and code that actually makes sense when you come back later 😅",
          "Right now, I’m building things like ExamNoteAI to make studying smarter and faster.",
          "When I’m not coding, I’m tweaking designs, trying new tech, or getting obsessed with making things look perfect at 2AM 🚀"
        ]
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

// const TRASH_LOCATION = {
//   id: 4,
//   type: "trash",
//   name: "Trash",
//   icon: "/icons/trash.svg",
//   kind: "folder",
//   children: [
//     {
//       id: 1,
//       name: "trash1.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-10 left-10",
//       imageUrl: "/images/trash-1.png",
//     },
//     {
//       id: 2,
//       name: "trash2.png",
//       icon: "/images/image.png",
//       kind: "file",
//       fileType: "img",
//       position: "top-40 left-80",
//       imageUrl: "/images/trash-2.png",
//     },
//   ],
// };

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [], // 🔥 dynamic
  isTrash: true, // 🔥 important
};



export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
//   terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
terminal:{ isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX,data: null},
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  // trash: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 1, data: null},
  trash: { 
  isOpen: false, 
  isMinimized: false, 
  isMaximized: false, 
  zIndex: INITIAL_Z_INDEX, 
  data: null
},
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

