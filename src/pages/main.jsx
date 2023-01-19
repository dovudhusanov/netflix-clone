import React from 'react';
import Navbar from "../components/navbar/navbar.jsx";
import Banner from "../components/banner/banner.jsx";
import Films from "../components/films/films.jsx";
import request from "../data/request.js";

function Main({user, setLogin}) {
    return (
        <div>
            <Navbar user={user} setLogin={setLogin}/>
            <Banner />
            <Films
                isLargeRow
                title={"NETFLIX ORIGINALS"}
                movieRequest={request.fetchNetflixOriginals}
            />
            <Films
                title={"Action"}
                movieRequest={request.fetchActionMovies}
            />
            <Films
                title={"Comedy"}
                movieRequest={request.fetchComedyMovies}
            />
            <Films
                title={"Horror"}
                movieRequest={request.fetchHorrorMovies}
            />
            <Films
                title={"Romance"}
                movieRequest={request.fetchRomanceMovies}
            />
            <Films
                title={"Documentaries"}
                movieRequest={request.fetchDocumentaries}
            />
        </div>
    );
}

export default Main;