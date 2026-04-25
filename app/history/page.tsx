import type { Metadata } from "next";
import ImagePlaceholder from "../components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "History of Student Governments | The Round Table",
  description:
    "Trace the history of student governments in the Philippines — from early student activism to the formation of SAMAHAN at ADDU.",
};

const timelineEntries = [
  {
    id: "early-american",
    era: "[Early American Period · e.g., 1900s–1930s]",
    title: "[Title for this era]",
    imageLabel: "Historical photo — Early American Period",
  },
  {
    id: "commonwealth",
    era: "[Commonwealth Era · e.g., 1935–1941]",
    title: "[Title for this era]",
    imageLabel: "Historical photo — Commonwealth Era",
  },
  {
    id: "postwar",
    era: "[Post-War Republic · e.g., 1946–1960s]",
    title: "[Title for this era]",
    imageLabel: "Historical photo — Post-War Period",
  },
  {
    id: "activism",
    era: "[First Quarter Storm · e.g., Late 1960s–Early 1970s]",
    title: "[Title — e.g., Students Take the Streets]",
    imageLabel: "Historical photo — Student Activism",
  },
  {
    id: "martial-law",
    era: "[Martial Law · e.g., 1972–1986]",
    title: "[Title for this era]",
    imageLabel: "Historical photo — Martial Law Period",
  },
  {
    id: "post-edsa",
    era: "[Post-EDSA · e.g., 1986–2000s]",
    title: "[Title — e.g., Rebuilding Democratic Student Governance]",
    imageLabel: "Historical photo — Post-EDSA Period",
  },
  {
    id: "modern",
    era: "[Contemporary · e.g., 2000s–Present]",
    title: "[Title for this era]",
    imageLabel: "Photo — Modern student government",
  },
];

export default function HistoryPage() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="relative bg-slate-950 py-20 px-4 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-0 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-400/60" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.18em] uppercase">
              The Round Table
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-3xl leading-tight">
            History of Student Governments in the Philippines
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            {/*
              TODO: Add a compelling intro sentence.
              e.g., "Student governance was not given — it was earned, fought for, and
              shaped by generations of youth who believed their voices mattered."
            */}
            [Brief intro — frame why this history is worth knowing and how it connects to
            the present-day participation problem at ADDU.]
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OVERVIEW
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              Overview
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 tracking-tight">
            Where It All Began
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-slate-500 leading-relaxed">
              {/*
                TODO: Write an introductory overview paragraph.
                How did student governments in the Philippines come to exist?
                What forces shaped them?
              */}
              [Introductory overview — give broad context before the timeline. Why does
              this history matter for understanding student participation today?]
            </p>
            <p className="text-slate-500 leading-relaxed">
              {/* TODO: Bridge the national history to ADDU and SAMAHAN */}
              [Optional second paragraph — connect the national history to Ateneo de Davao
              and how SAMAHAN fits into this larger story.]
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              Timeline
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 tracking-tight">
            Key Eras in Philippine Student Governance
          </h2>

          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-amber-400/60 via-slate-200 to-transparent -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {timelineEntries.map((entry, index) => (
                <div
                  key={entry.id}
                  id={entry.id}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white shadow-md shadow-amber-400/30 mt-2 z-10" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      index % 2 !== 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
                      <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                        {entry.era}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-1 mb-3 leading-snug">
                        {entry.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {/*
                          TODO: Write content for this era.
                          Key events, legislation, movements, or figures that shaped
                          student governance in the Philippines during this period.
                        */}
                        [Describe what happened during this period — key events, laws,
                        student movements, or notable figures.]
                      </p>

                      {/* TODO: Replace with <Image> */}
                      <ImagePlaceholder
                        label={entry.imageLabel}
                        className="w-full h-32 rounded-xl"
                      />
                      <p className="text-xs text-slate-400 italic mt-1.5">
                        {/* TODO: Caption */}
                        [Image caption / source]
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SAMAHAN AT ADDU
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              Closer to Home
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">
            SAMAHAN at Ateneo de Davao University
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-5">
              <p className="text-slate-500 leading-relaxed">
                {/* TODO: Write about the founding and history of SAMAHAN at ADDU */}
                [Describe the founding and history of SAMAHAN at ADDU — when it was
                established, how it was organized, and any notable early milestones.]
              </p>
              <p className="text-slate-500 leading-relaxed">
                {/* TODO: Describe how SAMAHAN has evolved over the decades */}
                [Describe how SAMAHAN has evolved — constitutional reforms, notable
                administrations, structural changes, and how it looks today.]
              </p>

              {/* Key milestones */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-4">
                  Key Milestones
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "[Year] — [Milestone 1]",
                    "[Year] — [Milestone 2]",
                    "[Year] — [Milestone 3]",
                    "[Add more as needed]",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-500">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {/* TODO: Replace with real milestones + years */}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* TODO: Replace with actual ADDU/SAMAHAN historical photo */}
              <ImagePlaceholder
                label="ADDU / SAMAHAN historical photo"
                className="w-full h-60 rounded-2xl"
              />
              <p className="text-xs text-slate-400 italic mt-2 text-center">
                {/* TODO: Caption */}
                [Image caption / photo credit]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
