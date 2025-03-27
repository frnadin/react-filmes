
import './App.css'
import Butao from './assets/components/Butao/Butao';
import TextInput from './assets/components/TextInput/TextInput'
import Title from './assets/components/Title/Title'
import Card from './assets/components/Card/Card'
import React, { useState } from 'react';

const API_KEY = '28d0dee8'

function App() {

  const [filme, setFilme] = useState(null)
  const [filmes, setFilmes] = useState([])

  const buscarFilmes = async () => {
    if (!filme.trim()) return; // Evita buscas vazias
    try {
      const resposta = await fetch(`https://www.omdbapi.com/?s=${filme}&apikey=${API_KEY}`);
      const dados = await resposta.json();

      if (dados.Search) {
        console.log(dados.Search);

        setFilmes(dados.Search);
      } else {
        setFilmes([]);
      }
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      setFilmes([]);
    }
  };

  return (
    <>

      <Title title='API Filmes' />

      <div className='section-search'>
        <TextInput onChange={setFilme} />
        <Butao class={'butaoSearch'} onClick={() => { buscarFilmes(filme) }} name={'Search'} />
      </div>

      <section className='section-films'>
        {filmes.length > 0 ? (
          filmes.map((item) => (
            <Card key={item.imdbID} name={item.Title} image={item.Poster} type={item.Type} />
          ))
        ) : (
          <p>Nenhum filme encontrado</p>
        )
        }
      </section>
    </>
  )
}

export default App
