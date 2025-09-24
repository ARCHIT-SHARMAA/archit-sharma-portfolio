'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './section-wrapper';
import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <SectionTitle>My Skills</SectionTitle>
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
            >
              <Card className="flex flex-col h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {typeof category.skills === 'object' && !Array.isArray(category.skills) ? (
                    <div className="space-y-4">
                      {Object.entries(category.skills).map(([subCategory, skills]) => (
                        <div key={subCategory}>
                          <h3 className="mb-2 text-sm font-semibold text-muted-foreground">{subCategory}:</h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                              <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {(category.skills as string[]).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
