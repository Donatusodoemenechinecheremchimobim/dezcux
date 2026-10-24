export const PRACTICE_INFO = {
  name: "Golden Mind Psychiatry PLLC",
  shortName: "Golden Mind Psychiatry",
  tagline: "Your Path to Emotional Well-Being Starts Here",
  email: "info@goldenmindpsychiatry.org",
  phone: "(432) 934-3185",
  fax: "(682) 235-1127",
  hours: "Monday – Friday: 9:00 AM – 5:00 PM",
  locations: [
    {
      title: "Primary Sanctuary Clinic",
      address: "1010 N Belt Line Road, Suite 102 A, Mesquite, TX 75149",
      type: "In-Person & Telehealth"
    },
    {
      title: "Fort Worth Office",
      address: "6801 McCart Ave, #109, Fort Worth, TX 76133",
      type: "Telehealth Only"
    },
    {
      title: "Albuquerque Office",
      address: "1438 Girard Blvd NE, Albuquerque, NM 87106",
      type: "Telehealth Only"
    }
  ],
  // Replace with "/images/provider.jpg" once you place your photo in public/images/
  heroImage: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=85",
  aboutImage: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=85",
  aboutParagraph1:
    "Golden Mind Psychiatry PLLC is a compassionate mental health provider dedicated to supporting individuals on their journey to emotional well-being. We believe that quality psychiatric care should be accessible, personalized, and delivered with genuine compassion. Our mission is to help our patients achieve mental health stability and improved quality of life through evidence-based treatment approaches and a commitment to understanding each individual’s unique needs.",
  aboutParagraph2:
    "We offer comprehensive mental health services including psychiatric evaluations, medication management, and specialized treatments for a wide range of conditions. Whether you’re struggling with ADHD, anxiety, depression, mood disorders, PTSD, or bipolar disorder, our experienced team is here to provide expert care. With the convenience of telehealth options, we make it easier for you to access the mental health support you deserve, whenever and wherever you need it."
};

