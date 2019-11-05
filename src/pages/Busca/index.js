import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import './styles1.css'

export default function Busca({history}){
    const [filtro, setFiltro] = useState('')
    const [movies, setMovies] = useState([])
    useEffect(() => { 
        
      async function loadMovies(){
          
          const response = await api.get('/dashboard')
          setMovies(response.data)
          console.log(response.data)
      }
      loadMovies()
      
  }, [])
    async function handleSubmit(event){
        event.preventDefault()
        const str = filtro.toLowerCase()
        localStorage.setItem('filtro', str)
        console.log(str)
        if(str!==''){
          history.push('/dashboard')
          localStorage.setItem('vazio', false);
        }
    }
    return (
      <div className="container">
        <div className="content">
        <p>
          Procure seus filmes preferidos!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="filtro">SELECIONE O GÊNERO DO FILME DESEJADO</label>
           <select name="" id="filtro" value={filtro}
            onChange={event => setFiltro(event.target.value)}>
             <option value="Drama">Drama</option>
             <option value="Ação">Ação</option>
             <option value="Romance">Romance</option>
             <option value="Terror">Terror</option>
             <option value="Histórico">Histórico</option>
             <option value="Guerra">Guerra</option>
             <option value="Documentário">Documentário</option>
             <option value="Thriller">Thriller</option>
             <option value="Comédia">Comédia</option>
             <option value="Aventura">Aventura</option>
             <option value="Animação">Animação</option>
             <option value="Família">Família</option>
             <option value="Ficção Científica">Ficção Científica</option>
             <option value="Biografia">Biografia</option>
             <option value="Crime">Crime</option>
             <option value="Mistério">Mistério</option>
           </select>
            <button className="btn" type="submit">
            Buscar
          </button>
        </form>
        <ul className="movie-list">
                {movies.map(movie => (
                    <li key={movie._id}>
                        <header style={{ backgroundImage: `url(${movie.thumbnail})` }}/>
                        <strong>{movie.title}</strong>
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