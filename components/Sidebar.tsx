import React from 'react'
import { Home, Compass, Radio, Music, Heart, FolderHeart, Plus, Library } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className='h-full w-60 bg-spotify-black border-r border-neutral-900/40 relative overflow-hidden flex flex-col justify-between text-neutral-400 z-10'>
            {/* Matching Dot Grid for the Sidebar */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.08] z-0"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Small Ambient Glow inside Sidebar */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[200px] h-[200px] rounded-full bg-gold-accent/5 blur-[50px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-6 flex flex-col gap-8 flex-1">
                {/* Logo Section */}
                <div className='flex items-center gap-2.5'>
                    <div className='w-8 h-8 rounded-full bg-gold-accent flex items-center justify-center text-spotify-black font-bold text-sm shadow-[0_0_15px_rgba(200,162,97,0.2)]'>
                        M
                    </div>
                    <span className='text-white font-semibold text-lg tracking-wider font-sans'>Musicon</span>
                </div>

                {/* Main Navigation */}
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-1.5'>
                        <p className='text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1.5 px-3'>Menu</p>
                        <div className='flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 border border-white/5 text-white font-medium cursor-pointer transition-all duration-200'>
                            <Home className='w-4 h-4 text-gold-accent' />
                            <span className="text-sm">Home</span>
                        </div>
                        <div className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white cursor-pointer transition-all duration-200 group'>
                            <Compass className='w-4 h-4 group-hover:text-gold-accent' />
                            <span className="text-sm">Discover</span>
                        </div>
                        <div className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white cursor-pointer transition-all duration-200'>
                            <Radio className='w-4 h-4' />
                            <span className="text-sm">Radio</span>
                        </div>
                    </div>

                    {/* Library section */}
                    <div className='flex flex-col gap-1.5'>
                        <p className='text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1.5 px-3'>Library</p>
                        <div className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white cursor-pointer transition-all duration-200'>
                            <Heart className='w-4 h-4' />
                            <span className="text-sm">Favorite Songs</span>
                        </div>
                        <div className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white cursor-pointer transition-all duration-200'>
                            <FolderHeart className='w-4 h-4' />
                            <span className="text-sm">Recently Added</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Playlists Creator */}
            <div className="relative z-10 p-6 border-t border-neutral-900/60">
                <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-xs font-semibold text-white/95 border border-white/5 hover:border-gold-accent/30 transition-all duration-300">
                    <Plus className="w-3.5 h-3.5 text-gold-accent" />
                    Create Playlist
                </button>
            </div>
        </div>
    )
}

export default Sidebar