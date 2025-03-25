import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/Components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { useTranslation } from "react-i18next"
import { HOME } from "@/constants/home"
import { Send } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
    const { t } = useTranslation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="py-6 pr-12 pb-16 space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="quicksand-semibold">{t(HOME.section.form.contact.label.name)}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t(HOME.section.form.contact.placeHolder.name)}
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
                            <FormLabel className="quicksand-semibold">{t(HOME.section.form.contact.label.email)}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t(HOME.section.form.contact.placeHolder.email)}
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
                            <FormLabel className="quicksand-semibold">{t(HOME.section.form.contact.label.message)}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t(HOME.section.form.contact.placeHolder.message)}
                                    className="quicksand-regular focus:ring-0 focus:border-primary border-t-0 border-x-0 rounded-none py-6 shadow-none min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className="quicksand-thin text-xs">
                                {t(HOME.section.title.contact.subTextMessage)}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="absolute bottom-[-45px] w-full flex items-center py-6 justify-center">
                    <Button className="w-auto relative overflow-hidden group" variant="primary">
                        <span className="absolute left-0 top-0 h-full w-0 bg-linear-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative z-10 flex items-center gap-2">
                            <Send />
                            {t(HOME.section.button.contact)}
                        </span>
                    </Button>
                </div>
            </form>
        </Form>
    )
}
