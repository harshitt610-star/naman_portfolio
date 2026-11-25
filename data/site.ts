export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export interface Pillar {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  matter: string;
  city: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  initials: string;
  enrolmentNumber: string;
  enrolmentDate: string;
  barCouncil: string;
  court: string;
  bench: string;
  city: string;
  state: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappPrefill: string;
  email: string;
  linkedin: string;
  chamberAddress: {
    line1: string;
    line2: string;
    city: string;
    pincode: string;
    state: string;
  };
  mapsUrl: string;
  heroImage: string;
  stats: StatItem[];
  practiceAreas: PracticeArea[];
  pillars: Pillar[];
  quote: {
    text: string;
    author: string;
  };
  clients: string[];
  process: ProcessStep[];
  testimonials: Testimonial[];
}

export const siteConfig: SiteConfig = {
  name: "Naman Mishra",
  shortName: "Naman Mishra",
  initials: "NM",
  enrolmentNumber: "UP25047/26",
  enrolmentDate: "14/09/2026",
  barCouncil: "Bar Council of Uttar Pradesh",
  court: "High Court of Judicature at Allahabad",
  bench: "Principal Seat, Prayagraj",
  city: "Prayagraj",
  state: "Uttar Pradesh",
  tagline: "Strong, reliable representation when it matters most",
  phone: "+917380896956",
  phoneFormatted: "+91 73808 96956",
  whatsapp: "917380896956",
  whatsappPrefill: "Hello Advocate Naman Mishra, I would like to consult with your chamber regarding a legal matter before the Allahabad High Court.",
  email: "mishranaman0914@gmail.com",
  linkedin: "https://www.linkedin.com/in/naman-mishra-a93602232",
  chamberAddress: {
    line1: "Chamber No. 42, Lawyers' Chambers Block",
    line2: "High Court of Judicature at Allahabad",
    city: "Prayagraj (Allahabad)",
    pincode: "211001",
    state: "Uttar Pradesh",
  },
  mapsUrl: "https://maps.google.com/?q=High+Court+of+Judicature+at+Allahabad+Prayagraj",
  heroImage: "/hero.jpg",
  stats: [
    {
      value: "HC",
      label: "Practice before Allahabad High Court",
    },
    {
      value: "UP",
      label: "Enrolled with Bar Council of U.P. (UP25047/26)",
    },
    {
      value: "6",
      label: "Core practice areas from Criminal Defence to Writs",
    },
    {
      value: "24h",
      label: "Prompt review of new case enquiries & papers",
    },
  ],
  practiceAreas: [
    {
      id: "criminal-defence",
      title: "Criminal Defence",
      description: "Aggressive courtroom advocacy and strategic protection of personal liberty at trial, appellate, and revision stages.",
      points: [
        "Anticipatory and regular bail applications",
        "Quashing of FIR & Charge-sheets (Sec 482 CrPC / Sec 528 BNSS)",
        "Criminal revisions & appeals against conviction",
        "Sessions trial representation & bail bond procedures",
      ],
    },
    {
      id: "civil-property",
      title: "Civil & Property Disputes",
      description: "Protecting title rights, ancestral ownership, and contractual remedies with exhaustive documentary scrutiny.",
      points: [
        "Temporary and permanent injunction suits",
        "Partition suits & ancestral property division",
        "Title declaration and cancellation of deeds",
        "RERA complaints & real estate consumer matters",
      ],
    },
    {
      id: "family-matrimonial",
      title: "Family & Matrimonial",
      description: "Compassionate, discreet, yet uncompromising representation for family disputes and marital resolutions.",
      points: [
        "Mutual consent & contested divorce proceedings",
        "Interim maintenance (Sec 125 CrPC / Sec 144 BNSS)",
        "Child custody and visitation rights petitions",
        "Domestic violence act proceedings & mediation",
      ],
    },
    {
      id: "writs-appeals",
      title: "Writs & Constitutional Law",
      description: "Invoking extraordinary high court jurisdiction against state arbitrariness and procedural violations.",
      points: [
        "Writ Petitions under Article 226 & 227 of the Constitution",
        "First Appeals (FA) and Second Appeals (SA)",
        "Quashing of arbitrary administrative orders",
        "Service matters and public interest litigation",
      ],
    },
    {
      id: "corporate-commercial",
      title: "Corporate & Commercial",
      description: "Commercial advisory, contract structuring, and business dispute resolution for individuals and enterprises.",
      points: [
        "Commercial contract drafting & vetting",
        "Corporate compliance & statutory legal notices",
        "Commercial suits under the Commercial Courts Act",
        "Recovery of debts and summary suits under Order 37",
      ],
    },
    {
      id: "arbitration",
      title: "Arbitration & ADR",
      description: "Handling alternative dispute resolution and court intervention under the Arbitration and Conciliation Act.",
      points: [
        "Arbitration invoking & Section 11 arbitrator appointments",
        "Section 9 applications for interim relief before court",
        "Section 34 petitions challenging arbitral awards",
        "Enforcement and execution of domestic awards",
      ],
    },
  ],
  pillars: [
    {
      title: "Research-First Approach",
      description: "Precedent study and thorough statutory fact-based analysis build the unshakeable foundation of every argument presented before the bench.",
    },
    {
      title: "Clear & Timely Communication",
      description: "You always know your next listing date, courtroom dynamics, procedural options, and what exactly transpired before the Hon'ble Court.",
    },
    {
      title: "Ethical & Result-Oriented Representation",
      description: "Strict attorney-client confidentiality, professional integrity, and transparent billing without hidden costs or unrealistic assurances.",
    },
  ],
  quote: {
    text: "True advocacy does not begin at the podium—it begins at the chamber desk with disciplined research, relentless scrutiny of the record, and unyielding fidelity to justice.",
    author: "Naman Mishra, Advocate",
  },
  clients: [
    "Private Litigants across Uttar Pradesh",
    "High Court Appellate Appellants",
    "Commercial Firms & Contractors",
    "Agrarian Landholders & Families",
    "Ayodhya & Prayagraj District Matters",
  ],
  process: [
    {
      step: 1,
      title: "Initial Consultation",
      description: "You explain the situation and share what papers you have (FIR, impugned order, notice, or deed). The chamber reviews the facts and tells you plainly whether and how it can assist.",
    },
    {
      step: 2,
      title: "Research & Strategy",
      description: "Precedents of the Allahabad High Court and the Supreme Court are examined alongside your documents. A clear legal course of action, estimated timeline, and professional fees are laid out.",
    },
    {
      step: 3,
      title: "Drafting & Filing",
      description: "Petitions, affidavits, and annexures are meticulously drafted in accordance with High Court Rules. They are vetted with you before registry filing, and you receive copies of every document.",
    },
    {
      step: 4,
      title: "Hearings & Updates",
      description: "Your matter is argued before the bench. You are informed of listing details, arguments advanced, orders passed by the Court, and immediate next steps without delay.",
    },
  ],
  // REPLACE WITH REAL, CONSENTED TESTIMONIALS ONLY - Current entries are sample illustrative feedback
  testimonials: [
    {
      quote: "Advocate Naman Mishra briefed our case with exceptional clarity before the High Court. His research in securing bail when lower court dismissed was impeccable. Honest and communicative throughout.",
      author: "A. K. S.",
      matter: "Criminal Revision & Bail",
      city: "Prayagraj",
    },
    {
      quote: "When our ancestral property faced unauthorized stay orders, the chamber's swift application under Article 227 provided the urgent relief our family desperately needed. Highly professional.",
      author: "R. P. V.",
      matter: "Civil Writ & Injunction",
      city: "Ayodhya",
    },
    {
      quote: "Navigating a complex matrimonial maintenance dispute seemed impossible until we consulted Advocate Mishra. He brought calm strategy, fair negotiations, and solid courtroom arguments.",
      author: "S. M.",
      matter: "Matrimonial Dispute",
      city: "Lucknow",
    },
  ],
};
