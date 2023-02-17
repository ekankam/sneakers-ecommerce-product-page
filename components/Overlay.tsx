import cn from 'classnames';
import { useAppSelector } from '@/redux/hooks';

type OverlayProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Overlay({ children, className }: OverlayProps) {
  return (
    <div
      className={cn(
        'fixed z-50 h-screen w-screen bg-overlay transition-all duration-300 overflow-hidden',
        className && className
      )}
    >
      {children}
    </div>
  );
}
