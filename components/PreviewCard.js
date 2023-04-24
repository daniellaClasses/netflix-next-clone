import { useEffect } from "react"



const imageURL = 'https://image.tmdb.org/t/p/original';

const PreviewCard = ({ trendingMovies }) => {

    // useEffect(() => {
    //     console.log(trendingMovies[0])
    // }, [])
    return (
        <div className="flex flex-row gap-3 w-full pl-16 overflow-x-auto mt-[-175px]">
            {

                trendingMovies?.map((movie) => {
                    console.log(movie.backdrop_path)
                    return (
                        <div
                            className={'shrink-0 w-[195px] h-[110px] bg-white rounded z-20 bg-cover bg-center hover:scale-125 cursor-pointer transition ease-in-out p-2 flex items-end relative'}
                            key={movie.backdrop_path}
                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }}
                        >
                            <h4 className="text-white text-sm"> {movie.original_title} </h4>
                            <div className="absolute z-0 w-screen inset-0 bg-gradient-to-t from-black/60">

                            </div>
                        </div>
                    )
                })


            }
            <div className="w-[195px] h-[110px] bg-white rounded z-20">

            </div>
        </div>
    )
}

export default PreviewCard