import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { personalData, linksData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-4">
            {linksData.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </Button>
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
