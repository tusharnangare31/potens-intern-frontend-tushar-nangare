# Multilingual Civic Issue Reporting PWA

A mobile-first Progressive Web App (PWA) designed for citizens to report civic issues seamlessly. Built as an internship assignment with a focus on clean architecture, performance, accessibility, and modern Material Design 3 aesthetics.

## Features

- **3-Step Reporting Flow**: Intuitive Category -> Details -> Confirmation progression.
- **Bilingual Interface**: Full support for English and Marathi via Context API.
- **Voice Dictation**: Web Speech API integration for hands-free issue description.
- **Offline-First PWA**: Fully installable, caches assets, and saves reports locally using `localStorage`.
- **Material Design 3**: Clean, professional, and accessible UI leveraging Tailwind CSS.
- **Lazy Loaded Routes**: Optimized bundle delivery using React Router DOM.

## Technology Stack

- **Framework**: React 19 + Vite
- **Language**: JavaScript (ES6+)
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
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
└── style.css        # Tailwind directives & MD3 variables
```

## Design Decisions

1. **Material Design 3 (MD3)**: Chose MD3 principles (large touch targets, subtle rounded corners, primary blue (`#0b57d0`), success green (`#146c2e`)) to convey a "government-grade but beautiful" feel, inspiring trust without feeling rigid.
2. **React Router Lazy Loading**: Implemented `React.lazy()` for the 3 main pages. While the app is small, this demonstrates production-ready performance optimization for Slow 3G networks.
3. **Context API for i18n**: Built a lightweight, zero-dependency internationalization system using the Context API rather than pulling in heavy libraries like `i18next`.
4. **Web Speech API Abstraction**: Abstracted the complex `window.SpeechRecognition` logic into a custom hook (`useSpeechRecognition`) to keep the `Details` component clean and testable.
5. **Component Modularity**: Used `clsx` and `tailwind-merge` inside a `cn()` utility to allow flexible, overrideable component styling (e.g., `PrimaryButton`, `CategoryCard`).

## Known Limitations

- **Image Storage**: Currently, images are converted to Base64 strings and stored in `localStorage`. In a real-world scenario, this would quickly exceed the 5MB `localStorage` quota. A backend or IndexedDB would be required for production image storage.
- **Web Speech API Support**: Voice dictation relies on browser support (currently best in Chrome/Edge). A fallback message is displayed for unsupported browsers (like Firefox).

## Future Improvements

- Migrate storage from `localStorage` to `IndexedDB` (via `idb` or `Dexie`) to handle larger image payloads and provide a robust offline synchronization queue (Background Sync API).
- Implement a map interface (e.g., Leaflet or Google Maps) on the Details screen for precise geolocation tagging instead of relying solely on text descriptions.

## AI Use Log

- Assisted in generating the boilerplate structure and scaffolding React components.
- Provided patterns for integrating the Web Speech API cleanly via React Hooks.
- Generated the Material Design 3 Tailwind color palette mapping.
