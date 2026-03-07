/**
 * SectionHeader - Numbered section heading with Neo-Brutalism style
 * @param {string} number - e.g. "01", "02"
 * @param {string} title - Section title
 * @param {string} subtitle - Optional subtitle
 * @param {string} align - "left" | "center"
 */
export default function SectionHeader({
  number,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const alignStyles = {
    left: "text-left",
    center: "text-center items-center",
  };

  return (
    <div className={`flex flex-col gap-2 ${alignStyles[align]} ${className}`}>
      {number && (
        <span className="font-mono text-sm font-bold text-[var(--accent-yellow)] tracking-[0.15em] uppercase">
          {number}
        </span>
      )}
      <h2 className="font-[var(--font-space)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-xl mt-1">
          {subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div
        className={`mt-3 h-1 w-16 bg-[var(--accent-yellow)] ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
