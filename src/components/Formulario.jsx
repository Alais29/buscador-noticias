import React from 'react'
import styles from './Formulario.module.css'
import useSelect from './../hooks/useSelect'
import PropTypes from 'prop-types'

const Formulario = ({ guardarCategoria }) => {

  const OPCIONES = [
    {value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'}
  ]

  //utilizar custom hook
  const [categoria, SelectCategorias] = useSelect('general', OPCIONES)

  //submit al form, pasar categoria a app.js
  const buscarNoticias = e => {
    e.preventDefault()
    guardarCategoria(categoria)
  }

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={buscarNoticias}
        >
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectCategorias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles['btn-block']}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired
}

export default Formulario
