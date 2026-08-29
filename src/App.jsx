import graduationPhoto from "./assets/graduation-photo.jpg";
import { useEffect, useRef, useState } from "react";
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

  const [openSkill, setOpenSkill] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const section = skillsRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setOpenSkill(null);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
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
            href="#home"
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
      {/* Hero */}
      <section id="home" className="relative min-h-screen px-8">
        <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p
                className="flex items-center gap-3 text-sm tracking-[0.3em] uppercase"
                style={{ color: "var(--color-secondary)" }}
              >
                <span
                  className="inline-block w-10 h-px"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                />
                A DIGITAL SPACE
              </p>
            </div>
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
      <section id="about" className="min-h-screen px-8 pt-32 pb-24">
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Label */}
          <p
            className="flex items-center gap-3 text-sm tracking-[0.3em] uppercase mb-8"
            style={{ color: "var(--color-secondary)" }}
          >
            <span
              className="inline-block w-10 h-px"
              style={{ backgroundColor: "var(--color-secondary)" }}
            />
            About Me
          </p>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-20">
            <div>
              <p
                className="text-lg md:text-xl leading-relaxed mb-8"
                style={{ color: "var(--color-secondary)" }}
              >
                I'm Neil Agnes, a Computer Science graduate figuring out where I
                fit in the ever-changing world of technology.
              </p>

              <p
                className="text-lg md:text-xl leading-relaxed mb-8"
                style={{ color: "var(--color-secondary)" }}
              >
                I didn't originally plan on pursuing technology. Becoming a
                dentist was once the path I wanted, but circumstances led me
                somewhere different. Computer Science felt like the practical
                choice at the time, and four years later, I'm still discovering
                what this field has to offer.
              </p>

              <p
                className="text-lg md:text-xl leadic ng-relaxed"
                style={{ color: "var(--color-secondary)" }}
              >
                Somewhere along the way, I found myself enjoying the process of
                building things—especially for the web. I've also worked outside
                of development, helping with family businesses and supporting
                remote operations through virtual assistance, affiliate
                management, research, and administrative work.
              </p>
            </div>

            {/* Highlight */}
            <div className="flex items-center">
              <p
                className="font-accent text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-1"
                style={{ color: "var(--color-forest)" }}
              >
                <span className="lg:whitespace-nowrap">
                  I didn't start with a passion for technology.
                </span>
                <br />I found things along the way to make me enjoy it.
              </p>
            </div>
          </div>

          {/* Direction */}
          <div className="mt-32 pt-10 border-t">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20">
              <p
                className="text-sm tracking-[0.25em] uppercase"
                style={{ color: "var(--color-secondary)" }}
              >
                Where I'm headed
              </p>

              <div>
                <p
                  className="text-lg md:text-xl leading-relaxed mb-8"
                  style={{ color: "var(--color-secondary)" }}
                >
                  I'm currently drawn to frontend and web development, with the
                  goal of eventually becoming a full-stack developer. I'm also
                  curious about AI research, data analysis, and the different
                  ways technology can be used to solve real-world problems.
                </p>

                <p
                  className="font-display italic text-3xl md:text-4xl leading-tight"
                  style={{ color: "var(--color-forest)" }}
                >
                  I'm still figuring things out.
                  <br />
                  And honestly, that's okay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section
        id="skills"
        ref={skillsRef}
        className="min-h-screen px-8 py-24 flex items-center"
        style={{ backgroundColor: "#FFF9F2" }}
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Label */}
          <p
            className="flex items-center gap-3 text-sm tracking-[0.3em] uppercase mb-8 font-mono"
            style={{ color: "var(--color-secondary)" }}
          >
            <span
              className="inline-block w-10 h-px"
              style={{ backgroundColor: "var(--color-secondary)" }}
            />
            Skills
          </p>

          {/* Heading */}
          <h2
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
            style={{ color: "var(--color-forest)" }}
          >
            Things I use to build things.
          </h2>

          {/* Interactive Skills */}
          <div className="border-t">
            {/* Frontend */}
            <div className="border-b">
              <button
                type="button"
                onClick={() =>
                  setOpenSkill(openSkill === "frontend" ? null : "frontend")
                }
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span
                    className="font-body font-medium text-m tracking-[0.2em]"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    01
                  </span>

                  <span
                    className="font-mono text-xl md:text-2xl uppercase"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Frontend
                  </span>
                </div>

                <span
                  className="font-mono font-medium italic text-2xl transition-transform duration-300"
                  style={{
                    color: "var(--color-secondary)",
                    transform:
                      openSkill === "frontend"
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  openSkill === "frontend"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="font-body italic text-base md:text-lg leading-relaxed pb-6 pl-12 md:pl-16"
                    style={{ color: "var(--color-forest)" }}
                  >
                    React · JavaScript · HTML · CSS · Tailwind CSS
                  </p>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="border-b">
              <button
                type="button"
                onClick={() =>
                  setOpenSkill(
                    openSkill === "development" ? null : "development",
                  )
                }
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span
                    className="font-body text-m tracking-[0.2em]"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    02
                  </span>

                  <span
                    className="font-mono text-xl md:text-2xl uppercase"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Development
                  </span>
                </div>

                <span
                  className="font-mono font-medium italic text-2xl transition-transform duration-300"
                  style={{
                    color: "var(--color-secondary)",
                    transform:
                      openSkill === "development"
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  openSkill === "development"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="font-body italic text-base md:text-lg leading-relaxed pb-6 pl-12 md:pl-16"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Python · Java · Git · GitHub
                  </p>
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="border-b">
              <button
                type="button"
                onClick={() =>
                  setOpenSkill(openSkill === "database" ? null : "database")
                }
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span
                    className="font-body text-m tracking-[0.2em]"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    03
                  </span>

                  <span
                    className="font-mono text-xl md:text-2xl uppercase"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Database
                  </span>
                </div>

                <span
                  className="font-mono font-medium italic text-2xl transition-transform duration-300"
                  style={{
                    color: "var(--color-secondary)",
                    transform:
                      openSkill === "database"
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  openSkill === "database"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="font-body italic text-base md:text-lg leading-relaxed pb-6 pl-12 md:pl-16"
                    style={{ color: "var(--color-forest)" }}
                  >
                    MySQL
                  </p>
                </div>
              </div>
            </div>

            {/* Exploring */}
            <div className="border-b">
              <button
                type="button"
                onClick={() =>
                  setOpenSkill(openSkill === "exploring" ? null : "exploring")
                }
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span
                    className="font-body text-m tracking-[0.2em]"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    04
                  </span>

                  <span
                    className="font-mono text-xl md:text-2xl uppercase"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Exploring
                  </span>
                </div>

                <span
                  className="font-mono font-medium italic text-2xl transition-transform duration-300"
                  style={{
                    color: "var(--color-secondary)",
                    transform:
                      openSkill === "exploring"
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  openSkill === "exploring"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="font-body italic text-base md:text-lg leading-relaxed pb-6 pl-12 md:pl-16"
                    style={{ color: "var(--color-forest)" }}
                  >
                    AI · Full-stack Development · Data Analysis
                  </p>
                </div>
              </div>
            </div>

            {/* How I Work */}
            <div className="border-b">
              <button
                type="button"
                onClick={() =>
                  setOpenSkill(openSkill === "how-i-work" ? null : "how-i-work")
                }
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span
                    className="font-body text-m tracking-[0.2em]"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    05
                  </span>

                  <span
                    className="font-mono text-xl md:text-2xl uppercase"
                    style={{ color: "var(--color-forest)" }}
                  >
                    How I Work
                  </span>
                </div>

                <span
                  className="font-mono font-medium italic text-2xl transition-transform duration-300"
                  style={{
                    color: "var(--color-secondary)",
                    transform:
                      openSkill === "how-i-work"
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  openSkill === "how-i-work"
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className="font-body italic text-base md:text-lg leading-relaxed pb-6 pl-12 md:pl-16"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Adaptable · Organized · Detail-oriented · Curious ·
                    Collaborative · Resourceful
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24">
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Label */}
          <p
            className="flex items-center gap-3 text-sm tracking-[0.3em] uppercase mb-8 font-mono"
            style={{ color: "var(--color-secondary)" }}
          >
            <span
              className="inline-block w-10 h-px"
              style={{ backgroundColor: "var(--color-secondary)" }}
            />
            Projects
          </p>

          {/* Heading */}
          <h2
            className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-16"
            style={{ color: "var(--color-forest)" }}
          >
            Things I've built along the way.
          </h2>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 01 */}
            <article
              className="h-[380px] p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1"
              style={{ backgroundColor: "#FFF9F2" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 h-full">
                <div className="flex flex-col min-w-0">
                  <p
                    className="font-body font-medium text-m tracking-[0.2em] mb-10"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    01
                  </p>

                  <h3
                    className="font-accent text-3xl md:text-4xl uppercase mb-5"
                    style={{ color: "var(--color-forest)" }}
                  >
                    byHANDeng
                  </h3>

                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    An e-commerce website for handcrafted crocheted products,
                    designed to provide a simple online shopping experience.
                  </p>

                  <p
                    className="font-body italic text-sm md:text-base mt-auto"
                    style={{ color: "var(--color-forest)" }}
                  >
                    HTML · CSS · JavaScript
                  </p>
                </div>

                <div
                  className="lg:border-l lg:pl-8 flex items-start"
                  style={{ borderColor: "rgba(0, 62, 31, 0.15)" }}
                >
                  <p
                    className="font-body italic text-sm leading-relaxed"
                    style={{ color: "var(--color-forest)" }}
                  >
                    A project I did with my classmate Andrea during our first
                    year. <br />
                    <br />
                    It was made for her since she makes crochet, and we came up
                    with HANDeng from “handcrafted” + Andeng.
                  </p>
                </div>
              </div>
            </article>

            {/* Project 02 */}
            <article
              className="h-[380px] p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1"
              style={{ backgroundColor: "#FFF9F2" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 h-full">
                <div className="flex flex-col min-w-0">
                  <p
                    className="font-body font-medium text-m tracking-[0.2em] mb-10"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    02
                  </p>

                  <h3
                    className="font-accent text-3xl md:text-4xl uppercase mb-5"
                    style={{ color: "var(--color-forest)" }}
                  >
                    GluttonyAndGreed
                  </h3>

                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    A basic 2D platformer game developed with Godot, built
                    around survival, power, and strategic decision-making.
                  </p>

                  <p
                    className="font-body italic text-sm md:text-base mt-auto"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Godot
                  </p>
                </div>

                <div
                  className="lg:border-l lg:pl-8 flex flex-col"
                  style={{ borderColor: "rgba(0, 62, 31, 0.15)" }}
                >
                  <p
                    className="font-body italic text-sm leading-relaxed"
                    style={{ color: "var(--color-forest)" }}
                  >
                    This was from my 3rd year. A simple game that I made for a
                    game jam, I just made the mechanics complicated LOL.
                  </p>

                  <p
                    className="font-body italic text-sm leading-relaxed mt-5"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Luckily, I was able to upload it because it was a must. This
                    one survived!
                  </p>

                  <a
                    href="https://qneilxy.itch.io/gluttony-and-greed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm mt-auto transition-opacity duration-300 hover:opacity-60"
                    style={{ color: "var(--color-forest)" }}
                  >
                    View on itch.io ↗
                  </a>
                </div>
              </div>
            </article>

            {/* Project 03 */}
            <article
              className="h-[380px] p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1"
              style={{ backgroundColor: "#FFF9F2" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 h-full">
                <div className="flex flex-col min-w-0">
                  <p
                    className="font-body font-medium text-m tracking-[0.2em] mb-10"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    03
                  </p>

                  <h3
                    className="font-accent text-3xl md:text-4xl uppercase mb-5"
                    style={{ color: "var(--color-forest)" }}
                  >
                    The Remnants of Isa
                  </h3>

                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    A top-down narrative exploration game about Isa, a woman
                    with early-onset Alzheimer's disease. Returning to her old
                    home, she explores familiar spaces and objects while trying
                    to preserve fragments of memories.
                  </p>

                  <p
                    className="font-body italic text-sm md:text-base mt-auto"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Godot
                  </p>
                </div>

                <div
                  className="lg:border-l lg:pl-8 flex items-start"
                  style={{ borderColor: "rgba(0, 62, 31, 0.15)" }}
                >
                  <p
                    className="font-body italic text-sm leading-relaxed"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Sadly, I wasn't able to upload this to itch.io before the
                    file got corrupted. <br />
                    <br />
                    Still, I'm really proud of this one. It may not be
                    everyone's cup of tea, but it's definitely the kind of game
                    that feels like me.
                  </p>
                </div>
              </div>
            </article>

            {/* Project 04 */}
            <article
              className="h-[380px] p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1"
              style={{ backgroundColor: "#FFF9F2" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 h-full">
                <div className="flex flex-col min-w-0">
                  <p
                    className="font-body font-medium text-m tracking-[0.2em] mb-10"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    04
                  </p>

                  <h3
                    className="font-accent text-3xl md:text-4xl uppercase mb-5"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Cybercafe Management System
                  </h3>

                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    A desktop-based management system developed as a group
                    project, featuring user management, session monitoring, and
                    transaction recording.
                  </p>

                  <p
                    className="font-body italic text-sm md:text-base mt-auto"
                    style={{ color: "var(--color-forest)" }}
                  >
                    C# · Java GUI · MySQL · XAMPP
                  </p>
                </div>

                <div
                  className="lg:border-l lg:pl-8 flex items-start"
                  style={{ borderColor: "rgba(0, 62, 31, 0.15)" }}
                >
                  <p
                    className="font-body italic text-sm leading-relaxed"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Another academic project we did with classmates. I was
                    mainly on the frontend side of this one, so it wasn't as
                    fancy as it could be, but it was still a fun experience.
                    <br />
                    <br />
                    Unfortunately, I don't have a copy of this either. Huhu.
                  </p>
                </div>
              </div>
            </article>

            {/* Project 05 — In Progress */}
            <article
              className="md:col-span-2 p-8 md:p-10 min-h-[360px] transition-transform duration-500 hover:-translate-y-1"
              style={{ backgroundColor: "#FFF9F2" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 h-full">
                {/* In Progress */}
                <div className="flex flex-col">
                  <p
                    className="font-body font-medium text-m tracking-[0.2em] mb-10"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    05
                  </p>

                  <h3
                    className="font-accent text-4xl md:text-5xl lg:text-6xl uppercase mb-4"
                    style={{ color: "var(--color-forest)" }}
                  >
                    In Progress
                  </h3>

                  <p
                    className="font-display italic text-2xl md:text-3xl leading-relaxed mb-6"
                    style={{ color: "var(--color-forest)" }}
                  >
                    More to come.
                  </p>

                  <p
                    className="text-base md:text-lg leading-relaxed max-w-xl"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Still building, still learning, still figuring out what
                    deserves a spot here. Hopefully, this list gets a little
                    longer soon.
                  </p>
                </div>

                {/* Contact CTA */}
                <div
                  className="lg:border-l lg:pl-12 flex flex-col justify-end"
                  style={{ borderColor: "rgba(0, 62, 31, 0.15)" }}
                >
                  <p
                    className="font-accent text-xl md:text-2xl uppercase tracking-[0.18em] mb-5"
                    style={{ color: "var(--color-forest)" }}
                  >
                    Want to work with me?
                  </p>

                  <p
                    className="font italic text-md md:text-lg leading-relaxed mb-8 max-w-md"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    I'm open to new ideas, collaborations, and opportunities.
                  </p>

                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-between w-full max-w-sm font-accent font-medium uppercase tracking-[0.15em] text-sm px-6 py-4 transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-forest)",
                      color: "#FFF9F2",
                    }}
                  >
                    <span>Let's connect</span>

                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
