import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History of Student Governments | The Round Table",
  description:
    "Trace the history of student governments in the Philippines — from early student activism to the formation of SAMAHAN at ADDU.",
};

const timelineEntries = [
  {
    id: "early-american",
    era: "Early American Period · 1900s-1930s",
    title: "Modern Campus Representation Takes Shape",
    description:
      "As public education expanded under American rule, universities began organizing student councils, campus publications, and debate unions. These early bodies trained students in elections, parliamentary procedure, and advocacy, laying the foundations of formal student representation.",
  },
  {
    id: "commonwealth",
    era: "Commonwealth Era · 1935-1941",
    title: "Student Leadership Linked to Nation-Building",
    description:
      "During the Commonwealth, student bodies increasingly framed school governance as preparation for citizenship in a self-governing nation. Civic campaigns, student forums, and policy discussions strengthened the idea that students could be partners in shaping institutions.",
  },
  {
    id: "postwar",
    era: "Post-War Republic · 1946-1960s",
    title: "Student Councils Rebuild and Expand",
    description:
      "After World War II, schools rebuilt governance structures alongside physical campuses. Student councils and inter-school alliances became more visible, with leaders advocating for academic reforms, student welfare, and affordable education as higher education expanded nationwide.",
  },
  {
    id: "activism",
    era: "First Quarter Storm · Late 1960s-Early 1970s",
    title: "Students Take the Streets",
    description:
      "By the late 1960s, student organizations evolved into major political actors. Mobilizations such as the First Quarter Storm and the 1971 Diliman Commune showed how campus politics could influence national debate on inequality, corruption, and democratic rights.",
  },
  {
    id: "martial-law",
    era: "Martial Law · 1972-1986",
    title: "Repression, Resistance, and Underground Organizing",
    description:
      "Martial Law sharply restricted freedom of expression and assembly on campuses. Many student councils were curtailed or dissolved, but student activism continued through church groups, community work, campus journalism, and underground networks that kept democratic engagement alive.",
  },
  {
    id: "post-edsa",
    era: "Post-EDSA Transition · 1986-2000s",
    title: "Rebuilding Democratic Student Governance",
    description:
      "After 1986, universities restored student councils and constitutional processes. Student governments focused on institutional reforms, accountability, and representation in policy-making bodies, helping reconnect campus governance with broader democratic recovery.",
  },
  {
    id: "modern",
    era: "Contemporary Era · 2000s-Present",
    title: "From Campaign Politics to Service and Digital Advocacy",
    description:
      "Today, student governments balance traditional electoral politics with service delivery, mental health programs, academic policy work, and online advocacy. Participation remains uneven, but councils continue adapting through transparency initiatives, coalition work, and digital engagement.",
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
            Student governance in the Philippines was built through decades of
            organizing, reform, and resistance. Knowing this history helps us see why
            participation is not just about voting day, but about whether students feel
            represented, informed, and heard. At ADDU, the same long story continues:
            low engagement today is not apathy alone, but a challenge of trust,
            relevance, and connection between SAMAHAN and the student body it serves.
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
              Student governments in the Philippines emerged as campuses became training
              grounds for public leadership. What began as school-based councils and
              civic clubs gradually developed into elected institutions that gave
              students a voice in policy, welfare, and academic life. Over time, these
              bodies were shaped by colonial transition, war, social movements, and
              constitutional change.
            </p>
            <p className="text-slate-500 leading-relaxed">
              This history matters because participation today did not appear overnight.
              Every election cycle, advocacy campaign, and student consultation in
              universities like Ateneo de Davao stands on decades of organizing,
              disruption, reform, and renewal. Understanding that arc helps explain both
              present achievements and ongoing gaps in student engagement.
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
                        {entry.description}
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

          <div className="max-w-3xl">
            <div className="flex flex-col gap-5">
              <p className="text-slate-500 leading-relaxed">
                The history of SAMAHAN shows how student government at Ateneo de Davao
                moved from basic representation to a more institutional role in campus
                life. What began as a body for student coordination and welfare gradually
                became a durable civic structure where elections, consultation, and
                accountability were treated as part of student formation, not just
                administrative routine. In historical terms, this mirrors the national
                trajectory of Philippine student governance: participation grows when
                institutions make student voice visible, legitimate, and consequential.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Seeing SAMAHAN through a historical lens matters because it clarifies why
                present-day participation challenges cannot be reduced to student
                disinterest alone. They are also questions of institutional trust,
                representativeness, and continuity. Each reform period, governance shift,
                and engagement strategy added to a longer democratic learning process,
                showing that student government is most meaningful when it connects
                student concerns to concrete policy outcomes and shared responsibility.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
