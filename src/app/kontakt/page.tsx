"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

// Dynamically import Map with no SSR
const MapRaw = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted animate-pulse rounded-xl flex items-center justify-center">Karte wird geladen...</div>,
});

export default function KontaktPage() {
  return (
    <div className="flex flex-col pb-24 overflow-x-hidden">
      {/* Header */}
      <div className="bg-primary/5 py-16 sm:py-24">
        <Container className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kontakt
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Wir freuen uns auf Ihre Anfrage. Lassen Sie uns über Ihr Projekt sprechen.
          </motion.p>
        </Container>
      </div>

      <Container className="mt-16 sm:mt-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Vorname</label>
                    <input type="text" id="first-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow" placeholder="Max" required />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nachname</label>
                    <input type="text" id="last-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow" placeholder="Mustermann" required />
                  </motion.div>
                </div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">E-Mail</label>
                  <input type="email" id="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow" placeholder="max@beispiel.de" required />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Telefon (optional)</label>
                  <input type="tel" id="phone" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow" placeholder="+49 123 45678" />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nachricht</label>
                  <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow" placeholder="Wie können wir Ihnen helfen?" required></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <Button type="submit" size="lg" className="w-full">Nachricht senden</Button>
                </motion.div>
              </form>
            </div>
          </AnimatedSection>

          {/* Info & Map */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktdaten</h2>
                <ul className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Anschrift",
                      content: (
                        <span className="text-muted-foreground">Naturpflege Eschenbeck<br />Leibelbach 4<br />91567 Herrieden</span>
                      )
                    },
                    {
                      icon: Mail,
                      title: "E-Mail",
                      content: (
                        <a href="mailto:info@naturpflege-eschenbeck.de" className="text-muted-foreground hover:text-primary transition-colors">info@naturpflege-eschenbeck.de</a>
                      )
                    },
                    {
                      icon: Phone,
                      title: "Telefon",
                      content: (
                        <span className="text-muted-foreground text-sm italic">Telefonnummer folgt</span>
                      )
                    }
                  ].map((item, index) => (
                    <motion.li
                      key={item.title}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <item.icon className="mr-4 h-6 w-6 text-primary shrink-0" />
                      <div>
                        <span className="font-semibold block">{item.title}</span>
                        {item.content}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                className="h-[300px] w-full rounded-2xl overflow-hidden border shadow-sm relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <MapRaw />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}
