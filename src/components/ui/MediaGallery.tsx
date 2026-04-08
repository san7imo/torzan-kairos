import type { HomeGalleryAsset } from '../../types/site';
import { ImagePanel } from './ImagePanel';
import { Reveal } from '../common/Reveal';

const defaultClasses = [
  'md:col-span-2 min-h-[260px] sm:min-h-[320px]',
  'min-h-[260px] sm:min-h-[320px]',
  'min-h-[260px] sm:min-h-[320px]',
];

type MediaGalleryProps = {
  assets: HomeGalleryAsset[];
  itemClasses?: string[];
  imageClassName?: string;
  delayStep?: number;
};

export function MediaGallery({
  assets,
  delayStep = 0.08,
  imageClassName = 'object-cover object-center',
  itemClasses = defaultClasses,
}: MediaGalleryProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {assets.map((asset, index) => (
        <Reveal key={`${asset.title}-${index}`} delay={index * delayStep}>
          <ImagePanel
            alt={asset.alt}
            className={itemClasses[index] ?? 'min-h-[320px]'}
            imgClassName={imageClassName}
            label={asset.label}
            src={asset.src}
            title={asset.title}
          />
        </Reveal>
      ))}
    </div>
  );
}
