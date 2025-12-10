import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      {/* Beranda */}
      <section id="beranda">
        <Banner />
      </section>

      {/* Tentang */}
      <section id="tentang">
        <About />
      </section>

      {/* Layanan */}
      <section id="layanan">
        <Services />
      </section>

      {/* Keunggulan */}
      <section id="keunggulan">
        <Advantages />
      </section>

      {/* Testimonial */}
      <section id="testimonial">
        <Testimonials />
      </section>

      {/* Tim */}
      <section id="tim">
        <Team />
      </section>

      {/* Kontak */}
      <section id="kontak">
        <Contact />
      </section>
    </main>
  );
}
