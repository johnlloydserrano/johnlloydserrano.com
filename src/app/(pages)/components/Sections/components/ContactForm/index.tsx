import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/atoms/Form';
import { Input } from '@/app/components/atoms/Input';
import { Textarea } from '@/app/components/atoms/TextArea';
import { Button } from '@/app/components/atoms/Button';
import { toast } from 'sonner';
import useCreateContactMessage from '@/app/hooks/useCreateContactMessage';
import useSendEmail from '@/app/hooks/useSendEmail';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactForm() {
  const { mutateAsync: createMessage, isPending: isPendingContactMessage } =
    useCreateContactMessage();
  const { mutateAsync: sendEmail, isPending: isPendingSendMail } =
    useSendEmail();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createMessage(values);
      await sendEmail(values);

      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again later.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="py-6 pr-12 pb-16 space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="quicksand-semibold">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  className="quicksand-regular focus:ring-0 focus:border-primary border-t-0 border-x-0 rounded-none py-6 shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="quicksand-semibold">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="youremail@example.com"
                  className="quicksand-regular focus:ring-0 focus:border-primary border-t-0 border-x-0 rounded-none py-6 shadow-none"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="quicksand-semibold">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can I help you"
                  className="quicksand-regular focus:ring-0 focus:border-primary border-t-0 border-x-0 rounded-none py-6 shadow-none min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription className="quicksand-thin text-xs">
                Please provide as many details as possible.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="absolute bottom-[-45px] w-full flex items-center py-6 justify-center">
          <Button
            disabled={isPendingContactMessage || isPendingSendMail}
            className="rounded-full w-auto relative overflow-hidden group"
            variant="primary"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-linear-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
            <span className="relative z-10 flex items-center gap-2">
              <Send />
              {isPendingContactMessage || isPendingSendMail
                ? 'Sending...'
                : 'Send Message'}
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
