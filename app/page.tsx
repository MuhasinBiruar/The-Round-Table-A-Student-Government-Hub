import Link from "next/link";
import { Image } from 'primereact/image';
import contestedgraph from "../public/images/contestedgraph.png";
import samahanVoterChart from "./resources/images/samahan_voter_turnout.png";
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
  const significanceText = (
    <>
      <p><strong className="text-blue-600">ADDU COMELEC Memorandum No. 2023-16</strong></p> shows that around <b className="text-red-600">32.79%</b> did not vote in the 2023 SAMAHAN Central Board Elections. <p className="mt-2"><strong className="text-blue-600">ADDU COMELEC Memorandum No. 2024-06</strong></p> shows that <b className="text-red-600">25.86%</b> did not vote
      in the 2024 SAMAHAN Central Board Elections. Furthermore, <p className="mt-2"><strong className="text-blue-600">ADDU COMELEC Memorandum No. 2025-05</strong></p> shows that <b className="text-red-600">33.97%</b> did not vote in the 2025 SAMAHAN Central Board Elections.
      <p className="mt-2"><strong className="text-blue-600">ADDU COMELEC Memorandum No. 2026-05</strong></p> shows that <b className="text-red-600">39.30%</b> did not vote in the 2026 SAMAHAN Central Board Elections, which is the highest in recent years. This shows a decline in student participation in
      terms of voting. From 2024, there is a decline of over <b className="text-red-600 font-stretch-ultra-expanded">13.44%</b>.
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
                    significanceText,
                },
              ].map(({ num, title, placeholder }) => (
                <div key={num} className="flex gap-5">
                  <span className="text-2xl font-black text-slate-600 leading-none mt-0.5 shrink-0 w-8">
                    {num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5">{title}</h3>
                    <div className="text-slate-500 text-sm leading-relaxed text-justify">
                      {/* TODO: {placeholder} */}
                      {placeholder}
                    </div>
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

              {/* Stat callout */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">

                <figure className="flex flex-col items-center">
                  <Image
                    src={samahanVoterChart.src}
                    alt="Graph showing the voter turnout in recent SAMAHAN elections"
                    className="w-full max-w-md rounded-lg mb-3"
                    preview />
                  <figcaption className="text-xs text-slate-400 italic text-center mt-1">
                    Graph showing the voter turnout in recent SAMAHAN elections
                  </figcaption>
                </figure>
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
                header: "History of Student Governments in the Philippines",
                title: "SAMAHAN Positions",
                placeholder:
                  "How does knowing the SAMAHAN positions help address the participation problem? What are the positions and what do they do?",
                cta: "Explore positions",
              },
              {
                href: "/history",
                tag: "Context",
                header: "Organizational Structure",
                title: "History of Student Governments",
                placeholder:
                  "Why does historical context matter here? How does knowing the history reframe the problem?",
                cta: "Read the history",
              },
              {
                href: "/participate",
                tag: "Action",
                header: "Why Participate",
                title: "Why Participate?",
                placeholder:
                  "Why does participation matter? How does it connect to the problem of low participation?",
                cta: "Find out why",
              },
            ].map((card) => (
              <div
                key={card.href}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="w-full h-44 bg-slate-900 flex items-center justify-center p-6">
                  <p className="text-white text-2xl font-bold text-center leading-snug">{card.header}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
                    {card.tag}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm flex-1 leading-relaxed text-justify">
                    {card.placeholder}
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
          REFERENCES
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              References
            </span>
          </div>
          <ol className="list-inside space-y-3 text-sm text-slate-500 leading-relaxed">
            <li className="pl-2">
              Atenews. (2026, April 6). <em>JUST IN: The Ateneo de Davao University Commission on Elections (AdDU COMELEC) has released the results of the recently concluded</em> [Post]. Facebook.{" "}
              <a href="https://www.facebook.com/share/p/18QK98LVj2/" className="text-amber-500 hover:text-amber-600 underline break-all" target="_blank" rel="noopener noreferrer">https://www.facebook.com/share/p/18QK98LVj2/</a>
            </li>
            <li className="pl-2">
              Atenews. (2025, April 29). <em>UNIVERSITY ELECTIONS After a four-day voting period, the AdDU COMELEC has finally announced the results for the 2025 SAMAHAN</em> [Post]. Facebook.{" "}
              <a href="https://www.facebook.com/share/p/18MZwpHkPG/" className="text-amber-500 hover:text-amber-600 underline break-all" target="_blank" rel="noopener noreferrer">https://www.facebook.com/share/p/18MZwpHkPG/</a>
            </li>
            <li className="pl-2">
              Suh, R. (2021). Student Governments | Education | Research Starters | EBSCO Research. <em>EBSCO.</em>{" "}
              <a href="https://www.ebsco.com/research-starters/education/student-governments" className="text-amber-500 hover:text-amber-600 underline break-all" target="_blank" rel="noopener noreferrer">https://www.ebsco.com/research-starters/education/student-governments</a>
            </li>
          </ol>
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
            Your choices shapes Ateneo. Use it.
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Exercise your rights and make a difference.
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
