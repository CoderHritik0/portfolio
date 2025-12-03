export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
        <span className="text-emerald-400 mr-2">#</span>
        {children}
      </h2>
      {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