export const SERVICES_DATA = [
  {
    id: "psych-eval",
    number: "Service 01",
    shortTitle: "Psychiatric Evaluations",
    title: "Psychiatric Evaluation Services",
    subtitle: "Comprehensive Psychiatric Evaluations",
    iconName: "ClipboardCheck",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Complete mental health assessments to evaluate emotional, behavioral, cognitive, and psychiatric concerns. A thorough evaluation is the foundation of effective, personalized care.",
    longDescription:
      "At Golden Mind Psychiatry PLLC, our initial diagnostic evaluation is an unhurried, deeply collaborative conversation. Rather than rushing through a checklist, we explore your biological health, personal history, lifestyle stressors, and previous treatment experiences to craft a clear, accurate clinical roadmap.",
    col1Title: "Includes",
    col1Items: [
      "Comprehensive diagnostic assessment",
      "Mental health & medical history review",
      "Past medication & efficacy review",
      "Collaborative treatment planning",
      "Personalized clinical recommendations"
    ],
    col2Title: "Available For",
    col2Items: [
      "Children (Ages 6+)",
      "Adolescents & Teens",
      "Adults",
      "Older Adults & Seniors"
    ],
    ctaText: "Schedule an Evaluation",
    timeline: [
      { step: "01", title: "Digital Pre-Intake", desc: "Complete secure history questionnaires from home prior to your session." },
      { step: "02", title: "60-Minute Clinical Interview", desc: "In-depth exploration of symptoms, stressors, sleep, and medical history." },
      { step: "03", title: "Diagnostic Clarity", desc: "Transparent discussion of clinical impressions and differential diagnosis." },
      { step: "04", title: "Tailored Care Plan", desc: "Joint decision on medication, integrative lifestyle steps, and therapy referrals." }
    ],
    selfCheckQuestions: [
      "Have you been experiencing emotional, focus, or mood shifts that interfere with daily life?",
      "Are you unsure whether your current diagnosis or treatment plan truly fits what you're feeling?",
      "Would you value a thorough, compassionate second opinion before starting or changing medication?"
    ],
    faqs: [
      {
        q: "How long does an initial psychiatric evaluation take?",
        a: "Initial evaluations typically last 60 minutes, allowing ample time to review your history, answer questions, and design an individualized treatment plan."
      },
      {
        q: "Will I receive a prescription during my very first evaluation?",
        a: "If clinically indicated and agreed upon together, prescriptions can be sent electronically to your preferred pharmacy at the end of your first visit."
      }
    ]
  },
  {
    id: "medication",
    number: "Service 02",
    shortTitle: "Medication Management",
    title: "Medication Management Services",
    subtitle: "Psychiatric Medication Management",
    iconName: "Pill",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    description:
      "Ongoing medication evaluation and monitoring to improve emotional and mental health stability. We take time to understand your full history before any prescription decision is made, ensuring safe and effective treatment.",
    longDescription:
      "Thoughtful pharmacology requires ongoing partnership. We believe in using the lowest effective dose, minimizing unwanted side effects, and educating you on how each option works so you always feel empowered in your care.",
    col1Title: "Includes",
    col1Items: [
      "Careful dosage titration & adjustments",
      "Proactive side-effect monitoring",
      "Structured symptom tracking",
      "Patient education & pharmacology guidance",
      "Collaborative long-term planning"
    ],
    col2Title: "Conditions Treated",
    col2Items: [
      "Anxiety & Depression",
      "ADHD & Executive Dysfunction",
      "Bipolar Disorder",
      "PTSD & OCD",
      "Mood Disorders & Insomnia",
      "Panic Disorder"
    ],
    ctaText: "Schedule Medication Consult",
    timeline: [
      { step: "01", title: "Baseline Review", desc: "Assess current medications, supplements, lab work, and past sensitivities." },
      { step: "02", title: "Evidence-Based Selection", desc: "Review medication options, benefits, and potential side effects together." },
      { step: "03", title: "30-Day Follow-Up", desc: "Close monitoring during early titration to fine-tune dosing safely." },
      { step: "04", title: "Maintenance & Stability", desc: "Convenient quarterly or bi-monthly check-ins once stability is achieved." }
    ],
    selfCheckQuestions: [
      "Are you currently taking psychiatric medication that feels only partially effective or causes side effects?",
      "Have you been considering medication for anxiety, depression, or focus, but want a conservative, guided approach?",
      "Do you want a provider who coordinates medication with sleep, nutrition, and therapy?"
    ],
    faqs: [
      {
        q: "How often are medication management follow-up visits?",
        a: "When starting or adjusting a medication, we typically meet every 2 to 4 weeks. Once your symptoms are stable, visits move to every 1 to 3 months."
      },
      {
        q: "Do you offer genetic testing (pharmacogenomics) for medications?",
        a: "Yes, when helpful, we can utilize pharmacogenetic testing to see how your body metabolizes specific classes of psychiatric medications."
      }
    ]
  },
  {
    id: "adhd",
    number: "Service 03",
    shortTitle: "ADHD",
    title: "ADHD Services",
    subtitle: "ADHD Evaluations & Treatment",
    iconName: "Brain",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    description:
      "Expert ADHD care for children, teens, and adults — from comprehensive evaluation and accurate diagnosis to personalized treatment that fits your life, school, and work needs.",
    longDescription:
      "ADHD looks different at every stage of life—from classroom restlessness in childhood to chronic overwhelm, time blindness, and burnout in adulthood. Our evaluations look at executive functioning as a whole and pair stimulant or non-stimulant options with practical cognitive scaffolding.",
    col1Title: "Services Include",
    col1Items: [
      "Comprehensive adult ADHD evaluations",
      "Pediatric & teen ADHD assessments",
      "School & workplace accommodation support",
      "Stimulant & non-stimulant management",
      "Focus & executive functioning strategies"
    ],
    col2Title: "Symptoms Addressed",
    col2Items: [
      "Inattention & distractibility",
      "Poor concentration & task paralysis",
      "Chronic disorganization",
      "Hyperactivity & impulsivity",
      "Executive dysfunction & overwhelm"
    ],
    ctaText: "Schedule ADHD Evaluation",
    timeline: [
      { step: "01", title: "Validated Rating Scales", desc: "Standardized executive function and attention screening prior to your visit." },
      { step: "02", title: "Developmental & Clinical History", desc: "Rule out overlapping conditions like anxiety, sleep apnea, or thyroid shifts." },
      { step: "03", title: "Personalized Regimen", desc: "Tailored stimulant, non-stimulant, or behavioral executive function plan." },
      { step: "04", title: "Ongoing Optimization", desc: "Fine-tune coverage for school, career demands, and daily routines." }
    ],
    selfCheckQuestions: [
      "Do you frequently struggle to start or finish tasks even when they are important to you?",
      "Do you experience 'time blindness,' chronic overwhelm, or difficulty organizing daily priorities?",
      "Have focus challenges impacted your academic performance, career growth, or relationships?"
    ],
    faqs: [
      {
        q: "Can adults be diagnosed with ADHD for the first time?",
        a: "Absolutely. Many high-achieving adults compensated for years until career or family demands exceeded their coping bandwidth."
      },
      {
        q: "Do you prescribe both stimulant and non-stimulant options?",
        a: "Yes. We tailor treatment based on your medical profile, anxiety levels, cardiovascular health, and personal preferences."
      }
    ]
  },
  {
    id: "womens-health",
    number: "Service 04",
    shortTitle: "Women's Mental Health",
    title: "Women's Mental Health",
    subtitle: "Women's Emotional Wellness Program",
    iconName: "Heart",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1000&q=80",
    description:
      "Specialized psychiatric care for women navigating emotional, hormonal, and life transitions. We understand the unique mental health challenges women face at every stage of life and provide compassionate, evidence-based support.",
    longDescription:
      "Hormonal fluctuations across the reproductive lifespan deeply influence neurotransmitters. Whether you are planning a pregnancy, navigating postpartum anxiety or depression, managing PMDD, or transitioning through perimenopause, we provide judgment-free, specialized care.",
    col1Title: "Services Include",
    col1Items: [
      "Postpartum depression & anxiety treatment",
      "Pregnancy-safe medication planning",
      "Perinatal mood & anxiety support",
      "PMDD (Premenstrual Dysphoric Disorder) care",
      "Perimenopause & menopause mood support",
      "Caregiver stress & burnout recovery"
    ],
    col2Title: "Life Stages Supported",
    col2Items: [
      "Preconception & family planning",
      "Pregnancy & postpartum fourth trimester",
      "Cyclic luteal-phase mood shifts",
      "Perimenopausal transition",
      "High-stress career & family balance"
    ],
    ctaText: "Book Women's Wellness Visit",
    timeline: [
      { step: "01", title: "Cycle & Transition Mapping", desc: "Correlate emotional symptoms with hormonal, reproductive, and life milestones." },
      { step: "02", title: "Risk-Benefit Consultation", desc: "Evidence-based safety review for pregnancy, lactation, or hormone transitions." },
      { step: "03", title: "Integrated Treatment", desc: "Targeted medication, sleep preservation, and nutritional supplementation." },
      { step: "04", title: "Coordinated OB/GYN Care", desc: "Seamless collaboration with your obstetrician, midwife, or primary provider." }
    ],
    selfCheckQuestions: [
      "Do your mood, irritability, or anxiety levels shift predictably before your menstrual cycle?",
      "Are you pregnant, postpartum, or planning pregnancy and want safe mental health guidance?",
      "Have perimenopausal changes affected your sleep quality, cognitive clarity, or emotional resilience?"
    ],
    faqs: [
      {
        q: "Is it safe to take psychiatric medication while pregnant or breastfeeding?",
        a: "Many medications have extensive safety data during pregnancy and lactation. We walk you through current clinical evidence so you can make an informed decision."
      }
    ]
  },
  {
    id: "child-psych",
    number: "Service 05",
    shortTitle: "Child & Adolescent",
    title: "Child & Adolescent Psychiatry",
    subtitle: "Youth Mental Health Services",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
    description:
      "Compassionate psychiatric care designed specifically for children and teens. We create a safe, supportive environment where young people can receive expert mental health support while parents remain actively involved in the care journey.",
    longDescription:
      "Early intervention can transform a young person's academic and emotional trajectory. We partner closely with parents, pediatricians, and school counselors—always prioritizing conservative, age-appropriate interventions that help kids and teens thrive.",
    col1Title: "Concerns Treated",
    col1Items: [
      "Pediatric ADHD & focus difficulties",
      "Childhood & teen anxiety",
      "Adolescent depression & withdrawal",
      "Behavioral & impulse concerns",
      "School-related stress & social anxiety",
      "Emotional regulation difficulties"
    ],
    col2Title: "Parent Support Includes",
    col2Items: [
      "Parent behavioral guidance",
      "504 Plan & IEP school documentation",
      "Clear medication education",
      "Family communication strategies"
    ],
    ctaText: "Schedule Youth Consultation",
    timeline: [
      { step: "01", title: "Parent & Teacher Input", desc: "Gather multi-setting perspectives from home and school environments." },
      { step: "02", title: "Youth-Friendly Evaluation", desc: "Warm, age-appropriate conversation where your child feels heard and safe." },
      { step: "03", title: "Family Care Conference", desc: "Review findings together and discuss conservative behavioral and medical options." },
      { step: "04", title: "Growth & School Monitoring", desc: "Track academic progress, emotional growth, and developmental milestones." }
    ],
    selfCheckQuestions: [
      "Has your child or teen shown persistent changes in sleep, grades, friendships, or irritability?",
      "Have teachers mentioned focus, restlessness, or emotional overwhelm in the classroom?",
      "Are you looking for a provider who includes parents as active partners in every decision?"
    ],
    faqs: [
      {
        q: "Are parents present during child and adolescent psychiatric visits?",
        a: "Yes. Parents or legal guardians are integral to the evaluation. For older teens, we also offer brief one-on-one time so they can speak openly."
      }
    ]
  },
  {
    id: "anxiety",
    number: "Service 06",
    shortTitle: "Anxiety & Stress",
    title: "Anxiety & Stress Disorders",
    subtitle: "Calming the Overactive Nervous System",
    iconName: "Wind",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    description:
      "Targeted treatment for chronic worry, panic attacks, social anxiety, and OCD. We help quiet racing thoughts and physical tension so you can reclaim calm, restful sleep, and confidence in daily life.",
    longDescription:
      "When your nervous system is stuck in fight-or-flight, even small daily decisions can feel exhausting. We combine non-habit-forming pharmacological support with practical somatic and cognitive tools to restore a steady baseline of calm.",
    col1Title: "Treatment Includes",
    col1Items: [
      "Comprehensive anxiety & panic evaluation",
      "Non-habit-forming medication management",
      "Acute panic & nervous system regulation",
      "Sleep restoration protocols",
      "CBT-informed coping strategies"
    ],
    col2Title: "Conditions Treated",
    col2Items: [
      "Generalized Anxiety Disorder (GAD)",
      "Panic Disorder & Panic Attacks",
      "Social Anxiety Disorder",
      "Obsessive-Compulsive Disorder (OCD)",
      "High-functioning burnout & chronic stress"
    ],
    ctaText: "Start Anxiety Treatment",
    timeline: [
      { step: "01", title: "Trigger & Somatic Mapping", desc: "Identify physical symptoms (racing heart, insomnia, GI tension) and triggers." },
      { step: "02", title: "Immediate Relief Tools", desc: "Introduce evidence-based physiological regulation and sleep support." },
      { step: "03", title: "Long-Term Stabilization", desc: "Careful titration of first-line anxiety or OCD medications when appropriate." },
      { step: "04", title: "Resilience Building", desc: "Maintain calm through life transitions without emotional blunting." }
    ],
    selfCheckQuestions: [
      "Do racing thoughts or 'what-if' scenarios make it difficult to relax or fall asleep at night?",
      "Do you experience physical tension, chest tightness, restlessness, or sudden panic episodes?",
      "Has avoidance of social or professional situations begun shrinking your daily routine?"
    ],
    faqs: [
      {
        q: "Will anxiety medication make me feel emotionally numb or drowsy?",
        a: "Our goal is never emotional blunting. You should still feel like yourself—just without the constant background alarm of chronic anxiety."
      }
    ]
  },
  {
    id: "depression",
    number: "Service 07",
    shortTitle: "Depression",
    title: "Depression & Mood Disorder Care",
    subtitle: "Compassionate Treatment for Lasting Relief",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80",
    description:
      "Evidence-based psychiatric care for individuals experiencing persistent sadness, emotional exhaustion, loss of motivation, or mood instability. We look beyond surface symptoms to restore vitality, clarity, and daily fulfillment.",
    longDescription:
      "Depression is more than feeling sad—it can manifest as heavy physical fatigue, brain fog, numbness, or irritability. At Golden Mind Psychiatry PLLC, we evaluate biological contributors, circadian rhythms, and life stressors to build a comprehensive recovery plan.",
    col1Title: "Treatment Approach",
    col1Items: [
      "In-depth mood & bipolar spectrum evaluation",
      "Targeted antidepressant & mood stabilization",
      "Treatment-resistant depression strategies",
      "Biological & nutritional factor review",
      "Supportive therapeutic guidance"
    ],
    col2Title: "Conditions Addressed",
    col2Items: [
      "Major Depressive Disorder (MDD)",
      "Persistent Depressive Disorder (Dysthymia)",
      "Bipolar I & Bipolar II Disorders",
      "Seasonal Affective Disorder (SAD)",
      "Anhedonia & emotional exhaustion"
    ],
    ctaText: "Begin Depression Care",
    timeline: [
      { step: "01", title: "Differential Mood Assessment", desc: "Distinguish unipolar depression from bipolar spectrum or medical fatigue." },
      { step: "02", title: "Personalized Pharmacology", desc: "Select medications tailored to your energy, sleep, and cognitive profile." },
      { step: "03", title: "Behavioral Activation", desc: "Gentle, realistic steps to rebuild momentum, circadian rhythm, and joy." },
      { step: "04", title: "Relapse Prevention", desc: "Long-term wellness planning to protect your emotional stability." }
    ],
    selfCheckQuestions: [
      "Have you lost interest or pleasure in hobbies, relationships, or goals you once cared about?",
      "Are you experiencing persistent low energy, heavy fatigue, or changes in sleep and appetite?",
      "Do you feel weighed down by brain fog, guilt, or a sense of going through the motions?"
    ],
    faqs: [
      {
        q: "How soon do depression treatments start working?",
        a: "Sleep and appetite often improve within the first 1–2 weeks, while full mood elevation typically builds over 4–6 weeks. We support you closely throughout that window."
      }
    ]
  },
  {
    id: "trauma",
    number: "Service 08",
    shortTitle: "Trauma & PTSD",
    title: "Trauma & PTSD Recovery",
    subtitle: "Trauma-Informed Psychiatric Care",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Safe, trauma-informed psychiatric treatment for survivors of acute trauma, complex PTSD, and prolonged stress. Every session prioritizes your sense of safety, autonomy, and pacing.",
    longDescription:
      "Unresolved trauma keeps the brain's threat-detection center on high alert, leading to hypervigilance, nightmares, emotional numbness, or sudden reactivity. You never have to recount painful details before you are ready; we focus on stabilizing your nervous system and sleep first.",
    col1Title: "Care Includes",
    col1Items: [
      "Paced, trauma-informed evaluations",
      "Nightmare & sleep-disturbance relief",
      "Hypervigilance & startle stabilization",
      "Grounding & nervous system regulation",
      "Coordination with EMDR / trauma therapists"
    ],
    col2Title: "Symptoms Supported",
    col2Items: [
      "Post-Traumatic Stress Disorder (PTSD)",
      "Complex PTSD (C-PTSD)",
      "Intrusive memories & flashbacks",
      "Trauma-related insomnia & nightmares",
      "Emotional detachment & hyperarousal"
    ],
    ctaText: "Schedule Trauma-Informed Consult",
    timeline: [
      { step: "01", title: "Safety & Autonomy First", desc: "You control the pace—no forced retelling of traumatic events." },
      { step: "02", title: "Sleep & Nervous System Relief", desc: "Address nightmares, nocturnal panic, and hyperarousal early." },
      { step: "03", title: "Coordinated Therapy Support", desc: "Provide neurochemical stability so trauma therapy (like EMDR) is easier to tolerate." },
      { step: "04", title: "Post-Traumatic Growth", desc: "Reclaim agency, restful sleep, and safe connection with others." }
    ],
    selfCheckQuestions: [
      "Do past overwhelming experiences still affect your sleep, nightmares, or sense of safety today?",
      "Do you often feel constantly 'on guard,' easily startled, or emotionally disconnected?",
      "Would you benefit from calming physiological reactivity while working through trauma?"
    ],
    faqs: [
      {
        q: "Do I have to describe my trauma in detail during the first appointment?",
        a: "No. Trauma-informed care means you are always in control. We only need to understand how your symptoms affect you today to begin helping."
      }
    ]
  },
  {
    id: "telehealth",
    number: "Service 09",
    shortTitle: "Telepsychiatry",
    title: "Telepsychiatry Services",
    subtitle: "Convenient, HIPAA-Compliant Virtual Care",
    iconName: "Video",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1000&q=80",
    description:
      "With the convenience of telehealth options, we make it easier for you to access the mental health support you deserve, whenever and wherever you need it—from the privacy of home or office.",
    longDescription:
      "Skip traffic, waiting rooms, and scheduling barriers. Our encrypted, HIPAA-compliant video platform delivers the exact same clinical depth, warmth, and electronic prescribing capabilities as an in-person sanctuary visit.",
    col1Title: "Telehealth Features",
    col1Items: [
      "100% HIPAA-compliant HD video visits",
      "One-click browser access (no downloads needed)",
      "Direct e-prescribing to your local pharmacy",
      "Flexible morning & lunchtime scheduling",
      "Seamless digital intake & messaging portal"
    ],
    col2Title: "Ideal For",
    col2Items: [
      "Busy professionals & remote workers",
      "Parents & caregivers at home",
      "University & college students",
      "Patients in rural or underserved areas",
      "Anyone preferring private care from home"
    ],
    ctaText: "Book a Telehealth Visit",
    timeline: [
      { step: "01", title: "Select Virtual Slot", desc: "Choose a convenient appointment time online or with our care team." },
      { step: "02", title: "Digital Onboarding", desc: "Sign consent forms and complete intake securely on your phone or laptop." },
      { step: "03", title: "One-Click Video Link", desc: "Join your private virtual consultation room right from your email/SMS reminder." },
      { step: "04", title: "Instant Pharmacy Dispatch", desc: "Prescriptions and follow-up summaries are sent immediately after your call." }
    ],
    selfCheckQuestions: [
      "Does commuting or taking half a day off work keep you from prioritizing mental health care?",
      "Do you feel more relaxed opening up from the comfort and privacy of your own home?",
      "Do you have a smartphone, tablet, or computer with a stable internet connection?"
    ],
    faqs: [
      {
        q: "Are telehealth appointments covered by insurance the same as in-person visits?",
        a: "Yes, most major commercial insurance plans cover telepsychiatry evaluations and medication follow-ups at the same rate as in-office visits."
      }
    ]
  },
  {
    id: "holistic",
    number: "Service 10",
    shortTitle: "Holistic & Integrative",
    title: "Holistic & Integrative Psychiatry",
    subtitle: "Whole-Person Mind-Body Wellness",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80",
    description:
      "Mental health is deeply interconnected with physical health, sleep, nutrition, and environment. We combine conventional psychiatry with evidence-based integrative protocols to address root causes.",
    longDescription:
      "True emotional well-being isn't achieved by looking at neurotransmitters in isolation. We evaluate vitamin deficiencies (B12, Vitamin D, Iron/Ferritin), thyroid function, gut-brain inflammation, circadian alignment, and evidence-graded nutraceuticals alongside traditional care.",
    col1Title: "Integrative Pillars",
    col1Items: [
      "Functional lab & biomarker review",
      "Evidence-graded nutraceutical guidance",
      "Circadian rhythm & sleep architecture",
      "Gut-brain & nutritional psychiatry",
      "Mind-body stress resilience protocols"
    ],
    col2Title: "Root Factors Explored",
    col2Items: [
      "Vitamin D, B12, Folate & Ferritin levels",
      "Thyroid & metabolic mood contributors",
      "Chronic inflammation & fatigue",
      "Cortisol dysregulation & burnout",
      "Safe supplement-medication interactions"
    ],
    ctaText: "Explore Integrative Care",
    timeline: [
      { step: "01", title: "Whole-Person Audit", desc: "Review sleep, nutrition, movement, stressors, and psychiatric symptoms together." },
      { step: "02", title: "Targeted Lab Work", desc: "Order or review key biomarkers that mimic or worsen anxiety and depression." },
      { step: "03", title: "Synergistic Protocol", desc: "Blend pharmaceutical precision with clinical-grade supplements and lifestyle habits." },
      { step: "04", title: "Sustainable Vitality", desc: "Build long-term metabolic and emotional resilience." }
    ],
    selfCheckQuestions: [
      "Do you want to understand the biological and nutritional root causes behind your mood or fatigue?",
      "Are you taking supplements and want to know which ones actually have clinical evidence?",
      "Do you prefer a balanced approach that blends modern medicine with lifestyle optimization?"
    ],
    faqs: [
      {
        q: "Does holistic psychiatry mean you don't prescribe traditional medications?",
        a: "Not at all! Integrative psychiatry bridges the best of both worlds—using conventional prescriptions when needed while optimizing sleep, nutrients, and lifestyle."
      }
    ]
  }
];

