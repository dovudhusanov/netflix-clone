import React, {useEffect, useState} from 'react';
import "./films.css"
import {axiosInstance} from "../../data/axios.js";
import request from "../../data/request.js";
import {Tooltip} from "@mui/material";
import YouTube from "react-youtube";

function Films({title, movieRequest, isLargeRow}) {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosInstance.get(movieRequest)
            console.log(res.data)
            setMovies(res.data.results)
        }
        fetchData()
    }, [movieRequest])

    const fetchMovieTrailer = async (movie) => {
        await axiosInstance.get("/movie/" + movie?.id.toString() + request.trailerQuery)
            .then(resData => {
                setTrailerUrl(resData.data.results[0].key)
                console.log(resData.data.results[0].key)
            })
            .catch((error) => console.error(error))
    }

    const handleClickTrailer = (movie) => {
        if (trailerUrl) setTrailerUrl("")
        else fetchMovieTrailer(movie)
    }

    const opts = {
        playerVar: {
            autoplay: 1
        }
    }

    return (
        <div className="filmsCategory">
            <h3>{title}</h3>
            <div className="films">
                {movies.map((movie) => (
                    <>
                        <Tooltip title={movie?.original_title || movie.name} key={movie.id}>
                            <img
                                src={
                                    `https://image.tmdb.org/t/p/original/${
                                        isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`
                                }
                                alt={movie.original_title}
                                onClick={() => handleClickTrailer(movie)}
                                loading="lazy"
                            />

                        </Tooltip>
                    </>
                ))}
            </div>
            {trailerUrl && <YouTube className="ytPlayer" videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}

export default Films;