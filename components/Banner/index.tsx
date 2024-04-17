interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Banner = ({ children }: Props) => {
  return <div className="bg-black border-y-2 border-amber-400 py-4 px-5 md:px-20 w-full flex justify-center">
      <div className="max-w-screen-lg flex justify-between items-center">
        {children}
      </div>
  </div>

}

export default Banner;