export const INSURANCE_PLANS = [
  { name: "Aetna", status: "In-Network", type: "Commercial / PPO / HMO" },
  { name: "BlueCross BlueShield (BCBS)", status: "In-Network", type: "PPO / BlueChoice" },
  { name: "Cigna / Evernorth", status: "In-Network", type: "Behavioral Health" },
  { name: "UnitedHealthcare / Optum", status: "In-Network", type: "Commercial Plans" },
  { name: "Humana", status: "In-Network", type: "Select Behavioral Plans" },
  { name: "Medicare", status: "In-Network", type: "Part B & Select Advantage" },
  { name: "Oscar Health", status: "In-Network", type: "Optum Network" },
  { name: "Ambetter", status: "Verify Plan", type: "Marketplace Plans" }
];

export const BLOG_POSTS = [
  {
    id: "understanding-high-functioning-anxiety",
    category: "Anxiety & Stress",
    readTime: "5 min read",
    date: "May 2026",
    title: "Understanding High-Functioning Anxiety: When Success Masks Exhaustion",
    excerpt:
      "Many driven individuals appear calm and accomplished on the outside while battling relentless internal pressure, insomnia, and nervous system fatigue.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    content: [
      "On paper, everything looks great: deadlines are met, others rely on you, and your calendar is organized. Yet beneath the surface, high-functioning anxiety often feels like running a marathon on a treadmill that never powers down.",
      "Common signs include difficulty falling asleep because your brain is rehearsing tomorrow's conversations, physical muscle tension in the jaw or shoulders, an inability to enjoy downtime without guilt, and an intense fear of letting others down.",
      "At Golden Mind Psychiatry PLLC, we help patients untangle achievement from nervous system hyperarousal—combining gentle, non-sedating medical support where helpful with practical boundaries and physiological regulation."
    ]
  },
  {
    id: "adult-adhd-executive-function",
    category: "ADHD Care",
    readTime: "6 min read",
    date: "April 2026",
    title: "Why Adult ADHD Often Looks Like Burnout or Chronic Overwhelm",
    excerpt:
      "In adulthood, hyperactivity often turns inward—manifesting as racing thoughts, task paralysis, and emotional exhaustion after years of overcompensating.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80",
    content: [
      "Many adults go decades without an ADHD diagnosis because they performed well in structured school environments. However, when career, parenting, and household logistics multiply, executive functioning bandwidth can hit a wall.",
      "Task paralysis isn't laziness—it's a neurobiological bottleneck in dopamine signaling and working memory prioritization. When everything feels equally urgent, the brain freezes.",
      "A comprehensive evaluation looks at your entire history, rules out overlapping mood or thyroid factors, and creates a tailored plan using stimulant or non-stimulant options alongside executive scaffolding."
    ]
  },
  {
    id: "Depression-mind-body-connection",
    category: "Depression & Mood",
    readTime: "5 min read",
    date: "March 2026",
    title: "Beyond Sadness: Recognizing the Physical & Cognitive Signs of Depression",
    excerpt:
      "Depression frequently shows up first in the body—through unrefreshing sleep, heavy limbs, brain fog, and a muted sense of joy.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    content: [
      "Many patients delay seeking psychiatric support because they don't feel 'sad enough.' In clinical practice, depression just as often presents as anhedonia (feeling flat or disconnected), slowed concentration, morning exhaustion, or heightened irritability.",
      "Because mental and physical health are deeply intertwined, effective depression care requires looking at neurotransmitter balance, sleep architecture, vitamin levels, and daily stress load together.",
      "With personalized medication management and compassionate follow-up, lasting emotional vitality and clarity are deeply achievable."
    ]
  }
];