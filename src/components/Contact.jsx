import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("idle"); //idle, sending, success, Error
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success

  const handleSendMessage = async (event) => {
    event.preventDefault();
    setResult("sending");
    const formData = new FormData(event.target);

    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setResult(data.success ? "success" : "error");
  };

  // const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
  // console.log(ACCESS_KEY);

  return (
    <form onSubmit={handleSendMessage} className="space-y-4">
      <input type="hidden" name="from_name" value="Portfolio"></input>
      <input
        type="hidden"
        name="subject"
        value="Portfolio visitor sent you Message"
      ></input>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-400 mb-1"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          placeholder="yourmail@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-400 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          placeholder="Hello, I'd like to talk about..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={result === "sending" || result === "success"}
        className={`w-full py-3 rounded font-bold transition-all duration-300 flex items-center justify-center gap-2
                   ${
                     result === "success"
                       ? "bg-emerald-500/20 text-emerald-400 cursor-default"
                       : "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                   }`}
      >
        {result === "idle" && (
          <>
            Send Message <Send size={18} />
          </>
        )}
        {result === "sending" && "Sending..."}
        {result === "success" && (
          <>
            Message Sent <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
