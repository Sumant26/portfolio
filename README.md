# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project showcases professional experience, skills, certifications, and education in a clean, interactive interface.

## 🚀 Features

- **Modern UI/UX**: Built with a clean and professional design.
- **Responsive Design**: Fully responsive layout that works on all devices (Desktop, Tablet, Mobile).
- **Dark/Light Mode**: Integrated theme switching capability.
- **Sections**:
  - **Hero**: Introduction and summary.
  - **Work Experience**: Timeline or list of professional history.
  - **Skills**: Display of technical and soft skills.
  - **Certifications**: Showcase of professional certifications.
  - **Education**: Academic background.
- **Animations**: Smooth transitions and effects using Framer Motion.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) (Primitives)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to `http://localhost:3000` (or the port shown in your terminal) to view the application.

## 🏗️ Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate the static files in the `dist` directory, which can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📂 Project Structure

```
src/
├── components/         # React components
│   ├── ui/             # Reusable UI components (buttons, cards, etc.)
│   ├── Hero.tsx        # Hero section
│   ├── WorkExperience.tsx # Work experience section
│   ├── Skills.tsx      # Skills section
│   └── ...
├── App.tsx            # Main application component
├── main.tsx           # Entry point
└── index.css          # Global styles (Tailwind imports)
```

## 🎨 Design

The original design for this project is available on [Figma](https://www.figma.com/design/iADEiDdEtCyv5lJD11xbBe/Portfolio-Website-Creation).