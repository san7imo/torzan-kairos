import { cn } from '../../lib/cn';
import logoHorizontal from '../../assets/branding/Logo-horizontal.png';
import logoIcon from '../../assets/branding/Logo-icono.png';

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  withIcon?: boolean;
};

export function BrandMark({ className, compact = false, withIcon = true }: BrandMarkProps) {
  return (
    <div className={cn('flex items-center', withIcon ? 'gap-3.5' : 'gap-0', className)}>
      {withIcon ? (
        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.15rem] border border-accent-gold/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] shadow-[0_16px_34px_rgba(0,0,0,0.16)]">
          <img
            alt=""
            className="relative h-8 w-8 object-contain"
            decoding="async"
            height="2250"
            loading="eager"
            src={logoIcon}
            width="2050"
          />
        </div>
      ) : null}
      <div className={cn('min-w-0', compact && 'hidden sm:block')}>
        <img
          alt="Torzan Kairos Academia"
          className={cn('w-auto object-contain', withIcon ? 'h-9 sm:h-10' : 'h-10 sm:h-11')}
          decoding="async"
          height="1450"
          loading="eager"
          src={logoHorizontal}
          width="6843"
        />
      </div>
    </div>
  );
}
