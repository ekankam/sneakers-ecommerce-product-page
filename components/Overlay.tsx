import cn from 'classnames';
import { useAppSelector } from "@/redux/hooks";

type OverlayProps = {
  children: React.ReactNode;
}

export default function Overlay({ children }: OverlayProps) {
  const { isOpen } = useAppSelector(state => state.modal);
  return (
    <div className={cn('fixed z-50 w-screen min-h-screen bg-overlay transition-all duration-300',
      { '-translate-x-full': !isOpen },
      { 'translate-x-0': isOpen }
    )}>
      {children}
    </div>
  );
}