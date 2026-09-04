import { Link } from "react-router-dom";

function Privacy() {
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
            Privacy{" "}
            <span
              className="inline-block px-3"
              style={{ backgroundColor: "var(--color-blush)" }}
            >
              Policy.
            </span>
          </h1>

          <p
            className="max-w-2xl mt-10 text-lg leading-relaxed"
            style={{ color: "var(--color-secondary)" }}
          >
            This page explains what information may be collected through this
            website and how it is used.
          </p>
        </div>

        {/* Policy */}
        <div
          className="max-w-3xl space-y-14"
          style={{ color: "var(--color-secondary)" }}
        >
          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Information I collect
            </h2>

            <p className="leading-relaxed">
              When you use the contact form on this website, you may provide
              information such as your name, email address, subject, and
              message. This information is provided voluntarily when you choose
              to contact me.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              How your information is used
            </h2>

            <p className="leading-relaxed">
              Information submitted through the contact form is used to respond
              to your inquiry, communicate with you, and understand the nature
              of your request.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Contact form service
            </h2>

            <p className="leading-relaxed">
              This website uses EmailJS to process and deliver messages
              submitted through the contact form. Information entered into the
              form may be processed by EmailJS as part of delivering the
              message.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Information sharing
            </h2>

            <p className="leading-relaxed">
              Information submitted through the contact form is not
              intentionally sold or shared for advertising purposes. It may be
              processed by third-party services used to operate the website and
              deliver communications.
            </p>
          </section>

          <section>
            <h2
              className="font-display text-3xl mb-4"
              style={{ color: "var(--color-forest)" }}
            >
              Changes to this policy
            </h2>

            <p className="leading-relaxed">
              This Privacy Policy may be updated from time to time to reflect
              changes to the website, its features, or the services used to
              operate it.
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
              If you have questions about this Privacy Policy or how your
              information is handled, you can reach me through the{" "}
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

export default Privacy;
