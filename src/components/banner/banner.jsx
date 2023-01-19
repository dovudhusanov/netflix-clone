import React, {useEffect, useState} from 'react';
import "./banner.css"
import {axiosInstance} from "../../data/axios.js";
import request from "../../data/request.js";

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchMovie = async () => {
            const resData = await axiosInstance(request?.fetchNetflixOriginals)
            setMovie(
                resData.data.results[
                        Math.floor(Math.random() * resData.data.results.length)
                    ]
            )
        }

        fetchMovie()
    }, [])

    return (
        <header
            style={{
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundSize: "cover",

                backgroundPosition: "center center",
                minHeight: "100vh",
                width: "100%",
            }}
        >
            <div className="container">
                <div className="header-items">
                    <h1>{movie?.name}</h1>
                    <div className="overview"><span>{movie?.overview}</span></div>
                    <div className="banner-buttons">
                        <button><i className="fa-solid fa-play"></i> Play </button>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                      fill="currentColor"></path>
                            </svg> More Info</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Banner;