import Nav          from "@/components/nav";
import Hero         from "@/components/hero";
import Guarantee    from "@/components/guarantee";
import Services     from "@/components/services";
import QuoteCalculator from "@/components/calculator";
import RecentJobs   from "@/components/recent-jobs";
import Process      from "@/components/process";
import Testimonials from "@/components/testimonials";
import FAQ          from "@/components/faq";
import Contact      from "@/components/contact";
import Footer       from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Guarantee />
        <Services />
        <QuoteCalculator />
        <RecentJobs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
