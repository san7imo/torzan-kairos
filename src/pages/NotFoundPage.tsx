import { pageMetadata } from '../content/site';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function NotFoundPage() {
  usePageMetadata(pageMetadata.notFound);

  return (
    <Section className="min-h-[60vh] flex items-center" tone="deep">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold">
          404
        </p>
        <h1 className="mt-5 font-display text-5xl text-mist">
          La página solicitada no está disponible.
        </h1>
        <p className="mt-5 text-base leading-8 text-mist/72">
          La estructura del sitio sigue en construcción. Puedes volver al inicio y continuar
          explorando la presentación institucional.
        </p>
        <Button className="mt-8" to="/" variant="primary">
          Volver al inicio
        </Button>
      </div>
    </Section>
  );
}
