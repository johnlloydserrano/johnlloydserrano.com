"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/Components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { Facebook, Github, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import SectionHeader from "@/Components/layout/SectionHeader"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { HOME } from "@/constants/home"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function Contact() {
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
        <section className="w-full bg-white py-6">
            <div className="container px-[7.5rem] py-6 mx-auto">
                <motion.div
                    className="h-full w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ margin: "-200px", once: true }}
                >
                    <SectionHeader
                        title={t(HOME.section.title.contact.text)}
                        description={t(HOME.section.title.contact.desc)}
                    />
                    <div className="px-4 py-6 flex flex-col gap-8 md:flex-row">
                        <div className="w-full md:w-[80%] space-y-6">
                            <div className="relative bg-card">
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
                                                    <FormLabel className="quicksand-semibold">{t(HOME.section.form.contact.label.name)}</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={t(HOME.section.form.contact.placeHolder.name)}
                                                            className="quicksand-medium focus:ring-0 focus:border-primary border-t-0 border-x-0 rounded-none py-6 shadow-none"
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
                                                            className="quicksand-medium focus:ring-0 focus:border-primary border-t-0 border-x-0 rounded-none py-6 shadow-none"
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
                                                            className="quicksand-medium focus:ring-0 focus:border-primary border-t-0 border-x-0 rounded-none py-6 shadow-none min-h-[120px]"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription className="quicksand-regular text-xs">{t(HOME.section.title.contact.subTextMessage)}</FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="absolute bottom-[-45px] w-full flex items-center py-6 justify-center">
                                            <Button
                                                className="w-full sm:w-auto relative overflow-hidden group"
                                                variant="primary"
                                            >
                                                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-tr from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                                                <span className="relative z-10 flex items-center gap-2">
                                                    <Send />
                                                    {t(HOME.section.button.contact)}
                                                </span>
                                            </Button>
                                        </div>
                                    </form>
                                </Form>
                            </div>
                        </div>

                        <div className="w-full md:w-[25%] flex flex-col justify-start mt-6 space-y-4">
                            <div className="h-1/3 flex items-center px-6 w-full bg-card rounded-md border shadow-sm">
                                <div className="space-y-2">
                                    <h4 className="quicksand-semibold">{t(HOME.section.title.contact.subTextContact)}</h4>
                                    <p className="text-sm text-muted-foreground quicksand-regular leading-relaxed">
                                        Greenland, Cogon Pardo
                                        <br />
                                        Cebu City, 6000 Cebu
                                        <br />
                                        contact@johnlloydserrano.com
                                        <br />
                                        (123) 456-7890
                                    </p>
                                </div>
                            </div>
                            <div className="h-[50%] w-full bg-card p-6 border rounded-md space-y-6">
                                <h4 className="font-medium">{t(HOME.section.title.contact.subTextSocial)}</h4>
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                    {[Facebook, Instagram, Linkedin, Twitter, Github].map((Icon, index) => (
                                        <a key={index} href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                            <Icon className="h-5 w-5" />
                                            <span className="hidden md:inline">{Icon.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

