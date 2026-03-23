import { MessageCircleMore } from 'lucide-react';
import { buildWhatsAppLink } from '../../data/whatsapp';
import { Button } from './Button';

type WhatsAppCTAProps = {
  message: string;
  label: string;
  className?: string;
  phone?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function WhatsAppCTA({ className, label, message, phone, variant = 'primary' }: WhatsAppCTAProps) {
  return (
    <Button
      className={className}
      href={buildWhatsAppLink(message, phone)}
      rel="noreferrer"
      target="_blank"
      variant={variant}
    >
      <MessageCircleMore size={16} />
      {label}
    </Button>
  );
}
