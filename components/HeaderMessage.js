

const HeaderMessage = ({ text, bgColor }) => (
  <>
    <div className={`text-center relative dark:bg-slate-800 w-full ${bgColor} py-2 px-4 tracking-wider text-white font-medium text-base lg:text-sm sm:text-xs`}>
      {text}
      <div className="absolute glare top-0 h-full w-8"></div>
    </div>


  </>
);

export default HeaderMessage