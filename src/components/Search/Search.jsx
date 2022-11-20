import React, { useState } from "react";
import styles from './Search.module.scss'



const Search = ({productCopia, setProductCopia, productAll, setCurrentPage}) => {
  
  const [search, setSearch] = useState(""); //Estado del input

  const onSearchChange = (event) => {  //Funcion que me toma lo que escriba en el input 
    setSearch((event.target.value).toLowerCase())
  };


  const filtrar = (search) => {

    if (productCopia.length === productAll.length){  //Caso: Busco por primera vez

      const resultados = productCopia.filter( (e) => e.category.toString().toLowerCase().includes(search) || e.name.toString().toLowerCase().includes(search)) //Filtro el original

      resultados.length > 0 ? 
                              setProductCopia(resultados)  //Busco y hay concidencias: Muestro la copia con los resultados 
                              :  setProductCopia("")  //Busco y NO hay coincidencias --> Esto utilizo para el boton de TRY AGAIN
    }

    else {  //Caso: Busco por segunda vez

      const resultados = productAll.filter( (e) => e.category.toString().toLowerCase().includes(search) || e.name.toString().toLowerCase().includes(search)) //Filtro el original

      resultados.length > 0 ? setProductCopia(resultados) :  setProductCopia("")
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault(); //para que no refresque al dar "buscar"
	  filtrar(search); //le paso lo que escribo en el input a la funcion filtrar. Esta va a recorrer el array con los datos de productos  y los va a filtrar de acuerdo al dato que escriba en el input
    setSearch("");
    setCurrentPage(0) //Reseteo la pagina en cero. Caso: Cuando hago una busqueda, tiene que funcionar el paginado
  };


  return (

    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Search by name o category"
        value={search}
        onChange={onSearchChange}
        className={styles.input}
      />

      <button title="Search" type="submit">SEARCH</button>

    </form>
  );
};

export default Search;
