interface Props {
  color?: string;
  colorOpen?: string;
  cb: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const HamburgerBtn = ({ color = 'bg-blue-900', colorOpen = 'bg-blue-900', cb, isOpen }: Props) => (
  <div className={`space-y-1 flex flex-col cursor-pointer z-20 lg:hidden justify-center`} onClick={() => cb(!isOpen)}>
    <div className={`w-8 h-1 transition-all duration-300 ${isOpen ? `${colorOpen} rotate-45 translate-y-2` : `${color}`} `}></div>
    <div className={`w-8 h-1 transition-all duration-300 ${isOpen ? 'opacity-0' : `${color}`} `}></div>
    <div className={`w-8 h-1 transition-all duration-300 ${isOpen ? `${colorOpen} -rotate-45 -translate-y-2` : `${color}`} `}></div>
  </div>
);

export default HamburgerBtn;
