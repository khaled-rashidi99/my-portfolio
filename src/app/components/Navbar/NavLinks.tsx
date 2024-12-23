import Link from "next/link";
interface NavLinksProps {
  href: string;
  title: string;
}
interface SocialLinksProps {
  href: string;
  icon: React.ReactNode;
  className: string;
}
export function NavLinks({ href, title }: NavLinksProps) {
  return (
    <Link
      href={href}
      className="block rounded py-2 pl-3 pr-4 text-white transition-all duration-300 hover:scale-95 hover:text-[#121212] hover:text-opacity-60 sm:text-xl md:p-0"
    >
      {title}
    </Link>
  );
}
export function SocialLinks({ href, icon, className }: SocialLinksProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon}
    </Link>
  );
}
