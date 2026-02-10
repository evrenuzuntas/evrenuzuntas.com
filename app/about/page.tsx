import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
            Hakkımda
          </h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Kimim?</CardTitle>
              <CardDescription>Kısa bir tanıtım</CardDescription>
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
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
