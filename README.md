# Modern Portfolio Website

A minimal, elegant portfolio website built with React, Tailwind CSS, and Framer Motion. Inspired by high-end creative studios with smooth transitions and immersive visuals.

## ✨ Features

- **Modern React**: Built with React 18 and functional components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Clean Architecture**: Modular components and clean code structure

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd new-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Landing section with hero content
│   ├── WorkShowcase.jsx # Project grid with hover effects
│   ├── About.jsx       # About section with image and text
│   └── Footer.jsx      # Contact information and links
├── assets/             # Static assets
│   └── images/         # Image files
├── App.jsx             # Main application component
├── index.css           # Global styles and Tailwind imports
└── main.jsx            # Application entry point
```

## 🎨 Design Philosophy

This portfolio follows a minimal, elegant design approach:

- **Clean Typography**: Using Inter font family for modern readability
- **Generous White Space**: Letting content breathe with proper spacing
- **Subtle Animations**: Enhancing user experience without overwhelming
- **Visual Hierarchy**: Clear content structure and flow
- **Responsive Layout**: Seamless experience across all devices

## 🛠️ Technologies Used

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Unsplash Images** - High-quality stock photography for placeholders

## 📱 Sections

1. **Hero/Landing** - Full viewport height with background and overlay text
2. **Work Showcase** - Grid layout featuring project cards with hover effects
3. **About/Case Study** - Two-column layout with descriptive content
4. **Footer** - Contact information and social media links

## 🔧 Customization

To customize this portfolio for your own use:

1. **Replace placeholder images** in the `WorkShowcase` component with your actual project images
2. **Update content** in each component to reflect your personal information
3. **Modify colors** in `tailwind.config.js` to match your brand
4. **Add your projects** by updating the projects array in `WorkShowcase.jsx`
5. **Update contact information** in the `Footer` component

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
