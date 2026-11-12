export interface LegalPracticeArea {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  scope: string[];
}

export const FIRM_DETAILS = {
  name: "R.K LEGAL SOLUTION LLP",
  subname: "ADVOCATES & SOLICITORS",
  owner: "ADV. ROHIT KUMAR",
  role: "Firm Owner & Head of Chambers",
  courts: [
    "Civil Court Ranchi",
    "Jharkhand High Court",
    "Patna High Court",
    "Delhi High Court",
    "Supreme Court of India"
  ],
  primaryJurisdictionText: "Civil Court Ranchi · Jharkhand High Court · Patna High Court · Delhi High Court · Supreme Court",
  phone1: "6204015323",
  phone2: "8340439983",
  formattedPhone1: "+91 6204015323",
  formattedPhone2: "+91 8340439983",
  email: "r.klegalsolutionllp.05@gmail.com",
  web3FormsAccessKey: "7d988981-f44c-4bb9-8c7e-a8556ac940f4",
  chambersAddress: "Chambers of Adv. Rohit Kumar, Near New Jharkhand High Court Complex, Dhurwa, Ranchi, Jharkhand 834004 (High Court shifted to Dhurwa; also regularly appearing before Civil Court Ranchi)",
  city: "Ranchi, Jharkhand (Civil Court Ranchi, Jharkhand High Court Dhurwa, Patna, Delhi & Supreme Court)",
  hours: "I AM AVAILABLE 24*7 — Clients can call anytime for urgent legal counsel, emergency bail, stay applications, and courtroom representation.",
  availabilityBadge: "I AM AVAILABLE 24*7"
};

export const PRACTICE_AREAS: LegalPracticeArea[] = [
  {
    id: "civil",
    number: "01",
    title: "Civil Matters",
    shortDesc: "Complete advocacy for property, land title disputes, recovery, injunctions, partition suits, and contractual enforcement across trial and appellate courts.",
    scope: [
      "Title suits, land demarcation & partition disputes",
      "Specific relief, declaration & permanent injunctions",
      "Money recovery suits & commercial contract breaches",
      "Execution petitions & decree enforcement"
    ]
  },
  {
    id: "criminal",
    number: "02",
    title: "Criminal Matters",
    shortDesc: "Aggressive defense counsel in trial proceedings, anticipatory and regular bail applications, revision petitions, and criminal writ petitions.",
    scope: [
      "Anticipatory bail & regular bail (Sessions, High Courts)",
      "FIR quashing petitions under Section 482 CrPC / BNSS",
      "Trial defense in IPC / BNS matters and Special Acts",
      "Criminal appeals, revisions & suspension of sentence"
    ]
  },
  {
    id: "family",
    number: "03",
    title: "Family Law",
    shortDesc: "Compassionate yet firm representation in matrimonial disputes, divorce proceedings, alimony, child custody, and domestic violence matters.",
    scope: [
      "Mutual consent & contested divorce proceedings",
      "Maintenance & alimony claims (Section 125 CrPC / BNSS)",
      "Child custody & guardianship petitions",
      "Protection of Women from Domestic Violence Act (DV Act)"
    ]
  },
  {
    id: "corporate",
    number: "04",
    title: "Corporate & Commercial Law",
    shortDesc: "Strategic legal advisory and litigation for businesses, partnerships, contract structuring, and commercial dispute resolution.",
    scope: [
      "Corporate dispute litigation before High Courts & NCLT",
      "Drafting & vetting of commercial agreements & NDAs",
      "Partnership firm deeds, registration & dissolution",
      "Consumer forum & commercial arbitration proceedings"
    ]
  },
  {
    id: "service",
    number: "05",
    title: "Service Matters",
    shortDesc: "Comprehensive legal representation in government and public sector employment disputes, disciplinary proceedings, promotions, and pension claims.",
    scope: [
      "Service Writ Petitions before High Courts (Articles 226 & 227)",
      "Departmental proceedings, suspension & penalty challenges",
      "Seniority disputes, promotion denials & pay anomalies",
      "Pension, gratuity & retiral dues recovery"
    ]
  },
  {
    id: "writ-matter",
    number: "06",
    title: "Writ Matter",
    shortDesc: "Aggressive invocation of extraordinary constitutional writ jurisdiction under Articles 226 and 227 before High Courts and Article 32 before the Supreme Court for prompt judicial remedy.",
    scope: [
      "Writ of Mandamus (compelling statutory authorities & public duties)",
      "Writ of Certiorari (quashing arbitrary administrative & executive orders)",
      "Writ of Habeas Corpus & Prohibition against jurisdictional overreach",
      "Urgent interim stay orders, status quo & fundamental rights enforcement"
    ]
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Intake & Document Examination",
    desc: "Thorough review of trial records, lower court orders, government notifications, or contractual deeds to establish factual bedrock."
  },
  {
    step: "02",
    title: "Statutory Framing & Precedents",
    desc: "Meticulous legal drafting citing binding Supreme Court and High Court judgments for compelling briefs."
  },
  {
    step: "03",
    title: "Effective Courtroom Advocacy",
    desc: "Decisive oral arguments before Benches to secure prompt relief, interim stays, bails, or final favorable judgments."
  }
];
