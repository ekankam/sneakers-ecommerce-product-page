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
        'fixed z-50 h-screen w-screen overflow-hidden bg-overlay transition-all duration-300',
        className && className
      )}
    >
      {children}
    </div>
  );
}
