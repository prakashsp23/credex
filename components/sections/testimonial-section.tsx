'use client'
import { TestimonialsColumn } from "@/components/testimonials-columns";
import Section from "../section";

const testimonials = [
  {
    text: "SoftSell helped us unlock hidden value from old licenses. The process was smooth, and we were paid within a day!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Small Business Owner",
  },
  {
    text: "We offloaded dozens of unused licenses through SoftSell. Fast valuations, no back-and-forth, and excellent support.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "John Doe",
    role: "IT Procurement Lead",
  },
  {
    text: "SoftSell’s team made the entire resale process easy. Their transparency and quick payouts impressed us.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sarah Smith",
    role: "Finance Controller",
  },
  {
    text: "I didn’t even know I could resell software. SoftSell got me a great price for unused tools in just hours.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Rishabh Kumar",
    role: "Freelance Developer",
  },
  {
    text: "From quote to cash, everything was seamless. Highly recommend for teams looking to declutter software assets.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Elizabeth Johnson",
    role: "Operations Coordinator",
  },
  {
    text: "We recovered a portion of our software spend thanks to SoftSell. A must-use for IT departments.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Scarlet",
    role: "IT Manager",
  },
  {
    text: "Our marketing team had tools we no longer used. SoftSell helped turn them into extra budget instantly.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Leo Smith",
    role: "Marketing Director",
  },
  {
    text: "The platform is intuitive, the team is helpful, and the payouts are fast. Couldn't ask for more.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Startup Founder",
  },
  {
    text: "Selling old licenses was faster than expected. SoftSell is now our go-to for software offboarding.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Ryuk",
    role: "E-commerce Platform Owner",
  },
];



const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


export default function Testimonials() {
  return (
    <Section title="Testimonials" subtitle="See what our customers have to say about us." className="">

      <div className="container z-10 mx-auto">
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </Section>
  );
};

