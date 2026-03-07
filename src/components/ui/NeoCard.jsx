/**
 * NeoCard - Neo-Brutalism styled card
 * @param {string} className - Additional classes
 * @param {string} variant - "default" | "accent" | "cyan" | "pink"
 * @param {boolean} hoverable - Enable hover lift effect
 */
export default function NeoCard({
  className = "",
  variant = "default",
  hoverable = false,
  children,
}) {
  const variantStyles = {
    default:
      "border-2 border-[var(--border-color)] shadow-[4px_4px_0px_0px_#f0f0f0]",
    accent:
      "border-2 border-[var(--accent-yellow)] shadow-[4px_4px_0px_0px_#ffe600]",
    cyan: "border-2 border-[var(--accent-cyan)] shadow-[4px_4px_0px_0px_#00f5ff]",
    pink: "border-2 border-[var(--accent-pink)] shadow-[4px_4px_0px_0px_#ff2d78]",
    muted: "border border-[var(--border-muted)]",
  };

  const hoverStyles = hoverable
    ? "transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#f0f0f0] cursor-pointer"
    : "";

  return (
    <div
      className={`bg-[var(--bg-card)] ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
