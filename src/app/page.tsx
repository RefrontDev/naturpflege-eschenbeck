import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import ServiceCard from "@/components/ServiceCard";
import { Leaf, Trees, Sprout, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-primary/5 pt-20 pb-16 lg:pt-32 lg:pb-24">
         {/* Green gradient background overlay if no image yet */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        {/* Placeholder for Hero Image - once user provides one */}
        {/* <div className="absolute inset-0 z-0">
             <Image src="/hero.jpg" alt="Landschaftspflege" fill className="object-cover opacity-20" />
        </div> */}

        <Container className="relative z-10 text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Wir pflegen, was gewachsen ist <br className="hidden sm:block" />
              <span className="text-primary block mt-2">mit Hand und Verstand.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
              Ihr kompetenter Partner für professionelle Landschafts- und Baumpflege im Altmühltal. 
              Spezialisiert auf schonende Handarbeit für Natur und Kulturlandschaft.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="text-lg px-8 h-14" asChild>
                <Link href="/kontakt">Kostenloses Angebot anfragen</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 h-14" asChild>
                <Link href="/leistungen">Unsere Leistungen</Link>
              </Button>
            </div>
            
            {/* Trust Badges / Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 opacity-80">
                <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="h-8 w-8 text-secondary" />
                    <span className="text-sm font-semibold">Zertifiziert</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Trees className="h-8 w-8 text-secondary" />
                    <span className="text-sm font-semibold">Nachhaltig</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Sprout className="h-8 w-8 text-secondary" />
                    <span className="text-sm font-semibold">Regional</span>
                </div>
                 <div className="flex flex-col items-center gap-2">
                    <Leaf className="h-8 w-8 text-secondary" />
                    <span className="text-sm font-semibold">Schonend</span>
                </div>
            </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/50">
                    {/* Placeholder for Profile Picture */}
                     <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <span className="text-lg font-medium">[Bild: Markus Eschenbeck auf dem Hof]</span>
                     </div>
                </div>
                <div>
                     <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                        Tradition trifft auf modernes Fachwissen
                     </h2>
                     <div className="space-y-4 text-lg text-muted-foreground">
                        <p>
                            Ich bin Markus Eschenbeck. Aufgewachsen auf einem historischen Bauernhof im schönen Altmühltal, 
                            wurde mir die Liebe zur Natur und Landwirtschaft in die Wiege gelegt.
                        </p>
                        <p>
                            Mit meiner Erfahrung und speziellen Fortbildungen, wie dem Kurs 'Landschaft anpacken' 
                            und der angehenden Ausbildung zum Baumwart, stehe ich für fachgerechte und ökologisch 
                            wertvolle Pflegearbeiten.
                        </p>
                         <p>
                            Mein Ziel ist es, unsere fränkische Kulturlandschaft zu erhalten – oft dort, 
                            wo große Maschinen nicht hinkommen.
                        </p>
                     </div>
                     <div className="mt-8">
                        <Button variant="ghost" className="pl-0 text-primary hover:bg-transparent hover:text-primary/80" asChild>
                            <Link href="/ueber-mich" className="group flex items-center text-lg font-semibold">
                                Mehr über mich und meine Philosophie <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                     </div>
                </div>
            </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <Container>
             <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Unsere Leistungen</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Von der Streuobstwiese bis zur Heckenpflege – wir bieten ein breites Spektrum an Dienstleistungen für gesunde Landschaften.
                </p>
             </div>
             
             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard 
                    title="Streuobstpflege" 
                    description="Fachgerechter Schnitt, Pflanzung und Erhalt von Obstbäumen für vitale Bestände und reiche Ernte."
                    icon={<Trees className="h-6 w-6" />}
                    href="/leistungen#streuobst"
                />
                 <ServiceCard 
                    title="Landschaftspflege" 
                    description="Entbuschung, Mahd von Feuchtwiesen und Pflege extensiv genutzter Flächen für mehr Artenvielfalt."
                    icon={<Leaf className="h-6 w-6" />}
                    href="/leistungen#landschaftspflege"
                />
                 <ServiceCard 
                    title="Baum- & Gehölzpflege" 
                    description="Pflanzung und Pflege von Hecken, Feldgehölzen sowie Baumschutzmaßnahmen."
                    icon={<Sprout className="h-6 w-6" />}
                    href="/leistungen#gehoelzpflege"
                />
             </div>
             
             <div className="mt-12 text-center">
                <Button size="lg" asChild>
                    <Link href="/leistungen">Alle Leistungen ansehen</Link>
                </Button>
             </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <Container className="text-center">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Bereit für ein gepflegtes Stück Natur?
             </h2>
             <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 mb-10">
                Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir finden die passende Lösung für Ihr Grundstück.
             </p>
             <Button size="lg" variant="secondary" className="h-14 px-8 text-lg text-foreground font-semibold" asChild>
                <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
             </Button>
        </Container>
      </section>
    </div>
  );
}
