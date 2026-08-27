function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b">
        <h2 className="text-xl font-bold">Neil Agnes</h2>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8">
        <p className="text-lg mb-4">Hello, I'm</p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">Neil Agnes</h1>

        <h2 className="text-2xl mb-6">Computer Science Graduate</h2>

        <p className="max-w-2xl text-lg mb-8">
          Welcome to my portfolio. I'm interested in software development, web
          development, and technology.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 border rounded-lg">
            View My Projects
          </a>

          <a href="#contact" className="px-6 py-3 border rounded-lg">
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 border-t">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="max-w-3xl text-lg">
          I'm a Computer Science graduate with experience in software
          development, web development, and digital tools through academic
          projects and professional experience.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-20 border-t">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>

        <p className="text-lg">
          ReactJS • Tailwind CSS • Python • C# • Java • MySQL
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20 border-t">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold mb-4">byHANDeng</h3>

            <p className="mb-6">
              An e-commerce website for handcrafted crocheted products. Users
              can browse products, view product details, and interact with an
              ordering interface.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="border rounded-full px-3 py-1 text-sm">
                HTML
              </span>

              <span className="border rounded-full px-3 py-1 text-sm">CSS</span>

              <span className="border rounded-full px-3 py-1 text-sm">
                JavaScript
              </span>
            </div>
            <p className="mt-4">Academic Project</p>
          </div>

          <div className="border rounded-lg p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold mb-4">GluttonyAndGreed</h3>

            <p className="mb-6">
              A 2D game focused on balancing survival and power. Eating restores
              health but permanently increases burden, forcing players to make
              strategic choices.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="border rounded-full px-3 py-1 text-sm">
                Godot
              </span>
            </div>

            <p className="mt-4">Academic Project</p>
          </div>

          <div className="border rounded-lg p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold mb-4">The Remnants of Isa</h3>

            <p className="mb-6">
              A narrative exploration game where players uncover fragments of a
              woman's fading memories through interactions with objects.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="border rounded-full px-3 py-1 text-sm">
                Godot
              </span>
            </div>

            <p className="mt-4">Academic Project</p>
          </div>

          <div className="border rounded-lg p-6 hover:-translate-y-1 transition-transform">
            <h3 className="text-2xl font-bold mb-4">
              Cybercafe Management System
            </h3>

            <p className="mb-6">
              A desktop-based management system featuring user management,
              session monitoring, and transaction recording.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="border rounded-full px-3 py-1 text-sm">C#</span>

              <span className="border rounded-full px-3 py-1 text-sm">
                Java GUI
              </span>

              <span className="border rounded-full px-3 py-1 text-sm">
                MySQL
              </span>

              <span className="border rounded-full px-3 py-1 text-sm">
                XAMPP
              </span>
            </div>

            <p className="mt-4">Academic Group Project</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 border-t">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>

        <p className="text-lg">Let's connect.</p>
      </section>
    </div>
  );
}

export default App;
