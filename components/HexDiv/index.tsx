import { ReactNode } from "react";

interface Props {
  children: ReactNode[] | ReactNode;
}

const HexDiv = ({ children }: Props) => (
  <div
    className="bg-gradient-to-br from-blue-300 to-blue-500 px-7 -mx-7"
    style={{
      clipPath: 'polygon(100% 50%, 90% 100%, 0% 100%, 10% 50%, 0 0, 90% 0%)',
    }}
  >
    {children}
  </div>
)

export default HexDiv;
