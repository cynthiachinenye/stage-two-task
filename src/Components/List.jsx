import React,{useEffect, useState} from 'react';
import axios from 'axios';

export const List =()=>{
    const [movie,setMovie] = useState([]);

    const fetch =async () => {
        const data = await axios.get("https://api.themoviedb.org/3/movie/{movie_id}");
        setMovie(data.data)
    };
    useEffect (()=>{
        // fetch();
    
    },[]);
    return (
        <div>
        {console.log(movie)}
        </div>
    )
}