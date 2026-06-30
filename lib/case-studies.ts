export type CaseStudy = {
  slug: string;
  label: string;
  title: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  image?: string;
  featured?: boolean;
  challenge: string[];
  process: {
    phase: string;
    description: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'lmt-customer-portal',
    label: 'Flagship build',
    title: 'Laser Marking Technologies Customer Portal',
    industry: 'Industrial Laser Equipment Manufacturer',
    summary:
      'A Flutter customer portal, Node.js/Supabase backend, AI support platform, and admin panel for industrial equipment customers.',
    problem:
      'Customer relationships, sample status, machine support, and training resources needed a single source of truth that could scale beyond manual updates.',
    solution:
      'Pixelate Solutions is building a mobile portal, admin system, predictive maintenance telemetry, AI-powered support, and remote AutoAlign AI training access.',
    outcomes: [
      'Outcome metrics are [PLACEHOLDER - fill in after launch and IMTS 2026].',
      'Designed to replace manual customer-status follow-up with self-serve production and service visibility.',
      'Preparing for live demonstration at IMTS 2026.',
    ],
    stack: ['Flutter', 'Node.js', 'Supabase', 'AI Support', 'Admin Panel'],
    featured: true,
    challenge: [
      'Laser Marking Technologies needed a more connected customer experience for equipment owners, service teams, and internal administrators. The software needed to support production visibility, technical support, maintenance data, and customer training without forcing the team into another disconnected tool.',
      'The platform also needed to be demo-ready for IMTS 2026, which made phased delivery, clear scope, and dependable architecture more important than a generic app build.',
    ],
    process: [
      {
        phase: 'V1 Customer Portal',
        description:
          'Establish the mobile portal foundation, customer accounts, production visibility, service history, and core backend data model.',
      },
      {
        phase: 'V2 AI Support Platform',
        description:
          'Train support flows on documentation and FAQs so Tier 1 questions can be handled around the clock with escalation paths for the LMT team.',
      },
      {
        phase: 'V3 Telemetry and Training',
        description:
          'Surface predictive maintenance signals and remote training access for AutoAlign AI in a clean customer-facing experience.',
      },
    ],
  },
  {
    slug: 'paid-client-placeholder-1',
    label: 'Paid client work',
    title: '[PLACEHOLDER] Business Workflow Project',
    industry: '[PLACEHOLDER] Industry',
    summary:
      '[PLACEHOLDER] Add a one-line summary of a real paid client project once Joey confirms the details.',
    problem:
      '[PLACEHOLDER] Describe the manual process, outdated system, or customer visibility gap this project solved.',
    solution:
      '[PLACEHOLDER] Describe the specific mobile app, portal, AI workflow, integration, or internal tool that was built.',
    outcomes: [
      '[PLACEHOLDER] Add one real qualitative or quantitative outcome.',
      '[PLACEHOLDER] Add another credible outcome from the delivered work.',
    ],
    stack: ['[PLACEHOLDER] Stack'],
    challenge: [
      '[PLACEHOLDER] Add 2-3 paragraphs describing the operational challenge from a real paid project.',
    ],
    process: [
      {
        phase: '[PLACEHOLDER] Phase',
        description: '[PLACEHOLDER] Add the delivery phase or milestone.',
      },
    ],
  },
  {
    slug: 'metriqs',
    label: 'Our product',
    title: 'MetrIQs',
    industry: 'Pixelate-owned Product',
    summary:
      'An internal Pixelate product for turning scattered business data into cleaner reporting workflows.',
    problem:
      'Teams often have reporting scattered across tools, exports, and manual updates.',
    solution:
      'Pixelate built MetrIQs as its own product concept for unified dashboards and clearer KPI visibility.',
    outcomes: [
      'Clearly labeled as an owned product, not a client case study.',
      '[PLACEHOLDER] Add real product screenshots, usage notes, or launch status before publishing.',
    ],
    stack: ['Next.js', 'React', 'Analytics', '[PLACEHOLDER] Backend'],
    image: '/Websites/1.png',
    challenge: [
      'MetrIQs is included as an owned Pixelate product rather than a paid client engagement. It should only stay on the site if it helps demonstrate relevant product judgment for business software buyers.',
      '[PLACEHOLDER] Add the real product status, target buyer, and any non-fabricated proof before publishing.',
    ],
    process: [
      {
        phase: 'Product exploration',
        description:
          '[PLACEHOLDER] Add the actual product timeline, current status, and next planned milestone.',
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
