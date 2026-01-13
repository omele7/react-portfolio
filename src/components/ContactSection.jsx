import { Github, Instagram, Linkedin, Send, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = 'service_wbpb5f8';
        const templateId = 'template_vsc9ypg';
        const publicKey = '7l1-PUvGECiLPiRQF';

        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then(() => {
                toast.success("Message sent successfully!");
                e.target.reset();
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error("Failed to send message. Please try again.");
                setIsSubmitting(false);
            });
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you'd like to get in touch, ask a question, or talk about a small project, feel free to send me a message. I'm always happy to learn, improve, and work on new ideas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-2xl font-semibold mb-4 md:mb-6 text-center md:text-left">Contact information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"></Mail>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:dicabrerabuitron@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all" target="_blank">
                                        dicabrerabuitron@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"></Mail>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="https://wa.me/51994761659" className="text-muted-foreground hover:text-primary transition-colors text-sm" target="_blank">
                                        +51 994 761 659
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"></Linkedin>
                                </div>
                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/diego-ivan-cabrera-buitron-912210263/" className="text-muted-foreground hover:text-primary transition-colors text-sm" target="_blank">
                                        Diego Cabrera
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 md:pt-8">
                            <h4 className="font-medium mb-4 text-center md:text-left">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center md:justify-start">
                                <a href="https://github.com/omele7" target="_blank" className="hover:text-primary transition-colors">
                                    <Github/>
                                </a>
                                <a href="https://www.instagram.com/diego.cabrerab/" target="_blank" className="hover:text-primary transition-colors">
                                    <Instagram/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-6 md:p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="from_name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary" placeholder="Diego Cabrera"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="from_email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary" placeholder="you@example.com"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" required rows="5" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary" placeholder="Your message here"/>
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    isSubmitting && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}