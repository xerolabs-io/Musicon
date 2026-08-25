'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import Chips from './ChipsRenderer'
import ChipsRenderer from './ChipsRenderer'
import { useFetch } from '@/hooks/use-fetch'
import { getHomeData } from '@/actions/home.actions'

const Header = () => {

    const [isFocus, setIsFocus] = useState(false)
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]); // to be set <Song[] as type>


    const suggestionsRef = useRef<HTMLDivElement | null>(null)
    // Close suggestions dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
                setIsFocus(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (searchQuery?: string) => {

    }

    const {
        data: homeData,
        loading: homeDataLoading,
        fn: homeDataFn
    } = useFetch(getHomeData)

    useEffect(() => {
        homeDataFn()
    }, [])

    if (!homeDataLoading) {
        console.log(homeData);
    }


    return (
        <>
            {/**Search Box */}
            <section className='flex'>

                <div ref={suggestionsRef} className={`sm:w-72 md:w-84 lg:w-96 flex gap-2 items-center text-white p-3 border ${isFocus ? "border-gold-accent/50" : "border-zinc-800"} 
                    rounded-2xl backdrop-blur-md`}>

                    <Search className='w-4 h-4 text-zinc-500' />
                    <input
                        type='text'
                        placeholder='Search for songs, artists, or albums...'
                        className='flex-1 text-zinc-100 placeholder:text-zinc-500 text-sm focus:outline-none'
                        value={query}
                        onFocus={() => { setIsFocus(true) }}
                        onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true) }}
                        onKeyDown={(e) => { if (e.key === "Enter") handleSearch() }} />

                    {query && (
                        <X className='w-4 h-4' onClick={() => {
                            setQuery("")
                        }} />
                    )}

                </div>

            </section>

            {/* <ChipsRenderer /> */}
        </>
    )
}

export default Header