import { ReactNode } from "react";

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const HexDiv = ({ children, direction = 'right' }: Props) => {
  const generateClipPath = () => {
    switch (direction) {
      case 'up':
        return 'polygon(50% 0%, 100% 10%, 100% 100%, 50% 90%, 0% 100%, 0% 10%)';
      case 'down':
        return 'polygon(50% 100%, 100% 90%, 100% 0%, 50% 10%, 0% 0%, 0% 90%)';
      case 'left':
        return 'polygon(90% 50%, 100% 100%, 10% 100%, 0% 50%, 10% 0, 100% 0%)';
      case 'right':
        return 'polygon(100% 50%, 90% 100%, 0% 100%, 10% 50%, 0 0, 90% 0%)';
      default:
        return 'polygon(100% 50%, 90% 100%, 0% 100%, 10% 50%, 0 0, 90% 0%)';
    }
  };
  const getClasses = (direction: string) => {
    switch (direction) {
      case 'up':
      case 'down':
        return 'py-7 -my-3';
      case 'left':
      case 'right':
        return 'px-7 -mx-3';
      default:
        return 'px-7 -mx-3';
    }
  }

  return (
    <div
      className={`secondary-gradient h-full ${getClasses(direction)}`}
      style={{ clipPath: generateClipPath() }}
    >
      {children}
    </div>
  );
};

export default HexDiv;
