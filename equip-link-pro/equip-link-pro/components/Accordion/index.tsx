import { useState } from "react";

interface Item {
  title: string;
  content: string;
}

interface Props {
  items: Item[];
}

const Accordion = ({ items }: Props) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <>
      {items.map(({ title, content }, i) => (
        <div key={i}>
          <button onClick={() => setIsOpen(isOpen === i ? null : i)} className="w-full">
            <h3>{title}</h3>
          </button>
          <div className={`transition-all duration-500 ${isOpen === i ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
            <p className="pt-3 pb-8">
              {content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
