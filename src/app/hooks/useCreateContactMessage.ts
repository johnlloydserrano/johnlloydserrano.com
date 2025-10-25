import { useMutation } from '@tanstack/react-query';
import { client } from '@/libs/amplifyConfig';
import { Schema } from '../../../amplify/data/resource';
import { Contact } from '@/models/contacts/types';

const createContactMessage = async (input: Contact) => {
  const { data, errors } = await client.models.ContactMessage.create(
    input as Schema['ContactMessage']['type']
  );
  if (errors) {
    console.error(errors);
    throw new Error('Failed to send message');
  }
  return data;
};

const useCreateContactMessage = () => {
  return useMutation({
    mutationFn: createContactMessage,
  });
};

export default useCreateContactMessage;
