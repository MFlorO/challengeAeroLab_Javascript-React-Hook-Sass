
//Creo este hook para consumir los datos del context
import { useUserContext } from "~/api/userContext";



export const useUser = () => {
	const {userState:{ _id, name, points }, addPoints} =  useUserContext() //points: me trae los puntos que tiene el usuario
	                                                                      //addPoints() metodo global para manejar el estado de los points
	return [_id,name, points, addPoints]
}


export const useRedeem = () => {
	const {userState:{redeemHistory }, addRedeem} =  useUserContext() //points: me trae los puntos que tiene el usuario
	                                                                      //addPoints() metodo global para manejar el estado de los points
	return [redeemHistory, addRedeem]
}

