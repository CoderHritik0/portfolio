import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="text-emerald-400 font-mono mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 max-w-lg mx-auto text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
