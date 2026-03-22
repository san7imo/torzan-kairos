import { contactFaqs } from '../../content/site';
import { Reveal } from '../common/Reveal';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function ContactFAQSection() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="FAQ editable"
        title="Preguntas breves para sostener claridad comercial mientras llega la información definitiva."
        description="Las respuestas están planteadas como placeholders honestos y pueden sustituirse más adelante sin cambiar estructura."
      />

      <dl className="mt-14 grid gap-5 lg:grid-cols-3">
        {contactFaqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 0.08}>
            <div className="rounded-[2rem] border border-brand-blue/10 bg-white p-7 shadow-[0_18px_60px_rgba(20,47,74,0.08)]">
              <dt className="font-display text-3xl leading-tight text-brand-blue">{faq.question}</dt>
              <dd className="mt-4 text-sm leading-8 text-brand-blue/72">{faq.answer}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
