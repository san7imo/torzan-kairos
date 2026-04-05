import { contactFaqs } from '../../data/faqs';
import { Reveal } from '../common/Reveal';
import { PageIntro } from '../ui/PageIntro';
import { Panel } from '../ui/Panel';
import { Section } from '../ui/Section';

export function ContactFAQSection() {
  return (
    <Section tone="light">
      <PageIntro
        eyebrow="Preguntas frecuentes"
        title="Respuestas breves para orientar el proceso de contacto con claridad."
        description="Estas preguntas ayudan a resolver dudas habituales sobre cursos, servicios, precios y disponibilidad."
      />

      <dl className="mt-14 grid gap-5 lg:grid-cols-3">
        {contactFaqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 0.08}>
            <Panel className="h-full" tone="light">
              <dt className="font-display text-3xl leading-tight text-brand-blue">{faq.question}</dt>
              <dd className="mt-4 text-sm leading-8 text-brand-blue/72">{faq.answer}</dd>
            </Panel>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
