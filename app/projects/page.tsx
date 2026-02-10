import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Palette, Smartphone } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Ticaret Platformu",
      description: "Modern ve kullanıcı dostu bir e-ticaret platformu. React ve Node.js ile geliştirildi.",
      tags: ["React", "Node.js", "MongoDB"],
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: "Mobil Uygulama",
      description: "iOS ve Android için cross-platform mobil uygulama. React Native ile geliştirildi.",
      tags: ["React Native", "TypeScript", "Firebase"],
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      title: "Portfolio Websitesi",
      description: "Modern ve responsive portfolio websitesi. Next.js ve Tailwind CSS ile tasarlandı.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      icon: <Palette className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <section className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
            Projelerim
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {project.icon}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
