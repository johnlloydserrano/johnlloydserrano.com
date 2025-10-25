import { useMutation } from '@tanstack/react-query';
import { client } from '@/libs/amplifyConfig';
import { Schema } from '../../../amplify/data/resource';

type CreateContactMessageInput = {
  name: string;
  email: string;
  message: string;
};

const createContactMessage = async (input: CreateContactMessageInput) => {
  const { data, errors } = await client.models.ContactMessage.create(
    input as Schema['ContactMessage']['type']
  );
  if (errors) {
    console.error(errors);
    throw new Error('Failed to send message');
  }
  return data;
};

export const useCreateContactMessage = () => {
  return useMutation({
    mutationFn: createContactMessage,
  });
};
