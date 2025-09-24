'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { projectsData, type Project } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <SectionWrapper id="projects" className="bg-secondary">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
          <SectionTitle>My Projects</SectionTitle>
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card
                  className="overflow-hidden h-full flex flex-col shadow-md group transition-all duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.visuals[0].src as string}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.visuals[0].hint}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{project.objective}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="default">{tech}</Badge>
                        ))}
                        {project.tech.length > 3 && <Badge variant="secondary">+{project.tech.length - 3}</Badge>}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.objective}</DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[70vh] pr-6">
                <div className="grid gap-6 py-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.visuals.map((visual, index) => (
                        <CarouselItem key={index}>
                           <Image
                              src={visual.src as string}
                              alt={`${selectedProject.title} visual ${index + 1}`}
                              width={600}
                              height={400}
                              className="w-full rounded-lg object-cover"
                              data-ai-hint={visual.hint}
                            />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  
                  <div>
                    <h3 className="font-headline text-lg font-semibold">My Role & Contributions</h3>
                    <p className="text-muted-foreground">{selectedProject.role}</p>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold">Key Features</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {selectedProject.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-semibold">Impact & Learnings</h3>
                    <p className="text-muted-foreground">{selectedProject.impact}</p>
                    <p className="mt-2 text-muted-foreground">{selectedProject.learnings}</p>
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
