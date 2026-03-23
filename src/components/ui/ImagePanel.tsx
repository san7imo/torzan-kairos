import { cn } from '../../lib/cn';

type ImagePanelProps = {
  src: string;
  alt: string;
  label: string;
  title: string;
  className?: string;
  imgClassName?: string;
};

export function ImagePanel({ alt, className, imgClassName, label, src, title }: ImagePanelProps) {
  return (
    <div
      className={cn(
        'group relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-coal shadow-[0_28px_90px_rgba(0,0,0,0.18)]',
        className,
      )}
    >
      <img
        alt={alt}
        className={cn(
          'absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]',
          imgClassName,
        )}
        loading="lazy"
        src={src}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,26,0.16),rgba(7,20,33,0.82)_70%,rgba(4,12,20,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,156,31,0.14),transparent_34%)]" />
      <div className="relative flex h-full min-h-[260px] flex-col justify-between p-5 sm:p-6">
        <span className="inline-flex w-fit rounded-full border border-accent-gold/32 bg-accent-gold/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
          {label}
        </span>
        <div>
          <div className="mb-4 h-px w-16 bg-mist/18 transition duration-500 group-hover:w-24" aria-hidden="true" />
          <p className="max-w-xs font-display text-[1.65rem] leading-tight text-mist sm:text-[1.9rem]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
