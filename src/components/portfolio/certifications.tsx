'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { certificationsData, type Certification } from '@/lib/data';
import { Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};


export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleCardClick = (cert: Certification) => {
    if (cert.image) {
      setSelectedCert(cert);
    }
  };

  return (
    <>
      <SectionWrapper id="certifications" className="bg-background">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
          <SectionTitle>Certifications</SectionTitle>
          <motion.div 
            className="grid gap-8 md:grid-cols-1 lg:grid-cols-2"
            variants={containerVariants}
          >
            {certificationsData.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  onClick={() => handleCardClick(cert)}
                  className={`transition-shadow duration-300 hover:shadow-lg ${cert.image ? 'cursor-pointer' : ''}`}
                >
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Award className="h-8 w-8 flex-shrink-0 text-accent" />
                    <div className="flex-grow">
                      <CardTitle className="font-headline text-lg">{cert.title}</CardTitle>
                      <CardDescription className="mt-1">{cert.license}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <Dialog open={!!selectedCert} onOpenChange={(isOpen) => !isOpen && setSelectedCert(null)}>
        <DialogContent className="max-w-3xl">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl">{selectedCert.title}</DialogTitle>
                <DialogDescription>{selectedCert.license}</DialogDescription>
                {selectedCert.description && <p className="text-sm text-muted-foreground pt-2">{selectedCert.description}</p>}
              </DialogHeader>
              <div className="py-4">
                <Image
                  src={selectedCert.image!}
                  alt={`${selectedCert.title} certificate`}
                  width={800}
                  height={600}
                  className="w-full rounded-lg object-contain"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
