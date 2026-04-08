import { cn } from '../../lib/cn';

type ImagePanelProps = {
  src: string;
  alt: string;
  label: string;
  title: string;
  className?: string;
  imgClassName?: string;
  showLabel?: boolean;
  showTitle?: boolean;
};

export function ImagePanel({
  alt,
  className,
  imgClassName,
  label,
  showLabel = true,
  showTitle = true,
  src,
  title,
}: ImagePanelProps) {
  return (
    <div
      className={cn(
        'group relative isolate overflow-hidden rounded-[2.1rem] border border-white/10 bg-coal shadow-[0_30px_95px_rgba(0,0,0,0.22)]',
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,33,33,0.12),rgba(24,20,17,0.68)_58%,rgba(18,16,14,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,156,31,0.16),transparent_34%)]" />
      {showLabel || showTitle ? (
        <div
          className={cn(
            'relative flex h-full min-h-[260px] flex-col p-5 sm:p-6',
            showTitle ? 'justify-between' : 'justify-start',
          )}
        >
          {showLabel ? (
            <span className="inline-flex w-fit rounded-full border border-accent-gold/32 bg-accent-gold/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-accent-gold">
              {label}
            </span>
          ) : null}
          {showTitle ? (
            <div>
              <div
                aria-hidden="true"
                className="mb-4 h-px w-16 bg-mist/18 transition duration-500 group-hover:w-24"
              />
              <p className="max-w-sm font-display text-[1.55rem] leading-tight text-mist sm:text-[1.9rem]">
                {title}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
