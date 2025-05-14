'use client'
import { useRef } from "react";
import {
   AnimatePresence,
   motion,
   useInView,
   UseInViewOptions,
   Variants,
} from "framer-motion";
type MarginType = UseInViewOptions["margin"];
interface SectionProps {
   title?: string
   subtitle?: string
   description?: string
   children?: React.ReactNode
   className?: string
   variant?: {
      hidden: { y: number };
      visible: { y: number };
   };
   yOffset?: number;
   inView?: boolean;
   inViewMargin?: MarginType;
   blur?: string;
}

export default function Section({
   title,
   subtitle,
   description,
   children,
   className,
   variant,
   yOffset = 6,
   inView = false,
   inViewMargin = "-50px",
   blur = "6px",
}: SectionProps) {
   const ref = useRef(null);
   const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
   const defaultVariants: Variants = {
      hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
      visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
   };
   const combinedVariants = variant || defaultVariants;
   return (
      <AnimatePresence>
         <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            variants={combinedVariants}
            transition={{
               delay: 0.3,
               duration: 0.8,
               ease: "easeInOut",
            }}
            className={className}
         >
            <div className="container relative mx-auto max-w-7xl px-4 py-16">
               <div className="mx-auto space-y-4 pb-6 text-center">
                  {title && (
                     <h1 className="text-muted-foreground uppercase">
                        {title}
                     </h1>
                  )}
                  {subtitle && (
                     <h2 className="mx-auto mt-4 max-w-xs font-[Montserrat] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-2  font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms]  lg:text-5xl dark:from-white dark:to-white/40 sm:max-w-none sm:text-4xl md:text-5xl">
                        {subtitle}
                     </h2>
                  )}
                  {description && (
                     <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        {description}
                     </p>
                  )}
               </div>
               {children}
            </div>
         </motion.div>
      </AnimatePresence>
   )
}