// import { Rocket } from "lucide-react";
// import { siteConfig } from "@/config/site";
// import { Link } from "@/i18n/routing";
// import { cn } from "@/lib/utils";

// interface LogoProps {
//   size?: "sm" | "md" | "lg";
//   className?: string;
//   textClassName?: string;
//   showText?: boolean;
// }

// export function Logo({
//   size = "md",
//   className,
//   textClassName,
//   showText = true,
// }: LogoProps) {
//   const sizes = {
//     sm: {
//       container: "h-8 w-8",
//       icon: "h-4 w-4",
//       text: "text-xl",
//     },
//     md: {
//       container: "h-10 w-10",
//       icon: "h-6 w-6",
//       text: "text-2xl",
//     },
//     lg: {
//       container: "h-12 w-12",
//       icon: "h-7 w-7",
//       text: "text-3xl",
//     },
//   };

//   const currentSize = sizes[size];

//   return (
//     <Link href="/" className={cn("group flex items-center gap-2", className)}>
//       <div
//         className={cn(
//           "flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-orange-500",
//           currentSize.container,
//         )}
//       >
//         <Rocket className={cn("text-white", currentSize.icon)} />
//       </div>
//       {showText && (
//         <span
//           className={cn(
//             "font-bold text-foreground transition-colors group-hover:text-primary",
//             currentSize.text,
//             textClassName,
//           )}
//         >
//           {siteConfig.name}
//         </span>
//       )}
//     </Link>
//   );
// }
