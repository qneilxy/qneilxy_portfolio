import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 w-full border-b"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgba(0, 62, 31, 0.15)",
        }}
      >
        <div className="w-full px-8 py-4 flex items-center justify-between">
          {/* Name */}
          <Link
            to="/#home"
            className="ml-20 font-display text-1xl md:text-1xl lg:text-2xl nav-name"
          >
            Neil Agnes Pimentel
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8 mr-20">
            <Link to="/#about" className="nav-link">
              About
            </Link>

            <Link to="/#skills" className="nav-link">
              Skills
            </Link>

            <Link to="/#projects" className="nav-link">
              Projects
            </Link>

            <Link
              to="/contact"
              className="nav-link"
              style={{ color: "var(--color-forest)" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="w-full max-w-5xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-20">
          <p
            className="flex items-center gap-3 text-sm tracking-[0.3em] uppercase mb-8 font-mono"
            style={{ color: "var(--color-secondary)" }}
          >
            <span
              className="inline-block w-10 h-px"
              style={{ backgroundColor: "var(--color-secondary)" }}
            />
            Legal
          </p>

          <h1
            className="font-display italic text-6xl md:text-8xl leading-[0.9]"
            style={{ color: "var(--color-forest)" }}
          >
            Terms &{" "}
            <span
              className="inline-block px-3"
              style={{ backgroundColor: "var(--color-blush)" }}
            >
              Conditions.
            </span>
          </h1>

          <p
            className="max-w-2xl mt-10 text-lg leading-relaxed"
            style={{ color: "var(--color-secondary)" }}
          >
            These terms describe the general conditions for using this website
            and its content.
          </p>
        </div>

        {/* Terms */}
        <div
          className="max-w-3xl space-y-14"
          style={{ color: "var(--color-secondary)" }}
        >
          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Use of this website
            </h2>

            <p className="leading-relaxed">
              This website is intended to provide information about my
              background, skills, projects, and services. You may view and
              interact with the website for personal and informational purposes.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Website content
            </h2>

            <p className="leading-relaxed">
              Unless otherwise stated, the content, design, written material,
              and original project presentations on this website belong to me.
              Please do not reproduce, redistribute, or present original
              material from this website as your own without permission.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Projects and third-party content
            </h2>

            <p className="leading-relaxed">
              Some projects displayed on this website may include work created
              as part of academic, collaborative, professional, or personal
              projects. Ownership and rights relating to those projects may vary
              depending on the project and its contributors.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              External links
            </h2>

            <p className="leading-relaxed">
              This website may contain links to external websites and services.
              I am not responsible for the content, availability, or privacy
              practices of third-party websites.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Changes to these terms
            </h2>

            <p className="leading-relaxed">
              These terms may be updated from time to time as the website,
              projects, or services change.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Contact
            </h2>

            <p className="leading-relaxed">
              If you have questions about these terms, you can reach me through
              the{" "}
              <Link
                to="/contact"
                className="underline underline-offset-4"
                style={{ color: "var(--color-forest)" }}
              >
                contact page
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Back */}
        <div className="mt-20">
          <Link
            to="/#home"
            state={{ transition: "down" }}
            className="inline-flex items-center gap-4 font-mono uppercase tracking-[0.2em] text-sm transition-transform duration-300 hover:-translate-x-1"
            style={{ color: "var(--color-forest)" }}
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Terms;
