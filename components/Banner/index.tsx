interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Banner = ({ children }: Props) => {
  return <div className="bg-blue-800 md:border-y-2 border-amber-400 py-4 px-4 md:px-20 w-full flex justify-center mb-20">
      <div className="max-w-screen-lg flex justify-between items-center">
        {children}
      </div>
  </div>

}

export default Banner;
