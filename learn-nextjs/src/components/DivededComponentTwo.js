"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DivededComponentTwo() {
  return (
    <div className="w-full max-w-[680px] z-10 flex flex-col gap-12">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#6c5ce7] flex items-center justify-center text-white font-bold">AL</div>
        <span className="text-[#2d3142] text-xl font-semibold tracking-wide">Angelo Libero Designs</span>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#2d3142]">Experience</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f1ebff] flex items-center justify-center">
                <Image src="/the image name.png" alt="company" width={32} height={32} priority />
              </div>
              <div>
                <div className="text-sm text-[#6c5ce7]">VR designer</div>
                <div className="font-semibold text-[#2d3142]">Meta</div>
              </div>
            </div>
            <div className="text-sm text-[#6c5ce7]">Present</div>
          </div>

          <div className="flex items-center justify-between bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fff9db] flex items-center justify-center">
                <Image src="/the image name.png" alt="company" width={32} height={32} priority />
              </div>
              <div>
                <div className="text-sm text-[#6c5ce7]">Product designer</div>
                <div className="font-semibold text-[#2d3142]">Apple</div>
              </div>
            </div>
            <div className="text-sm text-[#4a5568]">Jul 20 - Jan 2022</div>
          </div>

          <div className="flex items-center justify-between bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ebfbee] flex items-center justify-center">
                <Image src="/the image name.png" alt="company" width={32} height={32} priority />
              </div>
              <div>
                <div className="text-sm text-[#6c5ce7]">UX Designer</div>
                <div className="font-semibold text-[#2d3142]">Tesla</div>
              </div>
            </div>
            <div className="text-sm text-[#4a5568]">Oct 2015 - Mar 2020</div>
          </div>

          <div className="flex items-center justify-between bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f8f6ff] flex items-center justify-center">
                <Image src="/the image name.png" alt="company" width={32} height={32} priority />
              </div>
              <div>
                <div className="text-sm text-[#6c5ce7]">Design system architect</div>
                <div className="font-semibold text-[#2d3142]">Google</div>
              </div>
            </div>
            <div className="text-sm text-[#4a5568]">Sep 2014 - Aug 2015</div>
          </div>

          <div className="flex items-center justify-between bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fff6f1] flex items-center justify-center">
                <Image src="/the image name.png" alt="company" width={32} height={32} priority />
              </div>
              <div>
                <div className="text-sm text-[#6c5ce7]">Senior product design</div>
                <div className="font-semibold text-[#2d3142]">Vectornator</div>
              </div>
            </div>
            <div className="text-sm text-[#4a5568]">Sep 2010 - Jul 2013</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[#2d3142] mb-6">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f3e8ff] flex items-center justify-center">
                <Image src="/the image name.png" alt="skill" width={22} height={22} priority />
              </div>
              <div>
                <div className="font-semibold text-[#2d3142]">Design</div>
                <div className="text-sm text-[#6c5ce7]">Web Design • Mobile Design • User Experience</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                <Image src="/the image name.png" alt="skill" width={22} height={22} priority />
              </div>
              <div>
                <div className="font-semibold text-[#2d3142]">Development</div>
                <div className="text-sm text-[#6c5ce7]">React JS • TypeScript • Next JS • HTML • CSS • JS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[#2d3142] mb-6">Education</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fff] flex items-center justify-center">
                <Image src="/the image name.png" alt="edu" width={22} height={22} priority />
              </div>
              <div>
                <div className="font-semibold text-[#2d3142]">Memorisely</div>
                <div className="text-sm text-[#6c5ce7]">Build a design system</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0ff] flex items-center justify-center">
                <Image src="/the image name.png" alt="edu" width={22} height={22} priority />
              </div>
              <div>
                <div className="font-semibold text-[#2d3142]">UX academy</div>
                <div className="text-sm text-[#6c5ce7]">UX Design certificate</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#fff3e8] flex items-center justify-center">
                <Image src="/the image name.png" alt="edu" width={22} height={22} priority />
              </div>
              <div>
                <div className="font-semibold text-[#2d3142]">Coursera</div>
                <div className="text-sm text-[#6c5ce7]">User research course</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[#2d3142] mb-6">Latest projects</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center">
                <Image src="/the image name.png" alt="project" width={22} height={22} priority />
              </div>
              <div>
                <div className="font-semibold text-[#2d3142]">Poweful Design System</div>
                <div className="text-sm text-[#6c5ce7]">Figma UI Kit and Design System targeting a wide variety of use cases.</div>
                <a className="text-sm text-[#6c5ce7] inline-block mt-2" href="#">https://figma.com</a>
              </div>
            </div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#dff7f3] flex items-center justify-center">
                <Image src="/the image name.png" alt="project" width={22} height={22} priority />
              </div>
              <div>
                <div className="font-semibold text-[#2d3142]">Modern Website</div>
                <div className="text-sm text-[#6c5ce7]">Powerful website + dashboard template for your next Chakra UI project.</div>
                <a className="text-sm text-[#6c5ce7] inline-block mt-2" href="#">https://ui-8.net</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-[#2d3142] mb-6">Tools</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#fff] flex items-center justify-center">
              <Image src="/the image name.png" alt="tool" width={22} height={22} priority />
            </div>
            <div className="font-semibold text-[#2d3142]">Figma</div>
            <div className="text-sm text-[#6c5ce7]">UI Design, prototyping</div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#e8f0fe] flex items-center justify-center">
              <Image src="/the image name.png" alt="tool" width={22} height={22} priority />
            </div>
            <div className="font-semibold text-[#2d3142]">Maze</div>
            <div className="text-sm text-[#6c5ce7]">Product research</div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#fff] flex items-center justify-center">
              <Image src="/the image name.png" alt="tool" width={22} height={22} priority />
            </div>
            <div className="font-semibold text-[#2d3142]">Spline</div>
            <div className="text-sm text-[#6c5ce7]">3D design</div>
          </div>

          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[#fff] flex items-center justify-center">
              <Image src="/the image name.png" alt="tool" width={22} height={22} priority />
            </div>
            <div className="font-semibold text-[#2d3142]">Zeplin</div>
            <div className="text-sm text-[#6c5ce7]">Design workspace</div>
          </div>
        </div>
      </div>
    </div>
  );
}
