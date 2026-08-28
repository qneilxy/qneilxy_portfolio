function Footer() {
  return (
    <footer
      className="px-8 py-20 border-t"
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "rgba(0, 62, 31, 0.15)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* About */}
          <div>
            <h2
              className="font-display text-3xl mb-5"
              style={{ color: "var(--color-forest)" }}
            >
              Neil Agnes
            </h2>

            <p
              className="max-w-sm leading-relaxed"
              style={{ color: "var(--color-secondary)" }}
            >
              I enjoy building for the web, exploring new technologies, and
              leveraging AI to learn, create, and turn ideas into practical
              digital experiences.
            </p>
          </div>

          {/* Index */}
          <div>
            <h3
              className="text-xl mb-5"
              style={{ color: "var(--color-forest)" }}
            >
              Index
            </h3>

            <nav className="flex flex-col gap-3">
              <a href="/#home" className="footer-link">
                Home
              </a>

              <a href="/#about" className="footer-link">
                About
              </a>

              <a href="/#skills" className="footer-link">
                Skills
              </a>

              <a href="/#projects" className="footer-link">
                Projects
              </a>

              <a href="/contact" className="footer-link">
                Contact
              </a>
            </nav>

            {/* Contact / CTA */}
            <div
              className="mt-8 pt-6 border-t"
              style={{ borderColor: "rgba(0, 62, 31, 0.15)" }}
            >
              <a href="/contact" className="footer-link font-medium">
                Start a project →
              </a>
            </div>

            {/* Legal */}
            <div
              className="mt-6 pt-6 border-t flex flex-col gap-3"
              style={{ borderColor: "rgba(0, 62, 31, 0.15)" }}
            >
              <a href="/privacy" className="footer-link text-sm">
                Privacy Policy
              </a>

              <a href="/terms" className="footer-link text-sm">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3
              className="text-xl mb-5"
              style={{ color: "var(--color-forest)" }}
            >
              Let's Connect
            </h3>

            <nav className="flex flex-col gap-3">
              <a
                href="https://github.com/qneilxy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>

              <a
                href="https://www.facebook.com/qneilxy#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/qneilxy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/neilagnes-pimentel/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01b076e9745b8e07a4"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Upwork
              </a>

              <a
                href="mailto:neilagnes.pimentel@gmail.com"
                className="footer-link"
              >
                neilagnes.pimentel@gmail.com
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-16 pt-6 border-t flex flex-col md:flex-row justify-between gap-3 text-sm"
          style={{ borderColor: "rgba(0, 62, 31, 0.15)" }}
        >
          <span style={{ color: "var(--color-secondary)" }}>
            © NEIL AGNES PIMENTEL · 2026
          </span>

          <span style={{ color: "var(--color-secondary)" }}>
            DASMARIÑAS, CAVITE, PHILIPPINES
          </span>

          <span style={{ color: "var(--color-secondary)" }}>
            Built with React + Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
