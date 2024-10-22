import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Banner from '@components/Banner';
import '@assets/css/app.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Banner/>
  </StrictMode>
);
