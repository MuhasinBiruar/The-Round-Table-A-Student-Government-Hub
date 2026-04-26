import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "../components/ImagePlaceholder";
import samahanevent from "../resources/images/samahanevent.jpg";

export const metadata: Metadata = {
  title: "Why Participate? | The Round Table",
  description:
    "Discover why participating in SAMAHAN — as a voter or a candidate — makes a real difference at Ateneo de Davao University.",
};

// ─── Numbered reason card ────────────────────────────────────────────────────
function ReasonCard({ number, title }: { number: number; title: string }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col gap-3">
      <span className="w-9 h-9 rounded-xl bg-slate-900 text-amber-400 font-black text-sm flex items-center justify-center shrink-0">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="font-bold text-slate-900 leading-snug text-sm">
        {/* TODO: Replace with your actual reason title */}
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {/*
          TODO: Elaborate here — give a specific example, statistic, or argument
          that makes this point tangible for an ADDU student.
        */}
        [Elaborate on this reason — be specific. Cite examples from ADDU, the Philippines,
        or broader civic contexts.]
      </p>
    </div>
  );
}

// ─── Student quote card ──────────────────────────────────────────────────────
function QuoteCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
      <svg className="w-8 h-8 text-amber-400/60" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-slate-600 leading-relaxed italic text-sm flex-1">
        {/* TODO: Insert an actual student quote */}
        &ldquo;[Insert a quote from a student — voter, officer, or candidate.]&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
        {/* TODO: Replace with actual student photo */}
        <ImagePlaceholder label="Photo" className="w-10 h-10 rounded-full shrink-0" />
        <div>
          <p className="font-semibold text-slate-900 text-sm">
            {/* TODO: Student name */}
            [Student Name]
          </p>
          <p className="text-slate-400 text-xs">
            {/* TODO: Position / year / college */}
            [SAMAHAN Position / Year Level / College]
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ParticipatePage() {
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
            Why Participate?
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Whether you are choosing who leads or deciding to lead yourself, your participation
            is what makes SAMAHAN more than just a name on a lanyard. Without you, student
            government is just a title. With you, it becomes a force.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FRAMING — WHY IT MATTERS
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
                Why It Matters
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 tracking-tight">
              Governance Without Participation Is Hollow
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-slate-500 leading-relaxed">
                SAMAHAN, the Samahan ng mga Mag-aaral ng Pamantasang Ateneo de Davao, was
                established as an autonomous student government guided by Jesuit, Filipino,
                and Mindanaoan principles (SAMAHAN, 2025). It champions real advocacies such
                as climate action, quality education, holistic health, youth empowerment,
                SOGIESC rights, and good governance (SAMAHAN, 2025). But those advocacies
                only carry weight when the students they represent actually show up. A student
                government elected by few speaks for few. When participation is low, SAMAHAN's
                ability to credibly negotiate with the administration, secure student services,
                and drive institutional change is fundamentally weakened because its mandate is thin.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Low voter turnout is not unique to ADDU. It is a crisis across Philippine higher
                education institutions. In 2024, Far Eastern University saw its voter turnout drop
                from 44.79% to 36.36%, and the University of the Philippines Manila recorded a
                37.70% voter participation rate, its lowest in 25 years (The Guidon, 2025). Former
                Sanggunian President TJ Alcantara attributes this disengagement to a sense of
                complacency, where students assume that programs like academic subsidies and
                constituency checks will continue regardless of who wins (The Guidon, 2025). But
                this thinking is exactly what hollows governance out. The leaders you ignore today
                make the decisions you live with tomorrow.
              </p>
            </div>
          </div>

          <Image
            src={samahanevent}
            alt="Students at a SAMAHAN event"
            className="w-full h-60 rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY VOTE?
      ══════════════════════════════════════════ */}
      <section id="why-vote" className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              For Voters
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            Why Vote?
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl">
            {/* TODO: Framing sentence — e.g., "Voting takes minutes. Its consequences last a year." */}
            [One punchy sentence framing the voting section.]
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* TODO: Edit titles — suggested topics: representation, policy impact, civic habit,
                legitimacy, accountability, ease of voting */}
            <ReasonCard number={1} title="[e.g., Your Vote Shapes Student Policy]" />
            <ReasonCard number={2} title="[e.g., Low Turnout Weakens the Mandate]" />
            <ReasonCard number={3} title="[e.g., Every Vote Holds Leaders Accountable]" />
            <ReasonCard number={4} title="[e.g., Voting is a Civic Habit Worth Building]" />
            <ReasonCard number={5} title="[e.g., It Only Takes a Few Minutes]" />
            <ReasonCard number={6} title="[Add your own reason]" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY RUN?
      ══════════════════════════════════════════ */}
      <section id="why-run" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              For Candidates
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            Why Run for Office?
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl">
            {/* TODO: Framing sentence */}
            [One sentence framing the candidacy section.]
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* TODO: Edit titles — suggested topics: leadership, change, voice, community,
                legacy, networking */}
            <ReasonCard number={1} title="[e.g., Drive Real Change for Your Fellow Students]" />
            <ReasonCard number={2} title="[e.g., Develop Leadership You Can't Learn in Class]" />
            <ReasonCard number={3} title="[e.g., Be the Voice Your Batchmates Need]" />
            <ReasonCard number={4} title="[e.g., Build Connections Across the University]" />
            <ReasonCard number={5} title="[e.g., Leave a Legacy for Future Ateneans]" />
            <ReasonCard number={6} title="[Add your own reason]" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STUDENT VOICES
      ══════════════════════════════════════════ */}
      <section id="voices" className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              Student Voices
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            Hear From Those Who Chose to Participate
          </h2>
          <p className="text-slate-500 mb-10">
            {/* TODO: Brief intro, or remove the section if you have no quotes yet */}
            [Optional intro — e.g., "Hear from Ateneans who chose to participate."]
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <QuoteCard />
            <QuoteCard />
            {/* TODO: Add more <QuoteCard /> entries as needed */}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CALL TO ACTION
      ══════════════════════════════════════════ */}
      <section className="relative bg-slate-950 py-24 px-4 overflow-hidden text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-150 h-60 bg-amber-500/8 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[28px_28px] pointer-events-none" />

        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-400/60" />
            <span className="text-amber-400 text-xs font-bold tracking-[0.18em] uppercase">
              Get Involved
            </span>
            <span className="h-px w-8 bg-amber-400/60" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {/* TODO: CTA headline */}
            [Headline — e.g., "Ready to make your voice heard?"]
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            {/* TODO: Supporting sentence */}
            [One sentence reinforcing the call to act.]
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/positions"
              className="bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
            >
              Explore SAMAHAN Positions
            </Link>
            <Link
              href="/history"
              className="border border-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-full hover:border-slate-500 hover:text-white transition-colors"
            >
              Read the History
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
