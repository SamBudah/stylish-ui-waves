
import { Motion } from "@/components/ui/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </Motion>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Motion
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                <Motion whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:contact@mutuamade.com" className="font-medium text-foreground hover:text-primary transition-colors">
                      contact@mutuamade.com
                    </a>
                  </div>
                </Motion>
                
                <Motion whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a 
                      href="https://github.com/SamBudah/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      @SamBudah
                    </a>
                  </div>
                </Motion>
                
                <Motion whileHover={{ x: 5 }} className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/samsonmaithya" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Samson Maithya
                    </a>
                  </div>
                </Motion>
              </div>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Open for Opportunities</h3>
              <p className="text-muted-foreground mb-6">
                I'm currently available for freelance projects, collaborations, and full-time opportunities in data analysis, UI/UX design, and software development.
              </p>
              <div className="flex gap-3">
                <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="https://github.com/SamBudah/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card hover:bg-primary/20 text-foreground hover:text-primary transition-all border border-border hover:border-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Motion>
                <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="https://linkedin.com/in/samsonmaithya" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card hover:bg-primary/20 text-foreground hover:text-primary transition-all border border-border hover:border-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Motion>
              </div>
            </div>
          </Motion>
          
          {/* Contact Form */}
          <Motion
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or idea..." 
                  className="bg-background border-border focus:border-primary min-h-[150px]"
                />
              </div>
              <Motion whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-6 rounded-lg shadow-lg hover:shadow-glow transition-all flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </Motion>
            </form>
          </Motion>
        </div>
      </div>
    </section>
  );
}
