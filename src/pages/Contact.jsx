import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setIsSending(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Navbar */}
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
              style={{
                color: "var(--color-forest)",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="w-full max-w-5xl mx-auto mt-20">
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
            Contact
          </p>

          <h1
            className="font-display italic text-6xl md:text-8xl lg:text-9xl leading-[0.9]"
            style={{ color: "var(--color-forest)" }}
          >
            Let's{" "}
            <span
              className="inline-block px-3"
              style={{ backgroundColor: "var(--color-blush)" }}
            >
              connect.
            </span>
          </h1>

          <p
            className="max-w-xl mt-10 text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--color-secondary)" }}
          >
            Have something in mind? Whether it's an opportunity, a project, or
            simply a conversation, I'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          onInput={() => {
            if (status) {
              setStatus("");
            }
          }}
          className="max-w-4xl"
        >
          {/* Name */}
          <div className="mb-10">
            <label
              htmlFor="name"
              className="block text-sm tracking-[0.2em] uppercase mb-3 font-mono"
              style={{ color: "var(--color-secondary)" }}
            >
              Name <span style={{ color: "var(--color-forest)" }}>*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b py-4 text-lg outline-none transition-all duration-300 placeholder:opacity-40 focus:placeholder:opacity-20"
              style={{
                borderColor: "rgba(0, 62, 31, 0.2)",
                color: "var(--color-forest)",
              }}
            />
          </div>

          {/* Email */}
          <div className="mb-10">
            <label
              htmlFor="email"
              className="block text-sm tracking-[0.2em] uppercase mb-3 font-mono"
              style={{ color: "var(--color-secondary)" }}
            >
              Email <span style={{ color: "var(--color-forest)" }}>*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full bg-transparent border-b py-4 text-lg outline-none transition-all duration-300 placeholder:opacity-40 focus:placeholder:opacity-20"
              style={{
                borderColor: "rgba(0, 62, 31, 0.2)",
                color: "var(--color-forest)",
              }}
            />
          </div>

          {/* Subject */}
          <div className="mb-10">
            <label
              htmlFor="subject"
              className="block text-sm tracking-[0.2em] uppercase mb-3 font-mono"
              style={{ color: "var(--color-secondary)" }}
            >
              Subject <span style={{ color: "var(--color-forest)" }}>*</span>
            </label>

            <input
              id="subject"
              name="title"
              type="text"
              placeholder="What would you like to talk about?"
              required
              className="w-full bg-transparent border-b py-4 text-lg outline-none transition-all duration-300 placeholder:opacity-40 focus:placeholder:opacity-20"
              style={{
                borderColor: "rgba(0, 62, 31, 0.2)",
                color: "var(--color-forest)",
              }}
            />
          </div>

          {/* Message */}
          <div className="mb-12">
            <label
              htmlFor="message"
              className="block text-sm tracking-[0.2em] uppercase mb-3 font-mono"
              style={{ color: "var(--color-secondary)" }}
            >
              Message <span style={{ color: "var(--color-forest)" }}>*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me a little about it..."
              required
              className="w-full bg-transparent border-b py-4 text-lg outline-none resize-none transition-all duration-300 placeholder:opacity-40 focus:placeholder:opacity-20"
              style={{
                borderColor: "rgba(0, 62, 31, 0.2)",
                color: "var(--color-forest)",
              }}
            />
          </div>

          {/* Status */}
          <div aria-live="polite">
            {status === "success" && (
              <p
                className="mb-6 font-mono text-sm"
                style={{ color: "var(--color-forest)" }}
              >
                Message sent successfully. Thank you for reaching out.
              </p>
            )}

            {status === "error" && (
              <p
                className="mb-6 font-mono text-sm"
                style={{ color: "var(--color-forest)" }}
              >
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="group inline-flex items-center gap-5 px-6 py-4 transition-all duration-300 cursor-pointer mb-20 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "var(--color-forest)",
              color: "#FFF9F2",
            }}
          >
            <span className="font-mono uppercase tracking-[0.2em] text-sm">
              {isSending
                ? "Sending..."
                : status === "success"
                  ? "Message Sent"
                  : "Let's Connect"}
            </span>

            {!isSending && (
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                {status === "success" ? "✓" : "→"}
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
