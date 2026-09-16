import type { SVGProps } from 'react';
import spriteUrl from '../../images/icons/sprite.svg?url';

type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
  size?: number | string;
};

export const Icon = ({
  name,
  size = 24,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...props}
    >
      <use href={`${spriteUrl}#${name}`} />
    </svg>
  );
};