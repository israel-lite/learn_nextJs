import Image from "next/image";

export default function FirstCard() {
  return (
    <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col gap-10">
      
      <section className="flex flex-col items-start text-left">
        <div className="flex items-center gap-3 mb-4">
          <Image 
            src="/fig1.png" 
            alt="Supa Resume Logo" 
            width={80} 
            height={80}
            priority
          />
          <span className="text-2xl font-extrabold tracking-tight text-[#1e293b]">
            Supa <span className="text-[#6366f1]">Resume</span>
          </span>
        </div>

        <p className="text-slate-500 text-[14px] leading-relaxed mb-4 font-normal">
          Get started with Resumes & Cover Letters templates designed to help you 
          make a stunning first impression and secure that dream career move!
        </p>

        <a 
          href="#" 
          className="text-[#6366f1] hover:text-[#4f46e5] font-semibold text-[14px] flex items-center gap-1 group transition-colors"
        >
          Go forth, and get hired 🚀
        </a>
      </section>

      <section className="flex flex-col items-start text-left">
        <h2 className="text-[15px] font-bold text-slate-800 mb-2">Found this project useful?</h2>
        <p className="text-slate-400 text-[13px] leading-normal mb-4 font-normal">
          Like it, leave a comment or simply share it ❤️ <br />
          Follow me not to miss next freebies and samples:
        </p>
        
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <Image src="/figma.png" alt="Figma Logo" width={14} height={14} />
            <a href="#" className="text-[#2563eb] hover:underline text-[13px] font-medium truncate">
              Follow me on Figma Community for freebies and sample
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Image src="/instagram.png" alt="Instagram Logo" width={14} height={14} />
            <a href="#" className="text-[#2563eb] hover:underline text-[13px] font-medium truncate">
              Follow me on Instagram for design inspiration
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/dribble.png" alt="Dribbble Logo" width={14} height={14} />
            <a href="#" className="text-[#2563eb] hover:underline text-[13px] font-medium truncate">
              Follow me on Dribbble for design inspiration
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/twitter.png" alt="Twitter Logo" width={14} height={14} />
            <a href="#" className="text-[#2563eb] hover:underline text-[13px] font-medium truncate">
              Follow me on Twitter for announcements and releases
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-start text-left">
        <span className="text-slate-400 text-[12px] font-medium mb-3">Designed by</span>
        
        <div className="w-full bg-[#f8fafc] rounded-xl p-4 flex items-center gap-3 border border-slate-50">
          <Image 
            src="/Avatar.png" 
            alt="Angelo Libero" 
            width={66} 
            height={66} 
            className="rounded-full bg-slate-200"
          />
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-slate-800 leading-tight">Angelo Libero</span>
            <a href="#" className="text-slate-400 hover:text-slate-500 text-[12px] font-normal mt-0.5">
              @angelolibero.designs
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}