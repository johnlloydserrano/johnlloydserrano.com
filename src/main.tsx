import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@client/assets/css/app.css';

import Banner from '@client/components/Banner';
import EducationAndWorkExperience from '@client/components/EducationAndWorkExperience';
import Skill from '@client/components/Skill';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Banner />
    <EducationAndWorkExperience />
    <Skill />
  </StrictMode>
);
