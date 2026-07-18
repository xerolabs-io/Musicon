import React from 'react'
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react'

const BottomPlayer = () => {
    return (
        <div className='bg-spotify-black border-t border-neutral-900/60 h-24 px-6 flex items-center justify-between text-white'>
            {/* Left track details */}
            <div className='flex items-center gap-3 w-1/4'>
                <div className='w-14 h-14 bg-neutral-800 rounded-lg flex items-center justify-center text-xs text-neutral-400'>
                    No Track
                </div>
                <div>
                    <div className='text-sm font-semibold hover:underline cursor-pointer'>Not Playing</div>
                    <div className='text-xs text-neutral-400 hover:underline cursor-pointer'>Select a song</div>
                </div>
            </div>

            {/* Play controls */}
            <div className='flex flex-col items-center gap-2 max-w-xl w-2/5'>
                <div className='flex items-center gap-6'>
                    <Shuffle className='w-4 h-4 text-neutral-400 hover:text-white cursor-pointer transition' />
                    <SkipBack className='w-5 h-5 text-neutral-300 hover:text-white cursor-pointer transition' />
                    <button className='w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer'>
                        <Play className='w-5 h-5 fill-current ml-0.5' />
                    </button>
                    <SkipForward className='w-5 h-5 text-neutral-300 hover:text-white cursor-pointer transition' />
                    <Repeat className='w-4 h-4 text-neutral-400 hover:text-white cursor-pointer transition' />
                </div>

                {/* Progress bar */}
                <div className='flex items-center gap-3 w-full text-xs text-neutral-400'>
                    <span>0:00</span>
                    <div className='flex-1 h-1 bg-neutral-800 rounded-full relative group cursor-pointer'>
                        <div className='absolute top-0 left-0 h-full w-0 bg-gold-accent group-hover:bg-gold-accent transition-colors' />
                    </div>
                    <span>0:00</span>
                </div>
            </div>

            {/* Volume controls */}
            <div className='flex items-center gap-3 w-1/4 justify-end'>
                <Volume2 className='w-4 h-4 text-neutral-400 hover:text-white cursor-pointer transition' />
                <div className='w-24 h-1 bg-neutral-800 rounded-full cursor-pointer relative group'>
                    <div className='absolute top-0 left-0 h-full w-2/3 bg-gold-accent rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default BottomPlayer 