"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { User, Mail, Building2, FileText, MessageSquare, ArrowRight } from "lucide-react"
import Section from "./section"
import { Card } from "./ui/card"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().min(2, "Company name must be at least 2 characters"),
    licenseType: z.string().min(1, "Please select a license type"),
    message: z.string().min(1, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

const licenseTypes = ["Individual", "Small Business", "Enterprise", "Government", "Educational"]

export function ContactForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            licenseType: "",
            message: "",
        },
    })

    const isSubmitting = form.formState.isSubmitting

    const onSubmit = async (data: FormData) => {
        try {
            // Here you would typically send the data to your backend
            console.log(data)
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            toast.success("Message sent successfully!", {
                description: "We'll get back to you within 24 hours.",
            })
            form.reset()
        } catch {
            toast.error("Failed to send message", {
                description: "Please try again later.",
            })
        }
    }

    return (
        <Section title="Contact Us" subtitle="Get in touch with us">
            <div className="max-w-4xl mx-auto">
                <Card className="p-4 md:p-6 rounded-xl shadow-sm border border-border">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center text-sm font-medium">
                                                <User className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                                                Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your full name" {...field} />
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
                                            <FormLabel className="flex items-center text-sm font-medium">
                                                <Mail className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="your.email@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center text-sm font-medium">
                                                <Building2 className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                                                Company
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your company name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="licenseType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center text-sm font-medium">
                                                <FileText className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                                                License Type
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a license type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {licenseTypes.map((type) => (
                                                        <SelectItem key={type} value={type}>
                                                            {type}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center text-sm font-medium">
                                            <MessageSquare className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                                            Message
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us about your project or inquiry..."
                                                className="min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="pt-2">
                                <Button type="submit" className="w-full text-sm group" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            Send Message
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    )}
                                </Button>
                            </div>

                            <p className="text-xs text-center md:text-left text-muted-foreground">
                                By submitting this form, you agree to our{" "}
                                <a href="#" className="text-primary hover:underline">
                                    Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-primary hover:underline">
                                    Terms of Service
                                </a>
                                .
                            </p>
                        </form>
                    </Form>
                </Card>
            </div>
        </Section>
    )
}
