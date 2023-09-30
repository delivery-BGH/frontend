import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/global.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/router.tsx';
import './lib/i18n'
import { ThemeProvider } from './Context/Theme/ThemeContext.tsx';
import { LanguageProvider } from './Context/Language/LanguageProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
