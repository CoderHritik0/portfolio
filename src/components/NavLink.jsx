import React from "react";

export default function NavLink({ href, children, mobile, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium ${
        mobile ? "block py-4 text-xl" : ""
      }`}
    >
      {children}
    </a>
  );
}
