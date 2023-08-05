import React , { useState, useEffect } from "react";
import instance from "./axios";
import "./Row.css";

const baseurl = "http://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]) ;
    useEffect(() => {
     async function fetchData() {
        const request = await instance.get(fetchUrl); 
        setMovies(request.data.results);
        return request;
     }
     fetchData();
    },[fetchUrl]);

    
    return(
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
             {movies.map((movie)=>(
                <img 
                 key={movie.id}
                 className="row_poster"
                 src={`${baseurl}${movie.poster_path}`} 
                 alt={movie.name}/>
             ))}
            </div>
           

        </div>
    );
}

export default Row;