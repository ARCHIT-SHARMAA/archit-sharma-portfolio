'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { educationData } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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


export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-secondary">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <SectionTitle>Education</SectionTitle>
            <motion.div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3" variants={containerVariants}>
            {educationData.map((edu, index) => {
                if (edu.details) {
                return (
                    <motion.div 
                        key={index} 
                        variants={itemVariants} 
                        className="lg:col-span-3"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`item-${index}`} className="border-b-0">
                            <Card className="transition-shadow duration-300 hover:shadow-xl group">
                                <AccordionTrigger className="w-full p-0 hover:no-underline [&>svg.accordion-chevron]:hidden">
                                    <div className="w-full text-left">
                                        <CardHeader>
                                            <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">{edu.degree}</CardTitle>
                                            <CardDescription>{edu.institution}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{edu.period}</p>
                                            <p className="mt-2 font-semibold text-primary">{edu.score}</p>
                                        </CardContent>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                <CardContent className="pt-0">
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                    </ul>
                                </CardContent>
                                </AccordionContent>
                            </Card>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                );
                }
                return (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <Card className="transition-shadow duration-300 hover:shadow-xl h-full group">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">{edu.degree}</CardTitle>
                                <CardDescription>{edu.institution}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{edu.period}</p>
                                <p className="mt-2 font-semibold text-primary">{edu.score}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                );
            })}
            </motion.div>
        </motion.div>
    </SectionWrapper>
  );
}
