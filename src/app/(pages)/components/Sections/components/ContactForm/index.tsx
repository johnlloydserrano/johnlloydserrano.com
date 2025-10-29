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
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { mutateAsync: createMessage, isPending: isPendingContactMessage } =
    useCreateContactMessage();
  const { mutateAsync: sendEmail, isPending: isPendingSendMail } =
    useSendEmail();
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(2, { message: t('contactForm.validation.nameMin') }),
    email: z.string().email({ message: t('contactForm.validation.email') }),
    message: z
      .string()
      .min(10, { message: t('contactForm.validation.messageMin') }),
  });

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

      toast.success(t('contactForm.success'));
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(t('contactForm.failed'));
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
              <FormLabel className="quicksand-semibold">
                {t('contactForm.nameLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('contactForm.namePlaceHolder')}
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
              <FormLabel className="quicksand-semibold">
                {t('contactForm.emailLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('contactForm.emailPlaceHolder')}
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
              <FormLabel className="quicksand-semibold">
                {t('contactForm.messageLabel')}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('contactForm.messagePlaceHolder')}
                  className="quicksand-regular focus:ring-0 focus:border-primary border-t-0 border-x-0 rounded-none py-6 shadow-none min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription className="quicksand-thin text-xs">
                {t('contactForm.messageDescription')}
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
                ? t('contactForm.sending')
                : t('contactForm.sendMessage')}
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
