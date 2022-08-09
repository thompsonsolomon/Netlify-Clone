import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from '../../axios';
import "./row.css"

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, islargeRow, }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [isPending, setIspending] = useState(true);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        setTimeout(setIspending(false),
            4000)
        // .then()
        fetchData();


    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "99%",
        playerVers: {
            autoplay: 0,
        }
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch((error) => console.log(error));
        }
    }

    return (
        <div className='Row'>

            <h1>{title}</h1>
            <div className="Row-posters">
                {isPending && <div className="loading"> Loading...</div>}

                {
                    movies.map(movie => {
                        return (
                            <img
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                className={`Row-poster ${islargeRow && "Row-posterLarge"}`}
                                src={`${baseUrl}${islargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movies.name} />
                        )
                    })
                }
            </div>
            <div style={{ padding: "10px" }}>
                {trailerUrl &&
                    <YouTube videoId={trailerUrl} opts={opts} />
                }
            </div>
        </div>
    )
}

export default Row



