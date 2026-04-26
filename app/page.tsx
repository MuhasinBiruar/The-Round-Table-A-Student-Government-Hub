import Link from "next/link";
import { Image } from 'primereact/image';
import contestedgraph from "../public/images/contestedgraph.png"
import ImagePlaceholder from "./components/ImagePlaceholder";
import "primereact/resources/themes/lara-light-cyan/theme.css";

// ─── Reusable hero eyebrow label ────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className="h-px w-8 bg-amber-400/60" />
      <span className="text-amber-400 text-xs font-bold tracking-[0.18em] uppercase">
        {children}
      </span>
      <span className="h-px w-8 bg-amber-400/60" />
    </div>
  );
}

export default function HomePage() {
  const problemText = (
    <>
      AdDU has seen a drop and slowness in voting participation and in the number of candidates running. The 2026 election for the{" "}
      <strong>Samahan ng mga Mag-Aaral ng Pamantasang Ateneo de Davao</strong>{" "}
      (<strong>SAMAHAN AdDU</strong>) Central Board saw{" "}
      <strong>10 out of 11 positions</strong>{" "}
      contested by only one candidate each, <strong>4 more than in the 2025 SAMAHAN Central Board Elections</strong> (Atenews, 2026; Atenews, 2025). Moreover, due to low voter turnout this year, an extension for the voting period was required from March 31 to April 1.
    </>
  );
  const affectedText = (
    <>
      Student government involvement, per Suh (2021), <strong>correlates with better grades and political awareness,</strong>{" "} making low AdDU participation a significant concern.
      Addressing issues like student election participation and candidacy early is crucial as it establishes <strong>political awareness, ideologies, and future betterment</strong> {" "} through practicing
      the right to vote.
    </>
  );
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative bg-slate-950 py-28 px-4 overflow-hidden">
        {/* Atmospheric blobs */}
        <div className="absolute top-0 left-1/3 w-125 h-125 bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[28px_28px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* TODO: Replace with actual <Image> (AdDU seal or SAMAHAN logo) */}
          <ImagePlaceholder
            label="Logo · ~120×120 px"
            className="w-24 h-24 rounded-2xl mb-8 bg-slate-900! border-slate-700!"
          />

          <Eyebrow>Ateneo de Davao University</Eyebrow>

          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
            The Round Table
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
            A Student Government Educational Hub
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROBLEM SECTION
      ══════════════════════════════════════════ */}
      <section id="problem" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              The Problem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            An Analysis of Recent Decline in Student Participation in Student Governance in the Context of Ateneo de Davao University
          </h2>
          <p className="text-slate-500 text-lg mb-14 max-w-2xl">
            While student governance serves as a vital platform for leadership and civic engagement in Philippine universities, such as Ateneo de Davao University, recent electoral data
            reveals a notable shift in how students are participating in campus elections.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* ── Text blocks ── */}
            <div className="flex flex-col gap-8">
              {[
                {
                  num: "01",
                  title: "What is the Problem?",
                  placeholder:
                    problemText,
                },
                {
                  num: "02",
                  title: "Who is Affected?",
                  placeholder:
                    affectedText,
                },
                {
                  num: "03",
                  title: "Why is it Significant?",
                  placeholder:
                    "Explain why this matters beyond just low numbers — representation, institutional legitimacy, civic culture.",
                },
              ].map(({ num, title, placeholder }) => (
                <div key={num} className="flex gap-5">
                  <span className="text-2xl font-black text-slate-100 leading-none mt-0.5 shrink-0 w-8">
                    {num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed text-justify">
                      {/* TODO: {placeholder} */}
                      {placeholder}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Image + stat ── */}
            <div className="flex flex-col gap-8">
              {/* TODO: Replace with <Image> */}
              <figure className="flex flex-col items-center">
                <Image
                  src={contestedgraph.src}
                  alt="Graph showing the number of contested vs uncontested positions in recent SAMAHAN elections"
                  className="w-full max-w-md rounded-lg mb-3"
                  preview />
                <figcaption className="text-xs text-slate-400 italic text-center mt-1">
                  Graph showing the number of contested vs uncontested positions in recent SAMAHAN elections
                </figcaption>
              </figure>
              <p className="text-xs text-slate-400 italic text-center">
                {/* TODO: Image caption + source */}
                [Image caption — describe the photo and credit the source]
              </p>

              {/* Stat callout */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                <p className="text-5xl font-black text-slate-900 tracking-tight mb-1">
                  {/* TODO: Insert a real statistic */}
                  XX%
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {/* TODO: Describe the stat */}
                  [e.g., of eligible ADDU students did not vote in the most recent SAMAHAN
                  election]
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  {/* TODO: Source */}
                  Source: [...]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SYNTHESIS — EXPLORE THE SITE
      ══════════════════════════════════════════ */}
      <section id="explore" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              Explore the Site
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Understanding the Full Picture
          </h2>
          <p className="text-slate-500 mb-12 max-w-2xl leading-relaxed">
            {/*
              TODO: 2–3 sentence synthesis — how do the three sections together address
              the problem of low student participation?
            */}
            [Synthesis intro — explain how the three pages below form a coherent response
            to the problem. Connect them as parts of one argument.]
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/positions",
                tag: "Governance",
                title: "SAMAHAN Positions",
                placeholder:
                  "How does knowing the SAMAHAN positions help address the participation problem? 2–3 sentences.",
                cta: "Explore positions",
              },
              {
                href: "/history",
                tag: "Context",
                title: "History of Student Governments",
                placeholder:
                  "Why does historical context matter here? How does knowing the history reframe the problem? 2–3 sentences.",
                cta: "Read the history",
              },
              {
                href: "/participate",
                tag: "Action",
                title: "Why Participate?",
                placeholder:
                  "What concrete answer does this page give to the problem? Why should an indifferent student change their mind? 2–3 sentences.",
                cta: "Find out why",
              },
            ].map((card) => (
              <div
                key={card.href}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* TODO: Replace with actual <Image> */}
                <ImagePlaceholder
                  label={`Photo for "${card.title}" card`}
                  className="w-full h-44 rounded-none border-0 border-b border-slate-100"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
                    {card.tag}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm flex-1 leading-relaxed">
                    {/* TODO: {card.placeholder} */}
                    [{card.placeholder}]
                  </p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors"
                  >
                    {card.cta}
                    <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CALL TO ACTION
      ══════════════════════════════════════════ */}
      <section className="relative bg-slate-950 py-24 px-4 overflow-hidden text-center">
        {/* Centre glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-150 h-60 bg-amber-500/8 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[28px_28px] pointer-events-none" />

        <div className="relative max-w-2xl mx-auto">
          <Eyebrow>Get Involved</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {/* TODO: CTA headline */}
            [Headline — e.g., "Your voice shapes Ateneo. Use it."]
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            {/* TODO: Supporting sentence */}
            [One sentence reinforcing the call to act — tie it back to the problem.]
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/participate"
              className="bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
            >
              Why Participate?
            </Link>
            <Link
              href="/positions"
              className="border border-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-full hover:border-slate-500 hover:text-white transition-colors"
            >
              Explore Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
