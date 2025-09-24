'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionTitle } from './section-wrapper';
import { personalData } from '@/lib/data';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function About() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <SectionWrapper id="about" className="bg-background">
        <SectionTitle>About Me</SectionTitle>
        <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground md:text-xl">
          {personalData.about}
        </p>
      </SectionWrapper>
    </motion.div>
  );
}
