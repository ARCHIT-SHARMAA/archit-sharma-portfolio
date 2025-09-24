import { cn } from '@/lib/utils';

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn('mb-12 text-center font-headline text-3xl font-bold md:text-4xl', className)}>
      {children}
    </h2>
  );
}
