"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin } from "lucide-react";

// Dynamically import Map with no SSR
const MapRaw = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted animate-pulse rounded-xl flex items-center justify-center">Karte wird geladen...</div>,
});

export default function KontaktPage() {
  return (
    <div className="flex flex-col pb-24">
       {/* Header */}
       <div className="bg-primary/5 py-16 sm:py-24">
        <Container className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Kontakt</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Wir freuen uns auf Ihre Anfrage. Lassen Sie uns über Ihr Projekt sprechen.
            </p>
        </Container>
      </div>

      <Container className="mt-16 sm:mt-24">
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Vorname</label>
                            <input type="text" id="first-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Max" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nachname</label>
                            <input type="text" id="last-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Mustermann" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">E-Mail</label>
                        <input type="email" id="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="max@beispiel.de" required />
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Telefon (optional)</label>
                        <input type="tel" id="phone" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="+49 123 45678" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nachricht</label>
                        <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Wie können wir Ihnen helfen?" required></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full">Nachricht senden</Button>
                </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
                 <div>
                    <h2 className="text-2xl font-bold mb-6">Kontaktdaten</h2>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <MapPin className="mr-4 h-6 w-6 text-primary shrink-0" />
                            <div>
                                <span className="font-semibold block">Anschrift</span>
                                <span className="text-muted-foreground">Naturpflege Eschenbeck<br/>Leibelbach 4<br/>91567 Herrieden</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Mail className="mr-4 h-6 w-6 text-primary shrink-0" />
                            <div>
                                <span className="font-semibold block">E-Mail</span>
                                <a href="mailto:info@naturpflege-eschenbeck.de" className="text-muted-foreground hover:text-primary transition-colors">info@naturpflege-eschenbeck.de</a>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <Phone className="mr-4 h-6 w-6 text-primary shrink-0" />
                            <div>
                                <span className="font-semibold block">Telefon</span>
                                <span className="text-muted-foreground text-sm italic">Telefonnummer folgt</span>
                            </div>
                        </li>
                    </ul>
                 </div>

                 <div className="h-[300px] w-full rounded-2xl overflow-hidden border shadow-sm relative">
                    <MapRaw />
                 </div>
            </div>
        </div>
      </Container>
    </div>
  );
}
