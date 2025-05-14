import { cn } from "@/lib/utils";
import {
  IconClock,
  IconCreditCard,
  IconHeadset,
  IconUsers,
  IconListNumbers,
  IconReceipt,
  IconShieldCheck,
  IconLayersDifference,
} from "@tabler/icons-react";
import Section from "./section";

export function FeaturesSection() {
  const features = [
    {
      title: "Instant Valuations",
      description: "Get real-time quotes for your software licenses instantly.",
      icon: <IconClock />,
    },
    {
      title: "Fast Payouts",
      description: "Receive your payment within 24–48 hours. No delays.",
      icon: <IconCreditCard />,
    },
    {
      title: "Secure Transactions",
      description: "Encrypted, compliant, and safe license reselling.",
      icon: <IconShieldCheck />,
    },
    {
      title: "No Hidden Fees",
      description: "What you see is what you get. 100% transparent pricing.",
      icon: <IconReceipt />,
    },
    {
      title: "Simple Process",
      description: "Upload. Review. Get paid. It's that easy.",
      icon: <IconListNumbers />,
    },
    {
      title: "Dedicated Support",
      description: "Our support team is always ready to help you out.",
      icon: <IconHeadset />,
    },
    {
      title: "Bulk Selling Made Easy",
      description: "Easily offload multiple licenses in one go.",
      icon: <IconLayersDifference />,
    },
    {
      title: "Trusted by Professionals",
      description: "Used by IT teams, startups, and freelancers alike.",
      icon: <IconUsers />,
    },
  ];

  return (
    <Section title="Features" subtitle="Simple. Secure. Trusted by thousands.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </Section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
