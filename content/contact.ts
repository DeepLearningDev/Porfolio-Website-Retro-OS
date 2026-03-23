export type ContactChannel = "email" | "discord" | "github" | "linkedin";

export type ContactMethod = {
  channel: ContactChannel;
  label: string;
  value: string;
  href: string | null;
  note: string;
  preferred?: boolean;
  statusLabel: string;
  tone: "accent" | "violet" | "success" | "warning";
};

export const contactHero = {
  eyebrow: "Contact Channel",
  headline: "Direct outreach for product engineering, systems work, and interface-heavy builds.",
  summary:
    "This route is built for practical outreach. If you are hiring, evaluating fit, or discussing a concrete software problem, the goal is to make the next step obvious without turning contact into a gimmick.",
};

export const contactAvailability = {
  status: "Open to opportunities and focused freelance work.",
  responseExpectation: "Typical response window: 1 to 3 business days.",
  workingStyle:
    "The most useful first message includes role context, product or team scope, timeline, and what kind of engineering help you need.",
  timeZone: "America/New_York",
};

export const preferredChannels = [
  {
    label: "Email",
    priority: "Preferred for serious opportunities",
    description:
      "Best for detailed outreach, project context, and conversations that need a durable written thread.",
  },
  {
    label: "LinkedIn",
    priority: "Best for recruiting contact",
    description:
      "Useful for recruiter outreach, introductions, and role conversations that start from a profile review.",
  },
  {
    label: "GitHub",
    priority: "Best for portfolio and code context",
    description:
      "Use this when you want to reference repositories, implementation details, or open-source work directly.",
  },
  {
    label: "Discord",
    priority: "Best after initial fit check",
    description:
      "Good for lightweight coordination once a conversation is already active and synchronous chat is helpful.",
  },
] as const;

export const contactFormCopy = {
  title: "Send a concise inquiry",
  description:
    "Use the form to prepare a direct message. When a public email address is configured, it opens your mail client with the message details ready to send.",
  fields: {
    name: "Your name",
    email: "Email address",
    subject: "Subject",
    message: "Message",
  },
  submitLabel: "Open Email Draft",
  fallbackLabel: "Use GitHub or LinkedIn",
};

type PublicContactConfig = {
  email: string | null;
  discordUrl: string | null;
};

function getPublicContactConfig(): PublicContactConfig {
  return {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null,
    discordUrl: process.env.NEXT_PUBLIC_CONTACT_DISCORD_URL?.trim() || null,
  };
}

export function getContactMethods(): ContactMethod[] {
  const { email, discordUrl } = getPublicContactConfig();

  return [
    {
      channel: "email",
      label: "Email",
      value: email ?? "Available after initial outreach",
      href: email ? `mailto:${email}` : null,
      note: email
        ? "Best channel for detailed project conversations, hiring context, and written follow-up."
        : "Email is not published in source. Reach out through LinkedIn or GitHub first if you need a direct thread.",
      preferred: true,
      statusLabel: email ? "ready" : "request first",
      tone: "accent",
    },
    {
      channel: "discord",
      label: "Discord",
      value: discordUrl ?? "Shared for active conversations",
      href: discordUrl,
      note: discordUrl
        ? "Best for lightweight coordination once a project conversation is already moving."
        : "Discord is intentionally not posted publicly in this build.",
      statusLabel: discordUrl ? "available" : "private",
      tone: "violet",
    },
    {
      channel: "github",
      label: "GitHub",
      value: "github.com/DeepLearningDev",
      href: "https://github.com/DeepLearningDev",
      note: "Best for repository context, open-source references, and code-first conversations.",
      preferred: true,
      statusLabel: "live",
      tone: "success",
    },
    {
      channel: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/kaleb-white-95135921b",
      href: "https://www.linkedin.com/in/kaleb-white-95135921b",
      note: "Best for recruiter outreach, intros, and professional role discussions.",
      preferred: true,
      statusLabel: "live",
      tone: "warning",
    },
  ];
}
