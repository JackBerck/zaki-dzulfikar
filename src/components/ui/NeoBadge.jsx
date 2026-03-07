/**
 * NeoBadge - Neo-Brutalism tech/skill badge
 * @param {string} label - Badge label
 * @param {string} icon - Optional emoji or icon text
 * @param {string} variant - "default" | "accent" | "cyan" | "pink" | "muted"
 * @param {string} size - "sm" | "md"
 */
export default function NeoBadge({
  label,
  icon,
  variant = "default",
  size = "md",
  className = "",
}) {
  const variantStyles = {
    default:
      "border border-[var(--border-color)] text-[var(--text-primary)] bg-[var(--bg-card)]",
    accent:
      "border border-[var(--accent-yellow)] text-[var(--accent-yellow)] bg-[var(--bg-card)]",
    cyan: "border border-[var(--accent-cyan)] text-[var(--accent-cyan)] bg-[var(--bg-card)]",
    pink: "border border-[var(--accent-pink)] text-[var(--accent-pink)] bg-[var(--bg-card)]",
    muted:
      "border border-[var(--border-muted)] text-[var(--text-secondary)] bg-[var(--bg-secondary)]",
    solid:
      "border border-[var(--accent-yellow)] bg-[var(--accent-yellow)] text-black",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium font-[var(--font-inter)] rounded-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="text-base leading-none">{icon}</span>}
      {label}
    </span>
  );
}
