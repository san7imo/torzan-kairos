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
    'border border-accent-gold/60 bg-accent-gold text-brand-blue shadow-[0_18px_44px_rgba(231,156,31,0.2)] hover:-translate-y-0.5 hover:border-accent-gold/80 hover:bg-[#efab33] hover:shadow-[0_24px_60px_rgba(231,156,31,0.24)]',
  secondary:
    'border border-mist/18 bg-white/8 text-mist shadow-[0_12px_34px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:border-accent-gold/42 hover:bg-white/12',
  ghost:
    'border border-brand-blue/12 bg-white text-brand-blue shadow-[0_10px_28px_rgba(33,33,33,0.06)] hover:-translate-y-0.5 hover:border-accent-gold/50 hover:text-brand-blue hover:shadow-[0_18px_40px_rgba(33,33,33,0.1)]',
};

const baseClassName =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.74rem] font-semibold uppercase tracking-[0.14em] transition duration-300 ease-out';

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
