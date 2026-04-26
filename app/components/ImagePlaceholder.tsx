// Remove this component and replace each usage with Next.js <Image> once you have actual assets
export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative bg-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-slate-100 to-slate-200" />
      <svg
        className="relative w-7 h-7 text-slate-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span className="relative text-xs text-slate-400 text-center px-4 leading-relaxed">
        {label}
      </span>
    </div>
  );
}
