import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="md:col-span-4 space-y-6">
          {/* My Stacks Section */}
          <motion.div 
            className="bg-[#111111] p-6 rounded-2xl"
            {...fadeIn}
          >
            <h3 className="text-purple-500 mb-4 flex items-center gap-2">
              <span className="p-2 bg-purple-500/10 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              My Stacks
            </h3>
            <p className="text-gray-400">Tech Arsenal</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#1A1A1A] rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </span>
                <span>Character Creator 4</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#1A1A1A] rounded-lg">UE</span>
                <span>Unreal Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#1A1A1A] rounded-lg">Ic</span>
                <span>iClone</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#1A1A1A] rounded-lg">Pr</span>
                <span>Adobe Premiere Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#1A1A1A] rounded-lg">Sp</span>
                <span>Adobe Substance Painter</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#1A1A1A] rounded-lg">Bl</span>
                <span>Blender</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#1A1A1A] rounded-lg">Md</span>
                <span>Marvelous Designer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#1A1A1A] rounded-lg">Ps</span>
                <span>Adobe Photoshop</span>
              </div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div 
            className="bg-[#111111] p-6 rounded-2xl"
            {...fadeIn}
          >
            <h3 className="text-purple-500 mb-4 flex items-center gap-2">
              <span className="p-2 bg-purple-500/10 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              Projects
            </h3>
            <p className="text-gray-400">Works Gallery</p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <img src="https://via.placeholder.com/100x100" alt="Project" className="rounded-lg w-full aspect-square object-cover" />
              <img src="https://via.placeholder.com/100x100" alt="Project" className="rounded-lg w-full aspect-square object-cover" />
              <img src="https://via.placeholder.com/100x100" alt="Project" className="rounded-lg w-full aspect-square object-cover" />
            </div>
            <button className="mt-4 w-full bg-purple-500/10 text-purple-500 py-2 rounded-lg">
              View Works
            </button>
          </motion.div>
        </div>

        {/* Middle Column */}
        <div className="md:col-span-4 space-y-6">
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div {...fadeIn} className="bg-[#111111] p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 bg-purple-500/10 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </span>
                <span className="text-gray-400">Projects</span>
              </div>
              <h3 className="text-2xl font-bold">19<span className="text-purple-500">+</span></h3>
            </motion.div>
            <motion.div {...fadeIn} className="bg-[#111111] p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 bg-purple-500/10 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <span className="text-gray-400">Happy Clients</span>
              </div>
              <h3 className="text-2xl font-bold">12<span className="text-purple-500">+</span></h3>
            </motion.div>
            <motion.div {...fadeIn} className="bg-[#111111] p-4 rounded-2xl col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 bg-purple-500/10 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                <span className="text-gray-400">Year Expertise</span>
              </div>
              <h3 className="text-2xl font-bold">03<span className="text-purple-500">+</span></h3>
            </motion.div>
          </div>

          {/* Profile Section */}
          <motion.div 
            className="bg-[#111111] p-6 rounded-2xl"
            {...fadeIn}
          >
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded-full">Available To Work</span>
                  <button className="bg-[#1A1A1A] p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </button>
                </div>
                <h2 className="text-xl font-bold mt-1">Shaikh Akbar Ali</h2>
                <p className="text-purple-500">Visual Designer</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                India
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                English & Hindi
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
                3D Character Artist
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                Vfx and Animation
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                IST
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button className="flex items-center justify-center gap-2 bg-[#1A1A1A] p-2 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                DM me (Instagram)
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#1A1A1A] p-2 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                WhatsApp Me
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 space-y-6">
          {/* Testimonials Section */}
          <motion.div 
            className="bg-[#111111] p-6 rounded-2xl"
            {...fadeIn}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-purple-500/10 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold">Testimonials</h3>
              </div>
              <span className="text-gray-400">Reviews Showcase</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[#1A1A1A] rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                    <AvatarFallback>CW</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">Cameron Williamson</h4>
                      <span className="text-xs text-gray-400">1 Jan 2024</span>
                    </div>
                    <p className="text-sm text-gray-400">Sydney, Australia</p>
                  </div>
                </div>
                <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt tempor porttitor lectus.</p>
              </div>
              <div className="p-4 bg-[#1A1A1A] rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?u=2" />
                    <AvatarFallback>EH</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">Esther Howard</h4>
                      <span className="text-xs text-gray-400">10 Dec 2023</span>
                    </div>
                    <p className="text-sm text-gray-400">Sydney, Australia</p>
                  </div>
                </div>
                <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt tempor porttitor lectus.</p>
              </div>
            </div>
          </motion.div>

          {/* Work Process Section */}
          <motion.div 
            className="bg-[#111111] p-6 rounded-2xl"
            {...fadeIn}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-purple-500/10 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20V10"/>
                    <path d="M18 20V4"/>
                    <path d="M6 20v-4"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold">Work Process</h3>
              </div>
              <span className="text-gray-400">Workflow Highlights</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Modelling / Sculpting', icon: '🎨' },
                { name: 'Texturing', icon: '🖌️' },
                { name: 'Rigging', icon: '🦴' },
                { name: 'Clothing', icon: '👕' },
                { name: 'Skinning', icon: '🎭' }
              ].map((process, index) => (
                <motion.div 
                  key={process.name}
                  className="p-4 bg-[#1A1A1A] rounded-xl flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="text-2xl">{process.icon}</span>
                  <span>{process.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Let's Work Together Section */}
          <motion.div 
            className="bg-[#111111] p-6 rounded-2xl"
            {...fadeIn}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-purple-500/10 rounded-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10 17 15 12 10 7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold">Let's Work Together</h3>
              </div>
              <span className="text-purple-500">👑</span>
            </div>
            <p className="text-gray-400 mb-4">Let's Make Magic Happen Together!</p>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-2 bg-purple-500 p-2 rounded-lg text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Me
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#1A1A1A] p-2 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;