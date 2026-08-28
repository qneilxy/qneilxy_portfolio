function Contact() {
  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-6 border-b">
        <a href="/" className="text-xl font-bold">
          Neil Agnes
        </a>

        <div className="flex gap-6">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
        </div>
      </nav>

      <main className="min-h-screen px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4">Get in touch</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact</h1>

          <p className="max-w-2xl text-lg mb-12">
            I'm always open to opportunities, collaborations, and conversations
            about technology and software development.
          </p>

          <div className="flex flex-col gap-4">
            <a href="mailto:neilagnes.pimentel@gmail.com">
              neilagnes.pimentel@gmail.com
            </a>

            <a
              href="https://github.com/qneilxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
