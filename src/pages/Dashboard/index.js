import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import './styles.css'

export default function Dashboard({history}){

    const [movies, setMovies] = useState([])
    useEffect(() => { 
        
        async function loadMovies(){
            
            const filtro = localStorage.getItem('filtro')
            const response = await api.get('/movies', {
                headers:{filtro}
            })
            setMovies(response.data)
            console.log(response.data)
        }
        loadMovies()
        
    }, [])

    const filtro = localStorage.getItem('filtro')

    function backToFilter(){
        history.push('/')
    }
    return (
    <div className="container">
        <div className="content">
            <button onClick={backToFilter}>Voltar para o campo de filtro</button>
            <ul className="movie-list">
                {movies.map(movie => (
                    <li key={movie._id}>
                        <header style={{ backgroundImage: `url(${movie.thumbnail})` }}/>
                        <strong>{movie.title}</strong>
                        <span>Gênero: {filtro}</span>
                        <span>Nota IMDB: {movie.score}</span>
                        <span>N° IMDB: {movie.id}</span>
                        <span><a href={`http://www.imdb.com/title/tt0${movie.id}`}>Clique para acessar no IMDB</a></span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}