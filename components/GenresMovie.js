import { data } from "autoprefixer"
import { useEffect, useState } from "react"


const GenresMovie = ({ id }) => {

    const baseURL = "https://api.themoviedb.org/3";
    const API_KEY = "233fa8f526c6e3a353354760ca97320c";
    const [genres, setGenres] = useState()


    useEffect(() => {
        fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}&language=es-ES`)
            .then((res) => res.json())
            .then((data) => {
                setGenres(data.genres)
            })
    }, [])
    return (
        <div
            className={'text-white/50 gap-x-3 text-xs flex flex-row flex-wrap relative z-20'}
        >
            {
                genres?.map((genres) => {
                    return (
                        <div key={genres.id}>{genres.name}</div>
                    )
                })
            }
        </div>

    )
}

export default GenresMovie