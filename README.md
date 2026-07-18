# Anirudra's Portfolio

> An interactive portfolio that turns a personal website into a playful desktop experience.

Built around a macOS-inspired interface, this portfolio lets visitors explore projects, skills, photos, a résumé, and contact details through familiar desktop apps instead of a conventional scrolling page. On phones, the experience adapts into a focused, iPhone-inspired home screen and app layout.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<img width="1536" height="785" alt="image" src="https://github.com/user-attachments/assets/285b0dc2-6403-4b55-8730-0257db21a3c3" />


## Contents

- [Overview](#overview)
- [Highlights](#highlights)
- [Explore the portfolio](#explore-the-portfolio)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Architecture](#architecture)
- [Customizing the portfolio](#customizing-the-portfolio)
- [Deployment](#deployment)
- [Accessibility and browser support](#accessibility-and-browser-support)

## Overview

Most portfolios describe the developer; this one invites people to explore their work. The landing view resembles a desktop, complete with a draggable project area, dock, menu bar, floating application windows, and familiar window controls. Each application has a clear purpose:

- **Portfolio / Finder** provides a file-system-style route into projects and personal information.
- **Safari** presents writing and web content.
- **Gallery** displays selected images.
- **Skills Terminal** is an interactive command-line interface for discovering skills, projects, and other apps.
- **Résumé** renders the included PDF directly in the experience.
- **Contact** centralizes ways to get in touch.
- **Trash** provides an additional interactive desktop destination.

The experience is not just a visual mockup. Its windows can be opened, focused, minimized, maximized where supported, and dragged on desktop. State is managed centrally so applications can open one another—for example, terminal commands can launch the project finder, résumé, contact view, or gallery.

## Highlights

- A responsive, macOS-inspired desktop portfolio with animated floating windows.
- Draggable desktop windows with focus-aware stacking order.
- A purpose-built mobile layout that feels like an iPhone home screen rather than a squeezed desktop.
- Interactive finder-style project explorer, including project descriptions, images, source repositories, and live demos where available.
- A functional simulated terminal with command history and tab completion.
- Project, skills, social, gallery, and navigation content organized in one editable constants module.
- PDF résumé viewer powered by `react-pdf`.
- Lightweight static architecture: no backend is required for deployment.
- Smooth motion and interactions powered by GSAP and `@gsap/react`.

=======
## Contents

- [Overview](#overview)
- [Highlights](#highlights)
- [Explore the portfolio](#explore-the-portfolio)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Architecture](#architecture)
- [Customizing the portfolio](#customizing-the-portfolio)
- [Deployment](#deployment)
- [Accessibility and browser support](#accessibility-and-browser-support)
- [Contributing](#contributing)
- [Contact](#contact)

## Overview

Most portfolios describe the developer; this one invites people to explore their work. The landing view resembles a desktop, complete with a draggable project area, dock, menu bar, floating application windows, and familiar window controls. Each application has a clear purpose:

- **Portfolio / Finder** provides a file-system-style route into projects and personal information.
- **Safari** presents writing and web content.
- **Gallery** displays selected images.
- **Skills Terminal** is an interactive command-line interface for discovering skills, projects, and other apps.
- **Résumé** renders the included PDF directly in the experience.
- **Contact** centralizes ways to get in touch.
- **Trash** provides an additional interactive desktop destination.

The experience is not just a visual mockup. Its windows can be opened, focused, minimized, maximized where supported, and dragged on desktop. State is managed centrally so applications can open one another—for example, terminal commands can launch the project finder, résumé, contact view, or gallery.

## Highlights

- A responsive, macOS-inspired desktop portfolio with animated floating windows.
- Draggable desktop windows with focus-aware stacking order.
- A purpose-built mobile layout that feels like an iPhone home screen rather than a squeezed desktop.
- Interactive finder-style project explorer, including project descriptions, images, source repositories, and live demos where available.
- A functional simulated terminal with command history and tab completion.
- Project, skills, social, gallery, and navigation content organized in one editable constants module.
- PDF résumé viewer powered by `react-pdf`.
- Lightweight static architecture: no backend is required for deployment.
- Smooth motion and interactions powered by GSAP and `@gsap/react`.

## Explore the portfolio

### Desktop

Open an app from the dock or menu bar. Desktop project folders can be clicked and dragged, while application windows can be brought to the front and repositioned from their title bars.

| Area | What it does |
| --- | --- |
| Finder / Portfolio | Browse project folders, personal information, and résumé files. |
| Safari | View curated external content and links. |
| Gallery | Browse portfolio images. |
| Skills Terminal | Run discoverability commands and open portfolio apps from the command line. |
| Contact | Find social links and contact details. |
| Control Center | Access desktop control interactions. |

### Mobile

At small screen sizes, the desktop is replaced by an iPhone-inspired shell. Selecting an app opens it in a mobile-optimized view; the home indicator returns the visitor to the app grid. This separate experience avoids the usability problems that come from forcing desktop windows into a narrow viewport.

### Terminal commands

The Skills Terminal is intentionally small but interactive. Type `help` to see the available commands.

| Command | Description |
| --- | --- |
| `help` | Lists available commands. |
| `whoami` | Introduces the developer. |
| `skills` | Prints the configured technology stack. |
| `projects` | Lists portfolio projects. |
| `open projects` | Opens the project finder. |
| `open resume` | Opens the résumé viewer. |
| `open contact` | Opens the contact window. |
| `open gallery` | Opens the gallery. |
| `ls`, `cd`, `pwd`, `cat` | Navigate the mock file system. |
| `clear` | Clears terminal history. |

Use the up/down arrow keys to cycle through previous commands. Press <kbd>Tab</kbd> to complete a matching command or file-system entry.

## Tech stack

| Category | Tools |
| --- | --- |
| UI | React 19, React DOM, Lucide React |
| Build tooling | Vite 8, `@vitejs/plugin-react` |
| Styling | Tailwind CSS 4, Tailwind Animate, CSS |
| Motion | GSAP, `@gsap/react`, GSAP Draggable |
| State | Zustand, Immer |
| Content utilities | Day.js, React PDF, React Tooltip |
| Quality | ESLint and React Hooks lint rules |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (Node 20+ is recommended)
- npm, which is bundled with Node.js

### Installation

```bash
git clone https://github.com/Spicychickenlolipop/Anirudra-s-Portfolio.git
cd Anirudra-s-Portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local address in the terminal—normally [http://localhost:5173](http://localhost:5173). Changes to source files are reflected through hot module replacement.

### Production build

```bash
npm run build
npm run preview
```

The optimized static site is generated in `dist/`. Preview it locally before deploying.

## Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server with HMR. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs ESLint across the project. |

Before submitting changes, run:

```bash
npm run lint
npm run build
```

## Project structure

```text
.
├── public/
│   ├── files/                 # Static files, including the résumé PDF
│   ├── icons/                 # UI, social, and app icons
│   ├── images/                # Portfolio, project, and gallery images
│   └── music/                 # Audio player assets
├── src/
│   ├── components/            # Shared UI: dock, nav, home, music, mobile shell
│   ├── constants/index.js     # Portfolio content and window configuration
│   ├── hoc/WindowWrapper.jsx  # Shared window visibility, animation, and drag logic
│   ├── hooks/useIsMobile.js   # Responsive-mode hook
│   ├── store/                 # Zustand stores for windows, location, controls, trash
│   ├── windows/               # Finder, Terminal, Safari, Resume, Photos, and more
│   ├── App.jsx                # Desktop/mobile shell and window composition
│   ├── index.css              # Global styling and Tailwind entry point
│   └── main.jsx               # React application entry point
├── vite.config.js             # Vite, React, Tailwind, and import alias configuration
├── eslint.config.js           # Lint configuration
└── package.json               # Dependencies and npm scripts
```

## Architecture

### Window system

Every app window is composed with `WindowWrapper`. The wrapper is responsible for consistent open/close behavior, desktop animations, visibility while minimized, focus ordering, and title-bar dragging. Individual app components focus only on their content and window-specific actions.

The shared `window` Zustand store tracks whether each window is open, minimized, or maximized, as well as its `z-index` and contextual data. This creates a familiar desktop behavior: interacting with a window brings it forward, and one app can open another without tightly coupling components.

### Content model

Portfolio content is mostly data-driven. Update `src/constants/index.js` to change:

- Navigation links and dock applications
- Social profiles
- Gallery images
- Skills shown in the terminal
- Project folders, descriptions, source links, demos, and previews
- Finder locations and initial window settings

Keeping this information centralized makes it straightforward to keep the Finder, terminal, desktop icons, and mobile shell aligned.

### Import aliases

The project uses Vite aliases to keep imports readable:

```js
import { Navbar, Dock } from "#components";
import useWindowStore from "#store/window";
import { locations } from "#constants";
```

The aliases are configured in `vite.config.js` for components, constants, stores, higher-order components, and windows.

## Customizing the portfolio

This project is designed to be personalized. The following is a practical checklist for adapting it to your own work.

### Update personal details and links

Edit the `socials` list and the `ABOUT_LOCATION` content in `src/constants/index.js`. Update the GitHub, LinkedIn, X/Twitter, and email URLs, plus the text shown in `about-me.txt`.

### Add or update a project

Project folders live inside `WORK_LOCATION.children` in `src/constants/index.js`. A typical project contains:

```js
{
  name: "My Project",
  icon: "/images/folder.png",
  kind: "folder",
  children: [
    {
      name: "My Project.txt",
      kind: "file",
      fileType: "txt",
      description: ["A concise description of the project."],
    },
    {
      name: "live-demo.com",
      kind: "file",
      fileType: "url",
      href: "https://example.com",
    },
    {
      name: "My Project.png",
      kind: "file",
      fileType: "img",
      imageUrl: "/images/my-project.png",
    },
  ],
}
```

Add the corresponding image to `public/images/`. Public assets are served from the site root, so an image at `public/images/my-project.png` is referenced as `/images/my-project.png`.

### Replace the résumé

Replace `public/files/resume.pdf` with your own PDF while preserving the filename, or update the relevant file reference in the résumé window and constants if you prefer another name.

### Change the visual theme

Global styles reside in `src/index.css`. Component-specific layouts are implemented with Tailwind utility classes. The desktop wallpaper, icon set, project previews, and gallery are all static assets under `public/`.

## Deployment

This is a static React single-page application. Any host capable of serving the contents of `dist/` can deploy it.

| Host | Build command | Publish directory |
| --- | --- | --- |
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| Cloudflare Pages | `npm run build` | `dist` |
| GitHub Pages | `npm run build` | `dist` |

For GitHub Pages under a repository subpath, configure Vite's `base` option in `vite.config.js` before building:

```js
export default defineConfig({
  base: "/Anirudra-s-Portfolio/",
  // remaining configuration
});
```

Do not add this `base` value for a custom domain or root-level deployment.

## Accessibility and browser support

Interactive mobile app icons include accessible labels, and decorative icon images use empty `alt` text. When adding new interactive controls, keep keyboard operation, visible focus states, and descriptive labels in mind.

For the smoothest animation and drag behavior, use a current Chromium-based browser, Firefox, or Safari. The site remains a standard responsive web application; no native desktop software is required.

