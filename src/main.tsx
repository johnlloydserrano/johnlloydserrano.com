import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/css/app.css';

import Banner from '@components/Banner';
import EducationAndWorkExperience from '@components/EducationAndWorkExperience';
import Skill from '@components/Skill';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Banner />
    <EducationAndWorkExperience />
    <Skill />
  </StrictMode>
);
