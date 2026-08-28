import graduationPhoto from "./assets/graduation-photo.jpg";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className="sticky top-0 z-50 w-full border-b transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(255, 249, 242, 0.78)" : "#FFF9F2",
          borderColor: scrolled
            ? "rgba(0, 62, 31, 0.12)"
            : "rgba(0, 62, 31, 0.15)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="w-full px-8 py-4 flex items-center justify-between">
          {/* Name */}
          <a
            href="/"
            className="ml-6 font-display text-1xl md:text-1xl lg:text-2xl nav-name"
          >
            Neil Agnes Pimentel
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-8 mr-5">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen px-8">
        <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div className="text-center lg:text-left">
            <p
              className="inline-block px-3 py-1 text-4xl md:text-5xl lg:text-6xl mb-4"
              style={{
                backgroundColor: "var(--color-blush)",
                color: "var(--color-forest)",
              }}
            >
              Hello, I'm
            </p>

            <h1
              className="font-display text-5xl md:text-7xl lg:text-9xl font italic mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Neil Agnes
            </h1>

            <p
              className="max-w-2xl text-lg leading-relaxed mt-8"
              style={{ color: "var(--color-secondary)" }}
            >
              I enjoy building for the web, exploring new technologies, and
              leveraging AI as a tool to learn, create, and turn ideas into
              practical digital experiences.
            </p>
          </div>

          {/* Graduation Photo */}
          <div className="flex justify-center lg:translate-x-15">
            <figure className="w-full max-w-md">
              <img
                src={graduationPhoto}
                alt="Neil Agnes graduation portrait"
                className="w-full transition-transform duration-500 ease-out hover:scale-[1.02]"
              />

              <figcaption
                className="mt-3 flex justify-between text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--color-secondary)" }}
              >
                <span>2026</span>
                <span>Graduation Photo</span>
              </figcaption>
            </figure>
          </div>

          {/* Right Vertical Label */}
          <div
            className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--color-secondary)" }}
          >
            <span className="[writing-mode:vertical-rl]">
              Dasmariñas, Cavite, Philippines
            </span>
          </div>
        </div>
        {/* Left Decorative Panel */}
        <div
          className="hidden lg:block absolute left-0 top-0 h-full w-14"
          style={{ backgroundColor: "#003E1F", zIndex: 10 }}
        />
      </section>

      <section id="about" className="px-8 py-20 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-12">
            About Me
          </h2>
          <p className="max-w-3xl text-lg">
            I'm a Computer Science graduate with experience in software
            development, web development, and digital tools through academic
            projects and professional experience.
          </p>

          <p className="max-w-3xl text-lg mt-6">
            I enjoy building practical applications and exploring how technology
            can be used to solve problems. My experience includes working with
            web technologies, programming languages, databases, and digital
            tools across academic and professional projects.
          </p>
        </div>
      </section>

      <section id="skills" className="px-8 py-20 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-xl font-bold mb-3">Frontend</h3>

              <p>HTML · CSS · JavaScript · ReactJS · Tailwind CSS</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Programming</h3>

              <p>Python · C# · Java</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Database</h3>

              <p>MySQL</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Tools & Technologies</h3>

              <p>Git · GitHub · XAMPP · Godot</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-8 py-20 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-12">
            Projects
          </h2>
          <div>
            <article className="border-t py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <p className="text-sm">01</p>

                <div className="md:col-span-3">
                  <h3 className="text-3xl font-bold mb-4">byHANDeng</h3>

                  <p className="max-w-2xl mb-6">
                    An e-commerce website for handcrafted crocheted products,
                    designed to provide a simple online shopping experience.
                  </p>

                  <p className="text-sm">HTML · CSS · JavaScript</p>
                </div>
              </div>
            </article>

            <article className="border-t py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <p className="text-sm">02</p>

                <div className="md:col-span-3">
                  <h3 className="text-3xl font-bold mb-4">GluttonyAndGreed</h3>

                  <p className="max-w-2xl mb-6">
                    A 2D game developed with Godot, exploring survival, power,
                    and strategic decision-making.
                  </p>

                  <p className="text-sm">Godot</p>
                </div>
              </div>
            </article>

            <article className="border-t py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <p className="text-sm">03</p>

                <div className="md:col-span-3">
                  <h3 className="text-3xl font-bold mb-4">
                    The Remnants of Isa
                  </h3>

                  <p className="max-w-2xl mb-6">
                    A narrative exploration game where players uncover fragments
                    of a woman's fading memories through interactions with
                    objects.
                  </p>

                  <p className="text-sm">Godot</p>
                </div>
              </div>
            </article>

            <article className="border-t py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <p className="text-sm">04</p>

                <div className="md:col-span-3">
                  <h3 className="text-3xl font-bold mb-4">
                    Cybercafe Management System
                  </h3>

                  <p className="max-w-2xl mb-6">
                    A desktop-based management system developed as a group
                    project, featuring user management, session monitoring, and
                    transaction recording.
                  </p>

                  <p className="text-sm">C# · Java GUI · MySQL · XAMPP</p>
                </div>
              </div>
            </article>

            <article className="border-t" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
