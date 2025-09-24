import Header from '@/components/layout/header';
import Hero from '@/components/portfolio/hero';
import About from '@/components/portfolio/about';
import Education from '@/components/portfolio/education';
import Skills from '@/components/portfolio/skills';
import Projects from '@/components/portfolio/projects';
import Certifications from '@/components/portfolio/certifications';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
