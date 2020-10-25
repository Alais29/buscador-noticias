import React from 'react'
import Noticia from './Noticia'
import PropTypes from 'prop-types'

const Listadonoticias = ({noticias}) => {
  return (
    <div className="row">
      {noticias.map(noticia => (
        <Noticia
          key={noticia.url}
          noticia={noticia}
        />
      ))}
    </div>
  )
}

Listadonoticias.propTypes = {
  noticias: PropTypes.array.isRequired
}

export default Listadonoticias
