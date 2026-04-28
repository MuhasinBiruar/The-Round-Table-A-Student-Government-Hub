import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-400 to-amber-500 flex items-center justify-center shrink-0">
              <span className="text-slate-900 font-black text-sm">RT</span>
            </div>
            <span className="font-semibold text-white">The Round Table</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            An Unofficial Student Government Educational Hub for Ateneo de Davao University.
          </p>
          {/* TODO: Add ADDU or SAMAHAN logo here */}
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Pages
          </h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { href: "/", label: "Home" },
              { href: "/positions", label: "SAMAHAN Positions" },
              { href: "/history", label: "History" },
              { href: "/participate", label: "Why Participate?" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
            About
          </h4>
          <ul className="text-slate-400 text-sm leading-relaxed text-justify list-disc list-inside space-y-3">
            <li>
              This project is an unofficial student government educational resource created by students of Ateneo de Davao University. It is
              created mainly to help students understand the importance of student government and encourage them to participate in it.
            </li>
            <li>
              The content is based on publicly available information and research, and is not officially affiliated with Ateneo de Davao University or SAMAHAN.
            </li>
            <li>
              This project is in coordination with Life and Works of Rizal as a way to practice what Rizal has taught us
              about helping others.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/60 py-4 px-6">
        <p className="text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} {" "} The Round Table &middot; An Unofficial Student Government Educational Hub for Ateneo de Davao University
        </p>
      </div>
    </footer>
  );
}
