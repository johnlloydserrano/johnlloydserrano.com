import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/css/app.css';

import Banner from '@components/Banner';
import EducationAndWorkExperience from '@components/EducationAndWorkExperience';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Banner />
    <EducationAndWorkExperience />
  </StrictMode>
);
