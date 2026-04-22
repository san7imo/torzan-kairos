import { cn } from '../../lib/cn';
import logoIcon from '../../assets/branding/TK_Logo icono dorado con sombreado.webp';
import logoNavbar from '../../assets/branding/logonavbar.png';

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  withIcon?: boolean;
  variant?: 'default' | 'navbar';
};

export function BrandMark({
  className,
  compact = false,
  withIcon = true,
  variant = 'default',
}: BrandMarkProps) {
  if (variant === 'navbar') {
    return (
      <div className={cn('flex items-center', className)}>
        <img
          alt="Torzan Kairos"
          className="h-8 w-auto object-contain sm:h-9"
          decoding="async"
          loading="eager"
          src={logoNavbar}
        />
      </div>
    );
  }

  return (
    <div className={cn('flex items-center', withIcon ? 'gap-3.5' : 'gap-0', className)}>
      {withIcon ? (
        <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.04] shadow-[0_16px_34px_rgba(0,0,0,0.14)] backdrop-blur-sm">
          <img
            alt=""
            className="relative h-7 w-7 object-contain"
            decoding="async"
            height="2250"
            loading="eager"
            src={logoIcon}
            width="2050"
          />
        </div>
      ) : null}
      <div className={cn('min-w-0', compact && 'hidden sm:block')}>
        <span
          className={cn(
            'block font-display leading-none tracking-[0.02em] text-accent-gold',
            withIcon ? 'text-[1.4rem] sm:text-[1.55rem]' : 'text-[1.55rem] sm:text-[1.7rem]',
          )}
        >
          Torzan Kairos
        </span>
        <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-mist/44">
          Formación profesional de belleza
        </span>
      </div>
    </div>
  );
}
