'use client';

import useQueryEducation from '@/app/hooks/useQueryEducation';
import useQueryWorkExperience from '@/app/hooks/useQueryWorkExperience';
import type { Education } from '@/models/educations/types';
import type { WorkExperience } from '@/models/workExperiences/types';

export const useEducationAndWorkExperience = (): {
  education: Education[] | null;
  workExperience: WorkExperience[] | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const {
    data: education,
    isLoading: isLoadingEducation,
    error: educationError,
  } = useQueryEducation();
  const {
    data: workExperience,
    isLoading: isLoadingWorkExperience,
    error: workExperienceError,
  } = useQueryWorkExperience();

  const isLoading = isLoadingEducation || isLoadingWorkExperience;
  const error = educationError ?? workExperienceError ?? null;

  return {
    education: education ?? null,
    workExperience: workExperience ?? null,
    isLoading,
    error,
  };
};

export default useEducationAndWorkExperience;
