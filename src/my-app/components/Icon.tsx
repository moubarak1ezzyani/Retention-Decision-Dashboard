interface IconProps {
  id: string;
  className?: string;
  size?: number | string;
}

export default function Icon({ id, className = "", size = 24 }: IconProps) {
  return (
    <svg 
      className={`inline-block fill-current ${className}`} 
      width={size} 
      height={size} 
      aria-hidden="true"
    >
      <use href={`#${id}`} />
    </svg>
  );
}
