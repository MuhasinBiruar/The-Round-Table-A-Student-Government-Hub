import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "../components/ImagePlaceholder";
import samahanevent from "../resources/images/samahanevent.jpg";
import whyparticipate from "../resources/images/whyparticipate.png";
import whyvote from "../resources/images/whyvote.png";
import whyrun from "../resources/images/whyrun.png";

export const metadata: Metadata = {
  title: "Why Participate? | The Round Table",
  description:
    "Discover why participating in SAMAHAN — as a voter or a candidate — makes a real difference at Ateneo de Davao University.",
};

// ─── Numbered reason card ────────────────────────────────────────────────────
function ReasonCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col gap-3">
      <span className="w-9 h-9 rounded-xl bg-slate-900 text-amber-400 font-black text-sm flex items-center justify-center shrink-0">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="font-bold text-slate-900 leading-snug text-sm">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed text-justify">
        {children}
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
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 px-4 py-12 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[40vh] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vh] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-10">
          {/* Text */}
          <div className="text-center max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-amber-400/60" />
              <span className="text-amber-400 text-xs font-bold tracking-[0.18em] uppercase">
                The Round Table
              </span>
              <span className="h-px w-8 bg-amber-400/60" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
              Your Voice.<br />
              <span className="text-amber-400">Your Choice.</span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Whether you are choosing who leads or deciding to lead yourself, your participation is what makes SAMAHAN more than just a name on a lanyard. Without you, student government is just a title. With you, it becomes a force.
            </p>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            <Link
              href="#why-participate"
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer bg-slate-900"
            >
              <Image
                src={whyparticipate}
                alt="Why Participate"
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1 block">Get Started</span>
                <h3 className="text-white text-lg font-bold">Why Participate</h3>
              </div>
            </Link>

            <Link
              href="#why-vote"
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer bg-slate-900"
            >
              <Image
                src={whyvote}
                alt="Why Vote"
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1 block">For Voters</span>
                <h3 className="text-white text-lg font-bold">Why Vote</h3>
              </div>
            </Link>

            <Link
              href="#why-run"
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer bg-slate-900"
            >
              <Image
                src={whyrun}
                alt="Why Run for Office"
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1 block">For Leaders</span>
                <h3 className="text-white text-lg font-bold">Why Run for Office</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FRAMING — WHY IT MATTERS
      ══════════════════════════════════════════ */}
      <section id="why-participate" className="py-20 md:py-28 px-4 bg-slate-50/80">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
                Why It Matters
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Governance Without Participation Is Hollow
            </h2>
            <div className="flex flex-col gap-5">
              <p className="text-slate-600 leading-relaxed text-[15px] md:text-base text-justify">
                SAMAHAN, the Samahan ng mga Mag-aaral ng Pamantasang Ateneo de Davao, was
                established as an autonomous student government guided by Jesuit, Filipino, and
                Mindanaoan principles (SAMAHAN, 2025). It champions real advocacies such as
                climate action, quality education, holistic health, youth empowerment, SOGIESC
                rights, and good governance (SAMAHAN, 2025). But those advocacies only carry
                weight when the students they represent actually show up.
              </p>
              <p className="text-slate-600 leading-relaxed text-[15px] md:text-base text-justify">
                A student government
                elected by few speaks for few. When participation is low, SAMAHAN&apos;s ability to
                credibly negotiate with the administration, secure student services, and drive
                institutional change is fundamentally weakened because its mandate is thin. Low
                voter turnout is not only seen in AdDU But it is a crisis across Philippine higher
                education institutions. Schools such as Far Eastern University (FEU) saw a decline
                in voter turnout from 44.79% to 36.36% in 2024 (FEU Produces Low Voter Turnout,
                Prompts &apos;Failed Election&apos; Cases, n.d.). Furthermore, the University of the
                Philippines Manila recorded a 37.70% voter turnout, the lowest since 1999
                (Escueta et al., 2025).
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <Image
              src={samahanevent}
              alt="Students at a SAMAHAN event"
              className="w-full h-[420px] md:h-[480px] rounded-2xl object-cover shadow-lg group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY VOTE?
      ══════════════════════════════════════════ */}
      <section id="why-vote" className="py-20 md:py-28 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              For Voters
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Why Vote?
          </h2>
          <p className="text-slate-600 mb-14 max-w-2xl text-[15px] md:text-base leading-relaxed">
            Your vote is the single simplest act that determines whether SAMAHAN governs with a real mandate or just a title.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ReasonCard number={1} title="Your Vote Shapes Student Policy">
              The platforms SAMAHAN candidates run on become the programs your student government pursues from academic subsidies to mental health services. SAMAHAN&apos;s current AdvocaSIX framework, covering everything from climate action to SOGIESC rights, was shaped by the leadership that students voted into office. If you did not vote, you had no say in setting that agenda.
            </ReasonCard>
            <ReasonCard number={2} title="Low Turnout Weakens the Mandate">
              When fewer students vote, elected officers represent a smaller slice of the student body. That makes it harder for SAMAHAN to argue on your behalf with the administration. Across Philippine HEIs, falling turnout has weakened student government credibility. A SAMAHAN president elected by 30% of students doesn&apos;t carry the same weight as one elected by 70%.
            </ReasonCard>
            <ReasonCard number={3} title="Every Vote Holds Leaders Accountable">
              High turnout does not just elect leaders, it disciplines them. When students vote in large numbers, candidates know they must deliver on their platforms or face judgment at the next election. The SAMAHAN Multisectoral Council was launched specifically to ensure that even minority groups and cause-based movements have representation and can hold the central board accountable. That accountability mechanism only works if students participate.
            </ReasonCard>
            <ReasonCard number={4} title="Voting Is a Civic Habit Worth Building">
              Your life is shaped by the habits you develop while attending campus. Voting is not only experienced on campus but also in real life. Students who participate in campus elections are more likely to become the registered voters, government officials, and engaged citizens that the Philippines needs. Your SAMAHAN ballot is a rehearsal for the national stage.
            </ReasonCard>
            <ReasonCard number={5} title="It Only Takes a Few Minutes">
              To cast your vote it only needs a device and a few minutes. Elections are conducted digitally, it removes any physical barrier that may stand in your way in participating. Yet despite that convenience, turnout across Philippine student governments continues to fall which means the barrier is never logistical.
            </ReasonCard>
            <ReasonCard number={6} title="Your Abstention Is Also a Choice Just Not Yours">
              When you do not vote, you do not stay neutral. You hand your voice to everyone else who does show up. Choosing not to vote is still choosing; you are simply letting others choose for you.
            </ReasonCard>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY RUN?
      ══════════════════════════════════════════ */}
      <section id="why-run" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
              For Candidates
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Why Run for Office?
          </h2>
          <p className="text-slate-600 mb-14 max-w-2xl text-[15px] md:text-base leading-relaxed">
            Running for SAMAHAN is not a line on your résumé it is a decision to take responsibility for the 10,000+ Ateneans who share this university with you.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ReasonCard number={1} title="Drive Real Change for Your Fellow Students">
              SAMAHAN is not ceremonial. It negotiates with university administration, organizes large-scale campus events, manages student welfare programs, and champions advocacy campaigns that reach beyond the campus. The SAMAHAN Multisectoral Council, launched to give sectoral and minority student groups an amplified voice in governance, is a direct product of student leaders who decided to build something better. If there is a problem on campus that frustrates you a policy that feels unjust, a service that is lacking the fastest path to changing it runs through the SAMAHAN Central Board.
            </ReasonCard>
            <ReasonCard number={2} title="Develop Leadership You Cannot Learn in Class">
              The leadership competencies forged in student government stakeholder management, crisis communication, budget stewardship, coalition-building are precisely what employers and graduate schools look for. A phenomenological study on student government leadership in the Philippines found that serving as a student leader develops skills in open communication, teamwork, time management, and self-empowerment that persist far beyond campus. These are not soft skills. They are the hard infrastructure of every career worth having.
            </ReasonCard>
            <ReasonCard number={3} title="Be the Voice Your Batchmates Need">
              Many students feel that student government does not represent them and that feeling is often justified because the students who could represent them never ran. The SAMAHAN Political Affairs and Engagements Department exists specifically to promote informed political participation and ensure that student voices not just the loudest ones shape governance. If your department, course, or sector feels unheard, the answer is not to complain louder. It is to sit at the table.
            </ReasonCard>
            <ReasonCard number={4} title="Build Connections Across the University">
              Serving in SAMAHAN places you at the intersection of every college, department, and advocacy group on campus. SAMAHAN officers engage directly with university administrators, partner with community organizations, and represent ADDU in external conferences and alliances. These are relationships you cannot manufacture in a classroom. Former SAMAHAN presidents have noted that the networks built during their term across sectors, disciplines, and even generations of Ateneans became the most durable asset of their student leadership experience.
            </ReasonCard>
            <ReasonCard number={5} title="Leave a Legacy for Future Ateneans">
              SAMAHAN&apos;s AdvocaSIX is a six-year framework running from 2022 to 2028 meaning the decisions made by today&apos;s student leaders will shape campus life for Ateneans who have not yet enrolled. In April 2026, SAMAHAN&apos;s initiatives were recognized at the Mindanao Youth Awards, honoring programs that created lasting community impact across Mindanao. The work you do in office outlives your term. Build something worth inheriting.
            </ReasonCard>
            <ReasonCard number={6} title="Student Leadership Is the First Step to National Leadership">
              The pipeline from campus government to public service in the Philippines is well-documented. Bam Aquino served as Ateneo Sanggunian President in 1998–1999 before becoming a Philippine senator. Lean Alejandro, the celebrated UP student council chairman, became one of the most consequential youth leaders in Philippine political history. The values, discipline, and political instinct you develop in SAMAHAN are the same ones that drive national change. You have to start somewhere. Start here.
            </ReasonCard>
          </div>
        </div>
      </section>

      {/* Student voices section hidden for now. */}

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
            Magis Starts With Showing Up.
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Whether you cast a ballot or put your name on it, your participation is what transforms SAMAHAN from a student government into a genuine student movement.
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
