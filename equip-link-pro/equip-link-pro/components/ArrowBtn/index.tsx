interface Props {
  direction: 'up' | 'down' | 'left' | 'right';
  color: string;
  cb: () => void;
}

const ArrowBtn = ({ direction, color = 'black', cb }: Props) => {
  const getRotation = (direction: string) => {
    switch (direction) {
      case 'up':
        return '-rotate-90';
      case 'right':
        return '';
      case 'down':
        return 'rotate-90';
      case 'left':
        return 'rotate-180';
      default:
        return '';
    }
  };

  return (
    <button className={`w-8 h-10 flex items-center justify-center ${getRotation(direction)}`} onClick={() => cb()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="14" viewBox="0 0 4 14">
          <line x1="0" y1="0" x2="4" y2="7" stroke={color} strokeWidth="1" />
          <line x1="0" y1="14" x2="4" y2="7" stroke={color} strokeWidth="1" />
      </svg>
    </button>
  );
};

export default ArrowBtn;
