import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/css/app.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline text-red-300">
      Hello tailwind!
    </h1>
  </StrictMode>
);
