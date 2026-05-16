import { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071028] via-[#28104e] to-[#611d56] text-white scroll-smooth">

      {/* HERO */}
      <header className="px-8 md:px-24 py-16">
        <div className="max-w-6xl mx-auto space-y-6">

          <div className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-orange-300 bg-clip-text text-transparent">
            MHS
          </div>

          <div className="text-xs uppercase tracking-[0.25em] text-zinc-300">
            Mohammad Hashim Siddique
          </div>

          <p className="uppercase tracking-[0.35em] text-cyan-300 text-sm">
            Mechanical Engineering Portfolio
          </p>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-cyan-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
            Mechanical Engineer
          </h1>

          <p className="text-lg md:text-xl max-w-4xl text-zinc-200 leading-relaxed">
            As a passionate mechanical engineering student, I focus on creating practical CAD designs,
            mechanical systems, and product concepts that solve real engineering problems. I aim to
            deliver efficient, manufacturable, and innovative solutions from concept to final design.
          </p>

          {/* CV BUTTON */}
          <div className="pt-4">
            <a
              href="/cv.pdf"
              download
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-orange-400 text-black font-bold hover:opacity-90 transition"
            >
              Download CV
            </a>
          </div>

        </div>
      </header>

      {/* PROJECTS */}
      <main className="px-8 md:px-24 pb-24">
        <div className="max-w-6xl mx-auto space-y-20">

          <h2 className="text-3xl text-orange-200">Projects</h2>

          <div className="grid md:grid-cols-2 gap-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <img
                src="https://images.unsplash.com/photo-1581091870620-1f6b1b2c7a9c?auto=format&fit=crop&w=1200&q=80"
                className="rounded-3xl border border-white/10 hover:scale-[1.02] transition"
              />
              <h3 className="text-xl text-white">Smart Desk Lamp</h3>
              <p className="text-zinc-300">
                CAD-designed smart desk lamp focused on ergonomics, structure, and manufacturability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <img
                src="https://via.placeholder.com/1000x700?text=Add+Your+Project"
                className="rounded-3xl border border-white/10 hover:scale-[1.02] transition"
              />
              <h3 className="text-xl text-white">Add Project</h3>
              <p className="text-zinc-300">
                Replace this with your next CAD or engineering project.
              </p>
            </motion.div>

          </div>

          {/* SKILLS */}
          <div className="pt-10">
            <h2 className="text-3xl text-orange-200 mb-6">Skills & Values</h2>

            <div className="grid md:grid-cols-2 gap-10 text-zinc-200">

              <div className="space-y-2">
                <p className="font-bold text-white">Software & Tools</p>
                <p>SolidWorks</p>
                <p>AutoCAD</p>
                <p>Fusion 360</p>
                <p>Technical Drawing</p>
                <p>CAD Assembly</p>
                <p>3D Modelling</p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-white">Professional Skills</p>
                <p>Mechanical Design</p>
                <p>Product Development</p>
                <p>Engineering Problem Solving</p>
                <p>Prototype Design</p>
                <p>Manufacturing Awareness</p>
                <p>Technical Documentation</p>
              </div>

            </div>
          </div>

          {/* CONTACT */}
          <motion.section
            className="max-w-xl mx-auto bg-white/10 p-10 rounded-3xl border border-white/10 space-y-6"
          >
            <h2 className="text-4xl text-pink-300">Get In Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/10"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/10"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/10 h-32"
              />

              <button
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-orange-400 text-black font-bold"
              >
                Send Message
              </button>

            </form>
          </motion.section>

        </div>
      </main>
    </div>
  );
}
