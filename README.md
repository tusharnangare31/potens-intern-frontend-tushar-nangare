# Naagarik: Multilingual Civic Issue Reporting PWA

A mobile-first Progressive Web App (PWA) designed for citizens to report civic issues seamlessly. Built as an internship assignment with a focus on clean architecture, performance, accessibility, and a premium "Warm Saffron" bespoke design aesthetic.

## Features

- **3-Step Reporting Flow**: Intuitive Category -> Details -> Confirmation progression, guided by a sleek horizontal flow bar.
- **Bilingual Interface**: Full support for English and Hindi (via Context API) with instantaneous UI toggling.
- **Voice Dictation**: Web Speech API integration for hands-free issue description.
- **Offline-First PWA**: Fully installable, caches assets, and saves reports locally using `localStorage`.
- **Status Tracking**: Built-in visual timeline tracking the status of submitted and stored reports.
- **Micro-Interactions**: Bespoke radial ripple animations on category selection to provide a premium, tactile user experience.
- **Lazy Loaded Routes**: Optimized bundle delivery using React Router DOM.

## Technology Stack

- **Framework**: React 19 + Vite
- **Language**: JavaScript (ES6+)
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v4 (Custom Tokens)
- **Icons**: Custom Inline SVGs & Lucide React
- **PWA**: vite-plugin-pwa
- **State Management**: React Context API & React Hooks

## Installation & Setup

1. **Clone the repository** (if applicable) or navigate to the project root.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```
5. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Folder Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── CategoryCard.jsx
│   ├── Header.jsx
│   ├── ImageUploader.jsx
│   ├── LanguageToggle.jsx
│   ├── PrimaryButton.jsx
│   ├── ProgressIndicator.jsx
│   ├── ReportModal.jsx
│   ├── StatusTimeline.jsx
│   ├── SuccessAnimation.jsx
│   └── VoiceRecorder.jsx
├── context/         # React Context providers
│   └── LanguageContext.jsx
├── data/            # Static data dictionaries
│   └── translations.js
├── hooks/           # Custom React hooks
│   └── useSpeechRecognition.js
├── pages/           # Route-level components (Lazy loaded)
│   ├── Category.jsx
│   ├── Confirmation.jsx
│   └── Details.jsx
├── utils/           # Helper functions
│   ├── cn.js
│   ├── generateReferenceId.js
│   ├── speechRecognition.js
│   ├── storage.js
│   └── validators.js
├── App.jsx          # Router & Provider shell
├── main.jsx         # React DOM entry
└── style.css        # Tailwind directives & Custom Design Variables
```

## Design Decisions

1. **Premium Bespoke Aesthetic**: Pivoted from standard Material Design to a custom "Warm Saffron" palette (`#C45D2C`, `#F7F5F2`). This creates an interface that feels modern, highly curated, and distinctly Indian without relying on generic component libraries.
2. **React Router Lazy Loading**: Implemented `React.lazy()` for the 3 main pages. While the app is small, this demonstrates production-ready performance optimization for Slow 3G networks.
3. **Context API for i18n**: Built a lightweight, zero-dependency internationalization system using the Context API rather than pulling in heavy libraries like `i18next`.
4. **Web Speech API Abstraction**: Abstracted the complex `window.SpeechRecognition` logic into a custom hook (`useSpeechRecognition`) utilizing `useRef` callbacks to prevent re-render re-bindings and keep the mic stable.
5. **Storage Optimization**: Image uploads are captured via Base64, but the heavy payload is stripped before storing the history in `localStorage` to entirely prevent `QuotaExceededError` crashes, keeping the app fast and stable.

## Known Limitations

- **Image Storage**: Currently, the PWA prevents crashes by stripping the image payload before saving to `localStorage`. In a production scenario, a backend server or AWS S3 bucket would be required to persist uploaded image binaries.
- **Web Speech API Support**: Voice dictation relies on browser support (currently best in Chrome/Edge/Safari). A fallback message is displayed for unsupported browsers (like Firefox).

## Future Improvements

- Migrate storage from `localStorage` to `IndexedDB` (via `idb` or `Dexie`) to handle complex local queries and provide a robust offline synchronization queue (Background Sync API).
- Implement a map interface (e.g., Leaflet or Google Maps) on the Details screen for precise geolocation tagging instead of relying solely on text descriptions.

## AI Use Log

- Assisted in generating the boilerplate structure and scaffolding React components.
- Provided patterns for integrating the Web Speech API cleanly via React Hooks.
- Designed the bespoke Warm Saffron UI and generated the SVG assets and custom CSS micro-animations.
