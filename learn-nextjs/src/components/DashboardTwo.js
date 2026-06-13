import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="w-[320px] bg-gradient-to-b from-[#131524] to-[#0c0d16] rounded-2xl overflow-hidden flex flex-col border border-slate-800/30 shadow-xl">
      
      <div className="relative w-full h-44 bg-slate-800 flex items-center justify-center">
        <Image 
          src="/dash-avatar.png" 
          alt="Profile Avatar" 
          width={310} 
          height={310}
          priority
        />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between gap-6">
        
        <div>
          <h2 className="text-xl font-extrabold text-white text-center tracking-wide">Chiara Bianchi</h2>
          <p className="text-[#6366f1] text-xs font-bold text-center mt-1 uppercase tracking-wider">Product Designer</p>
          
          <div className="mt-5 text-center px-2">
            <p className="text-slate-300 text-xs italic font-medium leading-relaxed">
              &ldquo;People ignore design that ignores people.&rdquo;
            </p>
            <span className="text-slate-500 text-[10px] block mt-1.5 font-bold uppercase tracking-widest">— Frank Chimero</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-800/60 pt-4">
          <div className="flex items-center gap-3">
            <span className="text-sm select-none">✉️</span>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[9px] uppercase font-bold tracking-wider">Email</span>
              <span className="text-slate-300 text-xs font-medium">chiara.bianchi@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm select-none">🌐</span>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[9px] uppercase font-bold tracking-wider">Website</span>
              <span className="text-slate-300 text-xs font-medium">https://bikdesign.it</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm select-none">📞</span>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[9px] uppercase font-bold tracking-wider">Phone</span>
              <span className="text-slate-300 text-xs font-medium">(+39) 333 0123 789</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm select-none">📍</span>
            <div className="flex flex-col">
              <span className="text-slate-300 text-xs font-semibold">Bologna, Italy</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 border-t border-slate-800/60 pt-4">
          <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest block mb-1">Socials</span>
          
          <div className="flex items-center gap-3">
            <span className="text-sm select-none">📸</span>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[9px] uppercase font-bold">Instagram</span>
              <span className="text-slate-300 text-xs font-medium">@chiara.designs</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm select-none">🏀</span>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[9px] uppercase font-bold">Dribbble</span>
              <span className="text-slate-300 text-xs font-medium">@chiara-designs</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-4 flex items-center gap-3">
          <span className="text-base select-none">🇪🇸</span>
          <div className="flex flex-col">
            <span className="text-slate-300 text-xs font-bold leading-tight">Spanish</span>
            <span className="text-slate-500 text-[10px] font-medium">Elementary</span>
          </div>
        </div>

      </div>
    </div>
  );
}