import { ArrowRight } from 'lucide-react';
import { serviceCategories, servicePresentationBySlug } from '../../data/services';
import { Reveal } from '../common/Reveal';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';

export function HybridServicesSection() {
  return (
    <Section tone="light">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Servicios destacados"
          title="La línea de servicios acompaña la marca con una atención cuidada, clara y orientada al detalle."
          description="Cada categoría presenta enfoque, precios base y acceso directo a reserva desde el mismo lenguaje visual del sitio."
        />

        <Button className="sm:w-auto" to="/servicios" variant="ghost">
          Ver todos los servicios
          <ArrowRight size={16} />
        </Button>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {serviceCategories.map((service, index) => {
          const presentation = servicePresentationBySlug[service.slug];

          return (
            <Reveal key={service.slug} delay={index * 0.06}>
              <ServiceCard presentation={presentation} service={service} />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
