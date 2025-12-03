export default function NavLink({ children, mobile, onClick }) {
  return (
    <a
      onClick={() => onClick(children.toLowerCase())}
      className={`text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300 font-medium ${
        mobile ? "block py-4 text-xl" : ""
      }`}
    >
      {children}
    </a>
  );
}
