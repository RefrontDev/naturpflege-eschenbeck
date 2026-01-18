"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Start", href: "/" },
  { name: "Über uns", href: "/ueber-mich" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Galerie", href: "/galerie" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="relative h-12 w-auto aspect-[3/1]">
                 <Image
                  src="/Logo-quer.png"
                  alt="Naturpflege Eschenbeck"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild>
              <Link href="/kontakt">Angebot anfragen</Link>
            </Button>
          </div>
        </div>
      </Container>


      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg z-50">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pb-4">
                <Button className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/kontakt">Angebot anfragen</Link>
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
