import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube } from "lucide-react";

export default function YoutubePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
            YouTube
          </h1>
          
          <Card>
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Youtube className="h-6 w-6" />
              </div>
              <CardTitle>YouTube Kanalım</CardTitle>
              <CardDescription>
                Teknoloji ve yazılım geliştirme içerikleri
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                YouTube kanalımda web geliştirme, programlama ve teknoloji konularında içerikler paylaşıyorum.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
