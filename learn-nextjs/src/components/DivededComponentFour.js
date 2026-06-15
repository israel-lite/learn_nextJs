import Image from "next/image";

export default function DivededComponentTwo() {
  return (
    <div className="w-full max-w-[680px] z-10 flex flex-col gap-12 text-slate-100 bg-[#101a33]">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#232f5d] flex items-center justify-center shrink-0">
                <Image src="/meta.png" alt="" width={24} height={24} priority />
              </div>
              <div>
                <div className="text-sm font-medium text-[#6c5ce7] leading-none">VR designer</div>
                <div className="font-bold text-lg mt-1">Meta</div>
              </div>
            </div>
            <div className="text-right sm:text-right self-start sm:self-center">
              <div className="text-sm font-semibold text-[#6c5ce7] bg-[#232f5d] px-2.5 py-1 rounded-md inline-block">Present</div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 justify-end">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span> Menlo Park, California
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#202d58] flex items-center justify-center shrink-0">
                <Image src="/apple.png" alt="" width={24} height={24} priority />
              </div>
              <div>
                <div className="text-sm font-medium text-[#6c5ce7] leading-none">Product designer</div>
                <div className="font-bold text-lg mt-1">Apple</div>
              </div>
            </div>
            <div className="text-left sm:text-right self-start sm:self-center">
              <div className="text-sm font-medium text-slate-400">Jul 20 - Jan 2022</div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 sm:justify-end">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span> Cupertino, California
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#23315e] flex items-center justify-center shrink-0">
                <Image src="/tesla.png" alt="" width={24} height={24} priority />
              </div>
              <div>
                <div className="text-sm font-medium text-[#6c5ce7] leading-none">UX Designer</div>
                <div className="font-bold text-lg mt-1">Tesla</div>
              </div>
            </div>
            <div className="text-left sm:text-right self-start sm:self-center">
              <div className="text-sm font-medium text-slate-400">Oct 2015 - Mar 2020</div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 sm:justify-end">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span> Austin, Texas
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#202d58] flex items-center justify-center shrink-0">
                <Image src="/google.png" alt="" width={24} height={24} priority />
              </div>
              <div>
                <div className="text-sm font-medium text-[#6c5ce7] leading-none">Design system architect</div>
                <div className="font-bold text-lg mt-1">Google</div>
              </div>
            </div>
            <div className="text-left sm:text-right self-start sm:self-center">
              <div className="text-sm font-medium text-slate-400">Sep 2014 - Aug 2015</div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 sm:justify-end">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span> Mountain View, California
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1f2b57] flex items-center justify-center shrink-0">
                <Image src="/vectornator.jpeg" alt="" width={24} height={24} priority />
              </div>
              <div>
                <div className="text-sm font-medium text-[#6c5ce7] leading-none">Senior product design</div>
                <div className="font-bold text-lg mt-1">Vectornator</div>
              </div>
            </div>
            <div className="text-left sm:text-right self-start sm:self-center">
              <div className="text-sm font-medium text-slate-400">Sep 2010 - Jul 2013</div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 sm:justify-end">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span> Berlin, Germany
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row bg-white/60 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.01)] divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-5 md:w-32 flex flex-row md:flex-col items-center md:justify-center gap-3 shrink-0 bg-[#14204a]/70 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
              <div className="w-8 h-8 rounded-full bg-[#1f2b57] flex items-center justify-center">
                <Image src="/designer-boy.png" alt="" width={30} height={30} priority />
              </div>
              <span className="font-bold text-sm tracking-wide uppercase text-slate-500">Design</span>
            </div>
            
            <div className="p-5 grid grid-cols-2 sm:grid-cols-5 gap-3 w-full items-stretch">
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex items-center justify-center text-center text-sm font-semibold text-[#8b95ff]">Web Design</div>
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex items-center justify-center text-center text-sm font-semibold text-[#8b95ff]">Mobile Design</div>
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex items-center justify-center text-center text-sm font-semibold text-[#8b95ff]">User Experience</div>
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex flex-col items-center justify-center text-center text-xs font-semibold text-[#8b95ff] gap-0.5">
                
                <span>• Wireframing</span>
                <span>• Prototyping</span>
                <span>• Testing</span>
              </div>
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex items-center justify-center text-center text-sm font-semibold text-[#8b95ff]">Design System</div>
              
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white/60 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.01)] divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-5 md:w-32 flex flex-row md:flex-col items-center md:justify-center gap-3 shrink-0 bg-[#14204a]/70 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
              <div className="w-8 h-8 rounded-full bg-[#1c2a57] flex items-center justify-center">
                
                <Image src="/dev-skill.jpeg" alt="" width={86} height={86} priority />
              </div>
              <span className="font-bold text-sm tracking-wide uppercase text-slate-500">Development</span>
            </div>
            <div className="p-5 grid grid-cols-2 sm:grid-cols-5 gap-3 w-full items-stretch">
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex items-center justify-center text-center text-sm font-semibold text-[#8b95ff]">React JS</div>
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex flex-col items-center justify-center text-center text-xs font-semibold text-[#8b95ff] gap-0.5">
                <span>• Chakra UI</span>
                <span>• Emotion</span>
                <span>• Framer</span>
              </div>
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex items-center justify-center text-center text-sm font-semibold text-[#8b95ff]">TypeScript</div>
              <div className="bg-[#1e2b57] border border-[#22305f] rounded-xl p-3 flex items-center justify-center text-center text-sm font-semibold text-[#8b95ff]">Next JS</div>
              <div className="bg-white border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center text-center text-xs font-semibold text-[#6c5ce7]">
                <span>HTML</span>
                <div className="w-full h-px bg-slate-100 my-1"></div>
                <span>CSS / JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1e2b57] border border-[#22305f] shadow-sm flex items-center justify-center shrink-0">
                <Image src="/memorisely.png" alt="" width={102} height={102} priority />
              </div>
              <div>
                <div className="font-bold text-base leading-snug">Memorisely</div>
                <div className="text-xs text-slate-400 mt-0.5">Oct 2021</div>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-400 mt-1">Build a design system</div>
          </div>

          <div className="bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#111214] flex items-center justify-center shrink-0">
                <Image src="/uxacademy.png" alt="" width={102} height={102} priority />
              </div>
              <div>
                <div className="font-bold text-base leading-snug">UX academy</div>
                <div className="text-xs text-slate-400 mt-0.5">Feb 2020</div>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-400 mt-1">UX Design certificate</div>
          </div>

          <div className="bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4d73f0] flex items-center justify-center shrink-0">
                <Image src="/coursera.png" alt="" width={102} height={102} priority />
              </div>
              <div>
                <div className="font-bold text-base leading-snug">Coursera</div>
                <div className="text-xs text-slate-400 mt-0.5">Dec 2019</div>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-400 mt-1">User research course</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold tracking-tight">Latest projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] flex flex-col justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1a1b1f] flex items-center justify-center shrink-0">
                <Image src="/project-figma.png" alt="" width={24} height={24} priority />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-tight">Powerful Design System</h4>
                <p className="text-sm font-medium text-slate-400 mt-2 leading-relaxed">
                  Figma UI Kit and Design System targeting a wide variety of use cases.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#6c5ce7] bg-[#1f2b57] self-start px-3 py-1.5 rounded-lg">
              <Image src="/link-icon.png" alt="" width={14} height={14} priority />
              <span>https://figma.com</span>
            </div>
          </div>

          <div className="bg-[#17254f]/95 p-5 rounded-2xl border border-[#22305f]/70 shadow-[0_20px_60px_rgb(0,0,0,0.25)] flex flex-col justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0091d8] flex items-center justify-center shrink-0">
                <Image src="/project-website.png" alt="" width={24} height={24} priority />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-tight">Modern Website</h4>
                <p className="text-sm font-medium text-slate-400 mt-2 leading-relaxed">
                  Powerful website + dashboard template for your next Chakra UI project.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#6c5ce7] bg-[#1f2b57] self-start px-3 py-1.5 rounded-lg">
              <Image src="/link-icon.png" alt="" width={14} height={14} priority />
              <span>https://ui-8.net</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold tracking-tight">Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white/60 p-4 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.01)] flex flex-col items-center justify-center text-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
              <Image src="/project-figma.png" alt="" width={44} height={44} priority />
            </div>
            <div className="font-bold text-sm mt-1">Figma</div>
            <div className="text-xs text-slate-400 leading-none">UI Design, prototyping</div>
          </div>

          <div className="bg-white/60 p-4 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.01)] flex flex-col items-center justify-center text-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#0052cc] flex items-center justify-center">
              <Image src="/maze-tool.png" alt="" width={44} height={44} priority />
            </div>
            <div className="font-bold text-sm mt-1">Maze</div>
            <div className="text-xs text-slate-400 leading-none">Product research</div>
          </div>

          <div className="bg-white/60 p-4 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.01)] flex flex-col items-center justify-center text-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ff007f] via-[#7f00ff] to-[#00f0ff] flex items-center justify-center">
              <Image src="/spline-tool.jpeg" alt="" width={44} height={44} priority />
            </div>
            <div className="font-bold text-sm mt-1">Spline</div>
            <div className="text-xs text-slate-400 leading-none">3D design</div>
          </div>

          <div className="bg-white/60 p-4 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_rgb(0,0,0,0.01)] flex flex-col items-center justify-center text-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#ffede0] flex items-center justify-center">
              <Image src="/zepline-tool.png" alt="" width={44} height={44} priority />
            </div>
            <div className="font-bold text-sm mt-1">Zeplin</div>
            <div className="text-xs text-slate-400 leading-none">Design workspace</div>
          </div>
        </div>
      </div>
    </div>
  );
}
