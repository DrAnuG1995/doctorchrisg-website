import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SocialSuccess from "@/components/SocialSuccess";
import Course from "@/components/Course";
import Advisory from "@/components/Advisory";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <SocialSuccess />
        <Course />
        <Advisory />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
