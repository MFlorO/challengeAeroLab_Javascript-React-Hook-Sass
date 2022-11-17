//Creo este hook para consumir los datos del context
import { useProductContext } from "~/api/productContext";

export const useProduct = () => {
  const { productState } = useProductContext();

  return productState;
};
