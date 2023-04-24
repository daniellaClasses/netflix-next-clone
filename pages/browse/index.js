import Image from 'next/image';

import { useEffect, useState } from 'react';
import requests from '../../services/requests';

import NetflixLogo from '../../public/images/netflix-logo.svg'
import NetflixIcon from '../../public/images/netflix-icon.svg';
import Top10 from '../../public/images/top-10-icon.svg';
import Link from 'next/link';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { PlayIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Carrousel from '@/components/Carrousel';
import PreviewCard from '@/components/PreviewCard';


// import { data } from 'autoprefixer';

const baseURL = "https://api.themoviedb.org/3";
const imageURL = 'https://image.tmdb.org/t/p/original';

// const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzNmYThmNTI2YzZlM2EzNTMzNTQ3NjBjYTk3MzIwYyIsInN1YiI6IjY0NDFlNGEwNjUxZmNmMDQ1ZTljNDM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yGG4MIgV8JE9c9RPR2v8cOIqDnTmOe443JBycUFsdDQ";

export default function Browse() {
    const [heroMovie, setHeroMovie] = useState();
    const [trendingMovies, setTrendingMovies] = useState();

    // Pedir la peli en el ranking #1
    useEffect(() => {
        fetch(`${baseURL}${requests.fetchTopRated}`)
            .then(res => res.json())
            .then((data) => {
                // console.log('MOVIES', data.results[0]);
                setHeroMovie(data.results[0])
            })
    }, [])

    // Pedir una lista de las pelis que están en el ranking
    useEffect(() => {
        fetch(`${baseURL}${requests.fetchTrendingMovies}`)
            .then((res) => res.json())
            .then(data => {
                // console.log('MOVIES', data.results)
                setTrendingMovies(data.results);
            })
    }, [])
    return (
        <div className="bg-black-100 w-screen h-screen flex flex-col">
            <header className="flex absolute z-10 w-screen pt-3 px-12 justify-between bg-gradient-to-b from-black">
                <div className="flex items-center">
                    <NetflixLogo className="mr-1 scale-75" />
                    {TABS.map((tab) => (
                        <Link href={tab.link}
                            key={"key" + tab.name}
                            className="mx-2 text-white text-xs"
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center">
                    <MagnifyingGlassIcon className="w-5 h-5 mx-2 text-white" />
                    <div className="mx-2 text-white text-xs">Kids</div>
                    <BellIcon className="w-5 h-5 mx-2 text-white" />
                    <Image
                        src={
                            "https://api.dicebear.com/6.x/pixel-art/jpg?seed=John&hair=short01,short02,short03,short04,short05"
                        }
                        width={28}
                        height={28}
                        alt="Profile pic"
                        className="mx-2"
                    />
                    <Link href={"/browse"}> <ChevronDownIcon className="w-5 h-5 mx-2 text-white" /> </Link>
                </div>
            </header>


            <div className='w-screen h-screen bg-white/80 z-0 left-0 overflow-hidden'>

                <div
                    id='heroMovieContainer'
                    className="relative z-20 top-40 flex-col w-5/12 h-96 ml-14 text-white"

                >
                    <div className='NetflixMovies flex flex-row mb-10'>
                        <NetflixIcon className="flex ml-2 scale-50" />
                        <span className='flex items-center ml-2 font-mono font-bold'>
                            M O V I E S
                        </span>
                    </div>

                    {/* {console.log(heroMovie)} */}
                    <div id='heroMovieData'>
                        <span className='font-bold text-6xl mt-24 ml-2'> {heroMovie?.title} </span>

                        <div
                            id='top'
                            className='flex flex-row items-center mt-1'
                        >
                            <Top10 className="flex ml-1 scale-50" />
                            <span> #1 in TV Shows Today </span>
                        </div>


                        <p className='overflow-hidden mt-4 ml-3 text-sm mb-4 line-clamp-3'>
                            {heroMovie?.overview}
                        </p>
                    </div>

                    <div id='buttons' className='flex flex-row p-1 items-center justify-start mt-2 gap-2'>
                        <button
                            type='button'
                            className='rounded-sm bg-white text-black flex p-2 ml-2'
                        >
                            <PlayIcon className="flex ml-1 w-6 h-6" />
                            <span className='pl-1'> Play </span>
                        </button>
                        <button
                            type='button'
                            className='flex-row rounded-sm bg-gray-500 text-white flex p-2 justify-around'
                        >
                            <InformationCircleIcon className="w-6 h-6 text-white" />
                            <span className='pl-1'> More info </span>
                        </button>
                    </div>

                </div>
                <div className='absolute bg-cover bg-center w-full top-0 h-full bg-black/80' style={{ backgroundImage: `url(${imageURL}${heroMovie?.backdrop_path})` }} />
            </div>

            <PreviewCard trendingMovies={trendingMovies}></PreviewCard>

            {/* <Carrousel></Carrousel> */}
            {/* <div 
            id='Popular on Netflix' className='flex-col w-full h-3 z-10 px-4 ml-4 opacity-25'>
                <div className='flex gap-2 px-4 w-full h-36'>
                    {
                        POPULARLIST.map(({ title, imageURL }) => {
                            return (
                                <div
                                    key={title}
                                    // width="420"
                                    // height="120"
                                    className='flex w-96 h-[120px] bg-red-600'
                                // alt={title}
                                >
                                    {title}
                                </div>
                            )
                        })}
                </div>
            </div> */}
        </div>
    )
}





const TABS = [
    {
        name: "Home",
        link: "/browse",
    },
    {
        name: "TV Shows",
        link: "/browse",
    },
    {
        name: "Movies",
        link: "/browse",
    },
    {
        name: "New & Popular",
        link: "/browse",
    },
    {
        name: "My List",
        link: "/browse",
    },
    {
        name: "Browse by Languages",
        link: "/browse",
    },
];