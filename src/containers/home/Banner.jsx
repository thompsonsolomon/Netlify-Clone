import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import "./row.css"
import requests from '../../constants/requests';

export default function Banner() {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request
        }
        fetchData();
    }, []);
    console.log(movie);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className=' banner'
            style={{

                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="bannerCon">
                {/* title  */}
                <h1 className='BannerTitle'>{
                    movie?.title ||
                    movie.name ||
                    movie?.original_name
                }
                </h1>
                <button className="bannerButton">Play</button>
                <button className="bannerButton">My List</button>
                <h1 className="bannerDiscription">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner_fadeButton" />
        </header>
    )
}
