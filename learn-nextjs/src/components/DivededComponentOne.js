"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DivededComponentOne() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f1f3fe] to-[#e8f0fe] flex items-center justify-between pl-8 lg:pl-20 pr-0 py-12 rounded-[32px]">
      <div className="w-full max-w-[680px] z-10 flex flex-col gap-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6c5ce7] flex items-center justify-center text-white font-bold">
                <Image 
                src="/Avatar.png" 
                alt="main logo" 
                width={22} 
                height={22}
                priority
              />
          </div>
          <span className="text-[#2d3142] text-xl font-semibold tracking-wide">
            Angelo Libero Designs
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-[#2d3142]">
            Supa <span className="text-[#6c5ce7]">Resume</span>
          </h1>
          <p className="text-2xl font-medium text-[#4a5568] leading-relaxed max-w-[540px]">
            Modern, clean and supa customizable resume & cover letter templates.
          </p>
        </div>
        

        <div className="grid grid-cols-3 gap-6 w-full max-w-[640px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-100/80 p-7 rounded-[24px] flex flex-col gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
          >
            <div className="w-12 h-12 rounded-full bg-[#f1ebff] flex items-center justify-center">
              <Image 
                src="/dash-avatar.png" 
                alt="23 templates icon" 
                width={22} 
                height={22}
                priority
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-4xl font-bold text-[#6c5ce7] tracking-tight">23</span>
              <span className="text-2xl font-bold text-[#6c5ce7] tracking-tight">templates</span>
            </div>
          </motion.div>

        {/* <Image 
             src="/Features.png" 
             alt="23 templates icon" 
             width={800} 
             height={800}
             priority
        /> */}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-slate-100/80 p-7 rounded-[24px] flex flex-col gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
          >
            <div className="w-12 h-12 rounded-full bg-[#fff9db] flex items-center justify-center">
              <Image 
                src="/lightdark.png" 
                alt="bulb Logo" 
                width={22} 
                height={22}
                priority
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-4xl font-bold text-[#fab005] tracking-tight">Light</span>
              <span className="text-4xl font-bold text-[#5c5f66] tracking-tight">& Dark</span>
            </div>
          </motion.div>




          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white border border-slate-100/80 p-7 rounded-[24px] flex flex-col gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
          >
            <div className="w-12 h-12 rounded-full bg-[#ebfbee] flex items-center justify-center">
              <Image 
                src="/autolayout.png" 
                alt="auto layout Logo" 
                width={22} 
                height={22}
                priority
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-4xl font-bold text-[#40c057] tracking-tight">Auto</span>
              <span className="text-4xl font-bold text-[#40c057] tracking-tight">Layout 3.0</span>
            </div>
          </motion.div>

          

        </div>
      </div>

      <div className="relative h-screen w-[420px] min-w-[420px] border-l border-[#74b9ff]/40 bg-white/40 backdrop-blur-sm shadow-2xl flex-shrink-0 translate-x-4">
        <div className="p-8 flex flex-col gap-6 h-full">
          <div className="flex flex-col items-center text-center gap-4 mt-8">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-md">
              <Image 
                src="/dash-avatar.png" 
                alt="Chiara Profile" 
                width={128} 
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#2d3142]">Chiara Bianchi</h2>
              <p className="text-[#6c5ce7] font-medium text-sm mt-1">Product Designer</p>
            </div>
          </div>

          <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 italic text-sm text-[#4a5568] relative">
            <span className="text-2xl text-[#6c5ce7] absolute top-1 left-2 font-serif">“</span>
            <p className="pl-5 pr-2">Design isn't finished until somebody is using it.</p>
            <span className="block text-right text-xs font-sans not-italic text-slate-400 mt-2">— Brenda Laurel</span>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 text-sm text-[#4a5568]">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                ✉️
              </div>
              <span>chiara.bianchi@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#4a5568]">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                🔗
              </div>
              <span className="underline">https://cbdesign.it</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#4a5568]">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                📞
              </div>
              <span>+39 333 0123 785</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#4a5568]">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                📍
              </div>
              <span>Bologna, Italy</span>
            </div>
          </div>

          <div className="border-t border-slate-100 my-2"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-[#4a5568]">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                <Image src="/twitter.png" alt="Twitter" width={16} height={16} priority />
              </div>
              <span>@chiara.designs</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#4a5568]">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                <Image src="/instagram.png" alt="Instagram" width={16} height={16} priority />
              </div>
              <span>@chiara-designs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
