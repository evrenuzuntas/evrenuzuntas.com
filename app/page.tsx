import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Github, Linkedin, Mail, Rocket, Palette, Smartphone } from "lucide-react";

export default function Home() {
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

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Merhaba, Ben{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Evren Uzuntaş
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Modern web ve mobil uygulamalar geliştiriyorum. Kullanıcı odaklı çözümler üretmeyi seviyorum.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/projects">Projelerimi Gör</Link>
            </Button>
            <Button className="border border-input bg-background hover:bg-accent" asChild>
              <Link href="/contact">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Hakkımda
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Kimim?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Merhaba! Ben Evren Uzuntaş, tutkulu bir Full Stack Developer&apos;ım. Modern web teknolojileri
                kullanarak kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.
              </p>
              <p className="text-muted-foreground">
                React, Next.js, Node.js ve TypeScript gibi teknolojilerle çalışıyorum. Ayrıca UI/UX tasarımına
                da ilgi duyuyorum ve kullanıcı deneyimini ön planda tutuyorum.
              </p>
              <p className="text-muted-foreground">
                Sürekli öğrenmeyi ve yeni teknolojileri keşfetmeyi seviyorum. Her projede kendimi geliştirmeye
                ve en iyi çözümleri üretmeye odaklanıyorum.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Projelerim
          </h2>
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
                      <Badge key={tag} className="bg-secondary text-secondary-foreground">
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

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Becerilerim
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Teknolojiler</CardTitle>
              <CardDescription>
                Günlük olarak kullandığım ve üzerinde çalıştığım teknolojiler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} className="border text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            İletişim
          </h2>
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

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Evren Uzuntaş. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
