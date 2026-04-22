import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/cn';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[1180px] px-4 sm:px-5 lg:px-8', className)}>
      {children}
    </div>
  );
}
