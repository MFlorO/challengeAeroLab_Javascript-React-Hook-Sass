import { useEffect, useState, createContext, useContext } from "react";


const URL_USER = process.env.REACT_APP_USER_ME;
const TOKEN = process.env.REACT.APP_TOKEN;

const HEADER = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    mode: 'cors',
    // cache: 'default',
    Accept: "application/json",
    Authorization: `${TOKEN}`,
  }
};


export const UserContext = createContext({})

export const UserProvider = ({ children }) =>{

  const [userState, setUserState] = useState(null) //Estado para guardarme el dato user
  // const [status, setStatus] = userState("pending") //Estado para saber el "status de la aplicacion"


  useEffect(() => {  //Pongo el fetch en el useEffect para que me haga la llamda de los datos cada vez que renderiza
    fetch(URL_USER, HEADER)
      .then((response) => response.json())  //Una vez que tengas el valor de la respuesta => transformala en un json
      .then((json) => {                    //Luego devolveme ese json
        setUserState(json)
        // setStatus("resolved")
      })
  }, [])


  const addPoints = (number) =>{
    // if(!userState) return

    setUserState({...userState,points: userState.points + number})
  }

  const addRedeem = (obj) => {
    setUserState({...userState,redeemHistory: userState.redeemHistory.concat(obj) })
  }

  if (!userState) {
    return <h1>Loading...</h1>
  }

  return <UserContext.Provider value={{ userState, addPoints, addRedeem }}>{children}</UserContext.Provider>
}



export const useUserContext = () => {   //Cuando se quiera utilizar el context y esta fuera tira un Error

  const Context = useContext(UserContext);

  if (Context === undefined){
    throw Error('Esta fuera del contexto')
  }

  return Context;
}