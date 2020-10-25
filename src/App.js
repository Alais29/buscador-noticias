import React, { useEffect, useState } from 'react'
import API_KEY from './API_KEY'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listadonoticias from './components/ListadoNoticias';

function App() {
  //definir categoria y noticia
  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${API_KEY}`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header titulo="Buscador de noticias" />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <Listadonoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
