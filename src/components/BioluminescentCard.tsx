
export function BioluminescentCard({ title, category, children, isSelected, onSelect }) {
  const selectionClass = isSelected ? 'border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.7)]' : 'border-white/5';

  return (
    <div 
      onClick={onSelect}
      className={`relative group p-5 rounded-2xl overflow-hidden cursor-pointer 
        bg-[#070811]/80 ${selectionClass}
        shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        transition-all duration-200 ease-out
        hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]`}>

      {/* Halo bioluminescente */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700">
        <div className="absolute w-[240%] h-[240%] -top-[70%] -left-[70%]
            bg-[conic-gradient(from_0deg,#00eaff15,#7f5fff10,#00ffcc15,#00eaff15)]
            animate-[spin_12s_linear_infinite]
            blur-[80px] mix-blend-screen"></div>
      </div>

      {/* Cintilação opala */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition duration-500 
          pointer-events-none">
        <div className="absolute inset-0 
            bg-gradient-to-br 
            from-[#34fbff0a] via-[#a974ff05] to-transparent
            animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full 
              bg-cyan-400/20 border border-cyan-300/40 
              shadow-[0_0_12px_#00eaff40]"></div>

          <div className="flex flex-col">
            <span className="text-sm text-cyan-200 uppercase tracking-wide">
              {category}
            </span>
            <h3 className="text-lg font-semibold text-slate-50">
              {title}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-slate-300/90 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
