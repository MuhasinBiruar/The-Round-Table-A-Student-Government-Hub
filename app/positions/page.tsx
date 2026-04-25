import type { Metadata } from "next";
import ImagePlaceholder from "../components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "SAMAHAN Positions | The Round Table",
  description:
    "Learn about the offices and positions within SAMAHAN — the student government of Ateneo de Davao University.",
};

// ─── Shared page hero used by all inner pages ────────────────────────────────
function PageHero({ tag, title, description }: { tag: string; title: string; description: string }) {
  return (
    <section className="relative bg-slate-950 py-20 px-4 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-0 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-amber-400/60" />
          <span className="text-amber-400 text-xs font-bold tracking-[0.18em] uppercase">
            {tag}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}

// ─── Individual office section ───────────────────────────────────────────────
function OfficeSection({
  id,
  badge,
  title,
  imageLabel,
  flip = false,
}: {
  id: string;
  badge: string;
  title: string;
  imageLabel: string;
  flip?: boolean;
}) {
  return (
    <section id={id} className="py-14 border-b border-slate-100 last:border-0">
      <div className={`flex flex-col gap-8 items-start ${flip ? "md:flex-row-reverse" : "md:flex-row"}`}>

        {/* Image */}
        <div className="w-full md:w-72 shrink-0">
          {/* TODO: Replace with <Image> */}
          <ImagePlaceholder label={imageLabel} className="w-full h-56 rounded-2xl" />
          <p className="text-xs text-slate-400 italic text-center mt-2">
            {/* TODO: Add caption */}
            [Image caption / photo credit]
          </p>
        </div>

        {/* Content */}
        <div className="flex-1">
          <span className="inline-block bg-amber-50 text-amber-600 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {badge}
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h2>
          <p className="text-slate-500 leading-relaxed mb-6 text-sm">
            {/*
              TODO: Write an overview of this office.
              What does this officer represent? What is their general role in SAMAHAN?
            */}
            [Overview — describe what this office is, its significance, and how the officer
            relates to the student body.]
          </p>

          <h3 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
            Roles &amp; Responsibilities
          </h3>
          <ul className="flex flex-col gap-2">
            {/* TODO: Replace with actual roles from the SAMAHAN constitution */}
            {["[Role or responsibility 1]", "[Role or responsibility 2]", "[Role or responsibility 3]", "[Role or responsibility 4]", "[Add more as needed]"].map(
              (item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function PositionsPage() {
  return (
    <>
      <PageHero
        tag="The Round Table"
        title="SAMAHAN Positions"
        description="[Brief intro — e.g., 'Behind every student welfare initiative is a team of dedicated leaders. Get to know the roles and faces of SAMAHAN.']"
      />

      {/* ── In-page jump nav ── */}
      <nav className="bg-white border-b border-slate-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-0 flex gap-1 overflow-x-auto">
          {[
            { href: "#central-board", label: "Central Board" },
            { href: "#president", label: "President" },
            { href: "#vice-president", label: "Vice President" },
            { href: "#secretary-general", label: "Secretary General" },
            { href: "#treasurer", label: "Treasurer" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-500 hover:text-amber-500 whitespace-nowrap py-3.5 px-3 border-b-2 border-transparent hover:border-amber-400 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* ══════════════════════════════════════════
            SAMAHAN CENTRAL BOARD — featured card
        ══════════════════════════════════════════ */}
        <section id="central-board" className="py-14 border-b border-slate-100">
          <div className="relative bg-slate-950 rounded-3xl p-8 md:p-10 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-block bg-amber-400 text-slate-900 text-xs font-black px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
                Main Governing Body
              </span>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
                SAMAHAN Central Board
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl text-sm">
                {/*
                  TODO: Write an overview of the SAMAHAN Central Board.
                  What is it? Who comprises it? What is its authority?
                */}
                [Overview of the SAMAHAN Central Board — its composition, authority, and
                function as the supreme student governing body of ADDU.]
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 rounded-2xl p-5">
                  <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
                    Composition
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "[e.g., SAMAHAN President — Chair]",
                      "[e.g., SAMAHAN Vice President]",
                      "[e.g., Secretary General]",
                      "[e.g., Treasurer]",
                      "[e.g., Cluster Representatives]",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl p-5">
                  <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
                    Key Powers &amp; Functions
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "[Key power or function 1]",
                      "[Key power or function 2]",
                      "[Key power or function 3]",
                      "[Add more as needed]",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* TODO: Replace with actual Central Board group photo */}
              <ImagePlaceholder
                label="SAMAHAN Central Board group photo"
                className="w-full h-48 rounded-2xl bg-white/5! border-white/10!"
              />
              <p className="text-xs text-slate-500 italic mt-2 text-center">
                {/* TODO: Caption */}
                [Photo caption — e.g., "SAMAHAN Central Board AY 20__–20__"]
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INDIVIDUAL OFFICES
        ══════════════════════════════════════════ */}
        <OfficeSection
          id="president"
          badge="Executive Head"
          title="Office of the SAMAHAN President"
          imageLabel="Photo of the SAMAHAN President or office"
          flip={false}
        />
        <OfficeSection
          id="vice-president"
          badge="Executive"
          title="Office of the SAMAHAN Vice President"
          imageLabel="Photo of the SAMAHAN Vice President or office"
          flip={true}
        />
        <OfficeSection
          id="secretary-general"
          badge="Secretariat"
          title="Office of the SAMAHAN Secretary General"
          imageLabel="Photo of the SAMAHAN Secretary General"
          flip={false}
        />
        <OfficeSection
          id="treasurer"
          badge="Finance"
          title="Office of the SAMAHAN Treasurer"
          imageLabel="Photo of the SAMAHAN Treasurer"
          flip={true}
        />
      </div>
    </>
  );
}
