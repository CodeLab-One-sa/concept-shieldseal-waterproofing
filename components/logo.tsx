import Image from "next/image";

/**
 * Full ShieldSeal logo — actual client-supplied PNG, white background removed.
 * The tight crop is 1057×287px (3.68:1 aspect ratio).
 */
export default function Logo({ height = 38, className = "" }: { height?: number; className?: string }) {
  const width = Math.round(height * 3.68);
  return (
    <Image
      src="/logo-tight.png"
      alt="ShieldSeal Waterproofing"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}

/**
 * Shield mark only — just the icon portion (301×287px, ~1.05:1 ratio).
 * Used in the hero and as a decorative element.
 */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={Math.round(size * 0.954)}
      className={className}
    />
  );
}
