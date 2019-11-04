import React, {useState} from 'react'

import './styles1.css'

export default function Busca({history}){
    const [filtro, setFiltro] = useState('')


    async function handleSubmit(event){
        event.preventDefault()
        const str = filtro.toLowerCase()
        localStorage.setItem('filtro', str)
        console.log(str)
        history.push('/dashboard')
    }
    return (
      <div className="container">
        <div className="content">
        <p>
          Procure seus filmes preferidos!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="filtro">DIGITE O GÊNERO DO FILME DESEJADO *</label>
          <input type="text"
           id="filtro"
            placeholder="Ex: DRAMA, AÇÃO, etc..."
            value={filtro}
            onChange={event => setFiltro(event.target.value)}/>
          <button className="btn" type="submit">
            Buscar
          </button>
        </form>
        </div>
    </div>
    )
}