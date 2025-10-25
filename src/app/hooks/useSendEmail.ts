import { useMutation } from '@tanstack/react-query';

export type SendEmailInput = {
  name: string;
  email: string;
  message: string;
};

const sendEmail = async (
  data: SendEmailInput
): Promise<{ success: boolean }> => {
  const res = await fetch('/api/send-mail', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok || result.success === false) {
    const errorMessage =
      result?.error || `Failed to send email (status ${res.status})`;
    throw new Error(errorMessage);
  }

  return result;
};

const useSendEmail = () => {
  return useMutation<{ success: boolean }, Error, SendEmailInput>({
    mutationFn: sendEmail,
  });
};

export default useSendEmail;
