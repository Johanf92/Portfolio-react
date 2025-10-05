import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <RevealOnScroll>
        <div className="w-full max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8 md:p-12 hover:border-yellow-500/40 transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Have a project in mind or just want to say hello? Feel free to reach
            out — I’d love to hear from you!
          </p>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="col-span-1">
              <label
                htmlFor="name"
                className="block text-gray-300 text-sm mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5 transition"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5 transition"
                placeholder="example@email.com"
              />
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="message"
                className="block text-gray-300 text-sm mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={8}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5 transition resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-yellow-500 text-black font-medium py-3 px-10 rounded-lg hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
