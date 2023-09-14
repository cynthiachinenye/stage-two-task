import React, { useEffect, useState } from 'react'
import '../Styles/Card.css'
import poster from '../Assets/Poster (10).png'
import { List } from './List'
import axios from 'axios'





const color = 'yellow'

function Card() {
  const adress = 'https://api.themoviedb.org/3/discover/movie?api_key=79d50d0b258ce81609b056767b5f5166'
  const [movie, setMovie] = useState([])

const config = {
  method:'GET',
  params: {language: 'en-US', page: '1'},
  url:adress,
  headers:{
    "Authorization":`Bearer 79d50d0b258ce81609b056767b5f5166`
  }
}



  async function fetchMovies() {
    try {
      const {data} = await axios(config)
      setMovie(data.results)
      console.log('res', data.results)

    } catch (error) {
      console.log('movie fetch err', error)
    }

  }


  useEffect(() => {

fetchMovies()
  }, [])



  // console.log("movies state", movie)
  console.log("movies state", movie)

  return (
    <div className="main-container" style={{
      backgroundColor: `${color}`, padding: '20px',
    }}>
       {
        movie?.map((movies)=>(
          <div className='movie-card'>
          <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}/>
         </div>
        ))
       }
    
    </div>
  )
}

export default Card
