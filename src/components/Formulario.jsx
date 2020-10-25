import React from 'react'
import styles from './Formulario.module.css'
import useSelect from './../hooks/useSelect'

const Formulario = () => {

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

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form>
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

export default Formulario
