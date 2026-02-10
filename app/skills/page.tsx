import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
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
      
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
            Becerilerim
          </h1>
          
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
                  <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
