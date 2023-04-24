import { useEffect } from "react"
import GenresMovie from "./GenresMovie"


const PreviewCard = ({ tilesData, title, style}) => {

    return (
        <>
            <h3 className="text-white text-xl px-16 z-30"> {title} </h3>
            <div className={`flex flex-row gap-4 w-full px-16 py-8 overflow-x-auto`}>
                {
                    tilesData?.map((movie) => {
                        // console.log(movie.backdrop_path)
                        return (

                            <div
                                className={'shrink-0 w-52 h-32 bg-black rounded z-10 hover:z-20 bg-cover bg-center hover:scale-125 cursor-pointer transition ease-in-out p-2 flex items-end relative'}
                                key={movie.backdrop_path}
                                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }}
                            >
                                <h4 className="text-white text-sm"> {movie.original_title} </h4>
                                <GenresMovie id={movie.id} />
                                <div className="z-50 inset-0 bg-gradient-to-t from-black/90 h-36">
                                </div>
                            </div>
                        )
                    })


                }
                <div className="w-[195px] h-[110px] bg-white rounded z-20">

                </div>
            </div>
        </>
    )
}

export default PreviewCard