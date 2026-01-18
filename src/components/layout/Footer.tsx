import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-muted mt-auto border-t">
      <Container className="py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-primary">Naturpflege Eschenbeck</span>
            <p className="text-sm leading-6 text-muted-foreground w-full max-w-xs">
              Wir pflegen, was gewachsen ist - mit Hand und Verstand. Ihr Partner für Landschaftspflege im Altmühltal.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/ueber-mich" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link href="/leistungen" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      Leistungen
                    </Link>
                  </li>
                  <li>
                    <Link href="/galerie" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      Galerie
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Rechtliches</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/impressum" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link href="/datenschutz" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      Datenschutz
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Kontakt</h3>
                 <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-muted-foreground">
                    Markus Eschenbeck
                  </li>
                  <li className="text-sm leading-6 text-muted-foreground">
                     Herrieden, Altmühltal
                  </li>
                  <li>
                    <a href="mailto:info@naturpflege-eschenbeck.de" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      info@naturpflege-eschenbeck.de
                    </a>
                  </li>
                </ul>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Naturpflege Eschenbeck. Alle Rechte vorbehalten.
          </p>
        </div>
      </Container>
    </footer>
  );
}
