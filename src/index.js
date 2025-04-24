import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import './i18n'; // Import i18n configuration

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
