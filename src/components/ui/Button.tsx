import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>;

const variants = {
  primary:
    'border border-accent-gold/70 bg-accent-gold text-coal shadow-[0_14px_30px_rgba(133,91,17,0.18)] hover:-translate-y-0.5 hover:border-[#e7bd59] hover:bg-[#d7a33a] hover:shadow-[0_18px_38px_rgba(133,91,17,0.22)]',
  secondary:
    'border border-mist/14 bg-white/6 text-mist shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-accent-gold/40 hover:bg-white/10',
  ghost:
    'border border-brand-blue/10 bg-[#f4f3ef] text-brand-blue shadow-[0_10px_24px_rgba(33,33,33,0.06)] hover:-translate-y-0.5 hover:border-accent-gold/45 hover:text-brand-blue hover:shadow-[0_14px_30px_rgba(33,33,33,0.1)]',
};

const baseClassName =
  'inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.12em] transition duration-300 ease-out';

export function Button({
  children,
  className,
  href,
  rel,
  target,
  to,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const classes = cn(baseClassName, variants[variant], className);

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} rel={rel} target={target}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
