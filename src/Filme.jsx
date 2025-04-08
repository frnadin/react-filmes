
import './Filme.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const API_KEY = '28d0dee8'


export default function Filme() {

  const { id } = useParams();
  const [filme, setFilme] = useState(null);


  const buscarFilmesByID = async () => {
    try {
      const resposta = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
      const dados = await resposta.json();

      if (dados) {
        setFilme(dados)
        console.log(dados);
      } else {
        console.log('deu ruim');
      }
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  useEffect(() => {
    buscarFilmesByID();
  }, [id]);

  return (
    <div className='filme'>
      <h1>About</h1>
      {filme ? (<p>Displaying information about:  <strong>{filme.Title}</strong> </p>) : <p>Loading...</p>}
      <Link to={'/'}>Back</Link>
      {filme ? (
        <div id='filme-secao'>
          <div id="filme-detalhes">
            <img src={filme.Poster} alt={filme.Title} />

            <div style={{ marginLeft: '2rem' }}>
              <h2><strong>{filme.Title}</strong></h2>
              <p id="plot">{filme.Plot}</p>
              <p><strong>Year:</strong> {filme.Year}</p>
              <p><strong>Genre:</strong> {filme.Genre}</p>
              <p><strong>Actors:</strong> {filme.Actors}</p>
              <p><strong>Director:</strong> {filme.Director}</p>
              <p><strong>Rated:</strong> {filme.Rated}</p>
              <p><strong>Language:</strong> {filme.Language}</p>
              <p><strong>Country:</strong> {filme.Country}</p>
              <p><strong>Rating:</strong> {filme.imdbRating}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Carregando informações...</p>
      )}
    </div>

  );
}
