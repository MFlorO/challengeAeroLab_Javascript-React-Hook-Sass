import { useEffect, useState, createContext, useContext } from "react";


const URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const HEADER = ({
  method: "GET",
  mode: 'cors',
  headers: new Headers({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `${TOKEN}`
})});


export const ProductContext = createContext({})

export const ProductProvider = ({ children }) =>{

  const [productState, setProductState] = useState(null) //Estado para guardarme el dato user
  // const [status, setStatus] = userState("pending") //Estado para saber el "status de la aplicacion"


  useEffect(() => {  //Pongo el fetch en el useEffect para que me haga la llamda de los datos cada vez que renderiza
    fetch(URL, HEADER)
      .then((response) => response.json())  //Una vez que tengas el valor de la respuesta => transformala en un json
      .then((json) => {                    //Luego devolveme ese json
        setProductState(json)
        // setStatus("resolved")
      })
  }, [])


  if (!productState) {
    return <h1>Loading...</h1>
  }

  return <ProductContext.Provider value={{ productState }}>{children}</ProductContext.Provider>
}



export const useProductContext = () => {   //Cuando se quiera utilizar el context y esta fuera tira un Error

  const Context = useContext(ProductContext);

  if (Context === undefined){
    throw Error('Esta fuera del contexto')
  }

  return Context;
}

// fetch("https://coding-challenge-api.aerolab.co/products",  )
// .then((response) => response.json()) 
// .then((data) => {                    
//  console.log(data)
// })

