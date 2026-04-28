import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizational Directory | The Round Table",
  description:
    "A comprehensive directory of the SAMAHAN Student Government offices and departments at Ateneo de Davao University.",
};

// ─── Data Types ─────────────────────────────────────────────────────────────

type Department = {
  name: string;
  description: string;
  positions: string[];
};

type Office = {
  id: string;
  name: string;
  badge: string;
  description: string;
  internalPositions: string[];
  gradient: string;
  accent: string;
  departments: Department[];
};

// ─── Organizational Data ─────────────────────────────────────────────────────

const OFFICES: Office[] = [
  {
    id: "president",
    name: "Office of the SAMAHAN President",
    badge: "Executive Head",
    description:
      "The OSP is the central executive office of SAMAHAN, focusing on internal harmony, administrative efficiency, and the university's external relations with national and international student alliances.",
    internalPositions: ["SAMAHAN President", "Chief of Staff", "Executive Secretary", "Executive Undersecretary"],
    gradient: "from-blue-600/20 via-blue-600/5 to-transparent",
    accent: "text-blue-400",
    departments: [
      {
        name: "Department of External Affairs",
        description: "Manages Ateneo de Davao's engagements with external alliances like Buklod Atenista.",
        positions: ["DEA Director", "DEA Deputy Director"],
      },
      {
        name: "SAMAHAN Ecoteneo Student Unit (ESU)",
        description: "Leads environmental advocacies and sustainability initiatives within the campus.",
        positions: ["ESU Director", "ESU Deputy Director"],
      },
      {
        name: "Department of Campaigns and Advocacies",
        description: "Amplifies the student body's voice on critical social and political issues.",
        positions: ["DCA Director", "DCA Deputy Director"],
      },
      {
        name: "Student Needs and Services Department",
        description: "Dedicated to long-term welfare programs and immediate student support.",
        positions: ["SNS Director", "SNS Deputy Director"],
      },
    ],
  },
  {
    id: "vice-president",
    name: "Office of the SAMAHAN Vice President",
    badge: "Executive & Legislative",
    description:
      "The OSVP supervises the internal affairs of the student government and leads the Student Assembly, ensuring that legislative and executive actions are aligned with student welfare.",
    internalPositions: ["SAMAHAN Vice President", "Chief-of-Staff", "Multisectoral Affairs Secretary", "Legislative Secretary", "Legislative Undersecretaries"],
    gradient: "from-purple-600/20 via-purple-600/5 to-transparent",
    accent: "text-purple-400",
    departments: [
      {
        name: "Department of Academic Affairs (DAA)",
        description: "Promotes academic welfare and reviews university policies to protect student rights.",
        positions: ["DAA Director", "DAA Deputy Director"],
      },
      {
        name: "Department of Disaster Risk Reduction and Management",
        description: "Orchestrates campus safety protocols and emergency response initiatives.",
        positions: ["DRRM Director", "DRRM Deputy Director"],
      },
      {
        name: "Political Affairs and Engagements Department",
        description: "Promotes political awareness and encourages active student participation in governance.",
        positions: ["SPAED Director", "SPAED Deputy Director"],
      },
    ],
  },
  {
    id: "secretary-general",
    name: "Office of the SAMAHAN Secretary General",
    badge: "Secretariat",
    description:
      "The OSG ensures the smooth administrative flow of SAMAHAN, managing documentation, secretariat functions, and the overall organizational system.",
    internalPositions: ["SAMAHAN Secretary General", "Administrative Secretary", "Administrative Undersecretaries"],
    gradient: "from-emerald-600/20 via-emerald-600/5 to-transparent",
    accent: "text-emerald-400",
    departments: [
      {
        name: "SAMAHAN Communications",
        description: "Manages the organization's public image, information dissemination, and digital presence.",
        positions: ["SAMACOMMS Director", "SAMACOMMS Deputy Director"],
      },
      {
        name: "Ateneo SAMAHAN Productions",
        description: "Directs the planning and execution of major university-wide events and festivals.",
        positions: ["ASP Director", "ASP Deputy Director"],
      },
      {
        name: "SAMAHAN Creative Team",
        description: "The branding and visual identity arm, specializing in design and multimedia production.",
        positions: ["SCT Director", "SCT Deputy Director"],
      },
      {
        name: "SAMAHAN Research and Development",
        description: "Conducts data-driven studies to inform SAMAHAN's policies and initiatives.",
        positions: ["R&D Director", "R&D Deputy Director"],
      },
      {
        name: "SAMAHAN Systems Development",
        description: "Manages the digital infrastructure and technical tools of the student government.",
        positions: ["SysDev Director", "SysDev Deputy Director"],
      },
    ],
  },
  {
    id: "treasurer",
    name: "Office of the SAMAHAN Treasurer",
    badge: "Finance",
    description:
      "The OST is the primary custodian of SAMAHAN's financial resources, ensuring transparency, accountability, and the efficient allocation of funds for student services.",
    internalPositions: [ "SAMAHAN Treasurer", "Finance Secretary", "Finance Undersecretaries"],
    gradient: "from-amber-600/20 via-amber-600/5 to-transparent",
    accent: "text-amber-400",
    departments: [
      {
        name: "SAMAHAN Logistics Department",
        description: "Manages procurement, inventory, and the physical requirements of SAMAHAN operations.",
        positions: ["SLD Director", " SLD Deputy Director"],
      },
      {
        name: "SAMAHAN Sponsorship and Support",
        description: "Establishes partnerships with internal and external stakeholders for resource mobilization.",
        positions: ["SAS Director", "SAS Deputy Director"],
      },
    ],
  },
];

