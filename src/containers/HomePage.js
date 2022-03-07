import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MoviePage from '../components/MoviePage'

// https://api.themoviedb.org/3/movie/550?api_key=d1793e2d14633816edae12bcc4e69e85 // 



function HomePage() {
  return (
    <div>
         <NavBar/>
         <MoviePage/>
         <Footer/>
    </div>
  )
}

export default HomePage