import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { LatestNews } from '@/components/LatestNews';
import { Individualization } from '@/components/Individualization';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Accessories } from '@/components/Accessories';
import { BrabusCrawler } from '@/components/BrabusCrawler';
import { Supercars } from '@/components/Supercars';
import { Marine } from '@/components/Marine';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <LatestNews />
      <Individualization />
      <WhyChooseUs />
      <Accessories />
      <BrabusCrawler />
      <Supercars />
      <Marine />
      <CategoryGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}
