import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
            İletişim
          </h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Benimle İletişime Geçin</CardTitle>
              <CardDescription>
                Projeleriniz için benimle iletişime geçmekten çekinmeyin!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="border border-input bg-background hover:bg-accent" asChild>
                  <a href="mailto:evren@example.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    E-posta
                  </a>
                </Button>
                <Button className="border border-input bg-background hover:bg-accent" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button className="border border-input bg-background hover:bg-accent" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