// ─── Components ─────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="relative bg-slate-950 py-24 px-4 overflow-hidden border-b border-slate-900">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-amber-400/40" />
          <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">
            Directory
          </span>
          <span className="h-px w-8 bg-amber-400/40" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Organizational <span className="text-slate-400">Structure</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Explore the offices and departments that drive the SAMAHAN Student Government&apos;s 
          initiatives at Ateneo de Davao University.
        </p>
      </div>
    </section>
  );
}

function DepartmentCard({ dept }: { dept: Department }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:bg-white/[0.08] transition-colors">
      <h4 className="text-lg font-bold text-white mb-3 leading-snug">
        {dept.name}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
        {dept.description}
      </p>
      <div className="pt-4 border-t border-white/5 mt-auto">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
          Positions
        </span>
        <div className="flex flex-wrap gap-2">
          {dept.positions.map((pos) => (
            <span key={pos} className="text-xs text-slate-300 font-medium">
              {pos}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function OfficeSection({ office }: { office: Office }) {
  return (
    <section id={office.id} className="py-20 border-b border-slate-900 last:border-0">
      <div className="max-w-5xl mx-auto px-4">
        {/* Office Header */}
        <div className={`relative rounded-3xl p-8 md:p-12 overflow-hidden mb-12 bg-gradient-to-br ${office.gradient} border border-white/5`}>
          <div className="relative z-10">
            <span className={`inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-widest ${office.accent} mb-6`}>
              {office.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {office.name}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
              {office.description}
            </p>
            
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-4">
                Internal Positions
              </span>
              <div className="flex flex-wrap gap-3">
                {office.internalPositions.map((pos) => (
                  <span key={pos} className="bg-white/5 backdrop-blur-sm border border-white/10 text-white text-xs px-4 py-2 rounded-xl">
                    {pos}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {office.departments.map((dept) => (
            <DepartmentCard key={dept.name} dept={dept} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PositionsPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <PageHero />

      {/* ── Jump Navigation ── */}
      <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-900 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 flex gap-2 overflow-x-auto py-3 no-scrollbar">
          {OFFICES.map((office) => (
            <a
              key={office.id}
              href={`#${office.id}`}
              className="text-xs font-bold text-slate-500 hover:text-white whitespace-nowrap py-2 px-4 rounded-full border border-transparent hover:border-white/10 transition-all uppercase tracking-widest"
            >
              {office.id.replace("-", " ")}
            </a>
          ))}
        </div>
      </nav>

      <div className="pb-24">
        {/* Central Board Highlight */}
        <section id="central-board" className="py-20 bg-slate-950">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-4 block">
                  Governing Authority
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  SAMAHAN Central Board
                </h2>
                <p className="text-slate-400 leading-relaxed max-w-2xl text-base mb-8">
                  As the supreme student governing body of Ateneo de Davao University, 
                  the Central Board exercises overall authority in representing the student 
                  body and overseeing the implementation of student welfare initiatives.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">Composition</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Comprised of the Executive Officers, Cluster Representatives, and Sectoral Leaders 
                      working in unity to serve the Atenean community.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">Function</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Acts as the primary decision-making body for university-wide student advocacies, 
                      policy reforms, and organizational leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Sections */}
        {OFFICES.map((office) => (
          <OfficeSection key={office.id} office={office} />
        ))}
      </div>
    </div>
  );
}
