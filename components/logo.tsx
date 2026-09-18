import Image from "next/image";

// logo-tight.png: 1058×288px (3.674:1) : full logo, transparent bg
// logo-mark.png:  229×288px  (0.795:1) : shield mark only, transparent bg

export default function Logo({ height = 38, className = "" }: { height?: number; className?: string }) {
  return (
    <Image
      src="/logo-tight.png"
      alt="ShieldSeal Waterproofing"
      width={Math.round(height * 3.674)}
      height={height}
      className={className}
      priority
    />
  );
}

export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      width={Math.round(size * 0.795)}
      height={size}
      className={className}
    />
  );
}
