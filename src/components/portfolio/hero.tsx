'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Eye } from 'lucide-react';
import { personalData } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  return (
    <motion.section 
      id="home" 
      className="bg-secondary py-24 md:py-32 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <motion.h1 
            className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            {personalData.title}
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground"
            variants={itemVariants}
          >
            Hi, I'm {personalData.name}. A recent B.Tech graduate in Computer Science Engineering, passionate about building efficient and innovative software.
          </motion.p>
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Link href="#projects">
              <Button size="lg" className="w-full sm:w-auto">
                <Eye className="mr-2 h-5 w-5" />
                View My Projects
              </Button>
            </Link>
            <a href={personalData.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div className="flex justify-center" variants={imageVariants}>
          <Image
            src={personalData.profileImageUrl}
            alt={personalData.name}
            width={400}
            height={400}
            className="rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
