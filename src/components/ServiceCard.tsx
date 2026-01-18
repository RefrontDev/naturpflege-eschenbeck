import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 group h-full">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold leading-none tracking-tight text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mb-4 text-muted-foreground flex-1">
        {description}
      </p>
      <Link href={href} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
        Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
