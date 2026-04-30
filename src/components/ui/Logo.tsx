export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center pr-6 ${className}`}>
      <div className="flex flex-row items-baseline gap-2.5">
        {/* NEX block */}
        <div
          className="text-white font-[900] text-[36px] tracking-tight leading-none relative z-10"
          style={{ fontFamily: "Impact, sans-serif", letterSpacing: "1px" }}
        >
          NEX
        </div>

        {/* brain. serif block */}
        <div
          className="text-[#5B8CFF] font-serif text-[36px] tracking-tight leading-none relative z-20"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          brain.
        </div>
      </div>
      
      {/* Bubbles */}
      <div className="absolute top-0 right-0 flex">
        <div className="w-4 h-4 rounded-full bg-blue-600/80 absolute top-1 right-2 blur-[0.5px]"></div>
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center text-[6px] font-bold text-white z-20 absolute top-0 right-0 shadow-lg">
          TM
        </div>
      </div>
    </div>
  );
};
