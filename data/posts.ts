export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "how-anticipatory-bail-works-high-court",
    title: "How Anticipatory Bail Works Before the Allahabad High Court",
    date: "October 14, 2026",
    readTime: "3 MIN READ",
    excerpt: "A practical guide on Section 438 CrPC / BNSS provisions, when to approach the Sessions Court first versus the High Court, and key evidentiary factors.",
    body: [
      "The grant of anticipatory bail is a safeguard of personal liberty under Article 21 of the Constitution of India. It protects individuals apprehending arrest in false, politically motivated, or over-exaggerated criminal complaints.",
      "Before the High Court of Judicature at Allahabad, applications for anticipatory bail are scrutinized through established legal parameters laid down by the Supreme Court in landmark judgments such as Sushila Aggarwal v. State (NCT of Delhi).",
      "Key factors considered by the Court include:",
      "1. Nature and gravity of the accusation and the exact role attributed to the applicant.",
      "2. The applicant's antecedents, including whether they have previously undergone imprisonment on conviction in respect of any cognizable offence.",
      "3. The possibility of the applicant fleeing from justice or tampering with prosecution evidence.",
      "4. Whether the accusations appear to have been made with the object of injuring or humiliating the applicant.",
      "As a standard procedural norm, litigants are generally expected to approach the Sessions Court first, unless extraordinary and compelling circumstances warrant invoking the concurrent jurisdiction of the High Court directly.",
      "Having an organized file containing the copy of the FIR, complaint, proof of absence from the scene of occurrence, or documentary evidence of prior enmity is critical for effective representation at the admission stage."
    ],
  },
  {
    slug: "documents-to-bring-to-your-first-legal-consultation",
    title: "Essential Documents to Bring to Your First Legal Consultation",
    date: "September 28, 2026",
    readTime: "2 MIN READ",
    excerpt: "Maximize the value of your initial chamber conference by organizing your case file systematically before meeting your counsel.",
    body: [
      "A successful legal strategy begins at the chamber conference. When meeting an advocate for the first time regarding a pending or impending dispute before the High Court or District Court, preparation determines clarity.",
      "For Criminal Matters: Bring certified or clear photocopies of the First Information Report (FIR), complaint under Section 156(3) or 200, arrest memo if any, previous bail rejection orders by the Magistrate or Sessions Judge, and case diary references if available.",
      "For Civil & Property Disputes: Maintain a chronological file with original/photocopies of title deeds, sale deeds, registered wills, revenue entries (Khatauni/Khasra), disputed notices, and any prior orders passed by civil judges or revenue authorities.",
      "For Writs & Service Appeals: The impugned governmental or administrative order, representation made to authorities, relevant service service-book extracts, or seniority lists must be arranged chronologically.",
      "Preparing a concise 1-page timeline of events (dates and key occurrences) allows counsel to swiftly identify the legal issue, limitation deadlines, and jurisdiction."
    ],
  },
  {
    slug: "what-to-do-when-an-fir-is-registered",
    title: "Immediate Steps to Take When an FIR Is Registered Against You",
    date: "September 15, 2026",
    readTime: "3 MIN READ",
    excerpt: "Crucial legal steps to protect your rights, avoid panic, and prepare for legal recourse under criminal procedural law.",
    body: [
      "Learning that an FIR has been lodged against you or your family members can trigger immense panic. However, measured legal action taken within the first 24 to 48 hours is vital to protect liberty and dignity.",
      "Step 1: Obtain a Certified or Official Copy of the FIR. The Supreme Court has mandated that FIRs be uploaded on state police portals within 24 hours of registration (except in sensitive cases). You are legally entitled to receive the copy.",
      "Step 2: Scrutinize the Sections Invoked. Identify whether the offences are bailable or non-bailable, cognizable or non-cognizable. If offences carry punishment up to 7 years, police must follow the mandatory notice procedure under Section 41A CrPC (or corresponding BNSS provisions) as reiterated in Arnesh Kumar v. State of Bihar.",
      "Step 3: Preserve Exculpatory Evidence. Do not delete call records, CCTV footage, GPS location history, digital communications, or receipts that establish your presence elsewhere (plea of alibi) or demonstrate malicious fabrication.",
      "Step 4: Engage Competent Legal Counsel Immediately. Avoid dealing directly with complainants or middlemen. An advocate will advise whether to seek anticipatory bail, contest through Section 41A representations, or petition the High Court under Section 482 / Article 226 for quashing."
    ],
  },
];
